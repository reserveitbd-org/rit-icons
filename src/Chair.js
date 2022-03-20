import * as React from "react";

const SvgChair = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>{".chair_svg__cls-1{fill:#707070}"}</style>
    </defs>
    <g id="chair_svg__Layer_5" data-name="Layer 5">
      <path
        className="chair_svg__cls-1"
        d="M51.3 512V344.62h410.36V512h-75v-84.74H130.21V512ZM0 198.44h74.05v83.91H0ZM130.48 280.86c0-78.56-.58-155 .32-231.48.31-26.5 22.31-48.33 47.86-48.73 52.58-.82 105.19-.93 157.76 0 26 .48 47.62 22.44 48.12 51.36 1.29 75.63.43 151.31.43 228.81ZM439.26 281.23V200.3H512v80.93Z"
      />
    </g>
  </svg>
);

export default SvgChair;
