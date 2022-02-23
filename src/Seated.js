import * as React from "react";

const SvgSeated = ({ title, titleId, ...props }) => (
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
      d="M136.777 38.873H56.58c-11.706 0-21.195 9.489-21.195 21.195v80.197c0 11.706 9.49 21.195 21.195 21.195h80.197c11.706 0 21.195-9.489 21.195-21.195V60.068c0-11.706-9.489-21.195-21.195-21.195Z"
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
    />
    <path d="M46.62 27.382h101.636" stroke="#000" strokeMiterlimit={10} />
    <path
      d="M144.919 20.257H49.958a3.338 3.338 0 0 0-3.338 3.338v7.575a3.338 3.338 0 0 0 3.338 3.337h94.961a3.337 3.337 0 0 0 3.337-3.337v-7.575a3.337 3.337 0 0 0-3.337-3.338Z"
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
    />
    <path d="M23.127 48.671V148.73" stroke="#000" strokeMiterlimit={10} />
    <path
      d="M26.337 48.671h-6.42A3.915 3.915 0 0 0 16 52.586v92.228a3.915 3.915 0 0 0 3.915 3.915h6.42a3.915 3.915 0 0 0 3.916-3.915V52.586a3.915 3.915 0 0 0-3.915-3.915Z"
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
    />
    <path d="M170.231 48.671V148.73" stroke="#000" strokeMiterlimit={10} />
    <path
      d="M173.648 48.671h-6.833a3.71 3.71 0 0 0-3.709 3.71v92.639a3.71 3.71 0 0 0 3.709 3.709h6.833a3.709 3.709 0 0 0 3.708-3.709V52.38a3.708 3.708 0 0 0-3.708-3.709Z"
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
    />
    <path d="M45.971 172.946h101.636" stroke="#000" strokeMiterlimit={10} />
    <path
      d="M144.154 165.821h-94.73a3.454 3.454 0 0 0-3.453 3.454v7.343a3.453 3.453 0 0 0 3.454 3.453h94.729a3.453 3.453 0 0 0 3.453-3.453v-7.343a3.454 3.454 0 0 0-3.453-3.454Z"
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
    />
  </svg>
);

export default SvgSeated;
