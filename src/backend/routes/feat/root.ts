import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import controllers from '../../controllers';
import midllewares from '../../midllewares';

const root = nextConnect<NextApiRequest, NextApiResponse>();

root.use((req, res, next) => {
	console.log('Catcher: root');
	next();
});
root.use(midllewares.auth.authForUsers);
root.get(controllers.feat.root.doThisOnGet);
root.post(controllers.feat.root.doThisOnPost);
root.use(midllewares.auth.authForAdmins);
root.delete(controllers.feat.root.doThisOnDelete);

// add more controllers/midllewares here

export default root;
