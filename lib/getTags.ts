import { createClient } from 'contentful';
import { NextApiRequest, NextApiResponse } from 'next';

export async function getTags(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || ``,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || ``,
  });
  if (!req.query.tag) {
    try {
      const tags = await client.getTags();
      res.status(200).json({ tags });
    } catch {
      res.status(400).json({ message: `error occurred.` });
    }
  } else {
    try {
      const tags = await Promise.all(
        [req.query.tag]
          .flatMap((item) => item)
          .map(async (tag) => {
            const res = await client.getTag(tag);
            return res.name;
          }),
      );
      res.status(200).json({ tags });
    } catch {
      res.status(400).json({ message: `error occurred.` });
    }
  }
}
