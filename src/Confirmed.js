import * as React from "react";

const SvgConfirmed = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M256 0C114.61 0 0 114.61 0 256s114.61 256 256 256 256-114.62 256-256S397.38 0 256 0Zm145.53 191.76q-89.77 89.55-179.59 179.08c-2.39 2.39-4.82 4.63-8.81 4.74a10.12 10.12 0 0 1-6.75-3.17q-48.48-48.59-97-97.2c-4.72-4.74-4.66-9.69.06-14.45q17.93-18.07 36-36c5.13-5.06 10-5 15.2.12 16.42 16.3 32.87 32.56 49.05 49.1 3.21 3.28 4.71 2.83 7.69-.15q65.62-65.75 131.4-131.28c8.24-8.22 11.87-8.2 20.25.16q16.26 16.22 32.5 32.46c6.09 6.12 6.09 10.52 0 16.59Z"
      style={{
        fill: "#4bd37b",
      }}
      data-name="Layer 3"
    />
  </svg>
);

export default SvgConfirmed;
