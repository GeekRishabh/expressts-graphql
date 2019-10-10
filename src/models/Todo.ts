/**
 * Define User model
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import * as mongoose from 'mongoose';
import { UserModel } from './User';
import {
  Typegoose,
  prop,
  staticMethod,
  instanceMethod,
  getModelForClass
} from '@typegoose/typegoose';
import { Completed } from '../interfaces/models/Todo';

export class TodoType extends Typegoose {
  @prop({ required: true, index: true })
  title!: string;

  @prop({ required: true, enum: ['PENDING', 'COMPLETED', 'IN_PROGRESS'] })
  completed!: Completed;

  @prop({ required: false, ref: UserModel })
  owner_id!: string;

  @prop({ default: null })
  collaborater_ids: [string];

  @prop({ required: true, default: Date.now })
  created_at!: Date;
}

export const TodoModel = new TodoType().getModelForClass(TodoType, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'Todos' }
});

export default TodoModel;
