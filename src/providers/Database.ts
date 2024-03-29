/**
 * Define Database connection
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { MongoError } from 'mongodb';

import Locals from './Locals';
import Log from '../middlewares/Log';

export class Database {
  // Initialize your database pool
  public static init(): void {
    const dsn = Locals.config().mongooseUrl;
    const options = { useNewUrlParser: true };

    (<any>mongoose).Promise = bluebird;

    mongoose.connect(dsn, options, (error: MongoError) => {
      // handle the error case
      if (error) {
        Log.info('Failed to connect to the Mongo server!!');
        console.log(error);
        throw error;
      } else {
        Log.info('connected to mongo server at: ' + dsn);
      }
    });
  }
}

export default mongoose;
