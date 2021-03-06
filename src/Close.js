import * as React from "react";

const SvgClose = ({ title, titleId, ...props }) => (
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
      d="M509.13 219.48c-6.93-48.19-26.14-91-57.59-128.08-38.17-45-86.32-73.68-144.12-85.63-12.83-2.65-26.05-3.34-39.1-4.95-1.79-.21-3.59-.55-5.38-.82h-14c-9.42 1-18.87 1.78-28.26 3a244.92 244.92 0 0 0-109.4 42.3C55.14 84.36 18.85 137.39 5.47 204.42-10.61 285.06 8 358 60.75 421.32c37.7 45.2 86 74.07 143.8 85.29 80.35 15.59 153-2.6 216.13-54.92 45.32-37.55 73.55-86 85.84-143.51 2.34-10.88 3.06-22.08 4.55-33.13.28-2 .71-3.9 1.06-5.84v-26c-.99-7.92-1.86-15.85-3-23.73ZM337.22 376.23l-80.51-80.51-81 81.27-39.93-40 80.61-80.58q-41.27-41.27-80.79-80.76c13.26-13.28 26.31-26.3 39.4-39.38l80.36 80.37 81-81L375.45 175l-80.91 81 81.62 81.59Z"
      style={{
        fill: "#fd4f60",
      }}
      data-name="Layer 7"
    />
  </svg>
);

export default SvgClose;
