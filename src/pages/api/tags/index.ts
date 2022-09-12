import { getTags } from 'lib/getTags';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getTags(req, res);
}
