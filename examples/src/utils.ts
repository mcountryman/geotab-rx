import { option, string } from "cmd-ts";

export const credentialArgs = {
  username: option({
    type: string,
    long: "username",
    short: "u",
    description: "The Geotab database username",
  }),
  password: option({
    type: string,
    long: "password",
    short: "p",
    description: "The Geotab database password",
  }),
};
