// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  name: string
}
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCDN: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);
export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {_id, name, email, title, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      title,
      comment,
    });
  } catch (err) {
    return res.status(500).json({ message:`could not create comment` , err});
  }
  res.status(200).json({ message:`Comment created successfully created`});
}
