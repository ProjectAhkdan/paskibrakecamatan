// pages/api/verify-captcha.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const verifyCaptcha = async (token: string) => {
  const secretKey = '6Lfafi4qAAAAAGxbF8fP4KqiaHnanatKXfIHLg5T';
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
    method: 'POST',
  });

  const data = await res.json();
  return data.success;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { response } = req.body;

    const success = await verifyCaptcha(response);

    if (success) {
      res.status(200).json({ message: 'CAPTCHA verified successfully' });
    } else {
      res.status(400).json({ message: 'CAPTCHA verification failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
