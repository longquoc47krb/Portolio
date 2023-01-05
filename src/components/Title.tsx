import React from "react";
interface TitleProps {
  children: React.ReactNode;
}
function Title({ children }: TitleProps) {
  return <h1 className="font-bold text-4xl h-fit my-4">{children}</h1>;
}
export default Title;
