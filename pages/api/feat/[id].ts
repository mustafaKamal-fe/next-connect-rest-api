import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import midllewares from '../../../src/backend/midllewares';
import { onError, onNoMatch } from '../../../src/backend/utils';
import routes from '../../../src/backend/routes';

const handler = nc<NextApiRequest, NextApiResponse>({
	onError,
	onNoMatch,
	attachParams: true,
});

// App-Wide
handler.use(midllewares.common);

// Route-Wide
handler.use(midllewares.subApp);

handler.use('/api/feat/:id', routes.feat.id);

export default handler;
