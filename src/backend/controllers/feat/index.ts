import { NextApiRequest, NextApiResponse } from 'next';

const doThisOnPost = (req: NextApiRequest, res: NextApiResponse) => {
	let sentBody = req.body;
	res.status(201).json({ sentBody });
};

const doThisOnPostWithId = (req: NextApiRequest, res: NextApiResponse) => {
	let sentBody = req.body;

	res.status(201).json({ sentBody });
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
	 * Controllers for index page
	 */
	index: {
		doThisOnGet,
		doThisOnPost,
		doThisOnPut,
		doThisOnDelete,
		doThisOnPatch,
	},
	/**
	 * Controller for `/id` page
	 */
	id: {
		doThisOnGet,
		doThisOnPost,
		doThisOnPut,
		doThisOnDelete,
		doThisOnPatch,
		doThisOnPostWithId,
	},
};
