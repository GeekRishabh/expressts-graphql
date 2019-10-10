/**
 * Define interface for Todo Model
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

export enum Completed {
  Active = 'Active',
  InActive = 'InActive'
}

export interface ITodo {
  title: string;
  completed: Completed;
  owner_id: string;
  collaborater_ids?: [string];
}

export default ITodo;
