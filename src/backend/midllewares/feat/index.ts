import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { onError } from '../../utils';
import {
	featureSpesificMidllware,
	featureSpesificMidllwareTwo,
} from './middlwares';

/**
 * `nc` instance (mini-app) for using midllwares specific to some `url` within this sub-app
 */
const featSubApp = nextConnect<NextApiRequest, NextApiResponse>({
	onError,
});
featSubApp.use(featureSpesificMidllware);

/**
 * `nc` instance (mini-app) for using midllwares specific to some `url` within this sub-app
 */
const featSubAppWithId = nextConnect<NextApiRequest, NextApiResponse>({
	onError,
});
featSubAppWithId.use(featureSpesificMidllwareTwo);

/**
 * Mini-app midllewares for each page.
 *
 * ## Example:
 * ```js
 *  midllewares.subApp.index // midllewares for index page
 *  midllewares.subApp.id // midllwares for `/id` page
 * ```
 */
export default {
	/**
	 * Midllewares to be used on `index` page only
	 */
	index: featSubApp,
	/**
	 * midllewares to be used on  `/id` page only
	 */
	id: featSubAppWithId,
};
