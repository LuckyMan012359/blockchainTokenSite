"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const DrawdownChart: React.FC = () => {
  return (
    <div
      id="dexscreener-embed"
      className="md:min-h-0 rounded-lg border w-full h-full overflow-hidden"
    >
      <iframe
        src="https://dexscreener.com/ethereum/0x94ab9133c9664179994d7a5207a0a9dba727b15a?theme=light"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default DrawdownChart;

// import React, { useEffect, useRef, memo } from "react";

// const TradingViewWidget: React.FC = () => {
//   const container = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!container.current) return;

//     // Remove existing children to prevent duplicates
//     while (container.current.firstChild) {
//       container.current.removeChild(container.current.firstChild);
//     }

//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "NASDAQ:AAPL",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "dark",
//         "style": "1",
//         "locale": "en",
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;

//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       ref={container}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//         style={{ height: "100%", width: "100%" }}
//       ></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default memo(TradingViewWidget);
