import * as React from "react";

const SvgArriving = ({ title, titleId, ...props }) => (
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
      d="M178.406 104.25c-2.981 4.95-7.271 7.897-13.188 8.104-2.562.09-2.693.165-2.693 2.703 0 15.788.038 31.572-.022 47.359-.034 7.643-3.998 12.915-10.463 16.545-1.77.994-3.814.713-5.704 1.163H115.5c-3.27-.825-4.365-2.224-4.376-5.835-.041-12.548-.019-25.095 0-37.643 0-1.676-.24-3.262-1.144-4.699-1.369-2.182-3.27-3.461-5.917-3.491-2.25-.026-4.474.041-6.71-.052-.7-.034-1.42-.068-1.807-.702.113-.098.21-.215.285-.345V12.293a.306.306 0 0 0-.063-.087c.196-.094.412-.141.63-.138 3.967-.105 7.545.787 10.462 3.712a63505.57 63505.57 0 0 0 38.94 38.921c9.851 9.848 19.654 19.748 29.58 29.517 2.895 2.853 4.5 6.108 4.549 10.124.03 3.376.319 6.837-1.523 9.908Z"
      fill="#CCF4F5"
    />
    <path
      d="M95.843 12.278v115.065a1.408 1.408 0 0 1-.285.345c-.44.375-1.032.375-1.598.375-1.635.063-3.274.022-4.912.037-4.853.041-8.626 2.948-8.532 8.58.173 11.569.053 23.141.053 34.71v2.783c-.083 3.768-1.125 5.081-4.707 5.925H45.668c-.66-.375-1.392-.154-2.085-.237-6.555-.78-10.283-5.043-12.972-10.53-1.125-2.283-1.477-4.77-1.477-7.327.017-15.135.017-30.271 0-45.409v-1.804c-.049-2.028-.375-2.355-2.4-2.445a16.186 16.186 0 0 1-10.984-4.815c-2.426-2.385-3.724-5.208-3.701-8.625a1.125 1.125 0 0 0-.165-.78V94.19c.288-.33.15-.731.157-1.099a11.3 11.3 0 0 1 3.476-8.04C38.465 62.115 61.404 39.17 84.33 16.215c3.082-3.09 6.728-4.275 10.946-4.162a.626.626 0 0 1 .492.13.303.303 0 0 1 .075.095Z"
      fill="#CCF4F5"
    />
  </svg>
);

export default SvgArriving;