import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const admins = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) => {
	console.log('Authenticating Admins...');
	next();
};

export const users = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) => {
	console.log('Authenticating Users...');
	next();
};
