import common from './common';
import subApp from './feat';
import auth from './auth';
/**
 * `nc` instance to create a mini-app, attach midllewares to it then export it to be mounted somewhere else as a common set of midllewares to run on every request and to every url.
 */
export default {
	/**
	 * Common midllewares for all app routes
	 */
	common,
	/**
	 *  Midllewares for this route
	 */
	subApp,
	/**
	 *  Auth midllewares
	 */
	auth,
};
