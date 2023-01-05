import React from "react";

interface ChemicalElementProps {
  atomicBlock: number;
  symbol: string;
  fontSize: string;
}

function ChemicalElement({
  atomicBlock,
  symbol,
  fontSize,
}: ChemicalElementProps) {
  return (
    <div
      className={`inline-block text-white p-2 aspect-square h-14 w-14 bg-[#1b370f] border-[3px] border-solid border-white font-bold text-center  cursor-pointer relative bg-gradient-to-r from-[#1b370f] to-[#53af6c] capitalize text-${fontSize}`}
    >
      {symbol}
      <span className="text-[8px] absolute leading-[10px] text-right top-1 right-1">
        {atomicBlock}
      </span>
    </div>
  );
}

export default ChemicalElement;
