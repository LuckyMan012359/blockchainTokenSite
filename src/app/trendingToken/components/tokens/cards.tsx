"use client";

import { CardComponent } from "./pageComponents/cardComponent";

import "./tokens.css";

const cardData = [
  {
    key: 0,
    price: "0.08786 BNB",
    description: "Price",
    tag: "▲ 1.46%",
  },
  {
    key: 1,
    price: "$ 4729.66",
    description: "Market Cap",
  },
  {
    key: 2,
    price: "$ 73.78",
    description: "Virtual Liquidity",
  },
  {
    key: 3,
    price: "$ 45.93",
    description: "24h volume",
  },
];

const Cards = () => {
  return (
    <div className="flex justify-between gap-[15px] w-full tokenCards">
      {cardData.map((item) => (
        <CardComponent
          key={item.key} // Use key for React's internal list management
          itemKey={item.key} // Pass a separate prop named itemKey
          price={item.price}
          description={item.description}
          tag={item?.tag}
        />
      ))}
    </div>
  );
};

export default Cards;
