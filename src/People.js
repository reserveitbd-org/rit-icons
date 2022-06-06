import * as React from "react";

const SvgPeople = ({ title, titleId, ...props }) => (
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
      <style>
        {
          ".people_svg__cls-1{fill:#efbf86}.people_svg__cls-2{fill:#694b4b}.people_svg__cls-3{fill:#e6af78}.people_svg__cls-4{fill:#e5ae78}.people_svg__cls-5{fill:#5a4146}.people_svg__cls-6{fill:#d29b6e}.people_svg__cls-7{fill:#fff}.people_svg__cls-8{fill:#401b60}.people_svg__cls-9{fill:#ededed}.people_svg__cls-14{fill:#959cb5}"
        }
      </style>
    </defs>
    <g id="people_svg__Layer_2" data-name="Layer 2">
      <path
        className="people_svg__cls-1"
        d="M461.3 320.71a17.51 17.51 0 0 0-2.26 2.48 11.6 11.6 0 0 0-2.24 8.43c.14 1.87.18 3.74.16 5.63v.18l-.11 4.13v.29a2.62 2.62 0 0 1 0 .28v.59a.92.92 0 0 0 0 .16v1.19c-.05 1.38.32 2.24 1.41 2.7l.47.16h-2.39c0-3.18-48.45.9-49.43-.25a20.84 20.84 0 0 1-3.45-6.64 70.32 70.32 0 0 1-2.79-12.58 246.6 246.6 0 0 1-1.87-25.24c-.49-13.06-2.28-27.5-2.25-40.58 0-5.2 13.33-11.73 18.43-12.83 2.53-.54 5.67-1.28 8.16-1.6 11.08-1.42 21.68 1 32.37 3.94 4 1.1 10.84 4.09 14.86 5.15.2 3.47.61 6.52 3.21 8.84s2.76 8.38 3.35 11.91c.55 16.67-2.93 31.95-15.63 43.66Z"
      />
      <path
        className="people_svg__cls-2"
        d="m411.26 240.05-.72.1-.42-.19c.38.04.76.04 1.14.09Z"
      />
      <path
        className="people_svg__cls-3"
        d="M457 337.25c-.13.06-2.6-.83-2.74-.77-6.31 3-12.08 3.58-19.06 4.56-13.25 1.86-16.74-8.82-17.72-10a45.8 45.8 0 0 1-10.94-28.58c-.49-13.05-.14-26.14-.11-39.21 0-5.21 3.33-8.86 8.44-9.95 2.52-.55 5-.28 7.53-.59 11.08-1.42 21.87 0 32.56 2.95 4 1.1 7.57 3.36 11.59 4.41l6.12.34c0-.82 2.34-4.24 2.33-5.06.31-2.54-1-11.4-2.92-12.76-6.65-4.72-21-12.2-28.86-14.16-10-2.48-19.56 3.15-29.74 3.31-.24 0-8.68-2.7-6.14 4.71-3.92.56-11.62-2.79-15.53-2.19-2.68.42-4.85 1.32-7.48 2-3.23.76-5.32 8.83-5.35 12.24 0 3.14-1.33 5.13-1.26 8.26.1 4.08 2.45 5.31-.58 8.07-2.41 2.18.3 8.6-1 11.66-.07 4.08-.53 8.17.41 12.21.84 14.07 7.09 25.4 17.56 34.55 1.1 1 2 1.73 2 3.42-.08 5.85 0 11.71.07 17.57 0 1.17-1.54 7.59-2.86 8.06 4.46.49 5.53 8.19 9.14 10.3 6.11 3.56 14.91-1.37 20.85 2.48 2 1.31 5.47 1.54 7.24.45 8.87-5.5 16.6-13 25.51-18.4a6.34 6.34 0 0 1 .84-.13c.57-.08 1.24-.18 1.28-.2-1.2-.66-1.41-2-1.37-3.89v-1Z"
      />
      <path
        className="people_svg__cls-2"
        d="M481.77 253a52.45 52.45 0 0 1-3.32 16.82c-.81 2.38-1.69 4.76-1.6 7.34a20.31 20.31 0 0 0-6.13-8.34 12.07 12.07 0 0 1-4.2-8.67v-2.44c.32-2.55-1.07-4.16-3-5.51a64.16 64.16 0 0 0-21.95-9.69c-10-2.48-20.13-2.55-30.31-2.39-.37-1-23.52.27-24.35-.09-14.69-6.18-8.45-17.6 2-27.05 1.94-1.74 3.06-5 5.54-6.9-1.46-.1 13.29-6.11 12.42-6.17 1.64-.68 3.39-.5 5.09-.5q29.63-.08 59.27-.05a10.12 10.12 0 0 1 10.52 10.5q.09 21.5.02 43.14Z"
      />
      <path
        className="people_svg__cls-4"
        d="m411.26 240.05-.72.1-.42-.19c.38.04.76.04 1.14.09Z"
      />
      <path
        className="people_svg__cls-5"
        d="M410.54 240.15c-3.92.56-7.85 1.1-11.76 1.7-2.67.42-5.36.85-8 1.47-3.23.76-4.45 2.46-4.49 5.87 0 3.14-.07 6.28 0 9.42a12.74 12.74 0 0 1-4.29 10.26 22 22 0 0 0-5.88 7.6c-.39-5.52-3.41-10.38-4-15.83-1.32-12.11-2.68-24.35 2.09-36 5.42-13.2 15.14-21.68 29.52-24.24 1.07-.19 2-.8 3.19-.59l3.2.23c-2.48 1.91-5 2.76-6.93 4.5-10.5 9.45-8.78 27.84 5.92 34 .83.35 1.79.44 2.16 1.45Z"
      />
      <path
        className="people_svg__cls-6"
        d="M459 323.19a11.6 11.6 0 0 0-2.24 8.43c.14 1.87.18 3.74.16 5.63l-.82.38a73.24 73.24 0 0 1-20.47 6.25 61.68 61.68 0 0 1-32.29-3.78 57.8 57.8 0 0 1-5.85-2.79 2.19 2.19 0 0 1-1.36-2.13c.05-2.74 0-5.52 0-8.25 0-1.21.32-1.7 1.62-.94.89.52 1.83 1 2.8 1.53 2.14 1.13 4.4 2.22 6.41 3.32l.76.26 1.48.49 1.39.46 8.59 2.28.54.14c10.43.6 23.38-2.66 32.78-7.53 2.12-1.1 4.1-2.48 6.52-4Z"
      />
      <path
        className="people_svg__cls-7"
        d="M511.88 419.36a6.25 6.25 0 0 1-3.65 6.11l-31 .07v-.07h-40.9c-4.09.05-34.39 0-39.24 0h-52.75a6.37 6.37 0 0 1-3.61-6.19c.18-10.93-.59-21.89.46-32.81.29-3 3.46-8.13 5.11-10.59.51-.75.88-1.26 1-1.38 5.13-4.2 11.52-5.62 17.51-7.9 7.08-2.7 14.23-5.23 21.35-7.82l.14-.15 1.11-1.93c1.06-2.34 2-4.72 3.2-7 .84-1.64 2.06-2.94 4.19-2.71v-.15c4.45.5 7.62 3.6 11.23 5.71 6.12 3.56 12.1 7.35 18 11.2 2 1.31 3.46.71 5.24-.38 8.87-5.5 17.81-10.89 26.73-16.32l.19-.12 2.39-.05c2.13.32 3.23 1.85 4.09 3.61 1.3 2.69 2.43 5.58 3.71 8.29l27.27 9.78c2.15 1 4.45 1.77 6.6 2.78a14.37 14.37 0 0 1 5.71 4.31h.28a2.3 2.3 0 0 1 0 .26 15.74 15.74 0 0 1 5.08 10.49c1.18 10.97.39 21.98.56 32.96Z"
      />
      <path
        className="people_svg__cls-8"
        d="M419.41 392.16c.31-3.67 1.16-7.31.72-11a3 3 0 0 1-2.44-2.51 8.94 8.94 0 0 1 0-4c1-4.11 5-6.44 7.7-9.56.75-.87 1.39-.45 2 .21 2.2 2.27 4.52 4.44 6.62 6.8a3.69 3.69 0 0 1 .9 2.31c.09 1.39-.3 2.88 0 4.24a3.05 3.05 0 0 1-2.44 2.52c-.22 6 .89 11.84 1.35 17.76.67 8.88 1.87 17.72 2.32 26.63h-19.7c.66-11.2 2.03-22.28 2.97-33.4Z"
      />
      <path
        className="people_svg__cls-9"
        d="M466.56 358.52c-1.36.26-1.87 1.47-2.6 2.39-4.48 5.62-8.64 11.47-13 17.13-3.46 4.42-5.66 4.5-9.64.6-1.3-1.27-2.51-2.64-3.92-3.8-1.07-.88-1.89-.92-2.28.15a3.57 3.57 0 0 0-.9-2.27c-2.1-2.32-4.42-4.45-6.62-6.68-.64-.65-1.28-1.06-2-.21-2.69 3.06-7 5.23-7.95 9.27-.21-.76-.28-1-.78-.93-2 2.12-3.78 4.11-5.67 6-2.93 2.9-5.65 3-8.27-.09-3.82-4.54-7.32-9.35-10.93-14.07-1.89-2.47-3.73-5-5.59-7.49l1.11-1.93c1.05-2.33 2-4.72 3.19-7 .84-1.63 2.07-2.94 4.19-2.71v-.14c4.45.5 7.61 3.59 11.23 5.71 6.11 3.56 12.1 7.34 18 11.19 2 1.32 3.46.72 5.23-.38 8.88-5.49 17.82-10.89 26.73-16.32l.2-.12 2.39-.05c2.14.33 3.24 1.86 4.09 3.62 1.23 2.69 2.51 5.41 3.79 8.13Z"
      />
      <path
        d="M112.8 296.27c-3.33 10.15-12.36 13.28-20.57 19.34-.3.11-.41 3-.7 3.11-1.1.44-2.06-1.15-2.36 0-2.71 10.71-32.16 5.21-41.45 2.82C46.41 320.09 26 303.22 24.56 302c-5.39-4.5-3.18-29.12-4.27-35.83-.61-3.85 12.13-18.21 11.8-22.12-.39-4.58 9.67-3.35 14.18-5.75 1.91-1 17.19-.38 18.56-2.18 6.54-8.64 7.72-.3 17.53 4.37.4.2 12.48 7 12.89 7.21 13.55 5.74 12.33 17.78 23.16 27.53.22.17-.78 23.55-5.61 21.04Z"
        style={{
          fill: "#f0c087",
        }}
      />
      <path
        className="people_svg__cls-5"
        d="M45.87 330.2c-.07.27-.14.54-.22.82l-.83-.28a2.85 2.85 0 0 1 1.05-.54ZM45.67 314.7a13.42 13.42 0 0 1-1.13-1.25l1 .61c0 .11.09.24.13.38Z"
      />
      <path
        className="people_svg__cls-5"
        d="M67.64 245.2c-.5 0-11.2.53-11.65.59a6.77 6.77 0 0 0-5.18 3.88c-5.35 10.38-13.75 17.45-23.79 23a7.78 7.78 0 0 0-4.11 8.85c2.62 13.72 9.33 24.76 21.63 32 .1 5.76 2.15 11.4 2.25 17.16-.93 2.36-1.45 7.07-3.82 8.58-11.23-2-24.06-7.3-34.49-11.93-6.17-2.73-7.72-5.53-5.65-11.79 7-21 10.38-42.65 12.71-64.56 2.31-21.7 18.45-40.8 39.17-46.68a25 25 0 0 1 3.59-.47c7.59 3.73 1.76 10.05-.42 14.82-5 10.91 1.34 12.32 11.07 19.34.48.27-1.7 6.76-1.31 7.21Z"
      />
      <path
        className="people_svg__cls-4"
        d="M45.87 330.2c-.07.27-.14.54-.22.82l-.83-.28a2.85 2.85 0 0 1 1.05-.54Z"
      />
      <path
        className="people_svg__cls-1"
        d="M59.27 318.85a6 6 0 0 1-1.05.27l-.4-.4c.48.07.96.1 1.45.13Z"
      />
      <path
        className="people_svg__cls-4"
        d="M59.27 318.85a6 6 0 0 1-1.05.27l-.4-.4c.48.07.96.1 1.45.13Z"
      />
      <path
        className="people_svg__cls-1"
        d="M285.65 268.39a26 26 0 0 0-3.39 3.72c-2.76 3.69-3.75 7.56-3.36 12.65.22 2.79.27 5.6.24 8.43v.27l-.17 6.19v1.75a1.77 1.77 0 0 0 0 .23c0 .59-.05 1.19-.07 1.78-.06 2.08.5 3.36 2.13 4a5.72 5.72 0 0 0 .7.24c-.88 0-1.75 0-2.62.06h-.95c0-4.76-72.63 1.35-74.1-.38a31.09 31.09 0 0 1-5.17-10 105.13 105.13 0 0 1-4.19-18.85c-2-14.08-2.47-29.26-2.8-37.85-.74-19.57-3.42-41.22-3.37-60.82 0-7.8 20-17.59 27.63-19.23 3.78-.82 8.49-1.93 12.23-2.4 16.61-2.13 32.49 1.49 48.52 5.9 6 1.65 16.25 6.13 22.28 7.72.3 5.21.91 9.77 4.81 13.25s4.13 12.57 5 17.86c.9 25.03-4.37 47.95-23.35 65.48Z"
      />
      <path
        className="people_svg__cls-2"
        d="m210.64 147.48-1.08.16-.63-.29c.57.03 1.14.08 1.71.13Z"
      />
      <path
        className="people_svg__cls-3"
        d="M279.14 293.19c-.19.09-3.89-1.25-4.1-1.15-9.46 4.45-18.12 5.36-28.57 6.83-19.87 2.78-25.1-13.22-26.57-14.94a68.8 68.8 0 0 1-16.4-42.84c-.74-19.57-.21-39.19-.16-58.79 0-7.8 5-13.28 12.65-14.92 3.78-.81 7.55-.41 11.29-.88 16.61-2.13 32.78 0 48.81 4.42 6 1.65 11.35 5 17.38 6.62l9.16.5c0-1.22 3.51-6.34 3.5-7.57.47-3.82-1.51-17.1-4.37-19.13-10-7.08-31.45-18.3-43.27-21.23-15-3.71-29.33 4.72-44.58 5-.36.05-13-4-9.22 7.06-5.87.84-17.41-4.18-23.27-3.28-4 .63-7.26 2-11.22 2.92-4.83 1.14-8 13.24-8 18.35-.05 4.7-2 7.69-1.89 12.39.14 6.11 3.68 8-.88 12.09-3.61 3.27.47 12.89-1.46 17.48-.1 6.11-.79 12.24.62 18.31 1.26 21.08 10.62 38.06 26.32 51.79 1.66 1.44 3 2.59 3 5.11-.11 8.79 0 17.57.11 26.35 0 1.76-2.31 11.38-4.28 12.07 6.68.75 8.28 12.28 13.7 15.45 9.16 5.34 22.35-2.06 31.25 3.71 3 2 8.19 2.32 10.85.68 13.3-8.24 24.89-19.44 38.25-27.58a12.51 12.51 0 0 1 1.25-.2c.86-.12 1.87-.27 1.93-.3-1.81-1-2.12-3-2.06-5.83 0-.49 0-1 .06-1.54Z"
      />
      <path
        className="people_svg__cls-2"
        d="M316.34 166.81c0 8.7-2.17 17-5 25.23-1.22 3.56-2.53 7.13-2.39 11-1.79-5.1-5.25-9-9.2-12.51a18.13 18.13 0 0 1-6.3-13v-3.66c.47-3.82-1.61-6.23-4.47-8.25-10-7.08-21.09-11.6-32.91-14.53-14.95-3.72-30.18-3.82-45.43-3.59-.56-1.51-35.25.41-36.5-.13-22-9.27-12.68-26.39 3.06-40.55 2.9-2.61 4.57-7.48 8.3-10.34-2.18-.16 19.93-9.16 18.62-9.26 2.46-1 5.09-.75 7.63-.75q44.42-.11 88.84-.07c9.22 0 15.75 6.55 15.77 15.74q.08 32.32-.02 64.67Z"
      />
      <path
        d="M114.94 348.94c-.15.19-.69.94-1.45 2.07a2 2 0 0 1 1.39-2Z"
        style={{
          fill: "#ff507d",
        }}
      />
      <path
        className="people_svg__cls-7"
        d="M114.88 349c-.34.55 7.52 2 9.49 6.61-.26.71.17 5.56.23 6.32a141.69 141.69 0 0 1 .92 19c0 8.8.11 19-.06 27.81-.14 7 .33 9.18-3.82 16.77H30.06c-6.66 0-13.31-.19-20 .14A11 11 0 0 1 0 421v-50.4a13.56 13.56 0 0 1 1.5-6.32 31.36 31.36 0 0 1 3-4.38c4-4.73 8.48-7.55 13.68-10 3.94-1.84 11.07-4.9 14.94-7.13 9.2 14.11 17.76 16.41 34.23 16 15.35-.4 17.84-7.56 37.71-14.48 3.15 1.46 6.72 3.19 9.82 4.71Z"
      />
      <path
        className="people_svg__cls-2"
        d="M91 331.62a6.39 6.39 0 0 0-1-.29v-.05c-.09-.35-.18-.7-.24-1.06a2.68 2.68 0 0 1 1.24 1.4ZM89.36 314.64l.88-.36a10.42 10.42 0 0 1-1.07 1 4.5 4.5 0 0 1 .19-.64Z"
      />
      <path
        className="people_svg__cls-2"
        d="M130.06 326.9c-11.09 4.79-25.55 10.79-37.6 12.45-3.11-.6-7.34-4.58-8.41-6.86-1-5.74 4.61-11 4.32-16.74 8.21-6.06 17.68-14.1 21-24.25 1.62-2.61 2-5.6 2.88-8.45 2-6.38-.61-10.48-5.61-13.85-3.9-2.62-7.66-5.45-11.65-7.93a117.46 117.46 0 0 0-37.58-15.51 8.49 8.49 0 0 0-1.2-1.33c-9.73-7-12.5-18.68-7.52-29.59 2.18-4.77 6.55-7.27 9.6-11.08 20.25-5.29 44 5.19 55 23.56 6.14 10.32 8.64 21.43 9.77 33.09a253.35 253.35 0 0 0 10.49 51.77 47.09 47.09 0 0 1 1.4 4.76c.98 4.92-.39 8.06-4.89 9.96Z"
      />
      <path
        className="people_svg__cls-4"
        d="m210.64 147.48-1.08.16-.63-.29c.57.03 1.14.08 1.71.13Z"
      />
      <path
        className="people_svg__cls-5"
        d="M209.56 147.64c-5.87.84-11.76 1.64-17.62 2.55-4 .63-8.05 1.26-12 2.2-4.84 1.14-6.68 3.69-6.73 8.8-.05 4.7-.1 9.41 0 14.11a19.09 19.09 0 0 1-6.43 15.38c-3.61 3.28-6.89 6.82-8.82 11.4-.59-8.27-5.11-15.56-6-23.74-2-18.14-4-36.49 3.14-53.92 8.12-19.78 22.69-32.5 44.25-36.33 1.59-.28 3.07-1.19 4.78-.89l4.8.36c-3.73 2.86-7.49 4.13-10.39 6.74-15.74 14.16-13.16 41.74 8.87 51 1.24.53 2.68.66 3.24 2.17Z"
      />
      <path
        d="M115 348.9Z"
        style={{
          fill: "#d23c69",
        }}
      />
      <path
        className="people_svg__cls-6"
        d="M282.26 272.11c-2.76 3.69-3.75 7.56-3.36 12.65.22 2.79.27 5.6.24 8.43l-1.22.58a110.24 110.24 0 0 1-30.69 9.36c-16.65 2.33-33.09.63-48.4-5.67a87.71 87.71 0 0 1-8.77-4.18 3.28 3.28 0 0 1-2-3.19c.08-4.1 0-8.27 0-12.36 0-1.82.48-2.56 2.44-1.42 1.33.78 2.74 1.54 4.19 2.3 3.21 1.68 6.6 3.33 9.61 5l1.14.38 2.21.74c.69.22 1.39.45 2.07.69l12.89 3.42.81.22c15.63.89 35-4 49.14-11.29 3.18-1.66 6.14-3.73 9.77-6Z"
      />
      <path
        className="people_svg__cls-1"
        d="m89.36 314.64.88-.36a10.42 10.42 0 0 1-1.07 1 4.5 4.5 0 0 1 .19-.64Z"
      />
      <path
        className="people_svg__cls-3"
        d="M110.88 282.12c-.9 2.85-1.27 5.84-2.88 8.44l-.64-.57c-10.84-9.75-22.42-18.37-36-24.12-.42-.17-.81-.42-1.21-.62-9.81-4.67-9.77-4.64-16.31 4-1.36 1.79-2.85 3.8-4.76 4.81-4.51 2.4-5.35 6-5 10.62.32 3.91-.19 7.92.42 11.77a27.18 27.18 0 0 0 9.35 17.14 55.18 55.18 0 0 1 4.61 5.13c-.49 0-1.82-.18-2.3-.25-4.47-.53-8.3-3-12.11-5.35-.33-.19-.65-.4-1-.61-12.3-7.21-19-18.25-21.63-32a7.8 7.8 0 0 1 4.11-8.85c10-5.49 18.45-12.56 23.8-22.94a6.74 6.74 0 0 1 5.17-3.88h1.44a117.31 117.31 0 0 1 37.57 15.51c4 2.47 7.75 5.31 11.65 7.93 5.11 3.35 7.72 7.46 5.72 13.84Z"
      />
      <path
        d="M395.55 360.75a1.1 1.1 0 0 1 .25.15h-.33a.53.53 0 0 1 .08-.15Z"
        style={{
          fill: "#d4dbec",
        }}
      />
      <path
        className="people_svg__cls-14"
        d="m384 351.76-.19-.08ZM387 360.56a1.51 1.51 0 0 0 .11.22h-.47c.1-.08.23-.15.36-.22ZM395.8 360.9h-.33a.53.53 0 0 1 .08-.15 1.1 1.1 0 0 1 .25.15Z"
      />
      <path
        className="people_svg__cls-7"
        d="M361.48 416.28a9.36 9.36 0 0 1-5.48 9.16l-46.45.1v-.1h-61.33c-6.13.08-51.55 0-58.82 0a.62.62 0 0 1-.19 0h-78.9a9.52 9.52 0 0 1-5.39-9.28c.26-16.39-.9-32.81.67-49.17.44-4.57 5.2-12.2 7.67-15.89.77-1.13 1.31-1.88 1.46-2.07 7.69-6.29 17.27-8.43 26.25-11.84 10.62-4.05 21.33-7.84 32-11.73l.21-.23c.55-1 1.11-1.92 1.66-2.89 1.59-3.5 3-7.07 4.79-10.49 1.26-2.45 3.1-4.41 6.28-4.06v-.22c6.68.75 11.42 5.39 16.84 8.56 9.17 5.34 18.14 11 27 16.78 3 2 5.19 1.07 7.85-.57 13.31-8.24 26.71-16.32 40.07-24.46l.3-.18 3.58-.08c3.19.49 4.84 2.78 6.12 5.42 2 4 3.65 8.36 5.57 12.42l40.89 14.66c3.21 1.54 6.65 2.67 9.88 4.17a21.58 21.58 0 0 1 8.57 6.47l.46.42a23.67 23.67 0 0 1 7.62 15.74c1.74 16.4.55 32.9.82 49.36Z"
      />
      <path
        className="people_svg__cls-8"
        d="M222.86 375.5c.46-5.49 1.74-11 1.08-16.54-2.09-.39-3.15-1.8-3.66-3.77a13.67 13.67 0 0 1 0-6c1.49-6.16 7.51-9.66 11.54-14.33 1.14-1.3 2.09-.67 3 .32 3.31 3.4 6.78 6.66 9.93 10.2a5.48 5.48 0 0 1 1.34 3.45c.14 2.08-.44 4.32 0 6.36-.51 2-1.57 3.38-3.65 3.78-.34 8.95 1.33 17.74 2 26.62 1 13.31 2.81 26.57 3.49 39.92h-29.5c.96-16.72 3.02-33.33 4.43-50.01Z"
      />
      <path
        className="people_svg__cls-9"
        d="M293.53 325.08c-2 .38-2.79 2.2-3.9 3.58-6.7 8.42-12.94 17.19-19.55 25.67-5.19 6.64-8.49 6.76-14.46.91-2-1.91-3.76-4-5.87-5.7-1.6-1.32-2.83-1.38-3.42.22a5.34 5.34 0 0 0-1.35-3.39c-3.15-3.49-6.62-6.68-9.92-10-1-1-1.92-1.59-3.05-.31-4 4.59-10.42 7.85-11.91 13.91-.31-1.15-.42-1.49-1.17-1.4v.05c-3 3.17-5.65 6.16-8.49 9-4.39 4.34-8.47 4.53-12.41-.14-5.72-6.81-11-14-16.37-21.08-2.84-3.71-5.59-7.49-8.39-11.23.55-1 1.11-1.93 1.67-2.9 1.58-3.5 3-7.07 4.78-10.49 1.26-2.45 3.1-4.4 6.29-4.06v-.22c6.68.75 11.41 5.39 16.83 8.56 9.17 5.34 18.15 11 27.05 16.79 3 2 5.19 1.07 7.84-.57 13.31-8.25 26.71-16.33 40.08-24.47l.29-.18 3.58-.08c3.2.49 4.85 2.79 6.13 5.42 1.91 3.95 3.8 8.03 5.72 12.11Z"
      />
      <path
        className="people_svg__cls-3"
        d="M105.57 344.51c-8.66 13.06-21.1 20.13-36.45 20.52-16.47.44-29.85-6.52-39.06-20.63 3.71-2.29 8.28-3.27 10.93-7.19 2.37-1.5 3.53-5.61 4.46-8l.83.28c11.6 3.79 22.07 4.15 34.22 1.4 2.94-.66 4.89-2.62 8.08-2 .34.07 1.68 0 2 .11.14 2.59.14 7.1 9.8 12.71 1.71 1 3.47 1.89 5.19 2.8Z"
      />
      <path
        className="people_svg__cls-6"
        d="M90 331.33c-3.2-.62-5.89 1.51-8.83 2.17-12.17 2.76-23.92 1.31-35.52-2.5l-.83-.28c-.1-5.76-.18-11.53-.28-17.3.52.31.63.39 1 .61a30.5 30.5 0 0 0 12.3 4.66c.48.07 1 .11 1.46.14 9.29 2.39 18.12.5 26.78-2.89 1.11-.43 2.21-.88 3.31-1.33l.87-.35c.3 5.78-.3 11.59.74 17.34Z"
      />
    </g>
  </svg>
);

export default SvgPeople;