import type { NextApiRequest, NextApiResponse } from "next";

type Category = {
  id: number;
  name: string;
};

const categories: Array<Category> = [
  {
    id: 1,
    name: "Flip Flops",
  },
  {
    id: 2,
    name: "Sneakers",
  },
  {
    id: 3,
    name: "Lace-Up Shoes",
  },
  {
    id: 4,
    name: "Shoe Accessories",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Category>>
) {
  res.status(200).json(categories);
}
