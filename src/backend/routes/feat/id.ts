import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import controllers from '../../controllers';
import midllewares from '../../midllewares';
import { onError } from '../../utils';

const id = nextConnect<NextApiRequest, NextApiResponse>({ onError });
id.use((req, res, next) => {
	console.log('Catcher: id');
	next();
});
id.use(midllewares.auth.authForAdmins);
id.get(controllers.feat.id.doThisOnGet);
id.post(controllers.feat.id.doThisOnPostWithId);

// add more controllers/midllewares here

export default id;
