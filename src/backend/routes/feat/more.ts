import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import controllers from '../../controllers';
import midllewares from '../../midllewares';

const more = nextConnect<NextApiRequest, NextApiResponse>();

more.use((req, res, next) => {
	console.log('Catcher: more');
	next();
});
more.use(midllewares.auth.authForAdmins);
more.get(controllers.feat.id.doThisOnGet);
more.post(controllers.feat.id.doThisOnPostWithId);

// add more controllers/midllewares here
export default more;
