// import { type FC, type ReactNode } from "react";
import { type PropsWithChildren } from "react";
// type GoalImg = {
//   src: string;
//   alt: string;
// };
// interface HeaderProps {
//   img: GoalImg;
//   children: ReactNode;
// }

type HeaderProps = PropsWithChildren<{ img: { src: string; alt: string } }>;
const Header = ({ img, children }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <img {...img} className="w-18 mb-2" />
      {children}
    </div>
  );
};

export default Header;
