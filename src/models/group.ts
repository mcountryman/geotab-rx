/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";

/**
 *  A group is one element in a hierarchical tree. Each group can have none or many
 * children, it is the children that define the shape of the hierarchical tree. The
 * parent is not a property of the group object and is only defined by who the group
 * is a child of. It is necessary to know the id of the parent group when adding a
 * new group or removing an existing group.<br> There are three core Group branches
 * used in MyGeotab. The most common are "Company Groups", company Groups are used
 * to organize entities ({@link IRule}) into logical groups related to the organization.
 * A Group structure can be constructed by region, vocation, reporting or anything
 * that makes sense to the business, this allows aggregate reports and rolling up data
 * in a flexible way. These groups have a many to many type of relationship with the
 * entities that are members and are not limited to one type of entity.<br> The second
 * type is "Security Groups", these are Groups to which {@link ISecurityFilter}(s)
 * associated to it. Security Filters control what parts of the application/API a User
 * has access to.<br> The third type of group is a "Private User Group", this group
 * is used only for scheduling reports and displaying dashboard reports for a User.
 * This Group will only ever apply to one User and will typically be named the user's
 * name.<br> There is a base structure of Groups which cannot be removed, these are
 * considered to be "System"<br> Groups:<br> Company GroupSecurity GroupEverything
 * Security GroupSupervisor Security GroupUser Security GroupView Only Security GroupNothing
 * Security GroupPrivate User Group When Groups are retrieved they will always be in
 * a flat list of groups. The hierarchically tree(s) can be reconstructed by looking
 * at the "Children" property of each Group. The "Root" group will never be returned
 * and is only for system use.<br>
 */
export interface IGroup extends INameEntity {
  /** Gets or sets the Children of this group. A list of Group(s). */
  children: IGroup[];
  /**
   * Gets or sets the {@link IColor} used to render assets belonging to this group. Default
   * [Blue].
   */
  color: any;
  /**
   * Gets or sets the free text field where any user information can be stored and referenced
   * for this entity. Default [""].
   */
  comments: string;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets the parent Group of the selected group. */
  parent: IGroup;
  /** Gets or sets the ltree path of the group. */
  path: string;
  /**
   * Gets or sets the string reference to add to the database entry for this group. Maximum
   * length [255] Default [""].
   */
  reference: string;
}
