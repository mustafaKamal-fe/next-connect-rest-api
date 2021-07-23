import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { commonMidllwareOne } from './middlwares';

/**
 * Common midllewares for all app routes
 */
const common = nextConnect<NextApiRequest, NextApiResponse>();

common.use(commonMidllwareOne);

export default common;
