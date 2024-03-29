/**
 * Define App Locals & Configs
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const port = process.env.PORT || 4040;
    const appSecret = process.env.APP_SECRET || 'ThisIsYourResponsibility!';
    const mongooseUrl = process.env.MONGOOSE_URL;
    const serverKey = process.env.FIREBASE_SERVER_KEY || '';
    const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || 5000;

    const name = process.env.APP_NAME || 'Express API Server';

    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
    const apiPrefix = process.env.API_PREFIX || 'api';

    const logDays = process.env.LOG_DAYS || 10;

    return {
      appSecret,
      apiPrefix,
      serverKey,
      isCORSEnabled,
      jwtExpiresIn,
      logDays,
      maxParameterLimit,
      mongooseUrl,
      name,
      port,
      url
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
