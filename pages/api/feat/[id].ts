import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import controllers from '../../../src/backend/controllers';
import midllewares from '../../../src/backend/midllewares';
import { onError, onNoMatch } from '../../../src/backend/utils';

const handler = nc<NextApiRequest, NextApiResponse>({
	onError,
	onNoMatch,
});

// App-Wide
handler.use(midllewares.common);

// Route-Wide
handler.use(midllewares.subApp.id);

/** Controllers */
// POST
handler.post(controllers.feat.id.doThisOnPostWithId);

// GET
handler.get(controllers.feat.id.doThisOnGet);

// PUT
handler.put(controllers.feat.id.doThisOnPut);

// DELETE
handler.delete(controllers.feat.id.doThisOnDelete);

// PATCH
handler.patch(controllers.feat.id.doThisOnPatch);
export default handler;
