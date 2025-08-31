import { type PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const Card = ({ id, title, onDelete, children }: CardProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl text-gray-100 font-medium font-sans">{title}</h1>
        <button
          onClick={() => onDelete(id)}
          className="font-medium text-gray-300 text-md hover:text-amber-300 transition duration-200 cursor-pointer"
        >
          Delete
        </button>
      </div>
      {children}
    </div>
  );
};

export default Card;

/*
// Another method to define

import { type FC, type ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Card;
*/
