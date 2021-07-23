import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import {
	featureSpesificMidllware,
	featureSpesificMidllwareTwo,
} from './midllewares';

/**
 * `nc` instance (mini-app) for using midllwares specific to some `url` within this sub-app
 */
const featSubApp = nextConnect<NextApiRequest, NextApiResponse>();
featSubApp.use(featureSpesificMidllware).use(featureSpesificMidllwareTwo);

/**
 * Mini-app midllewares for each page.
 */
export default featSubApp;
