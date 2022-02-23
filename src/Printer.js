import * as React from "react";

const SvgPrinter = ({ title, titleId, ...props }) => (
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
      d="M172.77 84.611v58.774c-.375 2.186-.465 4.406-1.987 6.278-2.895 3.558-6.439 5.76-11.115 5.816-3.889.049-7.778.03-11.663 0-.934 0-1.916.075-2.644-.731-.322-.653-.285-1.362-.288-2.055-.023-10.53-.023-21.059 0-31.587a4.878 4.878 0 0 1 .397-2.336c.405-.667 1.095-.611 1.729-.656 1.095-.079 2.197.026 3.289-.098 2.175-.255 3.517-1.721 3.487-3.772-.026-1.991-1.335-3.375-3.446-3.656-.845-.077-1.694-.1-2.543-.068H99.053c-1.125 0-2.318.229-3.293-.626-.476-.705-.465-1.5-.465-2.31a7664.904 7664.904 0 0 1 0-32.168c-.049-.7.064-1.402.33-2.05.085-.178.215-.33.375-.443.679-.375 1.433-.402 2.183-.402 15.327-.017 30.655-.017 45.982 0 .503 0 .998.064 1.5.083 4.811-.176 9.626-.075 14.438-.064a7.317 7.317 0 0 1 3.318.698c4.748 1.016 8.85 5.718 9.192 10.533.03.274-.068.604.157.84Z"
      fill="#401B60"
    />
    <path
      d="M96 73.26v36.499c-.041.082-.082.165-.127.243-.908.75-2.003.499-3.023.503-16.367.022-32.742.029-49.125.019a10.988 10.988 0 0 0-2.827.172 3.69 3.69 0 0 0-.045 7.193 6.31 6.31 0 0 0 1.63.18c.848 0 1.7 0 2.543.056.548.041 1.125.056 1.474.581.428.776.42 1.635.42 2.483.015 10.425.015 20.851 0 31.278a5.748 5.748 0 0 1-.247 2.213 1.762 1.762 0 0 1-1.557.75c-4.976 0-9.97.48-14.917-.259-4.125-.611-7.253-2.884-9.506-6.375-1.013-1.564-1.193-3.349-1.32-5.145-.023-.292.056-.6-.15-.862V85.211c.348-.649.142-1.365.24-2.047.787-5.303 4.162-8.164 8.925-9.83a10.238 10.238 0 0 1 4.068-.81c4.624-.022 9.248-.12 13.875.06.75-.052 1.5-.09 2.25-.09 14.805 0 29.61.007 44.415.02 1.028.003 2.22-.35 3.004.746Z"
      fill="#461C72"
    />
    <path
      d="m96 73.26-32.303-.045c-5.83 0-11.66-.016-17.493-.049-.619-.42-.687-1.072-.687-1.728 0-8.367-.13-16.737.057-25.103-.184-7.477-.087-14.959-.06-22.44 0-2.839 1.005-3.911 3.99-4.657H96a1.849 1.849 0 0 1 .675 1.44c.026.547.045 1.098.045 1.646v47.775c0 1.053.315 2.25-.72 3.071v.09ZM46.2 154.759v-35.914c.259-.623.821-.66 1.372-.713.698-.067 1.4-.056 2.1-.056H92.7c1.042 0 2.107-.116 3.109.319.184.083.344.212.465.375.798 2.014.315 4.125.408 6.18.05.979.117 1.991-.43 2.895-.803.81-1.846.66-2.828.66-7.647.026-15.29 0-22.935 0a13.117 13.117 0 0 0-2.25.094 3.71 3.71 0 0 0-3.25 3.661 3.713 3.713 0 0 0 3.205 3.7c.745.101 1.498.135 2.25.101h22.935c.986 0 2.02-.135 2.85.63.35.551.505 1.203.442 1.853-.112 2.411.431 4.875-.401 7.23-.78.847-1.826.69-2.805.693-7.583.027-15.169 0-22.755 0a17.245 17.245 0 0 0-2.25.064c-2.033.27-3.45 1.785-3.469 3.686-.019 1.902 1.395 3.447 3.413 3.75.747.077 1.499.101 2.25.072h22.755c.982 0 2.02-.143 2.83.648.31.517.46 1.113.436 1.714.05 4.818.05 9.636 0 14.456 0 .702-.056 1.403-.694 1.875H49.5c-3.143-.783-3.971-1.815-4.005-5.077a665.686 665.686 0 0 1 0-10.594c.022-.799-.038-1.672.705-2.302Z"
      fill="#E4E4E4"
    />
    <path
      d="M96 127.717v-8.883c.375-.698 1.054-.679 1.691-.72 1.05-.068 2.096-.038 3.146-.038 14.033 0 28.064.008 42.094.023.983 0 2.138-.353 2.869.75 0 11.975.006 23.948.019 35.921.75.63.678 1.5.686 2.347.022 3.533.034 7.065 0 10.598-.034 3.341-.821 4.309-4.005 5.062H96v-17.913c.037-.087.075-.169.109-.252.75-.727 1.687-.525 2.557-.528 7.688-.03 15.375 0 23.063-.019.799.044 1.6-.011 2.385-.165a3.708 3.708 0 0 0 2.056-5.932 3.702 3.702 0 0 0-2.075-1.298 9.985 9.985 0 0 0-2.385-.161H98.944c-.885 0-1.804.146-2.625-.342a.881.881 0 0 1-.312-.442v-8.85l.11-.251c.75-.728 1.687-.525 2.557-.529 7.687-.03 15.375 0 23.062 0 .799.043 1.6-.013 2.385-.165a3.714 3.714 0 0 0 2.871-3.623 3.71 3.71 0 0 0-2.89-3.607 9.982 9.982 0 0 0-2.385-.161H98.951c-.885 0-1.803.146-2.625-.342a.876.876 0 0 1-.326-.48ZM110.093 19.238a.596.596 0 0 1-.027.213 10.63 10.63 0 0 1 .454 3.54v25.174c0 .698 0 1.399.019 2.096.124 2.666 1.571 4.125 4.256 4.215 3.094.083 6.191.023 9.289.026h18.281c1.249 0 2.49.038 3.656.574.503.529.45 1.204.458 1.842.052 4.75.052 9.49 0 14.22 0 .75.03 1.522-.698 2.028-5.332 0-10.668.05-16.001.045-11.265 0-22.531-.013-33.799-.04V19.236h14.112Z"
      fill="#D8D8D8"
    />
    <path
      d="M145.781 118.845c-5.134 0-10.267-.049-15.401-.045-11.468 0-22.934.011-34.399.034l.038-.079a1.658 1.658 0 0 1-.687-1.41 73.121 73.121 0 0 1 0-6.082 1.66 1.66 0 0 1 .675-1.414v-.09c7.438.015 14.873.029 22.305.041h31.587c2.947 0 4.875 1.766 4.875 4.455 0 2.771-1.905 4.53-4.954 4.541-1.346.008-2.693.034-4.039.049ZM145.781 73.166V56.771c0-.54-.071-1.08-.112-1.623a7.032 7.032 0 0 1-2.648-1.85c-1.755-1.814-3.581-3.566-5.34-5.377-.435-.446-1.012-.866-.75-1.646 4.875-.038 9.806-.375 14.666.124 7.125.75 11.963 6.112 12.143 13.252.12 4.736 0 9.484 0 14.228-4.598-1.223-9.289-.454-13.935-.657-1.343-.06-2.685-.04-4.024-.056Z"
      fill="#3C3A41"
    />
    <path
      d="M96 109.849v8.906c-12.165 0-24.33.014-36.495.041-4.436 0-8.873.034-13.309.049-1.245 0-2.493-.041-3.75-.049-3.206 0-5.25-1.732-5.25-4.466s2.014-4.523 5.183-4.526h18.566l35.055.045ZM28.256 73.987c0-5.25-.375-10.5.154-15.693.75-7.076 6.176-11.839 13.313-12.056 1.5-.05 3 0 4.5 0V73.15c-3.927 0-7.853.056-11.78.038a20.1 20.1 0 0 0-6.187.799Z"
      fill="#57555C"
    />
    <path
      d="M46.125 100.2c-1.447 0-2.899.034-4.346 0-2.584-.071-4.5-1.976-4.556-4.421-.038-2.505 1.927-4.5 4.575-4.549 2.952-.047 5.9-.047 8.846 0a4.5 4.5 0 0 1 4.56 4.395c.037 2.505-1.928 4.5-4.575 4.552-1.504.057-3.004.023-4.504.023Z"
      fill="#E0E3FA"
    />
    <path
      d="m96 136.875-21.259-.079c-1.946 0-3.892.023-5.838 0-2.787-.041-4.73-1.953-4.688-4.563.037-2.55 1.961-4.407 4.688-4.414 8.534-.023 17.07 0 25.6 0 .5 0 .998-.049 1.5-.071v.135a1.638 1.638 0 0 1 .665 1.41 74.122 74.122 0 0 1 0 6.056 1.65 1.65 0 0 1-.664 1.414l-.004.112ZM96 154.875l-21.259-.079c-1.946 0-3.892.023-5.838 0-2.787-.041-4.73-1.953-4.688-4.563.037-2.547 1.961-4.407 4.688-4.414 8.534-.023 17.07 0 25.6 0 .5 0 .998-.045 1.5-.071v.135a1.638 1.638 0 0 1 .665 1.41 74.122 74.122 0 0 1 0 6.056 1.65 1.65 0 0 1-.668 1.376v.15Z"
      fill="#461C72"
    />
    <path
      d="M96 136.732v-8.88c9.191-.018 18.375-.067 27.574-.033 2.452 0 4.237 2.066 4.207 4.548-.03 2.397-1.815 4.388-4.207 4.395-9.199.034-18.383-.015-27.574-.03ZM96 154.725v-8.88c9.191-.019 18.375-.067 27.574-.034 2.452 0 4.237 2.067 4.207 4.549-.03 2.396-1.815 4.388-4.207 4.395-9.199.034-18.383-.015-27.574-.03Z"
      fill="#401B60"
    />
    <path
      d="m136.939 46.275 8.722 8.873c-5.625.026-11.28.06-16.92.07-4.691 0-9.375.02-14.081 0-3.049 0-4.853-1.803-4.875-4.848-.018-9.885-.018-19.77 0-29.655 0-.431-.146-.911.266-1.26 8.97 8.938 17.933 17.878 26.888 26.82Z"
      fill="#FD9823"
    />
  </svg>
);

export default SvgPrinter;