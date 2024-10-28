"use client";

import React from "react";

const DrawdownChart: React.FC = () => {
  return (
    <div
      id="dexscreener-embed"
      className="md:min-h-0 rounded-lg border w-full h-full overflow-hidden"
    >
      <iframe
        src="https://dexscreener.com/ethereum/0xfdd05552f1377aa488afed744c8024358af02041?embed=1&theme=dark&info=0"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default DrawdownChart;
