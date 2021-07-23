import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export function onError(
	err: any,
	_req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) {
	console.error(err);

	res.status(500).end(err.toString());
	// OR: you may want to continue
}

export function onNoMatch(req: NextApiRequest, res: NextApiResponse) {
	res.status(404).end('page is not found... or is it');
}
