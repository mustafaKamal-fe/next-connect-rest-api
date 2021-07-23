import { NextApiRequest, NextApiResponse } from 'next';
interface WithParams extends NextApiRequest {
	params: any;
}

const doThisOnPost = (req: NextApiRequest, res: NextApiResponse) => {
	let sentBody = req.body;
	res.status(201).json({ sentBody });
};

const doThisOnPostWithId = (req: WithParams, res: NextApiResponse) => {
	let sentBody = req.body;
	console.log('Params:', req.params);

	res.status(201).json({ sentBody, id: req.query.slug });
};

const doThisOnGet = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).end('OK');
};

const doThisOnPut = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).end('Updated');
};

const doThisOnDelete = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).end('Deleted');
};

const doThisOnPatch = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).end('Deleted');
};

export default {
	/**
	 * Controllers for root url
	 */
	root: {
		doThisOnGet,
		doThisOnPost,
		doThisOnPut,
		doThisOnDelete,
		doThisOnPatch,
	},
	/**
	 * Controller for `/id` url
	 */
	id: {
		doThisOnGet,
		doThisOnPost,
		doThisOnPut,
		doThisOnDelete,
		doThisOnPatch,
		doThisOnPostWithId,
	},
	/**
	 * Controller for `/more` url
	 */
	more: {
		doThisOnGet,
		doThisOnPost,
		doThisOnPut,
		doThisOnDelete,
		doThisOnPatch,
	},
};
