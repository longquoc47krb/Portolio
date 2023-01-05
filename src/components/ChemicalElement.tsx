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
      className={`inline-block text-white aspect-square p-2 w-12 h-12 leading-[60px] bg-[#1b370f] border-[3px] border-solid border-white font-bold text-center tracking-tight  cursor-pointer relative bg-gradient-to-r from-[#1b370f] to-[#53af6c] capitalize text-${fontSize}`}
    >
      {symbol}
      <span className="text-[8px] absolute leading-[10px] text-right">
        {atomicBlock}
      </span>
    </div>
  );
}

export default ChemicalElement;
