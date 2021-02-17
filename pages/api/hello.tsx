import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  // http://localhost:3000/api/hello
  res.status(200).json({ text: 'Hello' });
};

export default handler;
