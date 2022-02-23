import * as React from "react";

const SvgChair = ({ title, titleId, ...props }) => (
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
    <path
      d="M44.139 128.667v-19.334h104.194V148h-19.555v-19.333H63.694V148H44.14v-19.333Zm97.778-51.657h19.555v19.334h-19.555V77.01ZM31 77.01h19.556v19.334H31V77.01Zm97.778 19.334H63.694V44.99c0-3.625 1.274-6.697 3.82-9.214C70.06 33.259 73.064 32 76.528 32h39.111c3.667 0 6.773 1.259 9.319 3.776 2.547 2.517 3.82 5.589 3.82 9.214v51.354Z"
      fill="#401B60"
    />
  </svg>
);

export default SvgChair;
