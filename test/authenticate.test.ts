import { map } from 'rxjs/operators';
import { authenticate } from '../src/authenticate';
import { mockRpcClient } from './helpers/client_helpers';

describe('authenticate(...)', () => {
  /**
   * Ensure client endPoint is not updated when response contains path 'ThisServer' per
   * https://geotab.github.io/sdk/software/api/reference/#T:Geotab.Checkmate.ObjectModel.LoginResult
   */
  test("Returns same endpoint when path is 'ThisServer'", (done) => {
    const endPoint = 'TEST_END_POINT';
    const client = mockRpcClient((req$) =>
      req$.pipe(
        map((req) => ({
          ...req,
          result: {
            path: 'ThisServer',
          },
        }))
      )
    );

    // Assign client endPoint for use in `authenticate` call
    client.setEndPoint(endPoint);

    authenticate(client, { username: '' }).subscribe({
      next: (result) => {
        // Ensure result and client endpoints match test endpoint
        expect(result.endPoint).toBe(endPoint);
        expect(client.getEndPoint()).toBe(endPoint);
      },
      error: done,
      complete: done,
    });
  });

  /**
   * Ensure client endPoint is updated with "pathed" when response does not path
   * 'ThisServer' per https://geotab.github.io/sdk/software/api/reference/#T:Geotab.Checkmate.ObjectModel.LoginResult
   */
  test("Returns pathed endpoint when path is not 'ThisServer'", (done) => {
    const path = 'TEST_PATH';
    const client = mockRpcClient((req$) =>
      req$.pipe(
        map((req) => ({
          ...req,
          result: {
            path,
          },
        }))
      )
    );

    authenticate(client, { username: '' }).subscribe({
      next: (result) => {
        // Ensure result and client endpoints match pathed endpoint
        expect(result.endPoint).toBe(`https://${path}/apiv1`);
        expect(client.getEndPoint()).toBe(`https://${path}/apiv1`);
      },
      error: done,
      complete: done,
    });
  });

  /**
   * Ensure credentials are passed through to result and to client
   */
  test('Returns response credentials', (done) => {
    const credentials = { username: 'TEST_USERNAME' };
    const client = mockRpcClient((req$) =>
      req$.pipe(
        map((req) => ({
          ...req,
          result: {
            credentials,
          },
        }))
      )
    );

    authenticate(client, { username: '' }).subscribe({
      next: (result) => {
        // Ensure response credentials are passed through to result and client
        expect(result.credentials).toBe(credentials);
      },
      error: done,
      complete: done,
    });
  });
});
