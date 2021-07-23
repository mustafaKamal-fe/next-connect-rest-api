import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const featureSpesificMidllware = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) => {
	console.log('********************');
	console.log('* Feature Midllware *');
	console.log(req.method);
	console.log('********************');
	next();
};

export const featureSpesificMidllwareTwo = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) => {
	console.log('*********************');
	console.log('* Feature Midllware *');
	console.log(req.url);
	console.log('********************');
	next();
};
