import type { NextApiRequest, NextApiResponse } from 'next';

type CollectionData = {
  id?: number;
  name?: string;
  floorPrice?: number;
  buyNowPrice?: number;
  volume?: string;
  sales?: number;
  interest?: string;
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CollectionData[]>
) {
  try {
    const response = await fetch('https://robox-test.herokuapp.com/api/collection', {
      headers: {
        apikey: 'test123'
      }
    });
    const collectionData = await response.json();
    res.status(200).json(collectionData);
  } catch (error) {
    console.error(error);
  }
}
