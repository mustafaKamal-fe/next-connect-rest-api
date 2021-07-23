import nc from 'next-connect';
import routes from '../../../src/backend/routes';
import { NextApiRequest, NextApiResponse } from 'next';
import { onError, onNoMatch } from '../../../src/backend/utils';

const handler = nc<NextApiRequest, NextApiResponse>({
	onError,
	onNoMatch,
	attachParams: true,
});

handler.use('/api/feat/', routes.feat.root);

export default handler;
