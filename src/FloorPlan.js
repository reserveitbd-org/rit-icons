import * as React from "react";

const SvgFloorPlan = ({ title, titleId, ...props }) => (
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
      d="M188.707 189.563c-6.202-1.399-11.696-4.568-17.452-7.065-10.613-4.609-21.154-9.375-31.729-14.082-1.144-.51-2.505-.813-3.071-2.085l-63.731 17.018c-7.017 1.875-14.04 3.731-21.053 5.625-.499.135-1.125.064-1.477.581h-1.095c-3.207-.611-6-2.186-8.888-3.619-11.625-5.801-23.231-11.625-34.894-17.351-2.04-1.001-2.745-2.25-2.74-4.5.06-52.797.075-105.597.048-158.4 0-2.524 0-2.516 2.494-1.841a11.94 11.94 0 0 1 2.178.911C20.66 11.415 34.02 18.08 47.377 24.75c.78.375 1.7.653 2.25 1.358 23.13-6.173 46.262-12.35 69.394-18.53 5.854-1.56 11.734-3.078 17.599-4.608.375-.499.956-.27 1.519-.169 3.69.672 6.9 2.588 10.267 4.07 10.695 4.694 21.349 9.49 32.036 14.212 2.325 1.027 4.62 2.122 6.975 3.086a3.93 3.93 0 0 1 2.022 1.98c0 53.985-.013 107.971-.038 161.959 0 .453.75 1.571-.694 1.455Z"
      fill="#fff"
    />
    <path
      d="M188.708 189.562c-6.203-1.398-11.697-4.567-17.453-7.064-10.612-4.609-21.154-9.376-31.729-14.082-1.143-.51-2.505-.813-3.071-2.085l.495-.131c0-4.657.01-9.314.03-13.969a2.044 2.044 0 0 0-.097-.213c.768-.567 1.62-.192 2.441.138 4.841 1.958 9.645 3.998 14.464 6 5.156 2.145 10.29 4.343 15.465 6.432 4.286 1.732 7.605-.473 7.627-5.108.06-13.365.019-26.726.023-40.091v-78c0-.972.026-1.947-.027-2.918-.135-2.512-1.196-4.376-3.611-5.411-7.027-3-14.1-5.925-21.165-8.85-4.762-1.973-9.45-4.125-14.325-5.839a1.908 1.908 0 0 1-1.252-.926l.431-.098V2.877l-.338.086c.375-.5.957-.27 1.519-.17 3.69.672 6.9 2.588 10.268 4.07 10.695 4.694 21.348 9.49 32.036 14.212 2.325 1.027 4.62 2.123 6.975 3.086a3.928 3.928 0 0 1 2.021 1.98c0 53.985-.012 107.972-.037 161.959.003.461.753 1.579-.69 1.462Z"
      fill="#1565C0"
    />
    <path
      d="M136.958 2.88V17.35l-.432.098v-.034a4.24 4.24 0 0 1-.183-.514 6.845 6.845 0 0 1-.24-2.314c.153-3.75-.424-7.563.375-11.306.04-.11.096-.213.165-.307l.315-.094Z"
      fill="#1565BF"
    />
    <path
      d="M15.274 34.301c.12 36.698.067 73.399.067 110.1 0 3.03.045 6.056 0 9.086-.049 2.772 1.065 4.785 3.57 6 9.971 4.894 19.755 10.167 29.914 14.682.297.11.572.271.813.476-.073.117-.13.243-.168.375v14.531h-.375c-3.206-.611-6-2.186-8.888-3.619-11.625-5.801-23.231-11.625-34.893-17.351-2.04-1.001-2.745-2.25-2.742-4.5.063-52.795.08-105.593.053-158.396 0-2.524 0-2.516 2.494-1.841a11.94 11.94 0 0 1 2.178.911C20.66 11.415 34.02 18.08 47.377 24.75c.78.375 1.699.652 2.25 1.358l-.176.048v13.785c.139.135.305.237.487.3 0 .072-.022.147-.033.218-.971 1.008-1.92.33-2.816-.109-4.59-2.227-9.14-4.534-13.714-6.803-3.09-1.54-6.27-2.943-9.267-4.672-5.276-3-8.85.634-8.835 5.426Z"
      fill="#1565C0"
    />
    <path
      d="M49.935 40.241a1.324 1.324 0 0 1-.488-.3V26.156l.176-.049c.168.213.295.454.376.713.438 4.264.64 8.527.026 12.784a7.471 7.471 0 0 1-.09.637Z"
      fill="#1565BF"
    />
    <path
      d="M136.98 152.25c0 4.657-.01 9.314-.03 13.969l-.495.131-63.731 16.999c-7.017 1.875-14.04 3.731-21.053 5.625-.499.135-1.125.063-1.477.581h-.732v-14.531c.04-.132.096-.259.17-.375.397-.657 1.184-.728 1.874-.915 9.825-2.734 19.695-5.314 29.55-7.935 17.779-4.733 35.539-9.533 53.336-14.194.904-.236 1.917-.75 2.505.405.033.078.061.158.083.24Z"
      fill="#1E88E5"
    />
    <path
      d="M81.555 58.875a2.446 2.446 0 0 1-.806 1.913 909.798 909.798 0 0 0-8.367 8.362 2.251 2.251 0 0 1-1.729.803c-6.73-.03-13.462 0-20.193-.03a4.124 4.124 0 0 1-1.024-.267l.023-17.17c6.926-1.5 13.698-3.586 20.56-5.34 3.402-.87 6.788-1.8 10.174-2.735.938-.258 1.392-.213 1.373.994-.067 4.47-.045 8.97-.011 13.47ZM78.645 153.724c0 1.143-.259 1.68-1.478 1.995-8.569 2.227-17.111 4.556-25.669 6.828-.667.177-1.383.63-2.05-.041v-42.941c9.134-1.658 18.27-3.296 27.397-4.999 1.301-.244 1.807-.127 1.8 1.403-.05 12.585-.05 25.17 0 37.755Z"
      fill="#DFDFDF"
    />
    <path
      d="M136.95 32.093v61.124a5.452 5.452 0 0 0-2.572 1.28c-4.309 3.464-8.599 6.944-12.949 10.353a4.875 4.875 0 0 0-2.003 4.215c.049 11.179 0 22.358.057 33.536 0 1.41-.402 1.977-1.778 2.337a2691.375 2691.375 0 0 0-31.624 8.445c-1.541.423-1.65-.128-1.646-1.425.037-13.245.022-26.49.022-39.75 0-3.698-1.166-4.699-4.78-4.05-9.728 1.75-19.455 3.506-29.18 5.268-.588.105-1.173.375-1.747-.045.979-.525.701-1.466.701-2.272.015-11.768.015-23.535 0-35.303 7.286 0 14.573-.082 21.859-.03a5.72 5.72 0 0 0 4.522-1.834c3.16-3.28 6.382-6.5 9.664-9.663a5.859 5.859 0 0 0 1.901-4.684c-.093-5.104 0-10.211-.056-15.315 0-1.275.267-1.875 1.643-2.25 9.622-2.486 19.226-5.07 28.819-7.684 1.308-.356 1.743-.142 1.657 1.249-.116 1.995.574 4.429-.345 5.869-.847 1.361-3.345 1.661-5.115 2.411-2.25.919-4.519 1.774-6.75 2.715-2.017.847-2.779 2.381-2.085 3.994.694 1.612 2.288 2.167 4.301 1.391 3.222-1.241 6.428-2.531 9.642-3.799.048-.019.116.023.375.083 0 2.358-.038 4.762.018 7.166.023.919-.588 1.088-1.2 1.331l-10.125 4.05c-.57.21-1.124.46-1.657.75-1.451.852-1.939 2.337-1.279 3.75a2.798 2.798 0 0 0 3.664 1.459c2.73-1.001 5.419-2.123 8.126-3.191.727-.285 1.459-.559 2.453-.941v7.702c0 .84-.75.855-1.279 1.065a1132.039 1132.039 0 0 1-10.808 4.335c-1.125.446-2.028 1.088-2.355 2.325a2.632 2.632 0 0 0 .788 2.666 2.68 2.68 0 0 0 3.019.668c2.936-1.151 5.865-2.318 8.801-3.473.551-.214 1.125-.401 1.852-.667 0 2.955.034 5.737 0 8.516-.018 1.163 0 1.5 1.437 1.043 3.577-1.174 4.597-3.282 4.526-7.1-.278-15.187-.098-30.374-.143-45.577 0-1.32.349-1.897 1.684-2.194 2.835-.63 5.625-1.466 8.438-2.227.641-.172 1.278-.484 1.875.09-.492.701-.364 1.508-.368 2.288ZM166.125 96.338c-.071 4.848-.03 9.705-.03 14.951-5.051-3.214-9.712-6.375-14.569-9.184-2.272-1.32-3.153-2.797-3-5.434.248-4.098.068-8.223.068-12.333.75-.17 1.125.31 1.552.577 4.875 3.038 9.75 6.113 14.659 9.124.945.566 1.35 1.166 1.32 2.299Z"
      fill="#DFDFDF"
    />
    <path
      d="M166.125 119.332c-.053 10.444-.034 20.892-.038 31.335-.021.3-.06.598-.116.893l-9.956-4.125c-5.25-2.19-10.5-4.385-15.75-6.585a14.397 14.397 0 0 0-3.315-.923c-3.45.582-6.825 1.677-10.2 2.573-.964.251-1.5.375-1.5-1.009.056-10.376.03-20.752.026-31.125 0-.622.06-1.155.623-1.597 3.679-2.873 7.327-5.775 10.987-8.667.731-.483 1.125.244 1.549.522a7422.694 7422.694 0 0 1 26.415 16.751c.727.48 1.294.881 1.275 1.957ZM136.324 16.901c-1.298-.667-2.603.221-3.814.544l-30.079 8.01a40851.92 40851.92 0 0 0-46.429 12.394c-1.995.532-4.125.772-5.966 1.755a6.594 6.594 0 0 0-.589.337c.139.135.305.237.488.3.656.225 1.308-.191 1.916-.352C72 34.53 92.152 29.11 112.312 23.767c8.063-2.137 16.069-4.5 24.21-6.318l.432-.098a2.634 2.634 0 0 0-.63-.45Z"
      fill="#DFDFDF"
    />
    <path
      d="M136.957 2.88V17.35l-.431.098c-8.145 1.822-16.151 4.18-24.214 6.318-20.16 5.344-40.305 10.763-60.461 16.125-.608.162-1.26.578-1.916.353a1.324 1.324 0 0 1-.488-.3V26.16l.176-.049c23.13-6.172 46.262-12.349 69.394-18.529C124.875 6.02 130.755 4.5 136.62 2.97l.337-.09ZM136.95 32.093v61.124a5.452 5.452 0 0 0-2.572 1.28c-4.309 3.464-8.599 6.944-12.949 10.353a4.875 4.875 0 0 0-2.003 4.215c.049 11.179 0 22.358.057 33.536 0 1.41-.402 1.977-1.778 2.337a2691.375 2691.375 0 0 0-31.624 8.445c-1.541.423-1.65-.128-1.646-1.425.037-13.245.022-26.49.022-39.75 0-3.698-1.166-4.699-4.78-4.05-9.728 1.75-19.455 3.506-29.18 5.268-.588.105-1.173.375-1.747-.045.979-.525.701-1.466.701-2.272.015-11.768.015-23.535 0-35.303 7.286 0 14.573-.082 21.859-.03a5.72 5.72 0 0 0 4.522-1.834c3.16-3.28 6.382-6.5 9.664-9.663a5.859 5.859 0 0 0 1.901-4.684c-.093-5.104 0-10.211-.056-15.315 0-1.275.267-1.875 1.643-2.25 9.622-2.486 19.226-5.07 28.819-7.684 1.308-.356 1.743-.142 1.657 1.249-.116 1.995.574 4.429-.345 5.869-.847 1.361-3.345 1.661-5.115 2.411-2.25.919-4.519 1.774-6.75 2.715-2.017.847-2.779 2.381-2.085 3.994.694 1.612 2.288 2.167 4.301 1.391 3.222-1.241 6.428-2.531 9.642-3.799.048-.019.116.023.375.083 0 2.358-.038 4.762.018 7.166.023.919-.588 1.088-1.2 1.331l-10.125 4.05c-.57.21-1.124.46-1.657.75-1.451.852-1.939 2.337-1.279 3.75a2.798 2.798 0 0 0 3.664 1.459c2.73-1.001 5.419-2.123 8.126-3.191.727-.285 1.459-.559 2.453-.941v7.702c0 .84-.75.855-1.279 1.065a1132.039 1132.039 0 0 1-10.808 4.335c-1.125.446-2.028 1.088-2.355 2.325a2.632 2.632 0 0 0 .788 2.666 2.68 2.68 0 0 0 3.019.668c2.936-1.151 5.865-2.318 8.801-3.473.551-.214 1.125-.401 1.852-.667 0 2.955.034 5.737 0 8.516-.018 1.163 0 1.5 1.437 1.043 3.577-1.174 4.597-3.282 4.526-7.1-.278-15.187-.098-30.374-.143-45.577 0-1.32.349-1.897 1.684-2.194 2.835-.63 5.625-1.466 8.438-2.227.641-.172 1.278-.484 1.875.09-.492.701-.364 1.508-.368 2.288Z"
      fill="#1E87E4"
    />
    <path
      d="M166.125 46.627V87.63c-.862.071-1.327-.48-1.875-.814a3695.541 3695.541 0 0 1-16.061-10.023c-1.211-.75-2.404-1.5-3.874-.642-1.47.859-1.545 2.172-1.537 3.627.026 5.407 0 10.814 0 16.387-2.198-.671-3.638-2.591-5.832-2.955V32.085c0-.78-.123-1.586.304-2.314 8.12 3.358 16.245 6.715 24.375 10.073 4.5 1.882 4.5 1.905 4.5 6.783Z"
      fill="#1565BF"
    />
    <path
      d="M78.645 153.724c0 1.143-.259 1.68-1.478 1.995-8.569 2.227-17.111 4.556-25.669 6.828-.667.177-1.383.63-2.05-.041v-42.941c9.134-1.658 18.27-3.296 27.397-4.999 1.301-.244 1.807-.127 1.8 1.403-.05 12.585-.05 25.17 0 37.755Z"
      fill="#1E87E4"
    />
    <path
      d="M166.125 119.333c-.053 10.443-.034 20.891-.038 31.335-.021.299-.06.597-.116.892l-9.956-4.125c-5.25-2.19-10.5-4.385-15.75-6.585a14.345 14.345 0 0 0-3.315-.922c-.814-.563-.848-1.437-.851-2.288-.06-11.595-.06-23.19 0-34.785a4.622 4.622 0 0 1 .776-2.767c.731-.484 1.125.243 1.549.521a8319.414 8319.414 0 0 1 26.426 16.766c.727.48 1.294.881 1.275 1.958Z"
      fill="#1565BF"
    />
    <path
      d="M49.459 119.565v42.941c-7.459-3.69-14.884-7.395-22.343-11.044-.892-.438-.993-1.046-.993-1.875 0-10.995.052-21.993-.034-33 0-1.653.634-1.575 1.8-1.338a4837.958 4837.958 0 0 0 21.57 4.316ZM48.75 113.389c-6.657-1.302-13.316-2.588-19.969-3.912-2.655-.525-2.647-.558-2.647-3.285 0-12.082.026-24.168-.03-36.25 0-1.61.352-1.73 1.796-1.238 7.162 2.433 14.366 4.75 21.559 7.125v35.302c-.008.791.27 1.744-.71 2.258Z"
      fill="#1565C0"
    />
    <path
      d="M81.555 58.875a2.446 2.446 0 0 1-.806 1.913 909.798 909.798 0 0 0-8.367 8.362 2.251 2.251 0 0 1-1.729.803c-6.73-.03-13.462 0-20.193-.03a4.124 4.124 0 0 1-1.024-.267l.023-17.17c6.926-1.5 13.698-3.586 20.56-5.34 3.402-.87 6.788-1.8 10.174-2.735.938-.258 1.392-.213 1.373.994-.067 4.47-.045 8.97-.011 13.47Z"
      fill="#1E87E4"
    />
    <path
      d="m49.459 52.466-.023 17.171c-7.47-2.46-14.94-4.922-22.41-7.387-.495-.161-.888-.345-.888-.964V41.441c1.976.971 3.7 1.815 5.418 2.674 4.823 2.41 9.643 4.825 14.46 7.245a9.306 9.306 0 0 0 3.443 1.106Z"
      fill="#1565C0"
    />
    <path
      d="M136.954 139.913c-3.454.596-6.829 1.691-10.204 2.587-.964.251-1.5.375-1.5-1.009.056-10.376.03-20.752.026-31.125 0-.622.06-1.155.623-1.597 3.679-2.873 7.327-5.775 10.987-8.666.025 13.265.048 26.535.068 39.81Z"
      fill="#1E87E4"
    />
    <path
      d="M166.125 111.289c-5.051-3.214-9.713-6.375-14.569-9.184-2.272-1.32-3.154-2.797-3-5.434.248-4.098.068-8.223.068-12.333.75-.17 1.125.31 1.552.577 4.875 3.038 9.75 6.113 14.659 9.124.922.566 1.331 1.166 1.316 2.299-.082 4.848-.026 9.705-.026 14.951Z"
      fill="#1565BF"
    />
  </svg>
);

export default SvgFloorPlan;