import * as React from "react";

const SvgTableStroke = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      x={42.25}
      y={42.25}
      width={107.5}
      height={107.5}
      rx={8}
      stroke="#401B60"
      strokeWidth={14}
    />
    <path
      d="M45.375 8a7 7 0 1 0 0 14V8Zm101.25 14a7 7 0 1 0 0-14v14Zm-101.25 0h101.25V8H45.375v14ZM170 146.625a7 7 0 1 0 14 0h-14Zm14-101.25a7 7 0 1 0-14 0h14Zm0 101.25V45.375h-14v101.25h14ZM8 146.625a7 7 0 1 0 14 0H8Zm14-101.25a7 7 0 1 0-14 0h14Zm0 101.25V45.375H8v101.25h14ZM45.375 170a7 7 0 1 0 0 14v-14Zm101.25 14a7 7 0 1 0 0-14v14Zm-101.25 0h101.25v-14H45.375v14Z"
      fill="#401B60"
    />
  </svg>
);

export default SvgTableStroke;
