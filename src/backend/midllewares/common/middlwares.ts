import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const commonMidllwareOne = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) => {
	console.log('********************');
	console.log('* Common Midllware *');
	console.log(req.query);
	console.log('********************');

	next();
};
