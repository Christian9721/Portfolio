import * as React from "react";
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 511.85 511.85"
    {...props}
  >
    <title>{"unity-game-engine"}</title>
    <path
      d="M456 .15 246.9 54.64 216 107.73l-62.8-.46L.15 256.1l153 148.82 62.76-.48 31 53.07L456 512l56-203.26-31.83-52.64L512 203.45ZM221 116.27 381 76.3 289.14 231H105.51Zm0 279.62L105.51 281.22h183.63l91.8 154.64Zm204.7 14.83L333.85 256.1l91.85-154.69L470 256.1Z"
      style={{
        fillRule: "evenodd",
      }}
      transform="translate(-.15 -.15)"
    />
  </svg>
);
export default SvgComponent;
