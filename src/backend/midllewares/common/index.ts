import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { onError } from '../../utils';
import { commonMidllwareOne } from './middlwares';

/**
 * Common midllewares for all app routes
 */
const common = nextConnect<NextApiRequest, NextApiResponse>({ onError });

common.use(commonMidllwareOne);

export default common;
