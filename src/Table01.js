import * as React from "react";

const SvgTable01 = ({ title, titleId, ...props }) => (
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
      d="M166.562 42.144v102.912a19.111 19.111 0 0 1-5.596 13.51 19.101 19.101 0 0 1-13.51 5.594H44.544a19.092 19.092 0 0 1-13.511-5.594 19.101 19.101 0 0 1-5.593-13.512V42.142A19.111 19.111 0 0 1 41.706 23.25a18.68 18.68 0 0 1 2.838-.209h102.912a19.108 19.108 0 0 1 13.51 5.594 19.088 19.088 0 0 1 5.596 13.51Z"
      fill="#fff"
    />
  </svg>
);

export default SvgTable01;
