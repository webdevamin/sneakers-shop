import type { NextApiRequest, NextApiResponse } from "next";

type Item = {
  id: number;
  name: string;
  label: string;
  categoryId: number;
  price: number;
  sizes: Array<number>;
  imageUrl: string;
};

const items: Array<Item> = [
  {
    id: 1,
    name: "Balenciaga",
    label: "High Speed Sneakers",
    categoryId: 1,
    price: 790,
    sizes: [40, 41, 42, 43],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/alex-motoc-xyjB6_ZDaKw-unsplash.jpg",
  },
  {
    id: 2,
    name: "Tom Ford",
    label: "Yago",
    categoryId: 2,
    price: 965,
    sizes: [39, 41],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/revolt-164_6wVEHfI-unsplash.jpg",
  },
  {
    id: 3,
    name: "Neil Barrett",
    label: "Geometric Styled 003",
    categoryId: 3,
    price: 295,
    sizes: [40],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/irene-kredenets-dwKiHoqqxk8-unsplash.jpg",
  },
  {
    id: 4,
    name: "Emporio Armani",
    label: "Massive Geometric",
    categoryId: 2,
    price: 355,
    sizes: [42, 43],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/daniel-storek-JM-qKEd1GMI-unsplash.jpg",
  },
  {
    id: 5,
    name: "Adidas",
    label: "Neomorphic TRZ",
    categoryId: 3,
    price: 455,
    sizes: [40, 41],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/imani-bahati-LxVxPA1LOVM-unsplash.jpg",
  },
  {
    id: 6,
    name: "Puma",
    label: "Extensive Powerades",
    categoryId: 1,
    price: 429,
    sizes: [39, 40],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/wengang-zhai-_fOL6ebfECQ-unsplash.jpg",
  },
  {
    id: 7,
    name: "Fofo",
    label: "Casuality R",
    categoryId: 1,
    price: 719,
    sizes: [43],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
  },
  {
    id: 8,
    name: "Balenciaga 2",
    label: "High Speed Sneakers+",
    categoryId: 2,
    price: 790,
    sizes: [40],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/usama-akram-g3CMh2nqj_w-unsplash.jpg",
  },
  {
    id: 9,
    name: "Ferirris",
    label: "Forwoods Silence",
    categoryId: 3,
    price: 229,
    sizes: [40, 41, 42, 43],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg",
  },
  {
    id: 10,
    name: "Vroom",
    label: "Sonic Drifts",
    categoryId: 2,
    price: 590,
    sizes: [42, 44],
    imageUrl:
      "https://cdn.lorem.space/images/shoes/.cache/300x275/maksim-larin-NOpsC3nWTzY-unsplash.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Item>>
) {
  res.status(200).json(items);
}
