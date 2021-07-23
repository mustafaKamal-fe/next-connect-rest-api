import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import controllers from '../../../src/backend/controllers';
import midllewares from '../../../src/backend/midllewares';
import { onError, onNoMatch } from '../../../src/backend/utils';

const handler = nc<NextApiRequest, NextApiResponse>({ onError, onNoMatch });

// App-Wide
handler.use(midllewares.common);

// Route-Wide
handler.use(midllewares.subApp.index);
handler.use(midllewares.auth.authForUsers);

/** Controllers */

// GET
handler.get(controllers.feat.index.doThisOnGet);

// POST
handler.use(midllewares.auth.authForAdmins);

handler.post(controllers.feat.index.doThisOnPost);
// PUT
handler.put(controllers.feat.index.doThisOnPut);

// DELETE
handler.delete(controllers.feat.index.doThisOnDelete);

// PATCH
handler.patch(controllers.feat.index.doThisOnPatch);
export default handler;
