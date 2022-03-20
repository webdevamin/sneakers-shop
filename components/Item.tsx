import Image from "next/image";
import { FunctionComponent } from "react";

type Props = {
  item: Item;
};

interface Item {
  id: number;
  categoryId: number;
  name: string;
  label: string;
  price: number;
  sizes: Array<number>;
  imageUrl: string;
}

const Item: FunctionComponent<Props> = ({ item }) => {
  const { name, label, price, sizes, imageUrl } = item;

  return (
    <article className="border shadow rounded-xl py-8">
      <div className="px-10 pb-5">
        <div>
          <span className="text-gray-400">{label ?? "N/A"}</span>
          <h1 className="font-bold text-lg pt-1">{name}</h1>
        </div>
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width="300"
          height="275"
          layout="responsive"
        />
      </div>
      <div className="px-10 pt-5 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-gray-400">Price</span>
          <span className="font-bold">€ {price}</span>
        </div>
        <div className="flex gap-1 self-end">
          {sizes.map((size: number, index: number) => (
            <div
              key={index}
              className="text-white
             bg-zinc-800 h-10 w-10 flex justify-center 
             items-center rounded-lg text-sm"
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Item;
