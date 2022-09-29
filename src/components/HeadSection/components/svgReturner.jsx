import React from "react";

const SvgReturner = () => {
  return (
    <svg style={{ display: "none" }}>
      <symbol
        id="active"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7.707 10.293l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addCircleFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addCircleOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-9-1V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addItem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.96 6.358A5 5 0 006 7H4l-.117.007A1 1 0 003 8v11l.005.176A3 3 0 006 22h10l.176-.005A3 3 0 0019 19h-2l-.007.117A1 1 0 0116 20H6l-.117-.007A1 1 0 015 19V9h1v2h2V9h4.803a6 6 0 103.156-2.642zM14 12a4 4 0 118 0 4 4 0 01-8 0zm5-3v2h2v2h-2v2h-2v-2h-2v-2h2V9h2zM8.005 6.824A3 3 0 0114 7H8l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addRectangleFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M0 7a5 5 0 015-5h14a5 5 0 015 5v10a5 5 0 01-5 5H5a5 5 0 01-5-5V7zm11 0h2v4h4v2h-4v4h-2v-4H7v-2h4V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addSimple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addToCart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M3.5 2.5h2V5H8v2H5.5v2.5h-2V7H1V5h2.5V2.5zM10 7h9v8H5.905l-.35-3.5h-2.01l.46 4.6A1 1 0 005 17h15a1 1 0 001-1V5h2V3h-3a1 1 0 00-1 1v1h-9v2zM6 22a2 2 0 110-4 2 2 0 010 4zM17 20a2 2 0 104 0 2 2 0 00-4 0z"></path>
        </g>
      </symbol>
      ,
      <symbol id="ads" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M20.198 1.408l2.779 15.757-4.803.847-2.737-.302a4 4 0 01-7.972-.207l-.006-.205-.005-.442-4.694.827-1.737-9.848 4.782-.843 9.591-4.737 4.802-.847zM9.456 17.05l.003.238a2 2 0 003.99.203l-3.993-.441zm7.15-12.979l1.97-.346 2.084 11.818-1.97.347L16.606 4.07zm-1.898.753L7.236 8.516l1.129 6.402 8.284.913-1.94-11.007zM3.34 9.458l1.97-.348 1.042 5.91-1.97.346L3.34 9.458z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="amazing"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="apple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M16.124 2c.128 1.172-.343 2.347-1.04 3.194-.7.845-1.845 1.503-2.968 1.415-.152-1.149.415-2.345 1.062-3.094C13.9 2.67 15.118 2.04 16.124 2zm3.623 6.828c-.205.126-2.17 1.343-2.145 3.799.025 2.96 2.54 3.987 2.678 4.043a.111.111 0 01.005.002c0 .004-.003.011-.006.022-.06.19-.464 1.486-1.379 2.823-.834 1.218-1.697 2.431-3.06 2.457-.655.012-1.093-.177-1.548-.374-.476-.207-.971-.42-1.754-.42-.82 0-1.339.22-1.838.433-.433.184-.85.362-1.439.386-1.315.049-2.316-1.316-3.156-2.531-1.72-2.482-3.031-7.016-1.268-10.077.874-1.52 2.44-2.482 4.137-2.507.733-.014 1.442.268 2.062.514.474.188.897.356 1.238.356.307 0 .719-.162 1.198-.351.755-.298 1.68-.662 2.632-.566.652.027 2.482.263 3.657 1.982l-.014.009z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="arrowLeft"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="arrowRight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="askQuestion"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9.998 20.8l1.17 1.755a1 1 0 001.664 0l1.17-1.756A10.004 10.004 0 0022 11c0-5.523-4.477-10-10-10S2 5.477 2 11c0 4.79 3.389 8.863 7.998 9.8zm3.253-1.897a1 1 0 00-.677.433l-.574.861-.574-.86a1 1 0 00-.677-.434A8.002 8.002 0 014 11a8 8 0 1116 0 8.002 8.002 0 01-6.749 7.903zM10 9H8V8a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V14h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 8.93V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm3 6h-2v2h2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="attachFile"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15A3.993 3.993 0 018.5 17.5V5.14c0-1.31.94-2.5 2.24-2.63A2.5 2.5 0 0113.5 5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63A2.5 2.5 0 0015 15.5V5.17c0-2.09-1.53-3.95-3.61-4.15A3.998 3.998 0 007 5v12.27c0 2.87 2.1 5.44 4.96 5.71 3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75z"></path>
      </symbol>
      ,
      <symbol
        id="autoDetectOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 3.06c4.17.46 7.48 3.77 7.94 7.94H23v2h-2.06A8.994 8.994 0 0113 20.94V23h-2v-2.06A8.994 8.994 0 013.06 13H1v-2h2.06A8.994 8.994 0 0111 3.06V1h2v2.06zM5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7zm8 3v2h-2v-2h2zm-4-5h2V9h2v1.406l-.958.523A2 2 0 0011 12.684V14h2v-1.316l.958-.522A2 2 0 0015 10.406V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="autoDetectOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.94 11A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 4c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="barcodeScanner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 10V8a2 2 0 012-2h2V4H5a4 4 0 00-4 4v2h2zm4-2v8H5V8h2zm4 0v8H8V8h3zm5 8V8h-2v8h2zm3-8v8h-2V8h2zm-6 8V8h-1v8h1zM3 14v2a2 2 0 002 2h2v2H5a4 4 0 01-4-4v-2h2zm18 2v-2h2v2a4 4 0 01-4 4h-2v-2h2a2 2 0 002-2zm0-8v2h2V8a4 4 0 00-4-4h-2v2h2a2 2 0 012 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="beauty"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.05 3.25c3.277 0 5.95 2.568 5.95 5.757a5.622 5.622 0 01-1.32 3.616c-.63.755-3.262 3.505-7.964 8.325a1 1 0 01-1.434-.002c-4.639-4.784-7.247-7.506-7.87-8.215A5.627 5.627 0 012 9.007C2 5.818 4.673 3.25 7.95 3.25c1.53 0 2.967.564 4.05 1.539a6.048 6.048 0 014.05-1.539zm3.095 8.091c.552-.66.855-1.475.855-2.334 0-2.066-1.76-3.757-3.95-3.757-1.312 0-2.51.611-3.243 1.612a1 1 0 01-1.614 0C10.46 5.861 9.261 5.25 7.95 5.25 5.76 5.25 4 6.941 4 9.007c0 .891.326 1.733.916 2.405.557.635 2.932 3.117 7.086 7.403 4.194-4.304 6.594-6.817 7.143-7.474zm-10.352.452a1 1 0 011.414 0L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="beautyFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 4.79a6.042 6.042 0 00-4.05-1.54C4.702 3.25 2 5.79 2 9.007c0 1.424.535 2.725 1.413 3.724.474.54 2.456 2.61 4.29 4.512a1758.77 1758.77 0 003.28 3.394l.299.309a1 1 0 001.434.002l.303-.311a1178.172 1178.172 0 003.316-3.419c1.846-1.912 3.861-4.016 4.345-4.595A5.624 5.624 0 0022 9.007c0-3.217-2.702-5.757-5.95-5.757A6.042 6.042 0 0012 4.79zm6.207 6.417a1 1 0 00-1.414-1.414L12 14.586l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="bookStationary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22.47 5.2c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2-.33.16-.53.51-.53.88v12.08c0 .58.47.99 1 .99.16 0 .32-.04.48-.12C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.81.4 4.02 1.04.16.08.32.12.48.12.52 0 1-.41 1-.99V6.08c0-.37-.2-.72-.53-.88zM10 16.62C8.86 16.21 7.69 16 6.5 16s-2.36.21-3.5.62V6.71C4.11 6.24 5.28 6 6.5 6c1.2 0 2.39.25 3.5.72v9.9zM19 .5l-5 5V15l5-4.5V.5z"></path>
      </symbol>
      ,
      <symbol
        id="bookStationaryFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.793 1.293a1 1 0 011.414 0L12.5 6.586l1.836-1.836 5.414 5.414L17.914 12l5.293 5.293a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414 0L12 17.914l-3.293 3.293a1 1 0 01-.444.258l-5.5 1.5a1 1 0 01-1.228-1.228l1.5-5.5a1 1 0 01.258-.444l2.5-2.5.003-.004.79-.789-5.293-5.293a1 1 0 010-1.414l4.5-4.5zM8 11.086L6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086zm8.414 8.414L18 21.086 21.086 18 16.5 13.414 13.414 16.5 15 18.086l1.293-1.293a1 1 0 011.414 1.414L16.414 19.5zM4.86 17.152l-.934 3.423 3.423-.934-2.49-2.49z"
          clipRule="evenodd"
        ></path>
        <path d="M21.164 8.75l.629-.629a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0l-.629.629 5.414 5.414z"></path>
      </symbol>
      ,
      <symbol id="bug" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M17 7c0-1.48-.804-2.773-2-3.465V1h-2v2h-2V1H9v2.535A3.998 3.998 0 007 7v.416A5.018 5.018 0 004.416 10H3V8H1v3a1 1 0 001 1h2v1H1v2h3c0 1.06.207 2.074.582 3H2a1 1 0 00-1 1v3h2v-2h2.755A7.985 7.985 0 0012 23a7.985 7.985 0 006.245-3H21v2h2v-3a1 1 0 00-1-1h-2.581c.375-.926.581-1.94.581-3h3v-2h-3v-1h2a1 1 0 001-1V8h-2v2h-1.416A5.019 5.019 0 0017 7.416V7zm-4 13.917V9h2a3 3 0 013 3v3a6.002 6.002 0 01-5 5.917zM11 9H9a3 3 0 00-3 3v3a6.002 6.002 0 005 5.917V9zm2-4a2 2 0 012 2H9a2 2 0 012-2h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="buyNow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 1a5 5 0 014.995 4.783L17 6h2a1 1 0 01.993.883L20 7v4h-2V8h-1v2h-2V8H9v2H7V8H6v11a1 1 0 00.883.993L7 20h10a1 1 0 00.993-.883L18 19v-2h2v2a3 3 0 01-2.824 2.995L17 22H7a3 3 0 01-2.995-2.824L4 19V7a1 1 0 01.883-.993L5 6h2a5 5 0 015-5zm1.293 8.293l1.414 1.414L12.414 13H22v2h-9.586l2.293 2.293-1.414 1.414-4-4a1 1 0 01-.083-1.32l.083-.094 4-4zm-4.288-3.47A3 3 0 0115 6H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="calendarEndDate"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 1v2h8V1h2v2h1a3 3 0 012.995 2.824L22 6v14a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20V6a3 3 0 012.824-2.995L5 3h1V1h2zm12 9H4v10a1 1 0 00.883.993L5 21h14a1 1 0 00.993-.883L20 20V10zm-2 6h-3v3h3v-3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="calendarStartDate"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 1v2h8V1h2v2h1a3 3 0 012.995 2.824L22 6v14a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20V6a3 3 0 012.824-2.995L5 3h1V1h2zm12 9H4v10a1 1 0 00.883.993L5 21h14a1 1 0 00.993-.883L20 20V10zM9 12H6v3h3v-3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cameraFlashOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.499 2l.117.007a1 1 0 01.878 1.086l-.017.117L15.236 9h3.263l.112.006a1 1 0 01.775 1.456l-.061.101-2.378 3.56-1.33-1.672.99-1.451h-2.608l-.118-.007a1 1 0 01-.878-1.086l.018-.117L14.26 4h-3.964l-.279 1.105-1.575-2.029.08-.298.033-.11a1 1 0 01.816-.66L9.5 2h6zM18.8 19.4l-12-16-1.6 1.2 2.233 2.976-1.41 6.202-.019.117a1 1 0 00.876 1.098L7 15h3.847l-.837 5.859-.01.114c-.038.936 1.157 1.398 1.76.679l.066-.089 2.903-4.258L17.2 20.6l1.6-1.2zm-6.203-2.52l.29-2.03.573.764-.863 1.266zM9.006 9.675l2.493 3.324L8.251 13l.755-3.325z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cameraFlashOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.476 3.21L14.236 9h3.263a1 1 0 01.826 1.563l-7.5 11c-.597.875-1.966.344-1.816-.704L9.846 15H5.999a1 1 0 01-.975-1.222l2.5-11A1 1 0 018.499 2h6a1 1 0 01.977 1.21zM13.262 4H9.297l-2.046 9H11a1 1 0 01.99 1.141l-.392 2.74L15.607 11h-2.608a1 1 0 01-.978-1.21L13.26 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="camera"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6.553 4.658L5.882 6H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3h-.883l-.67-1.341A3 3 0 0014.764 3H9.236a3 3 0 00-2.683 1.658zM9.236 5h5.528a1 1 0 01.894.553l.946 1.894A1 1 0 0017.5 8H19a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h1.5a1 1 0 00.894-.553l.948-1.894A1 1 0 019.236 5zM12 7a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-3.5 5.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cancelPolygon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 2.34a1 1 0 01.866.5l5 8.66a1 1 0 010 1l-5 8.66a1 1 0 01-.866.5H7a1 1 0 01-.866-.5l-5-8.66a1 1 0 010-1l5-8.66A1 1 0 017 2.34h10zm-.577 2H7.577L3.155 12l4.422 7.66h8.846L20.845 12l-4.422-7.66zm-.18 4.832L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cancel"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 2.34a1 1 0 01.866.5l5 8.66a1 1 0 010 1l-5 8.66a1 1 0 01-.866.5H7a1 1 0 01-.866-.5l-5-8.66a1 1 0 010-1l5-8.66A1 1 0 017 2.34h10zm-.577 2H7.577L3.155 12l4.422 7.66h8.846L20.845 12l-4.422-7.66zm-.18 4.832L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cardCredit"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 3h16a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3zm0 2a1 1 0 00-1 1v1h18V6a1 1 0 00-1-1H4zm-1 6V9h18v2H3zm18 2H3v5a1 1 0 001 1h16a1 1 0 001-1v-5zm-2 4h-7v-2h7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cardGift"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M23 6a3 3 0 00-3-3H4a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6zM4 5h6v3.17a3 3 0 00-2.176 5.59L6.086 15.5 7.5 16.914l2.5-2.5V19H4a1 1 0 01-1-1v-4h2v-2H3V6a1 1 0 011-1zm8 9.414V19h8a1 1 0 001-1v-4h-4v-2h4V6a1 1 0 00-1-1h-8v3.17a3 3 0 012.176 5.59l1.738 1.74-1.414 1.414-2.5-2.5zM12 11a1 1 0 102 0 1 1 0 00-2 0zm-2 0a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cartOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cartOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4h-2v11a1 1 0 01-1 1H4a1 1 0 01-.995-.9l-1-10A1 1 0 013 4h15V3a1 1 0 011-1h3v2zm-6 15a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="cashback"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14 6a1 1 0 00-1-1H1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6zM2 7h10v2h-2v2h2v2H2v-2h2V9H2V7zm5 1a2 2 0 110 4 2 2 0 010-4zm8.293 2.707l4 4 1.414-1.414L18.414 11H20a2 2 0 012 2v2a2 2 0 01-2 2H8v2h12a4 4 0 004-4v-2l-.005-.2A4 4 0 0020 9h-1.586l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="categoryFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm11 11a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-7zm8-6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM6.5 22a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="categoryOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="categorySearch"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h9a2 2 0 002-2v-1.341a5.982 5.982 0 001.477-.768l2.816 2.816 1.414-1.414-2.816-2.816A6.002 6.002 0 0018 6.341V5zm2 7c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465zm-4 4V8a4 4 0 000 8zm0-11v1a6 6 0 000 12v1H7V5h9zM3 5a1 1 0 00-1 1v12a1 1 0 001 1h1V5H3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="changeDecrease"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5 0l5 5 5-5h-3V8h-4v4H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="changeIncrease"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm5 0l5-5 5 5h-3v4h-4v-4H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="chat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M8.586 19l2.707 2.707a1 1 0 001.414 0L15.414 19H19a4 4 0 004-4V7a4 4 0 00-4-4H5a4 4 0 00-4 4v8a4 4 0 004 4h3.586zm5.707-1.707L12 19.586l-2.293-2.293A1 1 0 009 17H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4a1 1 0 00-.707.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="chevronDown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"></path>
      </symbol>
      ,
      <symbol
        id="chevronLeft"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
      </symbol>
      ,
      <symbol
        id="chevronRight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.583 12L8.29 16.293l1.414 1.414 5-5a1 1 0 000-1.414l-5-5L8.29 7.707 12.583 12z"></path>
      </symbol>
      ,
      <symbol
        id="chevronUp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
      </symbol>
      ,
      <symbol id="clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M5.636 5.636a9 9 0 1012.728 12.728A9 9 0 005.636 5.636zm10.607 3.536L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="clearance"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="clubCoinOutline"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.3832 6.28971C11.3832 6.99999 10.8131 7.57009 10.1028 7.57009C9.39254 7.57009 8.8131 6.99999 8.82244 6.28971C8.82244 5.58878 9.39254 5.00934 10.1028 5.00934C10.8131 5.00934 11.3832 5.57943 11.3832 6.28971Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0935 7.55139L14.9533 8.41121C15.0841 8.54205 15.0935 8.74766 14.9626 8.89719C14.3365 9.57943 13.5701 10.1308 12.7009 10.5047V14.0093C12.7009 14.5047 12.2991 14.9065 11.8038 14.9065H8.39254C7.89721 14.9065 7.49534 14.5047 7.49534 14.0093V10.5047C6.63553 10.1308 5.85983 9.57943 5.23366 8.89719C5.10282 8.757 5.11216 8.55139 5.243 8.42055L6.09347 7.57009C6.23366 7.4299 6.4673 7.43924 6.59815 7.58878C7.44861 8.55139 8.6916 9.15887 10.0841 9.15887C11.4767 9.15887 12.7383 8.55139 13.5888 7.57009C13.7196 7.42055 13.9533 7.41121 14.0935 7.55139ZM11.0187 12.0934L11.5888 11.5327C11.6823 11.4486 11.6262 11.2897 11.5047 11.271L10.7196 11.1589C10.6636 11.1495 10.6168 11.1215 10.5981 11.0748L10.243 10.3551C10.1869 10.243 10.0187 10.243 9.96263 10.3551L9.60749 11.0748C9.57945 11.1215 9.53272 11.1495 9.486 11.1589L8.6916 11.271C8.57011 11.2897 8.51403 11.4392 8.60749 11.5327L9.17758 12.0934C9.21497 12.1308 9.23366 12.1869 9.22431 12.2336L9.09347 13.0187C9.07478 13.1495 9.20562 13.243 9.31777 13.1869L10.0281 12.8131C10.0654 12.785 10.1215 12.785 10.1682 12.8131L10.8785 13.1869C10.9907 13.243 11.1215 13.1495 11.1028 13.0187L10.972 12.2336C10.9626 12.1776 10.9813 12.1308 11.0187 12.0934Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        ></path>
      </symbol>
      ,
      <symbol
        id="clubCoin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="10"></circle>
        <mask
          id="a"
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
        </mask>
        <g mask="url(#a)">
          <g filter="url(#filter0_d)">
            <path
              fillOpacity=".01"
              fillRule="evenodd"
              d="M12 9.341A2.997 2.997 0 0114.5 8H18v2h-3.5a1 1 0 00-1 1v2a1 1 0 001 1H18v2h-3.5a2.997 2.997 0 01-2.5-1.341A2.997 2.997 0 019.5 16H6v-2h3.5a1 1 0 001-1v-2a1 1 0 00-1-1H6V8h3.5c1.043 0 1.963.533 2.5 1.341z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm2.5 4A2.997 2.997 0 0012 9.341 2.997 2.997 0 009.5 8H6v2h3.5a1 1 0 011 1v2a1 1 0 01-1 1H6v2h3.5a2.997 2.997 0 002.5-1.341A2.997 2.997 0 0014.5 16H18v-2h-3.5a1 1 0 01-1-1v-2a1 1 0 011-1H18V8h-3.5z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="32"
            x2="12"
            y1="12"
            y2="-8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCA400"></stop>
            <stop offset="1" stopColor="#FFBC00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-8"
            x2="12"
            y1="12"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDF4E"></stop>
            <stop offset=".46" stopColor="#FFEA82"></stop>
            <stop offset="1" stopColor="#FFD914"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(90 -.002 12.002) scale(9.99683)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset=".594" stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset="1" stopColor="#FF6800"></stop>
          </radialGradient>
          <filter
            id="filter0_d"
            width="14"
            height="10"
            x="5"
            y="7"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      ,
      <symbol
        id="clubMission"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.994 1.888l.006.114v3h3c.813 0 1.256.898.848 1.534l-.065.089-.076.084-3 3a1 1 0 01-.576.284l-.131.009h-3.586l-3.707 3.707a1 1 0 01-1.497-1.32l.083-.094L14 8.586V5.002a1 1 0 01.206-.608l.087-.1 3-3c.575-.574 1.523-.252 1.684.486l.017.108zm-6.493 2.239a9 9 0 107.375 7.376l-2.037-.001A7 7 0 1112.5 6.163V4.127zm-.205 4.045A5 5 0 1016 13.002l-.01-.307a4.984 4.984 0 00-.137-.9l-.024-.087-1.888 1.89a3.001 3.001 0 11-3.536-3.537l1.89-1.889zM16 5.416l1-1v1.586l.007.117.02.112a1 1 0 00.973.771h1.584l-1 1H16V5.416z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="clubCoinFilled"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="10"></rect>
        <rect width="20" height="20" x="2" y="2" rx="10"></rect>
        <mask
          id="a"
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" x="2" y="2" rx="10"></rect>
          <rect width="20" height="20" x="2" y="2" stroke="#fff" rx="10"></rect>
        </mask>
        <g mask="url(#a)">
          <g filter="url(#filter0_d)">
            <path
              fillOpacity=".01"
              fillRule="evenodd"
              d="M12.333 8.786a3.144 3.144 0 012.64-1.453h3.694V9.5h-3.695c-.583 0-1.055.485-1.055 1.083v2.167c0 .598.472 1.083 1.055 1.083h3.695V16h-3.695a3.144 3.144 0 01-2.639-1.453A3.143 3.143 0 019.694 16H6v-2.167h3.694c.583 0 1.056-.485 1.056-1.083v-2.167c0-.598-.473-1.083-1.056-1.083H6V7.333h3.694c1.102 0 2.072.577 2.64 1.453z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fillRule="evenodd"
            d="M12 1.333c5.891 0 10.667 4.776 10.667 10.667S17.89 22.667 12 22.667C6.11 22.667 1.334 17.89 1.334 12S6.109 1.333 12 1.333zm0 2.134a8.533 8.533 0 100 17.066 8.533 8.533 0 000-17.066zm2.667 4.266A3.197 3.197 0 0012 9.163a3.197 3.197 0 00-2.666-1.43H5.6v2.134h3.734c.589 0 1.066.477 1.066 1.066v2.134c0 .589-.477 1.066-1.066 1.066H5.6v2.134h3.734A3.197 3.197 0 0012 14.837a3.197 3.197 0 002.667 1.43H18.4v-2.134h-3.733c-.59 0-1.067-.477-1.067-1.066v-2.134c0-.589.478-1.066 1.067-1.066H18.4V7.733h-3.733z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="32"
            x2="12"
            y1="12"
            y2="-8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCA400"></stop>
            <stop offset="1" stopColor="#FFBC00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-9.333"
            x2="12"
            y1="12"
            y2="33.333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDF4E"></stop>
            <stop offset=".46" stopColor="#FFEA82"></stop>
            <stop offset="1" stopColor="#FFD914"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(90 -.002 12.002) scale(9.99683)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset=".594" stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset="1" stopColor="#FF6800"></stop>
          </radialGradient>
          <filter
            id="filter0_d"
            width="16.667"
            height="12.667"
            x="4"
            y="5.333"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      ,
      <symbol
        id="comingSoon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.585 15.384a1 1 0 111.882-.677A8.003 8.003 0 0011.997 20a8 8 0 100-16 1 1 0 110-2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10.003 10.003 0 01-9.412-6.616zM8.662 2.57a1 1 0 11.667 1.885 7.95 7.95 0 00-1.114.494 1 1 0 11-.947-1.762 9.95 9.95 0 011.394-.617zM5.804 5.39a1 1 0 00-1.41.11 9.95 9.95 0 00-.899 1.232 1 1 0 101.701 1.052 7.95 7.95 0 01.718-.984 1 1 0 00-.11-1.41zm-3.64 4.783a1 1 0 011.966.365A7.95 7.95 0 004 11.75a1 1 0 01-2-.06c.016-.51.07-1.016.163-1.517zM12.996 12V6h-2v5.307l-3.35 1.257.702 1.872 4-1.5a1 1 0 00.648-.936z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="comment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 21a1 1 0 001.6.8l6.92-5.198A8 8 0 0014 2h-4a8 8 0 100 16v3zm7.373-6.037l-.037.027L12 18.998V17a1 1 0 00-1-1h-1a6 6 0 010-12h4a6 6 0 013.373 10.963z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="compare"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 2h-2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h7v2h2V2zm1 16v2h6a2 2 0 002-2V6a2 2 0 00-2-2h-6v2h6v12h-6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 00-1 1H7a3 3 0 013-3h8a3 3 0 013 3v12a3 3 0 01-3 3v-2a1 1 0 001-1V4a1 1 0 00-1-1h-8zm5 2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h10zM5 7v14h10V7H5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dkSmile"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M2.22 12.704a.966.966 0 01.194-1.405l1.61-1.126a.971.971 0 011.294.172A8.826 8.826 0 0012 13.413a8.825 8.825 0 006.682-3.068.971.971 0 011.295-.172l1.609 1.126a.965.965 0 01.194 1.405A12.72 12.72 0 0112 17.3a12.72 12.72 0 01-9.78-4.597z"></path>
      </symbol>
      ,
      <symbol id="dk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M2 3.24C2 2.556 2.556 2 3.24 2H15c4 0 7 3 7 7v6c0 4-3 7-7 7H3.247a1.24 1.24 0 01-1.24-1.236L2 3.24zm3.354 8.453a.67.67 0 00-.135.974A8.818 8.818 0 0012 15.854c2.63 0 5.115-1.18 6.78-3.187a.67.67 0 00-.134-.974l-1.116-.78a.673.673 0 00-.897.118A6.119 6.119 0 0112 13.158a6.119 6.119 0 01-4.633-2.127.673.673 0 00-.897-.119l-1.116.78z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dkLogotype"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92 25"
      >
        <path
          fillRule="evenodd"
          d="M75.842 9.167c-.39 0-.67.278-.67.666V14.5c0 .909-.427 1.333-1.341 1.333h-6.034v-5c0-2.823-2.189-5-5.029-5H58.41c-.405 0-1.096.011-1.34.334l-1.341 2c-.258.34-.093 1 .335 1h6.704c.914 0 1.677.758 1.677 1.666v5h-14.08c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h2.682c0 .908-1.098 2-2.012 2h-6.034c-.913 0-1.34-.425-1.34-1.334v-6.666a.645.645 0 00-.671-.667h-2.012c-.39 0-.67.279-.67.667v6.666c0 3 1.676 4.667 4.693 4.667h6.034c2.84 0 5.364-2.51 5.364-5.333h10.727c.39 0 .67-.28.67-.667v-.667l.733.927c.244.322.538.407.944.407h4.358c2.84 0 4.693-1.844 4.693-4.667V9.833a.645.645 0 00-.67-.666h-2.012zm-4.693 12c-.39 0-.67.278-.67.666v2c0 .389.28.667.67.667h5.364c.39 0 .67-.278.67-.667v-2a.644.644 0 00-.67-.666h-5.364zm-12.068 0c-.39 0-.67.278-.67.666v2c0 .389.28.667.67.667h2.346c.39 0 .67-.278.67-.667v-2a.644.644 0 00-.67-.666h-2.346zM81.206 5.833c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h6.034c.914 0 1.341.424 1.341 1.333v4c0 .909-.427 1.333-1.34 1.333h-6.035c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h6.034c2.84 0 4.693-1.844 4.693-4.667v-4c0-2.824-1.853-4.667-4.693-4.667h-6.034zm-51.96 0l3.385-4.336A.609.609 0 0032.159.5h-2.576c-.41 0-.799.182-1.06.496l-5.647 7.17c-.384.463-.268 1 .335 1h7.71c1.92 0 3.353 1.426 3.353 3.334v3.333h-13.41c-.86 0-1.34-.436-1.34-1.333V3.833a.645.645 0 00-.67-.666h-2.012c-.39 0-.67.278-.67.666V14.5c0 3 2.346 4.667 5.363 4.667h15.42c.39 0 .671-.28.671-.667v-6c0-3.823-2.86-6.667-6.704-6.667h-1.677zM11.477 3.167c-.39 0-.67.278-.67.666V14.5c0 .909-.427 1.333-1.341 1.333H2.092c-.39 0-.67.28-.67.667v2c0 .388.28.667.67.667h7.375c3.017 0 4.693-1.667 4.693-4.667V3.833a.645.645 0 00-.67-.666h-2.012zm-8.167 9.819L.75 3.833c-.105-.371.282-.666.67-.666h1.783c.356 0 .746.153.842.495l2.75 9.26c.105.369-.133.652-.518.652H4.092a.811.811 0 01-.781-.588z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dataBill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M13.5 11.25h-3v1.5h3v-1.5zM10.5 8.25h3v1.5h-3v-1.5z"></path>
        <path
          fillRule="evenodd"
          d="M1.5 15.75h15v-9a1.5 1.5 0 00-1.5-1.5H9v-1.5a1.5 1.5 0 00-1.5-1.5H3a1.5 1.5 0 00-1.5 1.5v12zm6-12H3v1.5h4.5v-1.5zm0 3H3v1.5h4.5v-1.5zM3 11.25v-1.5h4.5v1.5H3zm4.5 1.5H3v1.5h4.5v-1.5zm7.5 1.5H9v-7.5h6v7.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dataPackage"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M4.5 3a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v2.25H15V3A2.25 2.25 0 0012.75.75h-7.5A2.25 2.25 0 003 3v2.25h1.5V3zM4.5 15v-3H3v3a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0015 15v-3h-1.5v3a.75.75 0 01-.75.75h-7.5A.75.75 0 014.5 15z"></path>
        <path d="M9 14.77a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 10.449c-1.037 0-1.974.42-2.654 1.1L5.284 10.49A5.236 5.236 0 019 8.949c1.451 0 2.766.59 3.716 1.541l-1.062 1.06A3.736 3.736 0 009 10.449z"></path>
        <path d="M4.225 9.48A6.727 6.727 0 019 7.5c1.865 0 3.553.756 4.775 1.98l1.061-1.061A8.227 8.227 0 009 6c-2.28 0-4.344.925-5.836 2.419l1.06 1.06z"></path>
      </symbol>
      ,
      <symbol
        id="dateOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 3V1H6v2H5l-.176.005A3 3 0 002 6v14l.005.176A3 3 0 005 23h14l.176-.005A3 3 0 0022 20V6l-.005-.176A3 3 0 0019 3h-1V1h-2v2H8zM5 5h14l.117.007A1 1 0 0120 6v3H4V6l.007-.117A1 1 0 015 5zm-1 6h16v9l-.007.117A1 1 0 0119 21H5l-.117-.007A1 1 0 014 20v-9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dateRange"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.667 2.5V.833H5V2.5h-.833l-.147.004A2.5 2.5 0 001.667 5v11.667l.004.146a2.5 2.5 0 002.496 2.354h11.666l.147-.005a2.5 2.5 0 002.353-2.495V5l-.004-.147A2.5 2.5 0 0015.833 2.5H15V.833h-1.667V2.5H6.667zM3.333 8.333h13.334v8.334l-.006.097a.833.833 0 01-.828.736H4.167l-.098-.006a.834.834 0 01-.736-.827V8.333z"
          clipRule="evenodd"
        ></path>
        <path d="M10.833 12.5v-1.667H9.167V12.5H7.5v1.667h1.667v1.666h1.666v-1.666H12.5V12.5h-1.667z"></path>
      </symbol>
      ,
      <symbol
        id="delete"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryExpress"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryFastFmcg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.17 19a3.001 3.001 0 005.66 0H21a1 1 0 001-1v-3h1v-2h-5v2h2v2h-1.17a3.001 3.001 0 00-5.66 0H10V6h12V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H4.556C2.033 6 0 8.096 0 10.667V18a1 1 0 001 1h1.17a3.001 3.001 0 005.66 0h5.34zM8 17V8H4.556C3.15 8 2 9.187 2 10.667V12h5v2H2v3h.17a3.001 3.001 0 015.66 0H8zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2zm0-12v2h8V7h-8zm1 5v-2h5v2h-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryHeavy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryInPerson"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryJet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.539 1.083l.224-.054a1 1 0 01.452-.006A6.098 6.098 0 0117 6.98v2.486l2.555 1.703a1 1 0 01.394.516l2 6a1 1 0 01-1.145 1.297L15.9 18H8.099l-4.903.98a1 1 0 01-1.145-1.296l2-6a1 1 0 01.394-.516L7 9.465V6.979a6.104 6.104 0 014.539-5.896zM7 11.868v4.312l-2.507.501 1.346-4.039L7 11.868zM15 10v6H9V6.979a4.099 4.099 0 012.839-3.9L12 3.03l.178.054A4.099 4.099 0 0115 6.98V10zm2 6.18l2.506.501-1.346-4.039-1.16-.773v4.311zM10 9a2 2 0 114 0 2 2 0 01-4 0zm0 13v-3H8v3h2zm6-3v3h-2v-3h2zm-3 4v-4h-2v4h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryMethodQuick"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.965 3.934l-.243 1.586a8.004 8.004 0 01-2.443 14.13l-1.65 2.309c5.23-.325 9.371-4.67 9.371-9.98 0-3.701-2.01-6.932-4.998-8.662.008.199-.004.405-.037.617zM4 11.978a8.004 8.004 0 015.72-7.67l1.65-2.31C6.142 2.322 2 6.667 2 11.978c0 3.7 2.01 6.932 4.998 8.661a3.272 3.272 0 01.037-.617l.244-1.585A7.989 7.989 0 014 11.978zM14.988 3.63l-.822 5.348H17.5a1 1 0 01.814 1.581l-7.5 10.5-.071.09c-.64.726-1.886.18-1.731-.823l.823-5.348H6.5a1 1 0 01-.814-1.581l7.5-10.5c.612-.857 1.963-.308 1.802.733zm-2.615 3.846l-3.93 5.502H11l.113.007a1 1 0 01.875 1.145l-.36 2.35 3.929-5.502H13a1 1 0 01-.988-1.152l.361-2.35z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryMethodSimultaneous"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.585 15.384a1 1 0 111.882-.677A8.003 8.003 0 0011.997 20a8 8 0 100-16 1 1 0 110-2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10.003 10.003 0 01-9.412-6.616zM8.662 2.57a1 1 0 11.667 1.885 7.95 7.95 0 00-1.114.494 1 1 0 11-.947-1.762 9.95 9.95 0 011.394-.617zM5.804 5.39a1 1 0 00-1.41.11 9.95 9.95 0 00-.899 1.232 1 1 0 101.701 1.052 7.95 7.95 0 01.718-.984 1 1 0 00-.11-1.41zm-3.64 4.783a1 1 0 011.966.365A7.95 7.95 0 004 11.75a1 1 0 01-2-.06c.016-.51.07-1.016.163-1.517zM12.996 12V6h-2v5.307l-3.35 1.257.702 1.872 4-1.5a1 1 0 00.648-.936z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryMethodSuggested"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 2a1 1 0 102 0 1 1 0 00-2 0zM8 4.072A1 1 0 117 2.34a1 1 0 011 1.732zM15 20a1 1 0 001-1v-2.255a7 7 0 10-8 0V19a1 1 0 001 1h6zm-.5-4.668a1 1 0 00-.5.865V18h-4v-1.803a1 1 0 00-.5-.865 5 5 0 114.999 0zm0 5.668c1.333 0 1.333 2 0 2h-5c-1.333 0-1.333-2 0-2h5zM3 12a1 1 0 100-2 1 1 0 000 2zm19-1a1 1 0 11-2 0 1 1 0 012 0zM3.706 7.366a1 1 0 101-1.732 1 1 0 00-1 1.732zM16 4.072a1 1 0 111-1.732 1 1 0 01-1 1.732zm3.294 1.562a1 1 0 101 1.732 1 1 0 00-1-1.732z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryNonInventory"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c5.523 0 10 4.477 10 10v1.5a3.5 3.5 0 01-6.396 1.966A5 5 0 1115 8v-.5h2v6a1.5 1.5 0 003 0V12a8 8 0 10-3.512 6.623l1.124 1.655A9.957 9.957 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm3 10a3 3 0 10-6 0 3 3 0 006 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryPost"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20.017 6.667c-.348 2.445-1.803 4.608-3.962 5.889l-2.418 1.434a1.093 1.093 0 01-1.46-.322l-2.91-4.334C7.765 7.101 4.697 6.476 2.41 7.938L1 8.84l6.46 9.348C8.674 19.946 10.704 21 12.876 21h8.507l-3.522-5.605-1.836 1.102 1.506 2.397h-4.655a4.41 4.41 0 01-3.632-1.886l-5.21-7.54c1.222-.504 2.676-.1 3.43 1.022l2.91 4.334c.956 1.422 2.893 1.85 4.38.966l2.418-1.434c2.713-1.61 4.542-4.327 4.979-7.399L23 1 10.55 8.666l1.15 1.782 8.527-5.25-.21 1.469z"></path>
      </symbol>
      ,
      <symbol
        id="deliveryShipBySeller"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="deliveryTipox"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 15v3a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2v8h5v-2H9V5h14V3H5a3 3 0 00-3 3v12a3 3 0 003 3h11a3 3 0 003-3v-3h-2zm-2-7h7V6h-7v2zm6 3h-4V9h4v2zm-6 3h5v-2h-5v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="digikala"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 154 41"
      >
        <path
          fillRule="evenodd"
          d="M103 26h9V14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3zm36 0h9V14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3zM118 9.5v21c0 .662-.836 1.5-1.5 1.5l-3 .032c-.664 0-1.5-.87-1.5-1.532v-1l-1.361 1.634c-.415.564-1.438.866-2.139.866H103c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h13.5c.663 0 1.5.839 1.5 1.5zm36 0v21c0 .662-.836 1.5-1.5 1.5l-3 .032c-.664 0-1.5-.87-1.5-1.532v-1l-1.361 1.634c-.415.564-1.438.866-2.139.866H139c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h13.5c.663 0 1.5.839 1.5 1.5zM54 14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3h9V14zm6-4.5v23c0 4.815-4.174 8.5-9 8.5h-4.638c-.69 0-1.34-.323-1.756-.872l-2.64-3.486c-.438-.578-.193-1.642.534-1.642H51c1.553 0 3-.95 3-2.5V32h-9c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h5.5c.688 0 1.438.554 1.924 1L54 10.5v-1c0-.66.838-1.5 1.5-1.5h3c.664 0 1.5.838 1.5 1.5zM6 23c0 1.55 1.447 3 3 3h9V14H9c-1.553 0-3 1.45-3 3v6zM22.5 0c.664 0 1.5.838 1.5 1.5v29c0 .662-.836 1.5-1.5 1.5h-3c-.664 0-1.5-.838-1.5-1.5v-1l-1.573 1.683c-.426.473-1.248.817-1.927.817H9c-4.826 0-9-4.185-9-9v-5.954C0 12.23 4.174 8 9 8h9V1.5c0-.662.836-1.5 1.5-1.5h3zm62 20l8.35-10.57a.88.88 0 00-.687-1.432h-4.776c-.36 0-.703.162-.931.441L78 19V1.5c0-.662-.836-1.5-1.5-1.5h-3c-.664 0-1.5.838-1.5 1.5v29c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5V21l8.46 10.584c.228.283.572.448.937.448h4.77a.88.88 0 00.688-1.433L84.5 20zm-20-20c-.663 0-1.5.838-1.5 1.5v3c0 .662.837 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-3c0-.662-.836-1.5-1.5-1.5h-3zm0 8c-.663 0-1.5.838-1.5 1.5v21c0 .662 1.072 1.531 1.735 1.531L67.5 32c.664 0 1.5-.838 1.5-1.5v-21c0-.662-.836-1.5-1.5-1.5h-3zm-36-8c-.664 0-1.5.838-1.5 1.5v3c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-3c0-.662-.836-1.5-1.5-1.5h-3zm0 8c-.664 0-1.5.838-1.5 1.5v21c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-21c0-.662-.836-1.5-1.5-1.5h-3zM127 1.5v29c0 .662-.836 1.5-1.5 1.5h-3c-.664 0-1.5-.838-1.5-1.5v-29c0-.662.836-1.5 1.5-1.5h3c.664 0 1.5.838 1.5 1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="digipay"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M14 4.833A3.333 3.333 0 0010.667 1.5H4v1.111a3.333 3.333 0 003.333 3.333H14v-1.11zm0 3.334V7.056H7.333l-.125.002A3.333 3.333 0 004 10.388V16.5h1.111l.125-.002a3.333 3.333 0 003.208-3.331V11.5h2.223l.125-.002A3.333 3.333 0 0014 8.167z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="digipayLogotypeEn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 27"
      >
        <path
          fillRule="evenodd"
          d="M13.417 6.353H7.083C3.586 6.353.75 9.197.75 12.706v1.588c0 3.509 2.836 6.353 6.333 6.353h9.5V0h-3.166v6.353zm0 11.118H7.083a3.172 3.172 0 01-3.166-3.177v-1.588a3.172 3.172 0 013.166-3.177h6.334v7.942zm4.75-11.118h3.166v14.294h-3.166V6.353zm4.75 7.941v-1.588c0-3.509 2.835-6.353 6.333-6.353h9.5v14.294c0 3.509-2.836 6.353-6.333 6.353H29.25l-1.781-3.177h4.948a3.171 3.171 0 003.166-3.176H29.25c-3.498 0-6.333-2.844-6.333-6.353zm6.333 3.177h6.333V9.529H29.25a3.172 3.172 0 00-3.167 3.177v1.588a3.172 3.172 0 003.167 3.177zM92.583 6.353V17.47H86.25a3.172 3.172 0 01-3.167-3.177V6.353h-3.166v7.941c0 3.509 2.835 6.353 6.333 6.353h6.333a3.171 3.171 0 01-3.166 3.177h-4.948L86.25 27h3.167c3.498 0 6.333-2.844 6.333-6.353V6.353h-3.167zM62.5 12.706v1.588c0 3.509 2.835 6.353 6.333 6.353h9.5V6.353h-9.5c-3.498 0-6.333 2.844-6.333 6.353zm12.667 4.765h-6.334a3.172 3.172 0 01-3.166-3.177v-1.588a3.172 3.172 0 013.166-3.177h6.334v7.942zM45.083 6.353h9.5c3.498 0 6.334 2.844 6.334 6.353v1.588c0 3.509-2.836 6.353-6.334 6.353H48.25V27h-3.167V6.353zm9.5 11.118a3.172 3.172 0 003.167-3.177v-1.588a3.172 3.172 0 00-3.167-3.177H48.25v7.942h6.333zM21.333 0h-3.166v3.176h3.166V0zm19 6.353H43.5v14.294h-3.167V6.353zM43.5 0h-3.167v3.176H43.5V0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="digiplus"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 156 35"
      >
        <path
          fillRule="evenodd"
          d="M69.897 27.35c.56 0 1.02.421 1.078.962l.007.117v4.992c0 .556-.424 1.014-.967 1.073l-.118.006H66.86c-.56 0-1.02-.42-1.079-.962l-.006-.117-.001-1.409h-3.493c-.559 0-1.02-.42-1.078-.961l-.006-.118v-2.504c0-.556.422-1.014.966-1.072l.118-.007h7.616zm42.611-22.868c4.152 0 7.371 3.123 7.495 7.219l.004.246v7.466h8.998c1.304 0 1.943-.58 1.996-1.818l.004-.173v-6.968c0-.538.36-.935.878-.989l.122-.006h2.999c.54 0 .939.359.994.874l.006.121v6.968c0 4.128-2.65 6.853-6.736 6.965l-.263.003h-6.499c-.55 0-.962-.105-1.306-.485l-.102-.123-1.091-1.382v.995c0 .537-.361.935-.878.99l-.122.005H103.01c0 4.137-3.623 7.822-7.76 7.96l-.238.004h-8.01c-4.417 0-7.87-3.354-7.984-7.711l-.003-.253v-8.959c0-.537.36-.935.877-.989l.123-.006h2.999c.54 0 .94.36.993.874l.007.121-.01 8.942a3.001 3.001 0 002.823 2.999l.177.005h8.008c1.314 0 2.883-1.515 2.993-2.84l.006-.147h-4c-.54 0-.938-.358-.993-.873l-.006-.122v-2.986c0-.539.36-.935.878-.99l.122-.006h20.996v-7.466c0-1.302-1.048-2.397-2.337-2.483l-.163-.005h-9.998c-.602 0-.856-.88-.558-1.405l2.058-3.075c.287-.378.984-.469 1.563-.49l.437-.007h6.498zm20.496 22.895c.541 0 .94.358.994.874l.006.121v2.986c0 .539-.36.936-.877.99l-.123.006h-7.998c-.541 0-.939-.358-.994-.874l-.006-.122v-2.986c0-.538.36-.935.878-.989l.122-.006h7.998zm-22.495 0c.54 0 .939.358.993.874l.007.121v2.986c0 .539-.361.936-.878.99l-.122.006h-3.5c-.54 0-.939-.358-.993-.874l-.006-.122v-2.986c0-.538.36-.935.877-.989l.122-.006h3.5zM19 9.459c.54 0 .94.359.994.874l.006.121v8.959h3a3 3 0 002.995-2.823l.005-.177v-5.959c0-.537.362-.935.879-.989l.122-.006h2.947c.542 0 .989.409 1.046.934l.006.114v6.448c0 .867-.15 1.704-.427 2.482l.447-.003a3 3 0 002.975-2.825l.005-.175v-5.98c0-.537.362-.935.879-.989l.122-.006h2.947c.542 0 .989.409 1.046.934l.006.114v6.448a7.41 7.41 0 01-2.185 5.258 7.462 7.462 0 01-4.969 2.171l-.306.006h-1.35c-.29 0-.564-.118-.76-.323l-1.163-1.359a7.467 7.467 0 01-4.414 1.676l-.313.006-3.54-.033a7 7 0 01-6.76 6.997l-.24.005H7a7 7 0 01-6.996-6.76L0 24.36V12.444c0-.538.36-.935.878-.989L1 11.45h3c.54 0 .94.359.994.873l.006.122v10.936a3 3 0 002.824 2.995l.176.005h4a3 3 0 002.995-2.823L15 23.38V10.454c0-.537.36-.935.878-.989L16 9.46h3zm130.001-4.977c4.147 0 6.883 2.638 6.995 6.706l.004.262v5.972c0 4.128-2.65 6.853-6.736 6.965l-.263.003h-8.998c-.54 0-.939-.358-.993-.873l-.007-.122v-2.986c0-.538.361-.935.878-.99l.122-.006h8.998c1.304 0 1.943-.58 1.996-1.818l.004-.173V11.45c0-1.298-.583-1.935-1.826-1.987l-.174-.004h-8.998c-.54 0-.939-.36-.993-.874l-.007-.122V5.477c0-.538.361-.935.878-.989l.122-.006h8.998zM59.022.5c.54 0 .94.359.994.874l.006.121v15.927a9.92 9.92 0 01-.189 1.992H66.5c.694-.002 1.315-.32 1.773-.764.407-.405.669-.926.719-1.523l.008-.202v-6.45c0-.549.35-.958.883-1.01L70 9.459h3c.556 0 .942.35.994.872l.006.123v6.38a7.477 7.477 0 01-2.252 5.343c-1.314 1.295-2.958 2.128-4.933 2.207l-.315.006h-6.401c-.298 0-.58-.12-.784-.328l-.082-.095-1.045-1.358c-1.125 1.106-2.747 1.715-4.816 1.776l-.348.005H42.026c-.54 0-.94-.358-.994-.873l-.006-.122v-2.986c0-.538.36-.935.878-.99l.122-.006h10.998c1.303 0 1.943-.58 1.996-1.818l.003-.173V1.495c0-.537.36-.935.878-.989L56.023.5h3zM43.684.5c.531 0 1.112.23 1.256.739l4.1 13.827c.157.55-.197.974-.772.974h-3.26a1.21 1.21 0 01-1.165-.878L40.026 1.495c-.157-.554.421-.995 1-.995h2.658z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="digiplusEn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94 24"
      >
        <path
          fillRule="evenodd"
          d="M13.17 0c.39 0 .879.49.879.878v16.976c0 .387-.49.878-.878.878h-1.756c-.389 0-.878-.49-.878-.878v-.586l-.921.985c-.25.278-.73.479-1.128.479h-3.22C2.443 18.732 0 16.282 0 13.463V9.978C0 7.16 2.443 4.683 5.268 4.683h5.269V.878c0-.387.49-.878.878-.878h1.756zM3.513 13.463c0 .907.847 1.757 1.756 1.757h5.269V8.194H5.268c-.909 0-1.756.85-1.756 1.756v3.512zm31.61-7.902v13.463c0 2.819-2.443 4.976-5.268 4.976h-2.715a1.29 1.29 0 01-1.028-.51l-1.545-2.04c-.257-.34-.113-.962.312-.962h4.976c.909 0 1.756-.557 1.756-1.464v-.292h-5.268c-2.825 0-5.269-2.45-5.269-5.269V9.951c0-2.818 2.444-5.268 5.268-5.268h3.22c.403 0 .842.324 1.127.585l.922.878v-.585c0-.387.49-.878.878-.878h1.756c.388 0 .878.49.878.878zM31.61 8.195h-5.268c-.91 0-1.757.85-1.757 1.756v3.512c0 .908.847 1.757 1.756 1.757h5.269V8.194zm10.536 10.537V5.56c0-.388.49-.878.879-.878h1.756c.387 0 .878.491.878.878v.585l.922-.878c.284-.261.723-.585 1.126-.585h3.22c2.825 0 5.268 2.45 5.268 5.268v3.512c0 2.819-2.443 5.269-5.268 5.269h-5.268V22.5a1.5 1.5 0 01-1.5 1.5h-.513a1.5 1.5 0 01-1.5-1.5v-3.768zm8.78-10.537H45.66v7.024h5.268c.91 0 1.756-.848 1.756-1.756V9.951c0-.907-.847-1.756-1.756-1.756zm26.342-2.012a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l-.003.097c-.058.872-.878 1.66-1.753 1.66h-3.512l-.097-.004c-.87-.057-1.66-.876-1.66-1.753V6.183a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l.003.151c.085 2.76 2.498 5.117 5.266 5.117H72l.15-.002c2.755-.085 5.118-2.492 5.118-5.266V6.183zM37.756 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878l-1.618.018c-.389 0-1.016-.509-1.016-.896V5.56zM16.683 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878h-1.756c-.388 0-.878-.49-.878-.878V5.56zM61.464.878v16.976c0 .387-.49.878-.879.878H58.83c-.388 0-.878-.49-.878-.878V.878c0-.387.49-.878.878-.878h1.756c.389 0 .879.49.879.878zM79.61 17.232a1.5 1.5 0 001.5 1.5h7.942c2.158 0 3.975-1.711 4.02-3.881a3.958 3.958 0 00-2.973-3.927l-7.24-1.844a.446.446 0 01-.328-.512.458.458 0 01.456-.367h8a1.5 1.5 0 001.5-1.5v-.518a1.5 1.5 0 00-1.5-1.5h-7.941c-2.159 0-3.976 1.711-4.02 3.88a3.958 3.958 0 002.973 3.927l7.24 1.845a.446.446 0 01.327.511.457.457 0 01-.456.367h-8a1.5 1.5 0 00-1.5 1.5v.519z"
          clipRule="evenodd"
        ></path>
        <mask
          id="a"
          width="94"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fillRule="evenodd"
            d="M13.17 0c.39 0 .879.49.879.878v16.976c0 .387-.49.878-.878.878h-1.756c-.389 0-.878-.49-.878-.878v-.586l-.921.985c-.25.278-.73.479-1.128.479h-3.22C2.443 18.732 0 16.282 0 13.463V9.978C0 7.16 2.443 4.683 5.268 4.683h5.269V.878c0-.387.49-.878.878-.878h1.756zM3.513 13.463c0 .907.847 1.757 1.756 1.757h5.269V8.194H5.268c-.909 0-1.756.85-1.756 1.756v3.512zm31.61-7.902v13.463c0 2.819-2.443 4.976-5.268 4.976h-2.715a1.29 1.29 0 01-1.028-.51l-1.545-2.04c-.257-.34-.113-.962.312-.962h4.976c.909 0 1.756-.557 1.756-1.464v-.292h-5.268c-2.825 0-5.269-2.45-5.269-5.269V9.951c0-2.818 2.444-5.268 5.268-5.268h3.22c.403 0 .842.324 1.127.585l.922.878v-.585c0-.387.49-.878.878-.878h1.756c.388 0 .878.49.878.878zM31.61 8.195h-5.268c-.91 0-1.757.85-1.757 1.756v3.512c0 .908.847 1.757 1.756 1.757h5.269V8.194zm10.536 10.537V5.56c0-.388.49-.878.879-.878h1.756c.387 0 .878.491.878.878v.585l.922-.878c.284-.261.723-.585 1.126-.585h3.22c2.825 0 5.268 2.45 5.268 5.268v3.512c0 2.819-2.443 5.269-5.268 5.269h-5.268V22.5a1.5 1.5 0 01-1.5 1.5h-.513a1.5 1.5 0 01-1.5-1.5v-3.768zm8.78-10.537H45.66v7.024h5.268c.91 0 1.756-.848 1.756-1.756V9.951c0-.907-.847-1.756-1.756-1.756zm26.342-2.012a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l-.003.097c-.058.872-.878 1.66-1.753 1.66h-3.512l-.097-.004c-.87-.057-1.66-.876-1.66-1.753V6.183a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l.003.151c.085 2.76 2.498 5.117 5.266 5.117H72l.15-.002c2.755-.085 5.118-2.492 5.118-5.266V6.183zM37.756 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878l-1.618.018c-.389 0-1.016-.509-1.016-.896V5.56zM16.683 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878h-1.756c-.388 0-.878-.49-.878-.878V5.56zM61.464.878v16.976c0 .387-.49.878-.879.878H58.83c-.388 0-.878-.49-.878-.878V.878c0-.387.49-.878.878-.878h1.756c.389 0 .879.49.879.878zM79.61 17.232a1.5 1.5 0 001.5 1.5h7.942c2.158 0 3.975-1.711 4.02-3.881a3.958 3.958 0 00-2.973-3.927l-7.24-1.844a.446.446 0 01-.328-.512.458.458 0 01.456-.367h8a1.5 1.5 0 001.5-1.5v-.518a1.5 1.5 0 00-1.5-1.5h-7.941c-2.159 0-3.976 1.711-4.02 3.88a3.958 3.958 0 002.973 3.927l7.24 1.845a.446.446 0 01.327.511.457.457 0 01-.456.367h-8a1.5 1.5 0 00-1.5 1.5v.519z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#a)">
          <path d="M0 0h93v24H0z"></path>
        </g>
      </symbol>
      ,
      <symbol
        id="discount"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
      </symbol>
      ,
      <symbol id="dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"></circle>
      </symbol>
      ,
      <symbol
        id="dotOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="2"></circle>
      </symbol>
      ,
      <symbol id="doubt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M10 8h2V7a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-.4.8l-2.4 1.8A3 3 0 0014 14v3h2v-3a1 1 0 01.4-.8l2.4-1.8A3 3 0 0020 9V7a3 3 0 00-3-3h-4a3 3 0 00-3 3v1zM6 5h2v12H6V5zm2 13H6v2h2v-2zm8 0h-2v2h2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="download"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path
          fillRule="evenodd"
          d="M13.5 3v9.586l3.293-3.293 1.414 1.414-5 5a1 1 0 01-1.414 0l-5-5 1.414-1.414 3.293 3.293V3h2zm-11 14v2a2 2 0 002 2h16a2 2 0 002-2v-2h-2v2h-16v-2h-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="dropUp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 14l5-5 5 5H7z"></path>
      </symbol>
      ,
      <symbol
        id="dropdown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5H7z"></path>
      </symbol>
      ,
      <symbol id="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M15.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-12 12A1 1 0 018 21H4a1 1 0 01-1-1v-4a1 1 0 01.293-.707l12-12zM5 16.414V19h2.586l11-11L16 5.414l-11 11zM21 21H10l2-2h9v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="electronic"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="electronicsFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 21a9 9 0 110-18 9 9 0 010 18zm1-14v7h-2V7h2zm0 9a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="expandLess"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
      </symbol>
      ,
      <symbol
        id="expandMore"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
      </symbol>
      ,
      <symbol
        id="expandShowLess"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.293 5.414L8.707 4 12 7.293 15.293 4l1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4zm0 13.169l1.414 1.414L12 16.704l3.293 3.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="expandShowMore"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.293 16.704l1.414-1.414L12 18.583l3.293-3.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4zm0-9.411l1.414 1.414L12 5.414l3.293 3.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="externalLink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path d="M18.5 13v3a2 2 0 01-2 2h-8a2 2 0 01-2-2V8a2 2 0 012-2h3V4h-3a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-3h-2z"></path>
        <path d="M9.793 13.293l1.414 1.414L18.5 7.414V11h2V5a1 1 0 00-1-1h-6v2h3.586l-7.293 7.293z"></path>
      </symbol>
      ,
      <symbol id="face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path
          fillRule="evenodd"
          d="M20 33.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333-7.364 0-13.333 5.97-13.333 13.333 0 7.364 5.97 13.333 13.333 13.333zm0 3.334c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M27.597 23.617c.764.514.966 1.55.452 2.314C26.373 28.42 23.35 30 19.993 30c-3.344 0-6.36-1.569-8.039-4.044a1.667 1.667 0 112.758-1.872c1.012 1.491 2.954 2.583 5.281 2.583 2.335 0 4.283-1.1 5.29-2.598a1.667 1.667 0 012.314-.452z"
          clipRule="evenodd"
        ></path>
        <path d="M16.667 15.833a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        <path d="M28.333 15.833a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        <defs>
          <linearGradient
            id="paint0_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
        </defs>
      </symbol>
      ,
      <symbol
        id="facebook"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.597 2.005L14.742 2c-2.888 0-4.754 1.914-4.754 4.878V9H7.404A.404.404 0 007 9.404v3.192c0 .223.181.404.404.404h2.584v8.415c0 .223.181.404.404.404h3.204a.404.404 0 00.404-.404V13h2.596c.223 0 .404-.18.404-.404l.001-3.192A.405.405 0 0016.597 9H14V7.22c0-.916.387-1.22 1.58-1.22h1.017A.404.404 0 0017 5.597V2.41a.404.404 0 00-.404-.404z"></path>
      </symbol>
      ,
      <symbol
        id="fashion"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fashionFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M9 4H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.543-1.334l-5-2A1.004 1.004 0 0017 4H15a1 1 0 00-1 1c0 .537-.18 1.041-.497 1.398C13.202 6.737 12.729 7 12 7c-.729 0-1.202-.263-1.503-.602C10.18 6.041 10 5.537 10 5a1 1 0 00-1-1z"></path>
      </symbol>
      ,
      <symbol
        id="fastBackward"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.707 16l-4.293-4.293 4.293-4.293L17.293 6l-5 5a1 1 0 000 1.414l5 5L18.707 16zm-7 0l-4.293-4.293 4.293-4.293L10.293 6l-5 5a1 1 0 000 1.414l5 5L11.707 16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fastForward"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 16l4.293-4.293L5 7.414 6.414 6l5 5a1 1 0 010 1.414l-5 5L5 16zm7 0l4.293-4.293L12 7.414 13.414 6l5 5a1 1 0 010 1.414l-5 5L12 16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="favOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6 20a1 1 0 001.514.858L12 18.166l4.485 2.692A1 1 0 0018 20V4a1 1 0 00-1-1H7a1 1 0 00-1 1v16zm2-1.766V5h8v13.234l-3.486-2.092a1 1 0 00-1.028 0L8 18.234z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="favOn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.514 20.858A1 1 0 016 20V4a1 1 0 011-1h10a1 1 0 011 1v16a1 1 0 01-1.515.858L12 18.166l-4.486 2.692z"></path>
      </symbol>
      ,
      <symbol
        id="favoriteOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 3a6 6 0 00-3.844 10.607l6.982 6.492a2 2 0 002.724 0l6.993-6.503C21.685 12.504 22.5 10.818 22.5 9A6 6 0 0012 5.03 5.995 5.995 0 007.5 3zm-2.502 9.124l-.044-.039a4 4 0 116.147-4.83 1 1 0 001.799 0A4 4 0 0120.5 9a3.99 3.99 0 01-1.461 3.091L12 18.634l-7.002-6.51z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="favoriteOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M1.5 9A6 6 0 0112 5.03 6 6 0 0122.5 9c0 1.818-.814 3.504-2.145 4.596L13.362 20.1a2 2 0 01-2.724 0l-6.982-6.492A5.988 5.988 0 011.5 9z"></path>
      </symbol>
      ,
      <symbol
        id="feedback"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.275 21.474a1 1 0 001.2-1.199l-.773-3.345A9.958 9.958 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c1.753 0 3.44-.453 4.93-1.298l3.345.772zm-1.485-5.24a1 1 0 00-.127.754l.503 2.178-2.178-.503a1 1 0 00-.755.127 8 8 0 112.556-2.556zM10 11h3v5h-2v-3h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fidiboBanner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 89 25"
      >
        <path
          fillRule="evenodd"
          d="M43.826 9.413c-2.326-.098-4.657 1.928-4.665 4.608-.008 2.688 2.301 4.655 4.627 4.664 2.32.01 4.648-1.923 4.664-4.627.017-2.729-2.363-4.737-4.626-4.645zm7.088-1.262c0 .618.004 1.235.008 1.853.008 1.376.016 2.751-.016 4.126-.076 3.317-2.194 5.8-4.898 6.653-1.73.545-3.442.476-5.083-.259-2.11-.944-3.485-2.562-4.002-4.836-.614-2.7.115-5.02 2.12-6.916 1.16-1.095 2.58-1.658 4.16-1.798 1.719-.152 3.288.284 4.704 1.268l.016.011c.056.04.113.08.17.118.146.096.224.052.237-.117.004-.047.004-.094.004-.141v-.04-.136-.136l.014-1.817c.01-1.387.02-2.773.033-4.16.007-.77.54-1.336 1.244-1.33.725.007 1.268.545 1.272 1.316a687.9 687.9 0 01.005 4.52v.001l-.001 1.82h.013zM2.532 19.421v.513l.001.895c.002.698.004 1.397-.007 2.095a1.195 1.195 0 01-1.089 1.188c-.668.064-1.197-.294-1.372-.924a2.16 2.16 0 01-.054-.583c0-.867-.003-1.734-.005-2.601C0 18.03-.005 16.059.01 14.086c.015-2 .684-3.766 2.127-5.18C3.4 7.671 4.936 6.985 6.7 6.826c.298-.028.598-.028.898-.028H28.544c.178-.002.355-.004.532.05.599.185.97.737.895 1.352-.065.542-.567 1.067-1.209 1.064-2.633-.013-5.266-.011-7.9-.01l-2.702.002H8.463c-.389 0-.777.013-1.165.027l-.328.01c-1.666.055-3.722 1.25-4.32 3.445-.495 1.815.083 3.558 1.62 4.765.942.74 2.024 1.081 3.24 1.078 5.118-.01 10.236-.01 15.354-.008l5.172.001c.197 0 .39-.015.586-.036a1.267 1.267 0 011.307.778c.213.537.036 1.149-.426 1.501-.258.197-.55.221-.858.221-1.071-.002-2.142-.002-3.212-.002H23.887c-1.532 0-3.064-.002-4.596-.004-3.89-.004-7.78-.008-11.67.007-1.737.007-3.31-.414-4.708-1.457l-.04-.031a.472.472 0 00-.341-.13zm57.929-5.552c.02-2.594 2.172-4.626 4.677-4.612 2.54.022 4.632 2.124 4.609 4.679-.023 2.6-2.159 4.615-4.63 4.61a4.654 4.654 0 01-4.656-4.677zm.426-5.674c-.074.058-.15.118-.261.092-.064-.094-.058-.196-.052-.298.002-.032.004-.064.004-.095-.013-1.547-.024-3.095-.036-4.642v-.009l-.01-1.325v-.073A1.247 1.247 0 0058.979.54c-.598.16-.954.614-.963 1.263a256.282 256.282 0 00-.018 3.125v3.236c0 1.88.002 3.761-.003 5.642a7.49 7.49 0 00.476 2.613c1.176 3.203 4.475 4.965 7.595 4.511 1.59-.23 3-.868 4.098-2.037 1.786-1.904 2.454-4.154 1.797-6.722-.7-2.733-2.458-4.44-5.17-5.144-2.113-.549-4.063-.117-5.846 1.123-.02.014-.038.03-.057.044zm-33.349 8.508c-.161.073-.292.068-.415.064l-.087-.002c-1.875 0-3.75 0-5.624-.002h-.01c-4.765-.001-9.531-.003-14.297.015-1.222.005-2.593-.875-2.938-2.295-.265-1.092.01-2.052.754-2.841.584-.62 1.353-.944 2.229-.944h20.172c.07 0 .141 0 .212.004.165.01.212.101.144.245-.049.103-.1.205-.152.307-.064.127-.128.254-.187.383a5.25 5.25 0 00-.342 1.122c-.04.202-.14.286-.338.28-.08-.003-.16-.002-.241-.001H7.343c-.085 0-.17-.002-.254.002-.42.016-.723.3-.749.697-.02.314.315.702.667.753.108.015.219.013.33.01l.122-.002h18.754l.1.003c.072.002.145.005.217-.004.266-.034.352.075.397.342.106.638.323 1.248.61 1.864zm53.517-7.347c2.605 0 4.713 2.243 4.607 4.656.104 2.428-2.17 4.636-4.653 4.613-2.381-.02-4.605-2.17-4.585-4.66.02-2.364 2.016-4.609 4.631-4.609zm7.096 4.668c.018-4.034-3.074-7.067-7.066-7.14-4.006.043-7.112 3.055-7.127 7.08-.015 4.018 3.036 7.11 7.067 7.127 4.025.018 7.109-3.047 7.126-7.067zm-53.537 1.379l-.001 1.215c-.001 1.058-.002 2.116.003 3.174.002.537-.217.933-.693 1.175a1.254 1.254 0 01-1.76-.74 1.583 1.583 0 01-.071-.49v-3.493c0-1.717 0-3.434.002-5.15.001-.64.338-1.122.872-1.292.53-.167 1.065.007 1.412.45.199.253.239.543.238.852-.003 1.03-.003 2.06-.002 3.09v1.209zm18.568-1.252v1.288h.002l-.002 1.286c-.001 1.064-.003 2.129.005 3.194a1.23 1.23 0 001.152 1.228 1.26 1.26 0 001.327-.997c.037-.174.037-.36.037-.54.003-2.76.002-5.52.002-8.28v-.074c0-.11.001-.222-.01-.332a1.276 1.276 0 00-1.258-1.135c-.715-.003-1.247.518-1.252 1.261a416.18 416.18 0 00-.003 3.1zM35.017 6.885a1.697 1.697 0 01-1.684 1.671c-.914-.006-1.68-.779-1.67-1.685a1.688 1.688 0 011.683-1.67c.914.006 1.673.77 1.67 1.684zm17.668-.057c-.006.903.752 1.668 1.661 1.677a1.687 1.687 0 001.698-1.64c.024-.9-.733-1.684-1.637-1.699a1.688 1.688 0 00-1.721 1.662z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fidibo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.234 4.271c1.32-.152 2.393.844 2.526 1.983a2.299 2.299 0 01-2.004 2.553 2.285 2.285 0 01-2.557-2.004c-.154-1.362.849-2.39 2.035-2.532zm4.694 5.827l.01-1.26-1.718-.01c.07-.147.144-.258.22-.372.134-.2.273-.41.404-.839C11.99 3.814 6.99 1.292 4.585 4.464c-1.34 1.76-.603 4.028.798 4.994.94.64 1.616.65 2.925.65.174 0 .451.002.777.005.999.006 2.458.016 2.843-.015zm-4.326 8.449c-.13-.005-.243-.008-.344-.01-.395-.008-.616-.013-1.108-.17-4.101-1.303-3.64-5.604-1.135-7.048.875-.506 1.594-.503 2.635-.5l.28.001h10.4c.083 0 .186-.003.299-.006.446-.012 1.06-.03 1.297.108.399.224.512.763.123 1.088-.265.23-.758.215-1.202.2a9.478 9.478 0 00-.302-.007H9.853c-.21 0-.477-.005-.77-.011-.9-.019-2.052-.043-2.615.072-.93.194-1.636.784-1.953 1.506-.45 1.027-.092 2.003.5 2.582.708.703 1.265.9 2.588.817v-.735c-.149-.026-.265-.026-.375-.025-.187 0-.358.001-.647-.128a1.874 1.874 0 01-.696-.539c-.368-.447-.542-1.26-.194-1.84.57-.987 2.17-.977 3.566-.968l.382.002c1.635.005 3.267.007 4.898.01 1.634.002 3.267.005 4.9.01-.011.173-.349 1.088-.44 1.322-.325.041-6.529.022-9.302.013l-1.253-.003c-.105 0-.22-.005-.342-.01-.457-.022-.982-.046-1.233.203-.184.194-.123.407.051.57.153.133.44.142.685.1v-.354h2.2v.355l9.122-.06c.043.028.06.033.067.035.003 0 .004.001.005.002l.004.009a.73.73 0 00.047.106l.378 1.078-9.624.081v.448l-.007.325 9.692-.01c.43 0 .819.224.829.661.026.804-.998.76-1.786.725a9.774 9.774 0 00-.413-.013c-.986 0-1.932-.005-2.864-.01a285.335 285.335 0 00-5.478.01l-.024 2.42-.092-.101c-.092-.102-.798-1.272-.972-1.607-.197.294-.347.56-.486.807l-.015.027a29.77 29.77 0 00-.055.1c-.081.146-.16.287-.252.429l-.276.315v-2.382zM16.94 4.322c-1.095.214-2.087 1.302-1.8 2.695.225 1.078 1.299 2.044 2.68 1.79 1.124-.214 2.075-1.292 1.83-2.675a2.302 2.302 0 00-2.71-1.81zm-4 4.536l1.73-.02c-.522-.59-.931-1.689-.758-2.767.502-3.224 4.593-4.027 6.382-1.596 1.156 1.556.87 3.793-.808 5.003-.88.64-1.687.65-2.945.65h-3.6v-1.27z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fileTransferUpload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.969 8.355C19.635 4.782 16.643 2 13 2a6.996 6.996 0 00-5.795 3.072A3.5 3.5 0 003.07 9.2 5.5 5.5 0 006.5 19H9v-2H6.5l-.192-.005a3.5 3.5 0 01-1.553-6.53 1 1 0 00.443-1.198l-.1-.234a1.5 1.5 0 012.05-1.887l.051.027.107.046a1 1 0 001.235-.485A5 5 0 0118 9l-.005.235.004.117a1 1 0 00.665.848A3.5 3.5 0 0117.5 17H15v2h2.5l.221-.004a5.5 5.5 0 002.473-10.291l-.207-.11-.018-.24zm-8.823.084l-5 5 1.415 1.415L11 11.413V21h2v-9.293l3.146 3.147 1.415-1.415-5-5-.095-.083a1 1 0 00-1.32.083z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="filter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.17 6a3.001 3.001 0 005.66 0H22V4H10.83a3.001 3.001 0 00-5.66 0H2v2h3.17zM9 5a1 1 0 11-2 0 1 1 0 012 0zm7 10a3.001 3.001 0 01-2.83-2H2v-2h11.17a3.001 3.001 0 015.66 0H22v2h-3.17A3.001 3.001 0 0116 15zm1-3a1 1 0 11-2 0 1 1 0 012 0zM5.17 18H2v2h3.17a3.001 3.001 0 005.66 0H22v-2H10.83a3.001 3.001 0 00-5.66 0zM9 19a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2h7a1 1 0 011 1v19h-2v-8h-4v1a1 1 0 01-1 1H5a1 1 0 01-.958-1.287L5.456 10 4.042 5.287A1 1 0 015 4h6V3a1 1 0 011-1zm6 10V4h-5v8h5zM6.344 6l1.114 3.713a1 1 0 010 .574L6.344 14H12a1 1 0 01-1-1V6H6.344z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="free" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
        <path
          fillRule="evenodd"
          d="M21.001 7H24V5h-4l-.117.007a1 1 0 00-.883.995l.018 8 .006.11a1 1 0 001.003.888l3.982-.035-.018-2-2.976.026-.005-1.992 1.973.001V9l-1.977-.001L21.001 7zM24 19v-2H0v2h24zM14 5h4v2h-2.999l.005 1.999L16.983 9v2l-1.973-.001.005 1.992 2.976-.026.018 2-3.982.035a1 1 0 01-1.003-.888l-.006-.11-.018-8a1 1 0 01.883-.995L14 5zM2 7h3V5H1l-.117.007A1 1 0 000 6v9h2v-4.001L3.983 11V9L2 8.999V7zm7-2a3 3 0 011.762 5.428l-.159.107.072.075a4.981 4.981 0 011.32 3.173L12 14v1h-2v-1a3 3 0 00-1.817-2.758L8 11.17V15H6V6a1 1 0 01.883-.993L7 5h2zM8 7h1l.117.007A1 1 0 019 9H8V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="fresh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="gift" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M14.5 2a3.5 3.5 0 013.163 5H20a1 1 0 011 1v5a1 1 0 01-1 1v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a1 1 0 01-1-1V8a1 1 0 011-1h2.337A3.5 3.5 0 0112 3.05 3.49 3.49 0 0114.5 2zM11 20V9h2v11h-2zm3.5-13H13V5.5A1.5 1.5 0 1114.5 7zm.5 13v-6h3v6h-3zm0-8V9h4v3h-4zm-6 8v-6H6v6h3zm0-8V9H5v3h4zm.5-5H11V5.5A1.5 1.5 0 109.5 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="googlePlus"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.719 13.49h3.437a4.373 4.373 0 01-4.15 2.915 4.38 4.38 0 01-4.331-4.194 4.372 4.372 0 014.363-4.54 4.35 4.35 0 012.932 1.134.474.474 0 00.644-.002l1.262-1.189a.472.472 0 00.001-.686 7.013 7.013 0 00-4.699-1.927C8.298 4.926 5.028 8.107 5 11.988a7.038 7.038 0 0014.065.446c.005-.046.009-1.615.009-1.615h-6.355a.472.472 0 00-.472.471v1.729c0 .26.211.471.472.471z"></path>
      </symbol>
      ,
      <symbol
        id="guarantee"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4.725 4.038l7-2a1 1 0 01.55 0l7 2A1 1 0 0120 5v7.938a8 8 0 01-4.03 6.946l-3.474 1.984a1 1 0 01-.992 0L8.03 19.884A8 8 0 014 12.938V5a1 1 0 01.725-.962zM6 5.754v7.184a6 6 0 003.023 5.21l2.977 1.7 2.977-1.7A6 6 0 0018 12.937V5.754L12 4.04 6 5.754zm9 2.539l-3.793 3.793-1.793-1.793L8 11.707l2.5 2.5a1 1 0 001.414 0l4.5-4.5L15 8.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="hamburgerMenu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="handle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 6.5c0 .825-.675 1.5-1.5 1.5S8 7.325 8 6.5 8.675 5 9.5 5s1.5.675 1.5 1.5zm5 0c0 .825-.675 1.5-1.5 1.5S13 7.325 13 6.5 13.675 5 14.5 5s1.5.675 1.5 1.5zM8 12c0 .825.675 1.5 1.5 1.5S11 12.825 11 12s-.675-1.5-1.5-1.5S8 11.175 8 12zm6.5 1.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm-6.5 4c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5zm6.5 1.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="hashtag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.389 7l.266-3h2l-.267 3h3l-.177 1.999H17.21L16.677 15h3l-.177 2h-3l-.267 2.999h-2L14.499 17H8.5l-.267 2.999h-2L6.499 17H3.5l.178-2h2.999l.533-6.001H4.211L4.388 7h3l.267-3h2l-.267 3h6.001zm-.179 1.999H9.211L8.677 15h6.001l.532-6.001z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="historyLog"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a2 2 0 011.994 1.85L19 5v2h-2V5h-1v1a2 2 0 01-2 2H8a2 2 0 01-2-2V5H5v16h6v2H5a2 2 0 01-1.995-1.85L3 21V5a2 2 0 011.85-1.995L5 3h3.17l.068-.172A3 3 0 0111 1c1.293 0 2.403.82 2.823 2H17zm-6 0a1 1 0 00-.993.883l-.014.234A1 1 0 019 5H8v1h6V5h-1a1 1 0 01-1-.963l-.003-.113A1 1 0 0011 3zm10 8a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a1 1 0 00.293.707L14.586 16l-1.293 1.293A1 1 0 0013 18v3a2 2 0 002 2h4a2 2 0 002-2v-3a1 1 0 00-.293-.707L19.414 16l1.293-1.293A1 1 0 0021 14v-3zm-2 8l-2-1-2 1v-.586l1.707-1.707a.996.996 0 00.285-.58L17 16l.008.128a.996.996 0 00.285.58L19 18.413V19zm-1.707-3.707A.997.997 0 0017 16a.997.997 0 00-.293-.707L15 13.586V11h4v2.586l-1.707 1.707z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="homeKitchen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="home1Fill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"></path>
      </symbol>
      ,
      <symbol
        id="home1Outline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585a3 3 0 00-4.242 0l-8.586 8.585 1.414 1.415L4 11.586v6.586a3 3 0 003 3h10a3 3 0 003-3zm-14 0V9.586l5.293-5.293a1 1 0 011.414 0L18 9.586v8.586a1 1 0 01-1 1H7a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="home2Fill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.997 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585a3 3 0 00-4.242 0L1.29 11.464l1.414 1.415 1.293-1.293v6.586a3 3 0 003 3h10a3 3 0 003-3zM14.29 11h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="home2Outline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.977 2.744a3 3 0 00-4.098.135l-8.586 8.585 1.414 1.415L4 11.586v6.586l.005.176A3 3 0 007 21.172h10l.176-.006A3 3 0 0020 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585-.144-.135zM18 9.586l-5.293-5.293a1 1 0 00-1.32-.083l-.094.083L6 9.586v8.586a1 1 0 00.883.993l.117.007h10a1 1 0 00.993-.884l.007-.116V9.586zm-3 1.586h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="homeKitchenFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 3C5.522 3 4 4.03 4 5.667v1.86A4.5 4.5 0 019 12v1h6v-1a4.5 4.5 0 015-4.473v-1.86C20 4.03 18.478 3 17 3H7z"></path>
        <path d="M8 12a3.5 3.5 0 10-5 3.163V17.5a2 2 0 002 2V21h2v-1.5h10V21h2v-1.5a2 2 0 002-2v-2.337A3.5 3.5 0 1016 12v2H8v-2z"></path>
      </symbol>
      ,
      <symbol id="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4zM6 4a2 2 0 00-2 2v8.586l-1.707 1.707 1.414 1.414.293-.293V18a2 2 0 002 2h12a2 2 0 002-2v-2.586l.293.293 1.414-1.414L20 12.586V6a2 2 0 00-2-2H6zm14 8.586v2.828l-4-4-5.293 5.293a1 1 0 01-1.414 0L7 14.414l-3 3v-2.828l2.293-2.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 011.414 0L20 12.586zM8 10a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="import"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15 2c.237 0 .454.082.625.22l.082.073 5 5A.997.997 0 0121 8v12a2 2 0 01-2 2H8a2 2 0 01-2-2l-.001-5H3v-2h2.999L6 4a2 2 0 012-2h7zm-1 2H8l-.001 8.999h4.586l-2.292-2.292 1.414-1.414 4 4a1 1 0 010 1.414l-4 4-1.414-1.414L12.585 15l-4.586-.001L8 20h11V9h-4a1 1 0 01-1-1V4zm2 3l-.001-1.586L17.585 7H16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="indicator"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" opacity=".1"></circle>
        <circle cx="12" cy="12" r="4"></circle>
      </symbol>
      ,
      <symbol
        id="infoFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10-5a1 1 0 110 2 1 1 0 010-2zm-2 3h3v7h-2v-5h-1v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="infoOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="instagram"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.033 3H7.967A4.973 4.973 0 003 7.967v8.066A4.973 4.973 0 007.967 21h8.066A4.973 4.973 0 0021 16.033V7.967A4.973 4.973 0 0016.033 3zm3.37 13.033a3.374 3.374 0 01-3.37 3.37H7.967a3.374 3.374 0 01-3.37-3.37V7.967a3.374 3.374 0 013.37-3.37h8.066a3.374 3.374 0 013.37 3.37v8.066zM7.362 12A4.643 4.643 0 0112 7.362 4.643 4.643 0 0116.638 12 4.643 4.643 0 0112 16.638 4.643 4.643 0 017.362 12zM12 15.041a3.044 3.044 0 01-3.041-3.04A3.045 3.045 0 0112 8.958 3.045 3.045 0 0115.041 12 3.044 3.044 0 0112 15.041zm4.005-8.69c.218-.219.52-.343.828-.343.308 0 .61.124.828.343a1.176 1.176 0 010 1.656c-.218.218-.52.343-.828.343a1.18 1.18 0 01-.828-.343 1.18 1.18 0 01-.343-.828c0-.309.125-.611.343-.828z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="invoice"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 2H7a4 4 0 00-4 4v15a1 1 0 001.555.832L7 20.202l2.445 1.63a1 1 0 001.11 0L13 20.202l2.445 1.63A1 1 0 0017 21V5.5a1.5 1.5 0 013 0V14h-1v2h2a1 1 0 001-1V5.5a3.5 3.5 0 00-4-3.465V2zm-3 3.5v13.631l-1.445-.963a1 1 0 00-1.11 0L10 19.798l-2.445-1.63a1 1 0 00-1.11 0L5 19.13V6a2 2 0 012-2h8.337A3.486 3.486 0 0015 5.5zM13 8H7V6h6v2zm-6 4h6v-2H7v2zm6 4H7v-2h6v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="kidsToy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.817 4.5a3.5 3.5 0 103.5-3.5 1 1 0 100 2 1.5 1.5 0 11-1.5 1.5 1 1 0 10-2 0zM1 14.5A3.5 3.5 0 004.5 18h.015A8.993 8.993 0 0012 22a8.993 8.993 0 007.485-4h.015a3.5 3.5 0 001.332-6.738 8.954 8.954 0 00-1.4-3.339 1 1 0 10-1.65 1.13 6.955 6.955 0 011.168 3.105 1 1 0 00.817.866 1.5 1.5 0 11-.59 2.941 1 1 0 00-1.084.484A6.996 6.996 0 0112 20a6.996 6.996 0 01-6.093-3.551 1 1 0 00-1.084-.484 1.5 1.5 0 11-.59-2.942 1 1 0 00.817-.865A7.008 7.008 0 019.807 6.35a1 1 0 00-.626-1.9 9.012 9.012 0 00-6.013 6.812A3.502 3.502 0 001 14.5zm10-4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 18a4.997 4.997 0 01-4.307-2.459 1 1 0 011.722-1.017A2.997 2.997 0 0012 16a2.998 2.998 0 002.59-1.485 1 1 0 011.725 1.012A4.997 4.997 0 0112 18z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="kidsFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.5 1a1 1 0 100 2A1.5 1.5 0 1115 4.5a1 1 0 10-2 0A3.5 3.5 0 1016.5 1z"></path>
        <path
          fillRule="evenodd"
          d="M18.947 8.277A4.5 4.5 0 0112.027 5H12c-4.376 0-8.023 3.124-8.832 7.263A3.5 3.5 0 004.5 19h.016a8.996 8.996 0 008.591 3.933A8.999 8.999 0 0019.485 19h.015a3.5 3.5 0 001.332-6.737 8.965 8.965 0 00-1.885-3.986zM11 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6.807 3.541A4.997 4.997 0 0012 19a4.998 4.998 0 004.315-2.473 1 1 0 00-1.725-1.012A2.998 2.998 0 0112 17a2.997 2.997 0 01-2.585-1.476 1 1 0 00-1.722 1.018z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M15 6v2H5V6h10zm0 7v-2H5v2h10zm0 5v-2H5v2h10zm5-5v-2h-3v2h3zm0 3v2h-3v-2h3zm0-8V6h-3v2h3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="loading"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <mask
          id="a"
          width="6"
          height="6"
          x="17"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#a)">
          <path d="M17 9h6v6h-6z" opacity=".6"></path>
        </g>
        <mask
          id="b"
          width="6"
          height="6"
          x="9"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#b)">
          <path d="M9 9h6v6H9z" opacity=".8"></path>
        </g>
        <mask
          id="c"
          width="6"
          height="6"
          x="1"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="4" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#c)">
          <path d="M1 9h6v6H1z"></path>
        </g>
      </symbol>
      ,
      <symbol id="lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <path d="M10.5 4.667h-.583V3.5a2.918 2.918 0 00-5.834 0v1.167H3.5a1.17 1.17 0 00-1.167 1.166v5.834A1.17 1.17 0 003.5 12.833h7a1.17 1.17 0 001.167-1.166V5.833A1.17 1.17 0 0010.5 4.667zM5.25 3.5c0-.968.782-1.75 1.75-1.75s1.75.782 1.75 1.75v1.167h-3.5V3.5zm5.25 8.167h-7V5.833h7v5.834zM7 9.917A1.17 1.17 0 008.167 8.75 1.17 1.17 0 007 7.583 1.17 1.17 0 005.833 8.75 1.17 1.17 0 007 9.917z"></path>
      </symbol>
      ,
      <symbol
        id="luckyDraw"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="magnet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 1a4 4 0 00-4 4v14a4 4 0 004 4h10a4 4 0 004-4V5a4 4 0 00-4-4H7zM5 5a2 2 0 012-2h10a2 2 0 012 2v7H5V5zm0 9v5a2 2 0 002 2h10a2 2 0 002-2v-5H5zm12 3H7v-2h10v2zm-7 3h7v-2h-7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M14.707 4.856L9.293 3.05a1 1 0 00-.59-.013L2.725 4.746A1 1 0 002 5.708v13.92a1 1 0 001.275.961l5.428-1.55a1 1 0 01.59.012L15 20.953l6.275-1.792a1 1 0 00.725-.962V4.28a1.001 1.001 0 00-1.275-.961l-5.428 1.55a1 1 0 01-.59-.012zM16 6.747l4-1.142v11.84l-4 1.142V6.747zm-6-1.352v11.783l4 1.334V6.728l-4-1.333zM4 6.462L8 5.32v11.84l-4 1.143V6.462z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="mic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 1a5 5 0 015 5v6a5 5 0 01-10 0V6a5 5 0 015-5zm0 2a3 3 0 00-3 3v6a3 3 0 106 0V6a3 3 0 00-3-3zm1 20v-2.055c4.5-.497 8-4.312 8-8.945h-2a7 7 0 11-14 0H3c0 4.633 3.5 8.448 8 8.945V23h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="microphone"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M13 20.945V23h-2v-2.055C6.5 20.448 3 16.633 3 12h2a7 7 0 1014 0h2c0 4.633-3.5 8.448-8 8.945z"></path>
        <path
          fillRule="evenodd"
          d="M17 6A5 5 0 007 6v6a5 5 0 0010 0V6zM9 6a3 3 0 116 0v6a3 3 0 11-6 0V6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="mobile"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="money" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M20 3a3 3 0 012.995 2.824L23 6v12a3 3 0 01-2.824 2.995L20 21H4a3 3 0 01-2.995-2.824L1 18V6a3 3 0 012.824-2.995L4 3h16zM3 15a4 4 0 013.995 3.8L7 19h10a4 4 0 014-4V9a4 4 0 01-3.995-3.8L17 5H7a4 4 0 01-4 4v6zm13-3a4 4 0 10-8 0 4 4 0 008 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="moreHoriz"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="moreVert"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="moveToCart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M0 7.014h6.286L5 8.3l1.414 1.414 3-3a1 1 0 000-1.414l-3-3L5 3.714l1.3 1.3H0v2zM12 7V5h6V4a1 1 0 011-1h3v2h-2v11a1 1 0 01-1 1H4a1 1 0 01-.995-.9l-.71-7.097 2.01-.005.6 6.002H18V7h-6zM5 22a2 2 0 110-4 2 2 0 010 4zm13 0a2 2 0 110-4 2 2 0 010 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="multiSelect"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M21 8a5 5 0 00-5-5H9v2h7a3 3 0 013 3v8h2V8zm-7-2H7l-.2.005A4 4 0 003 10v7l.005.2A4 4 0 007 21h7l.2-.005A4 4 0 0018 17v-7l-.005-.2A4 4 0 0014 6zM7 8h7a2 2 0 012 2v7l-.005.15A2 2 0 0114 19H7l-.15-.006A2 2 0 015 17v-7l.005-.15A2 2 0 017 8zm7 2l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L7.414 12l2.293 2.293L14 10z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="nativeBusiness"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 1v3l-3 3V4l3-3zM11.5 9v2.984L8.5 9v3l3 3v8.005L7 23l-.5-1C8 22 9 21.395 9 20c0-1.6-1.12-2.72-2.464-4.064C4.52 13.92 2 11.4 2 6h6.5l3 3zM12.5 9v2.984L15.5 9v3l-3 3v8.005L17 23l.5-1C16 22 15 20.895 15 19.5c0-1.6 1.12-2.64 2.464-3.888C19.48 13.74 22 11.4 22 6h-6.5l-3 3zM8.5 4V1l3 3v3l-3-3z"></path>
      </symbol>
      ,
      <symbol
        id="newAddress"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zM11 6v3H8v2h3v3h2v-3h3V9h-3V6h-2zm3.768 10.281A21.542 21.542 0 0112 18.769a21.536 21.536 0 01-2.768-2.488C7.2 14.101 6 11.826 6 9.611 6 6.521 8.67 4 12 4s6 2.522 6 5.611c0 2.215-1.2 4.49-3.232 6.67z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="new" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M2.78 5.374l.068.096L6 10.513V5h2v9c0 .964-1.212 1.35-1.78.626l-.068-.096L3 9.487V15H1V6c0-.924 1.113-1.318 1.706-.711l.074.085zM18 11.238V5h-2v9l.006.114c.09.855 1.188 1.215 1.762.526l1.732-2.078 1.732 2.078.078.084c.616.598 1.69.172 1.69-.724V5h-2v6.238l-.732-.878-.084-.09a1 1 0 00-1.452.09l-.732.878zM23 19v-2H1v2h22zM15 7V5h-5l-.117.007A1 1 0 009 6.003l.022 8 .007.117a1 1 0 001 .88l4.978-.035-.014-2-3.974.028-.006-1.994L14 11V9h-2.992l-.005-2H15z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="notificationActiveFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 12c0 .854-.54 1.606-1.333 1.886A1 1 0 003 14.83V19a1 1 0 001 1h16a1 1 0 001-1v-4.17a1 1 0 00-.667-.944A2.001 2.001 0 0119 12V9A7 7 0 105 9v3zm7 11c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2zm6.02-19.262l1.504-1.318a9.964 9.964 0 012.477 6.589h-2a7.964 7.964 0 00-1.981-5.27zM4 9.008c0-1.966.711-3.82 1.981-5.27L4.477 2.42A9.964 9.964 0 002 9.009h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="notificationActiveOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2zm6.02-19.262l1.504-1.318a9.964 9.964 0 012.477 6.589h-2a7.964 7.964 0 00-1.981-5.27zM4 9.008c0-1.966.711-3.82 1.981-5.27L4.477 2.42A9.964 9.964 0 002 9.009h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="notificationMarkAsRead"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c1.93 0 3.734.786 5.041 2.143l.192.208L15.74 5.68a5 5 0 00-8.734 3.103L7 9v3a4 4 0 01-1.918 3.416L5 15.463 4.999 18H19v-2.537l-.081-.046a4 4 0 01-1.913-3.204L17 12h2c0 .854.54 1.606 1.333 1.886a1 1 0 01.66.818l.007.125V19a1 1 0 01-.883.993L20 20H4a1 1 0 01-.993-.884L3 19v-4.171a1 1 0 01.552-.894l.115-.049a2.001 2.001 0 001.327-1.727L5 12V9a7 7 0 017-7zm3 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2h6zm5.207-13.793l-1.414-1.414L12 12.585l-2.293-2.292-1.414 1.414 3 3 .094.083a1 1 0 001.32-.083l7.5-7.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="notificationOffFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 12c0 .854-.54 1.606-1.333 1.886A1 1 0 003 14.83V19a1 1 0 001 1h16a1 1 0 001-1v-4.17a1 1 0 00-.667-.944A2.001 2.001 0 0119 12V9A7 7 0 105 9v3zm7 11c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="notificationOffOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="openInNewWindow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 13v3a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h3V4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-3h-2zm-8.707.293l1.414 1.414L18 7.414V11h2V5a1 1 0 00-1-1h-6v2h3.586l-7.293 7.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="order" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 014.995 4.783L17 7h2a1 1 0 01.993.883L20 8v11a3 3 0 01-2.824 2.995L17 22H7a3 3 0 01-2.995-2.824L4 19V8a1 1 0 01.883-.993L5 7h2a5 5 0 015-5zm6 7h-1v2h-2V9H9v2H7V9H6v10a1 1 0 00.77.974l.113.02L7 20h10a1 1 0 00.993-.883L18 19V9zM9.005 6.824A3 3 0 0115 7H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packageError"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM11 7v7h2V7h-2zm2 9a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packageInProgress"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm4 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packageNoReceived"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.172 4.243l1.415-1.415L13.413 12l2.83-2.828-1.415-1.415L12 10.587l-2.828-2.83-1.415 1.415L10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packagePartlyReceived"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zM7 11h10v2H7v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packageReceived"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zm-9.293 1.293L15 9l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L8.414 11l2.293 2.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="packageReturned"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM10 8.207h4.586l-2.293-2.293L13.707 4.5l4 4a1 1 0 010 1.414l-4 4-1.414-1.414 2.293-2.293H10a2 2 0 00-2 2V13.5a2 2 0 002 2h7v2h-7a4 4 0 01-4-4v-1.293a4 4 0 014-4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M11 18V6H8v12h3zm6 0V6h-3v12h3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="pending"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path
          fillRule="evenodd"
          d="M1.508 8.974a.583.583 0 111.098-.395A4.668 4.668 0 0011.666 7a4.667 4.667 0 00-4.668-4.667.583.583 0 110-1.166 5.833 5.833 0 11-5.49 7.807zm3.545-7.475a.583.583 0 01.39 1.1c-.225.08-.442.175-.65.288a.583.583 0 11-.553-1.028c.261-.14.533-.26.813-.36zM3.386 3.144a.583.583 0 00-.823.065 5.804 5.804 0 00-.524.718.583.583 0 00.992.614c.125-.202.265-.394.42-.574a.583.583 0 00-.065-.823zm-2.124 2.79a.583.583 0 111.147.213c-.043.234-.069.47-.076.707a.583.583 0 11-1.166-.035c.009-.297.04-.593.095-.885zM7.582 7V3.5H6.415v3.096l-1.955.733.41 1.092 2.333-.875A.583.583 0 007.582 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.413 18.069l2.33-3.883a1 1 0 011.173-.435c1.7.567 3.393.849 5.084.849a1 1 0 011 1V21a1 1 0 01-1 1C9.648 22 2 14.352 2 3a1 1 0 011-1h5.4a1 1 0 011 1c0 1.691.282 3.384.849 5.084a1 1 0 01-.434 1.173l-3.884 2.33a14.784 14.784 0 006.482 6.482zM20 19.979V16.57a17.988 17.988 0 01-3.947-.683l-1.792 2.987c1.739.634 3.661 1.012 5.739 1.103zM7.43 4c.076 1.317.304 2.633.682 3.947L5.125 9.739C4.491 8 4.113 6.078 4.022 4h3.407z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="playCircle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm5-8L9 7v10l8-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="playSimple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 5l11 7-11 7V5z"></path>
      </symbol>
      ,
      <symbol
        id="plusIncredible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222 24"
      >
        <path d="M192.699 0a.613.613 0 00-.484.237l-3.92 5.039a.154.154 0 00.121.247h.614a.613.613 0 00.484-.236l3.92-5.04a.154.154 0 00-.122-.247h-.613zM184.113.614c.332 0 .577.22.61.536l.004.075v1.832c0 .33-.221.574-.539.607l-.075.004h-2.147c-.332 0-.577-.22-.61-.536l-.004-.075V1.225c0-.33.221-.574.539-.607l.075-.004h2.147zM212.089 5.002a.664.664 0 01-.661-.59l-.004-.073V1.276c0-.341.26-.622.593-.658l.072-.004h1.865c.343 0 .625.258.661.59l.004.072.001.865h2.144c.343 0 .625.258.661.59l.004.072v1.536c0 .342-.26.623-.593.659l-.072.004h-4.675zM36.223 3.069c.331 0 .576.22.61.536l.004.074v9.84c0 .44-.04.847-.117 1.223h4.092c.426-.002.807-.196 1.088-.47.25-.248.41-.568.441-.934l.005-.124V9.19c0-.337.215-.589.542-.62l.072-.004h1.841c.341 0 .578.215.61.535l.004.076v3.98a4.588 4.588 0 01-1.382 3.28c-.807.794-1.816 1.305-3.028 1.354l-.193.004h-3.928a.672.672 0 01-.481-.202l-.05-.058-.642-.834c-.69.679-1.686 1.053-2.956 1.09l-.214.004h-6.75a.587.587 0 01-.609-.537l-.004-.074v-1.833c0-.33.221-.574.539-.607l.075-.004h6.75c.8 0 1.192-.356 1.224-1.116l.003-.106V3.68c0-.33.22-.573.538-.607l.075-.003h1.84zM73.648 9.943c-.077-2.514-2.052-4.43-4.6-4.43H65.06l-.269.003c-.355.014-.783.07-.959.302L62.57 7.705c-.182.322-.027.862.343.862h6.136l.1.003a1.546 1.546 0 011.434 1.524v4.672H57.696l-.075.003a.586.586 0 00-.538.607v1.833l.004.075a.587.587 0 00.61.536h2.454l-.004.09c-.068.813-1.03 1.743-1.837 1.743h-4.915l-.108-.003a1.842 1.842 0 01-1.733-1.84l.006-5.578-.003-.074a.588.588 0 00-.61-.537h-1.84l-.076.004a.587.587 0 00-.538.607v5.588l.001.155c.07 2.674 2.19 4.732 4.9 4.732h4.916l.147-.002c2.538-.084 4.762-2.346 4.762-4.885h9.817l.075-.004a.588.588 0 00.539-.607v-.61l.67.848.062.075c.211.234.464.298.802.298h3.988l.162-.002c2.507-.069 4.133-1.83 4.133-4.364V9.178l-.003-.075a.587.587 0 00-.61-.536h-1.84l-.076.004a.587.587 0 00-.538.607v4.276l-.003.196c-.032.76-.425 1.116-1.225 1.116H73.65v-4.672l-.002-.151zM42.897 19.612c.343 0 .625.259.661.59l.004.072v3.064c0 .341-.26.622-.593.658l-.072.004h-1.864a.664.664 0 01-.662-.59l-.004-.072v-.865h-2.144a.664.664 0 01-.662-.59l-.004-.072v-1.537c0-.34.26-.622.593-.658l.073-.004h4.674zM81.627 19.653c.332 0 .576.22.61.536l.003.075v1.832c0 .331-.22.575-.538.608l-.075.003h-4.91a.587.587 0 01-.609-.536l-.004-.075v-1.832c0-.33.221-.574.539-.607l.075-.004h4.909z"></path>
        <path d="M67.82 19.653c.333 0 .577.22.61.536l.004.075v1.832c0 .331-.22.575-.538.608l-.075.003h-2.148a.587.587 0 01-.61-.536l-.003-.075v-1.832c0-.33.22-.574.538-.607l.075-.004h2.148zM11.66 8.567c.332 0 .577.22.61.536l.004.075v5.568h1.842c.98 0 1.782-.766 1.838-1.733l.003-.108V9.178c0-.33.222-.574.539-.607l.075-.004h1.808c.333 0 .607.25.642.573l.004.07v4.028c0 .532-.092 1.045-.261 1.523l.274-.002a1.841 1.841 0 001.825-1.734l.003-.107v-3.74c0-.33.223-.574.54-.607l.075-.004h1.808c.333 0 .607.25.642.573l.004.07v4.028a4.548 4.548 0 01-1.34 3.226 4.58 4.58 0 01-3.05 1.333l-.189.004h-.828a.647.647 0 01-.467-.199l-.713-.834a4.583 4.583 0 01-2.709 1.029l-.192.004-2.172-.02a4.296 4.296 0 01-4.149 4.294l-.148.002H4.296A4.296 4.296 0 01.003 17.93L0 17.781V10.4c0-.33.221-.573.539-.607l.075-.003h1.84c.333 0 .577.22.61.536l.005.074v6.783c0 .98.766 1.782 1.733 1.838l.108.003h2.455c.98 0 1.782-.767 1.838-1.733l.003-.108V9.178c0-.33.221-.574.539-.607l.074-.004h1.842zM91.444 5.512c2.545 0 4.224 1.62 4.293 4.116l.002.16v3.733c0 2.534-1.626 4.206-4.133 4.274l-.162.003h-5.522a.588.588 0 01-.61-.537l-.004-.074v-1.833c0-.33.221-.574.539-.607l.075-.004h5.522c.8 0 1.193-.356 1.225-1.116l.002-.106V9.79c0-.797-.357-1.188-1.12-1.22l-.107-.002h-5.522a.588.588 0 01-.61-.537l-.004-.074V6.123c0-.33.221-.574.539-.607l.075-.004h5.522zM27.58 3.522c-.088-.313-.444-.453-.77-.453h-1.632c-.355 0-.71.27-.613.61l2.342 8.387c.09.32.383.54.715.54h2.001c.352 0 .57-.26.474-.598L27.58 3.522zM166.618 6.06a.588.588 0 00-.61-.537h-4.909l-.075.004a.586.586 0 00-.538.607v1.833l.004.075a.586.586 0 00.609.536h4.909l.075-.004a.586.586 0 00.539-.607V6.134l-.004-.074zM117.521 20.1a.588.588 0 00-.61-.537h-4.909l-.075.004a.586.586 0 00-.538.607v1.833l.003.074a.588.588 0 00.61.537h4.909l.075-.004a.586.586 0 00.538-.607v-1.833l-.003-.075zM107.706 2.455c.332 0 .577.22.61.536l.004.075v1.833c0 .33-.221.573-.539.607l-.075.003h-1.841c-.332 0-.577-.22-.61-.536l-.004-.074V3.066c0-.33.221-.574.539-.607l.075-.004h1.841zM141.149 2.991a.587.587 0 00-.61-.536h-2.147l-.075.004a.586.586 0 00-.539.607v1.833l.004.074c.033.317.278.536.61.536h2.147l.075-.003a.586.586 0 00.539-.607V3.066l-.004-.075zM125.32.237a.613.613 0 01.484-.237h.614c.127 0 .199.147.121.248l-3.919 5.038a.615.615 0 01-.485.237h-.613a.153.153 0 01-.121-.247l3.919-5.04z"></path>
        <path
          fillRule="evenodd"
          d="M188.103 12.888c0 .651-.127 1.273-.357 1.841h8.946c1.756 0 3.068-1.312 3.068-3.068v-.614c0-1.757-1.312-3.069-3.068-3.069h-7.056c-.552 0-.659-.495-.307-.92l5.168-6.601c.239-.29.595-.457.97-.457h2.358a.56.56 0 01.431.918l-3.098 3.992h1.534c3.519 0 6.136 2.618 6.136 6.137v.614a6.359 6.359 0 01-.76 3.068h3.195a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h2.189a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h.366a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .613.275.613.614v3.682a4.91 4.91 0 01-4.909 4.91h-.59a.614.614 0 01-.505-.265l-.633-.914a4.89 4.89 0 01-3.191 1.179h-2.431a.614.614 0 01-.505-.265l-.626-.904a4.891 4.891 0 01-3.18 1.169h-3.667a.614.614 0 01-.505-.265l-.647-.935c-1.021.76-2.311 1.2-3.752 1.2h-22.714a.612.612 0 01-.504-.265l-.626-.904a4.89 4.89 0 01-3.18 1.169h-12.251a4.91 4.91 0 01-4.91-4.91V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682a1.84 1.84 0 001.841 1.841h12.251a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .613.275.613.614v3.682c0 .651-.126 1.273-.356 1.841h4.419a4.898 4.898 0 01-.357-1.841v-1.841a4.91 4.91 0 119.82 0v1.841zm-3.069-1.841v1.841a1.84 1.84 0 11-3.682 0v-1.841a1.84 1.84 0 113.682 0z"
          clipRule="evenodd"
        ></path>
        <path d="M135.933 11.66c0 1.137-.272 2.179-.76 3.07h5.036a1.842 1.842 0 001.842-1.842V9.206c0-.34.274-.614.613-.614h1.841c.339 0 .614.275.614.614v3.682a4.91 4.91 0 01-4.91 4.91h-4.281a.612.612 0 01-.504-.265l-1.116-1.611c-1.101 1.17-2.684 1.876-4.511 1.876h-10.591l-.941-1.202a4.889 4.889 0 01-3.218 1.202h-5.509a.614.614 0 01-.504-.265l-.674-.973v.01c0 3.52-2.618 6.137-6.136 6.137h-.627c-.377 0-.734-.173-.966-.47l-1.314-1.678c-.351-.425-.245-.92.307-.92h2.6c1.756 0 3.068-1.312 3.068-3.069l-.001-7.364c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v5.523h6.687a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h10.197c1.756 0 3.068-1.312 3.068-3.068v-.614c0-1.757-1.312-3.069-3.068-3.069h-7.056c-.552 0-.659-.495-.307-.92l5.168-6.601c.239-.29.595-.457.971-.457h2.357a.56.56 0 01.432.918l-3.099 3.992h1.534c3.519 0 6.136 2.618 6.136 6.137v.614zM146.984 2.455c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v14.729a.614.614 0 01-.614.614h-1.841a.614.614 0 01-.614-.614V2.454z"></path>
      </symbol>
      ,
      <symbol
        id="plusMonth"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 4h-1V2h-2v2H7V2H5v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V8h16v12zM10 10h3v8h-2v-6h-1v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M20.362 13.877a.738.738 0 00.638-.732v-2.29l-.008-.11a.738.738 0 00-.63-.622l-.1-.007-.16.005-.066-.001-.276.014a5.745 5.745 0 01-4.215-1.68 5.748 5.748 0 01-1.665-4.492L13.88 3.9l.01-.002v-.159l-.008-.11a.739.739 0 00-.63-.621L13.15 3h-2.302l-.1.007a.738.738 0 00-.638.731v.159l.01.002-.001.063a5.748 5.748 0 01-1.665 4.492 5.746 5.746 0 01-4.491 1.666h-.067l-.16-.004-.1.007a.738.738 0 00-.637.732v2.29l.008.11a.738.738 0 00.63.622l.1.007.16-.005.066.001.276-.014a5.745 5.745 0 014.215 1.68 5.748 5.748 0 011.665 4.492l.001.063-.01.002v.159l.008.11a.739.739 0 00.63.621l.1.007h2.302l.1-.007a.738.738 0 00.638-.731v-.159l-.01-.002.001-.063a5.748 5.748 0 011.665-4.492 5.746 5.746 0 014.491-1.666h.067l.16.004.1-.007zM12.06 17.88l-.056.266-.003-.007-.003.014-.056-.273-.081-.322a7.734 7.734 0 00-5.715-5.495L5.835 12l.31-.063a7.737 7.737 0 005.796-5.816l.054-.264.005.004.003-.014.056.273.081.322a7.733 7.733 0 005.715 5.495l.31.063-.31.063a7.737 7.737 0 00-5.796 5.816z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="post" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M23 7v10a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h16a3 3 0 013 3zm-2 0a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V7zm-1 .993l-8 4.828L4 8v2.223l7.47 4.625a1 1 0 001.06 0L20 10.223v-2.23z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="priceChart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 18V4H2v15a1 1 0 001 1h19v-2H4zM22 8a2 2 0 10-3.933.517l-2.55 2.55a2.003 2.003 0 00-1.034 0l-1.55-1.55A2.003 2.003 0 0011 7a2 2 0 00-1.933 2.517l-1.55 1.55A2.003 2.003 0 005 13a2 2 0 103.933-.517l1.55-1.55a2.003 2.003 0 001.035 0l1.55 1.55A2.003 2.003 0 0015 15a2 2 0 001.933-2.517l2.55-2.55A2.002 2.002 0 0022 8z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="priceTag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.293 12.293l9-9A1 1 0 0112 3h5a1 1 0 01.707.293l3 3A1 1 0 0121 7v5a1 1 0 01-.293.707l-9 9a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414zM4.414 13L11 19.586l8-8V7.414L16.586 5h-4.172l-8 8zM15 12a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="productAvailable"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="productIdeal"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 2h-2v7H8V5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zm-8 0h4v5h-4V5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="productNotAvailable"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm4.95 4.636l1.414 1.414-2.95 2.95 2.95 2.95-1.414 1.414-2.95-2.95-2.95 2.95-1.414-1.414 2.95-2.95-2.95-2.95 1.414-1.414 2.95 2.95 2.95-2.95z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="profileOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="profileOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 7A5 5 0 007 7v1a5 5 0 0010 0V7zm4.996 13.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="promo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M3.65 1.408L.87 17.165l4.803.847 2.737-.302a4 4 0 007.973-.207l.005-.205.005-.442 4.695.827 1.736-9.848-4.782-.843-9.59-4.737-4.803-.847zM14.39 17.05l-.003.238a2 2 0 01-3.99.203l3.993-.441zM7.241 4.07l-1.97-.346-2.083 11.818 1.97.347L7.24 4.07zm1.898.753l7.473 3.692-1.13 6.402-8.284.913L9.14 4.824zm11.368 4.634l-1.97-.348-1.041 5.91 1.97.346 1.041-5.908z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="question"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="recommendedProduct"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 21v-4.914l.028-.017.035-.022c.735-.462 1.078-.729 1.418-1.212.34-.482.472-.884.675-1.77l.007-.03c.069-.3.105-.445.153-.596l.019-.06a8.36 8.36 0 01.21-.542C19.873 11.032 20 10.6 20 10c0-.6-.127-1.032-.455-1.836a8.366 8.366 0 01-.21-.543l-.02-.06a7.472 7.472 0 01-.152-.595l-.007-.031c-.203-.885-.336-1.287-.674-1.769-.34-.483-.682-.748-1.418-1.211l-.031-.02a6.859 6.859 0 01-.501-.333 6.226 6.226 0 01-.407-.344l-.082-.073c-.644-.578-1-.837-1.56-1.025-.555-.187-.964-.192-1.86-.117-.138.012-.202.017-.278.022-.135.01-.245.014-.345.014-.095 0-.199-.004-.323-.013a16.69 16.69 0 01-.3-.023c-.896-.075-1.305-.07-1.86.116-.56.19-.916.448-1.561 1.026l-.083.074c-.186.167-.296.26-.406.343-.121.091-.24.17-.5.333l-.034.021c-.734.461-1.075.728-1.415 1.21-.339.483-.472.885-.675 1.773l-.006.027c-.07.302-.106.446-.153.596l-.009.029-.01.03a8.391 8.391 0 01-.21.543C4.127 8.968 4 9.399 4 10s.127 1.032.455 1.837c.125.306.164.406.21.542l.01.03.01.03c.046.15.082.294.152.596l.006.026c.203.888.336 1.29.675 1.774.34.482.683.75 1.415 1.21l.038.024.029.018V21a1 1 0 001.243.97L12 21.03l3.758.94A1 1 0 0017 21zm.693-12.081c.232.57.307.823.307 1.081s-.075.511-.307 1.082a9.71 9.71 0 00-.255.662l-.03.096a9.062 9.062 0 00-.195.748l-.007.03c-.144.63-.224.871-.36 1.066-.137.193-.334.347-.847.669l-.035.022c-.305.192-.455.29-.634.425a7.88 7.88 0 00-.538.45l-.083.076c-.446.399-.65.547-.865.62-.201.067-.435.07-1.054.018a20.846 20.846 0 00-.307-.024 6.953 6.953 0 00-.483-.018c-.144 0-.29.005-.457.016a18.6 18.6 0 00-.333.026c-.62.052-.854.049-1.058-.02-.213-.071-.416-.22-.861-.618l-.084-.075a7.863 7.863 0 00-.536-.45 8.33 8.33 0 00-.636-.426l-.038-.024c-.51-.32-.707-.474-.842-.667-.138-.195-.218-.438-.363-1.07l-.006-.026a9.16 9.16 0 00-.193-.747l-.016-.05-.015-.047a9.736 9.736 0 00-.255-.662C6.075 10.511 6 10.258 6 10c0-.258.075-.511.307-1.081.143-.349.19-.47.255-.663l.015-.047.016-.049c.067-.216.112-.396.193-.747l.006-.027c.145-.631.225-.874.362-1.07.136-.192.332-.345.843-.666l.034-.021c.308-.194.459-.294.64-.43.166-.125.31-.248.536-.45l.083-.075c.446-.398.65-.546.865-.62.202-.067.436-.07 1.054-.018.16.013.238.02.334.026.166.011.313.017.457.017.152 0 .306-.006.483-.019l.307-.024c.619-.052.853-.049 1.055.02.215.072.419.22.864.618l.082.074c.227.203.37.326.537.451.182.137.332.236.64.43l.031.02c.514.322.711.475.847.668.136.194.216.436.36 1.065l.008.03c.08.35.126.532.194.749l.03.095c.065.193.113.314.255.663zm-3.4-1.626l1.414 1.414-3.5 3.5a1 1 0 01-1.414 0l-2-2 1.414-1.414 1.293 1.293 2.793-2.793zm.188 10.549c.19-.065.357-.137.519-.227v2.104l-2.758-.69a1 1 0 00-.485 0L9 19.72v-2.103c.161.09.327.161.516.225.557.186.965.19 1.86.116.15-.012.22-.018.3-.023.125-.008.23-.012.324-.012.1 0 .21.004.345.013.076.006.14.01.279.022.895.075 1.303.07 1.857-.116z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="redo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17.586 9H8a4 4 0 00-4 4v2a4 4 0 004 4h12v-2H8a2 2 0 01-2-2v-2a2 2 0 012-2h9.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 000-1.414l-4-4-1.414 1.414L17.586 9z"></path>
      </symbol>
      ,
      <symbol
        id="referral"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6 1a3 3 0 013 3v1a3 3 0 01-6 0V4a3 3 0 013-3zm11.5 7a3.5 3.5 0 013.5 3.5v1a3.5 3.5 0 11-7 0v-1A3.5 3.5 0 0117.5 8zM6.707 13.293l-.094-.083a1 1 0 00-1.32.083l-3 3 1.414 1.414L5 16.414V19a3 3 0 003 3h2v-2H8a1 1 0 01-1-1v-2.586l1.293 1.293 1.414-1.414-3-3zm17.287 7.595C23.697 18.26 21.387 17 17.5 17c-3.886 0-6.197 1.26-6.494 3.888A1 1 0 0012 22h11a1 1 0 00.994-1.112zm-12.02-7.21C11.64 10.616 9.53 9 6 9 2.378 9 .251 10.702.003 13.923L0 14s2 0 2.004.002l.012-.126C2.239 11.904 3.451 11 6 11c2.606 0 3.814.944 3.997 3.008C10 14 12 14 12 14l-.026-.322zM5 4a1 1 0 012 0v1a1 1 0 01-2 0V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="registerationSignIn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="registerationSignOut"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm-9-2h12.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 000-1.414l-4-4-1.414 1.414L19.586 11H7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="reload"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.9 7a7 7 0 102.1 5h2a9 9 0 11-3-6.71V3h2v5a1 1 0 01-1 1h-5V7h2.9z"></path>
      </symbol>
      ,
      <symbol
        id="removeCircle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm15 1v-2H7v2h10z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="removeSimple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11v2H4v-2h16z"></path>
      </symbol>
      ,
      <symbol
        id="repurchase"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8.293 15.707l3 3 1.414-1.414L11.415 16H12l.176.005A3 3 0 119 19a1 1 0 00-1-1H7l-.117-.007A1 1 0 016 17V7h1v2h2V7h6v2h2V7h1v13l.15-.006A2 2 0 0020 18V6l-.007-.117A1 1 0 0019 5h-2l-.005-.217A5 5 0 007 5H5l-.117.007A1 1 0 004 6v11l.005.176A3 3 0 007 20h.101l.011.059A5.002 5.002 0 0017 19a5 5 0 00-5-5h-.585l1.292-1.293-1.414-1.414-3 3-.083.094a1 1 0 00.083 1.32zm.712-10.883A3 3 0 0115 5H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="return"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 2H6l-.176.005A3 3 0 003 5v11l.005.176A3 3 0 006 19h1.1l.048.212A5.002 5.002 0 0017 18a5 5 0 00-4.601-4.984l1.308-1.309-1.414-1.414-3 3-.083.094a1 1 0 00.083 1.32l3 3 1.414-1.414-1.258-1.26A3 3 0 119 18a1 1 0 00-1-1H6l-.117-.007A1 1 0 015 16V5l.007-.117A1 1 0 016 4h2v5h8V4h2l.117.007A1 1 0 0119 5v11l-.007.117A1 1 0 0118 17v2l.176-.005A3 3 0 0021 16V5l-.005-.176A3 3 0 0018 2zm-8 2h4v3h-4V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="saveForLater"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9 1H7v1a3 3 0 00-3 3v15a3 3 0 003 3h10a3 3 0 003-3v-1h-2v1a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1v1h2V4h2v1h2V4h2v1h2V4a1 1 0 011 1v8h2V5a3 3 0 00-3-3V1h-2v1h-2V1h-2v1H9V1zM8 8h5v2H8V8zm5 4H8v2h5v-2zm-5 4h3v2H8v-2zm7-8a1 1 0 100 2 1 1 0 000-2zm1.414 7H22v2h-5.586l1.293 1.293-1.414 1.414-3-3a1 1 0 010-1.414l3-3 1.414 1.414L16.414 15z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="searchHistory"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-14v5.586l3.707 3.707-1.414 1.414-4-4A1 1 0 0111 12V6h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="searchPlaceSuggest"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M17 8.414L6.707 18.707l-1.414-1.414L15.586 7H9V5h9a1 1 0 011 1v9h-2V8.414z"></path>
      </symbol>
      ,
      <symbol
        id="searchSearch"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="searchTrend"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="sellerTrusted"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.758 21.972a1 1 0 001.242-.97v-5H7v5a1 1 0 001.243.97L12 21.033l3.758.94z"></path>
        <path d="M21.003 11c0 .676-.143 1.16-.513 2.066-.14.344-.184.456-.236.61l-.021.067c-.054.17-.095.333-.172.67l-.008.035c-.229.995-.378 1.448-.76 1.99-.382.543-.768.844-1.594 1.362l-.04.025c-.291.183-.424.27-.558.371a7.027 7.027 0 00-.457.386l-.093.084c-.726.65-1.126.94-1.758 1.153-.622.208-1.082.214-2.089.13a19.775 19.775 0 00-.313-.024 5.643 5.643 0 00-.388-.016c-.107 0-.224.005-.365.014l-.338.026c-1.006.084-1.466.078-2.092-.13-.629-.213-1.03-.503-1.755-1.153l-.093-.084a7.026 7.026 0 00-.456-.385 7.729 7.729 0 00-.559-.372l-.043-.027c-.823-.517-1.21-.818-1.591-1.36-.382-.543-.531-.996-.76-1.995l-.007-.03a8.55 8.55 0 00-.172-.67l-.021-.067a9.447 9.447 0 00-.236-.61c-.37-.905-.512-1.39-.512-2.066 0-.676.143-1.16.512-2.065a9.43 9.43 0 00.236-.61l.021-.066c.053-.17.094-.332.172-.672l.007-.03c.229-.998.378-1.451.76-1.993.381-.543.766-.843 1.591-1.361l.038-.024c.294-.184.426-.272.563-.375.124-.093.247-.198.457-.386l.093-.083c.726-.65 1.126-.94 1.757-1.153.624-.21 1.083-.216 2.09-.131.17.014.247.02.339.026.14.01.257.014.364.014.112 0 .236-.005.388-.015l.313-.025c1.007-.085 1.467-.079 2.091.131.63.212 1.03.503 1.756 1.153l.092.082c.21.189.334.294.458.387.136.103.269.19.564.375l.034.022c.829.52 1.213.82 1.595 1.362.381.542.53.994.759 1.99l.008.034c.077.338.118.5.172.671l.021.067c.052.153.096.266.236.61.37.905.513 1.39.513 2.065z"></path>
        <path d="M19 11.003c0-.301-.087-.597-.358-1.262a11.333 11.333 0 01-.297-.773l-.036-.111c-.08-.253-.133-.465-.226-.873l-.009-.036c-.168-.734-.261-1.016-.42-1.243-.159-.225-.388-.403-.988-.78l-.036-.023a9.82 9.82 0 01-.747-.5 9.198 9.198 0 01-.626-.526l-.097-.087c-.519-.465-.756-.638-1.007-.722-.237-.08-.51-.083-1.23-.023-.173.015-.256.021-.359.028a8.042 8.042 0 01-.564.022c-.168 0-.34-.006-.533-.02a21.266 21.266 0 01-.39-.03c-.721-.06-.994-.057-1.23.022-.251.085-.489.258-1.008.723l-.098.088a9.206 9.206 0 01-.625.524c-.211.16-.387.275-.747.501l-.039.025c-.596.375-.825.553-.983.778-.16.228-.254.511-.423 1.248l-.007.031c-.094.41-.147.62-.226.872l-.036.112c-.075.225-.13.366-.297.773-.271.665-.358.96-.358 1.262 0 .3.087.596.358 1.261.166.407.222.549.297.774l.036.112c.08.252.132.461.226.871l.007.031c.169.737.262 1.02.423 1.249.158.225.388.404.983.778l.044.028c.356.223.531.34.742.497.194.146.361.29.625.525l.098.087c.52.466.757.638 1.005.722.238.08.512.083 1.234.023.188-.016.277-.023.39-.03a7.92 7.92 0 01.532-.02c.177 0 .357.008.564.022l.357.028c.722.06.996.057 1.23-.022.252-.085.49-.257 1.009-.723l.098-.087a9.22 9.22 0 01.627-.526c.21-.157.384-.272.74-.496l.041-.026c.598-.375.828-.555.987-.78.16-.227.253-.51.421-1.244l.009-.036c.093-.408.147-.62.226-.872l.036-.111c.075-.225.13-.367.297-.774.27-.665.358-.96.358-1.261z"></path>
        <path d="M11.207 11.793L15 8l1.414 1.414-4.5 4.5a1 1 0 01-1.414 0l-2.5-2.5L9.414 10l1.793 1.793z"></path>
      </symbol>
      ,
      <symbol
        id="seller"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="serial"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6zM5 6h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1zm3 2v8H6V8h2zm5 8V8H9v8h4zm5-8v8h-2V8h2zm-3 8V8h-1v8h1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="setting"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.562 9.009a8.208 8.208 0 00-.098-.237l.402-.562a2.11 2.11 0 00-.23-2.724l-1.118-1.117a2.104 2.104 0 00-2.72-.225l-.56.4a8.009 8.009 0 00-.284-.118l-.112-.664A2.11 2.11 0 0012.758 2h-1.583A2.11 2.11 0 009.09 3.763l-.119.7a7.958 7.958 0 00-.235.099l-.55-.396a2.104 2.104 0 00-1.23-.395c-.565 0-1.104.224-1.5.626L4.34 5.51c-.73.73-.828 1.88-.23 2.721l.413.58c-.034.079-.066.159-.098.24l-.663.111A2.11 2.11 0 002 11.246v1.583a2.11 2.11 0 001.763 2.084l.7.12c.032.079.065.157.099.235l-.392.546a2.11 2.11 0 00.228 2.727l1.117 1.117a2.104 2.104 0 002.72.224l.576-.409c.064.028.13.055.196.08l.113.682A2.111 2.111 0 0011.205 22h1.586a2.11 2.11 0 002.085-1.763l.115-.682c.08-.032.159-.064.237-.098l.562.401a2.1 2.1 0 001.228.393c.562 0 1.095-.222 1.493-.62l1.12-1.12c.73-.73.827-1.879.228-2.72l-.403-.566c.035-.078.067-.157.099-.236l.68-.113A2.111 2.111 0 0022 12.79v-1.583a2.094 2.094 0 00-1.755-2.084l-.683-.115zM20 11.195v1.596a.11.11 0 01-.094.112l-1.263.21-.612.103-.18.594c-.106.348-.252.7-.437 1.052l-.285.544 1.101 1.545a.113.113 0 01-.013.146l-1.12 1.12a.104.104 0 01-.08.034.105.105 0 01-.062-.018l-1.044-.746-.503-.36-.546.29a6.135 6.135 0 01-1.054.435l-.587.182-.318 1.87a.111.111 0 01-.112.096h-1.586a.11.11 0 01-.112-.094l-.21-1.263-.102-.607-.587-.183a6.12 6.12 0 01-1.021-.42l-.544-.285-1.558 1.108a.098.098 0 01-.063.022.104.104 0 01-.078-.034l-1.121-1.121a.11.11 0 01-.013-.146l.738-1.026.365-.508-.296-.55a5.959 5.959 0 01-.441-1.046l-.183-.585-1.882-.32A.112.112 0 014 12.828v-1.583a.11.11 0 01.094-.112l1.25-.21.612-.104.179-.594c.11-.37.253-.72.428-1.054l.285-.544L5.74 7.071a.113.113 0 01.013-.145l1.123-1.12a.105.105 0 01.08-.035c.025 0 .046.007.062.018L8.56 6.9l.55-.296a5.96 5.96 0 011.047-.441l.584-.183.321-1.882A.112.112 0 0111.175 4h1.583a.11.11 0 01.111.094l.211 1.25.104.613.596.178c.37.11.734.261 1.09.45l.545.287 1.547-1.102a.098.098 0 01.063-.022c.03 0 .055.01.08.035l1.12 1.12c.04.04.045.1.012.146l-.743 1.04-.36.503.29.546c.176.334.322.686.436 1.054l.182.587 1.87.317c.055.01.089.05.088.099zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.917 14.16l-6.94 3.47a3 3 0 11-.895-1.789l6.94-3.47a3.021 3.021 0 010-.742l-6.94-3.47a3 3 0 11.895-1.789l6.94 3.47a3 3 0 110 4.319z"></path>
      </symbol>
      ,
      <symbol
        id="shuffle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22.414 6.293l-3-3L18 4.707 19.292 6h-2.464l-.198.006a3 3 0 00-1.923.873L12.305 9.28l1.414 1.414 2.402-2.402.1-.087A1 1 0 0116.827 8h2.464L18 9.293l1.414 1.414 3-3 .083-.094a1 1 0 000-1.226l-.083-.094zM5.172 6l.198.006a3 3 0 011.763.724l.16.149 8.828 8.828.1.087a1 1 0 00.476.197l.131.009h2.464L18 14.707l1.414-1.414 3 3 .083.094a1 1 0 010 1.226l-.083.094-3 3L18 19.293 19.292 18h-2.464l-.198-.007a3 3 0 01-1.763-.723l-.16-.149L5.88 8.293l-.1-.087a1 1 0 00-.476-.197l-.131-.01H2V6h3.172zm3.111 7.302l1.415 1.415-2.405 2.404a3 3 0 01-1.923.872L5.172 18H2v-2h3.172a1 1 0 00.608-.206l.099-.087 2.404-2.405z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="sms" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M8.586 19l2.707 2.707a1 1 0 001.414 0L15.414 19H19a4 4 0 004-4V7a4 4 0 00-4-4H5a4 4 0 00-4 4v8a4 4 0 004 4h3.586zm5.707-1.707L12 19.586l-2.293-2.293A1 1 0 009 17H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4a1 1 0 00-.707.293z"
          clipRule="evenodd"
        ></path>
        <circle cx="12" cy="11" r="1"></circle>
        <circle cx="8" cy="11" r="1"></circle>
        <circle cx="16" cy="11" r="1"></circle>
      </symbol>
      ,
      <symbol id="sort" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M6 15.793L3.707 13.5l-1.414 1.414 4 4a1 1 0 001.414 0l4-4-1.414-1.414L8 15.793V5H6v10.793zM22 5H10v2h12V5zm0 4H12v2h10V9zm0 4h-8v2h8v-2zm-6 4h6v2h-6v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="sportOutdoor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a1 1 0 11-.55 1.924C18.814 19.986 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.924c.628-.179 1.255-.342 1.883-.49.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm-6.13 12.8c.897-.145 1.794-.259 2.69-.34.024-.064.054-.127.092-.187l2.5-4a1 1 0 011.696 0l2.5 4c.038.06.068.123.091.187.898.081 1.794.195 2.691.34L12 8.804l-6.13 9.195zm7.147-.483L12 15.887l-1.017 1.627a37.471 37.471 0 012.034 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="sportsFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a.998.998 0 01.612 1.425 1 1 0 01-1.162.498C18.814 19.988 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.923c.628-.18 1.255-.343 1.883-.491.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm3.44 12.46a37.862 37.862 0 00-6.88 0L12 12.5l3.44 5.157z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="starFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M11.98 2.1a.455.455 0 00-.414.315L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014-2.144-6.635a.455.455 0 00-.451-.315z"></path>
      </symbol>
      ,
      <symbol
        id="starOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.575 9.05L12.43 2.415a.455.455 0 00-.865 0L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014zm-3.694 2.003L12 7.585l.671 2.08.449 1.388 3.64-.007-1.768 1.28-1.182.855 1.133 3.464-1.765-1.288-1.18-.86-2.94 2.146.679-2.075.453-1.387-2.95-2.135 2.181.004 1.46.003z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="stateReceived"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-11.293 1.293L15 9l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L8.414 11l2.293 2.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="statusDeactive"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.243-12.828L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="street"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 1h-2v2.5H5a1 1 0 00-.928 1.371L4.923 7l-.851 2.129A1 1 0 005 10.5h6v1H6a1 1 0 00-.928.629l-1 2.5a1 1 0 000 .742l1 2.5A1 1 0 006 18.5h5v4h2v-4h6a1 1 0 00.928-1.371L19.078 15l.851-2.129A1 1 0 0019 11.5h-6v-1h5a1 1 0 00.928-.629l1-2.5a1 1 0 000-.742l-1-2.5A1 1 0 0018 3.5h-5V1zM6.928 6.629L6.477 5.5h10.846l.6 1.5-.6 1.5H6.477l.451-1.129a1 1 0 000-.742zM6.677 13.5h10.846l-.451 1.129a1 1 0 000 .742l.451 1.129H6.677l-.6-1.5.6-1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="subItem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M18 4v11a1 1 0 01-.883.993L17 16H7.415l2.292 2.293-1.414 1.414-4-4a1 1 0 01-.083-1.32l.083-.094 4-4 1.414 1.414L7.415 14H16V4h2z"></path>
      </symbol>
      ,
      <symbol
        id="supportSimple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M4.5 8.25v-1.5a3 3 0 013-3h3a3 3 0 013 3v1.5h-.75A.75.75 0 0012 9v5.25c0 .414.336.75.75.75h1.125A3.375 3.375 0 0015 8.442V6.75a4.5 4.5 0 00-4.5-4.5h-3A4.5 4.5 0 003 6.75v1.692A3.376 3.376 0 004.125 15H5.25a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H4.5zm9.375 1.5H13.5v3.75h.375a1.875 1.875 0 000-3.75zM2.25 11.625c0-1.036.84-1.875 1.875-1.875H4.5v3.75h-.375a1.875 1.875 0 01-1.875-1.875z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="support"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="telegram"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.465 13.063l-4.147-1.548a.49.49 0 01-.005-.915l17.022-6.566c.36-.14.733.176.654.555l-3.054 14.694a.489.489 0 01-.766.295l-4.17-3.027a.69.69 0 00-.84.023L9.845 18.46a.488.488 0 01-.775-.233l-1.606-5.163zm9.453-5.817L8.812 12.24a.816.816 0 00-.356.918l.876 3.08c.062.218.379.195.41-.03l.227-1.69c.043-.317.195-.61.43-.829l6.69-6.218c.125-.116-.025-.313-.171-.224z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="threeD"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 11v2h3.586l.414.414V15H4v2h5a2 2 0 002-2v-1.586A2 2 0 0010.414 12 2 2 0 0011 10.586V9a2 2 0 00-2-2H4v2h5v1.586L8.586 11H5zm7-4h5a3 3 0 013 3v4a3 3 0 01-3 3h-5V7zm5 2h-3v6h3a1 1 0 001-1v-4a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="thumbsDown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="thumbsUp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-14v5.586l3.707 3.707-1.414 1.414-4-4A1 1 0 0111 12V6h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="toman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <path
          fillRule="evenodd"
          d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="tools" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M21.207 16.793l-6.833-6.834A6.502 6.502 0 004.975 2.42 1 1 0 004.755 4l3.036 3.036a.5.5 0 11-.707.707L4.05 4.708a1 1 0 00-1.58.219 6.502 6.502 0 007.464 9.42l6.86 6.86a3.121 3.121 0 104.414-4.414zm-11.38-4.52A4.5 4.5 0 013.73 7.217l1.94 1.94a2.5 2.5 0 003.536-3.536l-1.94-1.94a4.503 4.503 0 015.032 6.152 1 1 0 00.215 1.093l7.28 7.28a1.121 1.121 0 01-1.586 1.586l-7.3-7.3a1 1 0 00-1.08-.22z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="toolsFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37 36"
      >
        <path d="M6.883 17.98a8.254 8.254 0 01-1.371-9.858l4.553 4.554a2.25 2.25 0 103.182-3.182L8.694 4.94A8.254 8.254 0 0120.33 15.33l10.92 10.92a3.182 3.182 0 01-4.5 4.5L15.8 19.8a8.252 8.252 0 01-8.917-1.82z"></path>
      </symbol>
      ,
      <symbol id="topUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M18 1a3 3 0 012.995 2.824L21 4v16a3 3 0 01-2.824 2.995L18 23h-7v-2h7a1 1 0 00.993-.883L19 20V4a1 1 0 00-.883-.993L18 3H8a1 1 0 00-.993.883L7 4v1H5V4a3 3 0 012.824-2.995L8 1h10zm-3 17a2 2 0 11-4 0 2 2 0 014 0zm-8 2v-9.292l2.146 2.146 1.415-1.415-4-4-.095-.083a1 1 0 00-1.32.083l-4 4 1.415 1.415L5 10.414V20l.005.176A3 3 0 008 23h1v-2H8l-.117-.007A1 1 0 017 20zm9-14V4h-6v2h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 6.73a7.374 7.374 0 01-2.12.581 3.708 3.708 0 001.623-2.041 7.444 7.444 0 01-2.346.896 3.693 3.693 0 00-6.292 3.367 10.483 10.483 0 01-7.61-3.858 3.665 3.665 0 00-.5 1.856 3.69 3.69 0 001.642 3.073 3.692 3.692 0 01-1.673-.464v.046a3.696 3.696 0 002.962 3.621c-.31.083-.636.13-.973.13-.238 0-.47-.024-.695-.07a3.695 3.695 0 003.448 2.565 7.409 7.409 0 01-4.585 1.579c-.298 0-.592-.018-.881-.051a10.437 10.437 0 005.66 1.661c6.793 0 10.506-5.626 10.506-10.505l-.013-.478A7.373 7.373 0 0021 6.73z"></path>
      </symbol>
      ,
      <symbol id="undo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.414 9H17a4 4 0 014 4v2a4 4 0 01-4 4H5v-2h12a2 2 0 002-2v-2a2 2 0 00-2-2H7.414l2.293 2.293-1.414 1.414-4-4a1 1 0 010-1.414l4-4 1.414 1.414L7.414 9z"></path>
      </symbol>
      ,
      <symbol id="users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          d="M12 12a4 4 0 018 0v1.333a4 4 0 11-8 0V12zm4-1.333c-.736 0-1.333.597-1.333 1.333v1.333a1.333 1.333 0 102.666 0V12c0-.736-.597-1.333-1.333-1.333z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M6.667 8a4 4 0 014-4h10.666a4 4 0 014 4v16a4 4 0 01-4 4H10.667a4 4 0 01-4-4V8zm4-1.333c-.737 0-1.334.597-1.334 1.333v13.657c1.374-1.8 3.727-2.99 6.667-2.99s5.293 1.19 6.667 2.99V8c0-.736-.597-1.333-1.334-1.333H10.667zm10.657 18.666c-.145-1.988-1.91-4-5.324-4-3.414 0-5.179 2.012-5.324 4h10.648z"
          clipRule="evenodd"
        ></path>
        <path d="M26.667 6.667a4 4 0 014 4v10.666a4 4 0 01-4 4v-2.666c.736 0 1.333-.597 1.333-1.334V10.667c0-.737-.597-1.334-1.333-1.334V6.667zM1.333 21.333a4 4 0 004 4v-2.666A1.333 1.333 0 014 21.333V10.667c0-.737.597-1.334 1.333-1.334V6.667a4 4 0 00-4 4v10.666z"></path>
      </symbol>
      ,
      <symbol
        id="variationColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
        <path
          stroke="#030A16"
          strokeOpacity=".1"
          d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
        ></path>
      </symbol>
      ,
      <symbol
        id="variationSize"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2h9a1 1 0 011 1v18a1 1 0 01-1 1h-9a1 1 0 01-1-1V3a1 1 0 011-1zm1 17v1h7V4h-7v1h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2zm-4.707-2.707L7 17.586V6.414l1.293 1.293 1.414-1.414-3-3a1 1 0 00-1.414 0l-3 3 1.414 1.414L5 6.414v11.172l-1.293-1.293-1.414 1.414 3 3a1 1 0 001.414 0l3-3-1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="verifiedUser"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.661 7l-.274 2.623a.347.347 0 00.065.24L22 12l-1.548 2.137a.347.347 0 00-.065.24L20.661 17l-2.41 1.073a.346.346 0 00-.177.176L17 20.661l-2.624-.274a.347.347 0 00-.24.065L12 22l-2.138-1.548a.345.345 0 00-.238-.065l-2.625.274-1.073-2.41a.348.348 0 00-.176-.177L3.339 17l.274-2.624a.349.349 0 00-.065-.24L2 12l1.548-2.137a.349.349 0 00.065-.24L3.339 7l2.41-1.073a.345.345 0 00.177-.176L7 3.339l2.625.274a.35.35 0 00.24-.065L12 2l2.137 1.548a.35.35 0 00.24.065L17 3.34l1.073 2.41a.348.348 0 00.176.177L20.661 7zM7.707 10.292l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 3c2.372 0 4.989.256 7.86.767l.712.13a2 2 0 011.562 1.46C22.711 7.57 23 9.785 23 12c0 1.994-.234 3.988-.704 5.991l-.162.651a2 2 0 01-1.562 1.46C17.425 20.7 14.568 21 12 21c-2.372 0-4.989-.256-7.86-.767l-.712-.13a2 2 0 01-1.562-1.46A26.229 26.229 0 011 12c0-1.994.234-3.988.704-5.991l.162-.651a2 2 0 011.562-1.46C6.575 3.3 9.432 3 12 3zm0 2c-2.435 0-5.169.287-8.2.863l-.152.615A24.091 24.091 0 003 12c0 2.044.267 4.09.8 6.137l.697.128C7.251 18.755 9.753 19 12 19c2.435 0 5.169-.287 8.2-.863l.152-.615A24.09 24.09 0 0021 12c0-2.044-.267-4.09-.8-6.137l-.697-.128C16.749 5.245 14.247 5 12 5zm4 7L9 8v8l7-4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="viewGrid"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h7zm1 12a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7zm11 0a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7zm-2 1h-5v5h5v-5zM4 15h5v5H4v-5zM22 3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3zM9 4H4v5h5V4zm6 0h5v5h-5V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="viewListFill"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 1v2a2 2 0 002 2h14a2 2 0 002-2V1H3zm2 6h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zM3 21v2h18v-2a2 2 0 00-2-2H5a2 2 0 00-2 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="viewListOutline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19 1v2H5V1H3v2a2 2 0 002 2h14a2 2 0 002-2V1h-2zm0 6H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zM5 15V9h14v6H5zm14 6v2h2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2h2v-2h14z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="visibilityOff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 16.942a8.537 8.537 0 01-1.92-.452l-.67 1.842-1.88-.684.743-2.042c-.4-.25-.795-.534-1.182-.85L4.8 16.292 3.27 15.006l1.367-1.63a18.86 18.86 0 01-1.45-1.794l1.626-1.164C7.028 13.509 9.413 15 12 15c2.587 0 4.972-1.49 7.187-4.582l1.626 1.164a18.85 18.85 0 01-1.45 1.794l1.367 1.63-1.532 1.286-1.289-1.536c-.396.323-.8.613-1.21.867l.737 2.025-1.88.684-.666-1.831a8.535 8.535 0 01-1.89.441V19h-2v-2.058z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="visibilityOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 18c3.304 0 6.252-1.843 8.813-5.418L21.23 12l-.417-.582C18.252 7.843 15.303 6 12 6c-3.304 0-6.252 1.843-8.813 5.418L2.77 12l.417.582C5.748 16.157 8.697 18 12 18zm0-10c2.42 0 4.662 1.303 6.753 4-2.091 2.697-4.334 4-6.753 4-2.333 0-4.501-1.212-6.529-3.716L5.247 12C7.338 9.303 9.58 8 12 8zm0 7a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="voucher"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 4h10a3 3 0 013 3v10a3 3 0 01-3 3H10a1 1 0 01-1-1 1 1 0 10-2 0 1 1 0 01-1 1H4a3 3 0 01-3-3V7a3 3 0 013-3h2a1 1 0 011 1 1 1 0 002 0 1 1 0 011-1zM8 8a3.001 3.001 0 01-2.83-2H4a1 1 0 00-1 1v10a1 1 0 001 1h1.17a3.001 3.001 0 015.66 0H20a1 1 0 001-1V7a1 1 0 00-1-1h-9.17A3.001 3.001 0 018 8zm5.5 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6.848-.03l1.696 1.06 5-8-1.696-1.06-5 8zM7 15v-2h2v2H7zm0-6v2h2V9H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="whatsapp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 21.02l1.26-4.478a8.96 8.96 0 01-1.237-4.554C3.023 7.032 7.055 3 12.012 3 16.968 3 21 7.032 21 11.989c0 4.956-4.032 8.988-8.988 8.988a8.977 8.977 0 01-4.395-1.146L3 21.02zm4.853-2.824l.275.168a7.448 7.448 0 003.884 1.088c4.115 0 7.463-3.348 7.463-7.464 0-4.115-3.348-7.463-7.463-7.463-4.116 0-7.464 3.348-7.464 7.463 0 1.434.407 2.827 1.178 4.027l.186.289-.726 2.578 2.667-.686zm1.05-10.423l.584.032a.302.302 0 01.261.183l.85 1.988a.302.302 0 01-.05.316l-.74.856a.224.224 0 00-.027.25c.974 1.876 2.749 2.619 3.279 2.805.09.032.19.002.249-.074l.774-1.003a.302.302 0 01.365-.09l1.971.909c.129.059.2.2.17.337l-.094.435c-.105.491-.396.925-.819 1.196-.534.341-1.226.509-2.105.26-2.73-.772-4.273-2.579-5.101-3.708-.829-1.13-1.149-2.26-.942-3.181.14-.62.591-1.094.874-1.34a.705.705 0 01.501-.17z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="addComment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 .5H3V3H.5v2H3v2.5h2V5h2.5V3H5V.5z"></path>
        <path d="M3 11a8 8 0 008 8v3a1 1 0 001.6.8l6.92-5.198A8 8 0 0015 3H9.5v2H15a6 6 0 013.373 10.963l-.037.027L13 19.998V18a1 1 0 00-1-1h-1a6 6 0 01-6-6V9.5H3V11z"></path>
      </symbol>
      ,
      <symbol
        id="android"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"></path>
      </symbol>
      ,
      <symbol
        id="aparat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
      >
        <path
          fillRule="evenodd"
          d="M10.58 4.07a5.768 5.768 0 00-.804.33c-.66.324-1.321.978-1.626 1.609-.172.347-.546 1.597-.804 2.667-.029.11.184-.075.781-.671 1.184-1.192 2.31-1.95 3.763-2.546.65-.266 1.92-.625 2.47-.7.168-.024.294-.052.277-.064a28.734 28.734 0 00-1.195-.347c-1.046-.284-1.241-.319-1.856-.342-.494-.017-.781 0-1.005.064zm1.207 2.523a10.498 10.498 0 013.493-.984 10.5 10.5 0 016.877 1.76c2.333 1.573 3.861 3.911 4.436 6.77.149.746.149 2.957 0 3.703-.575 2.859-2.103 5.197-4.436 6.77a10.405 10.405 0 01-10.37.776 10.4 10.4 0 01-5.831-7.899c-.11-.74-.11-2.257 0-2.997a10.399 10.399 0 015.831-7.9zm4.395 5.463c.408-1.592-.643-3.276-2.258-3.611-.994-.209-1.947.086-2.688.827-1.173 1.18-1.178 2.969-.018 4.138 1.615 1.626 4.39.868 4.964-1.354zm5.332-2.142c1.333.348 2.223 1.482 2.223 2.83 0 .874-.247 1.499-.833 2.09-.402.404-.89.682-1.413.81-.724.167-1.333.092-2.04-.261-1.149-.567-1.81-1.898-1.557-3.13.132-.649.35-1.06.816-1.534.603-.608 1.224-.874 2.068-.886.224-.005.558.035.736.081zm-3.982 6.111c0-.463-.27-.885-.706-1.11-1.08-.562-2.264.566-1.758 1.683.155.347.258.457.597.614.902.428 1.867-.186 1.867-1.187zm-5.165.284c.173.029.523.162.776.289 1.149.567 1.81 1.898 1.557 3.13-.132.649-.35 1.06-.816 1.534-.942.955-2.258 1.163-3.464.55-1.546-.787-2.057-2.83-1.069-4.277.66-.954 1.85-1.44 3.016-1.226zm9.813 4.93c.316-1.522-.643-3.055-2.154-3.449a2.991 2.991 0 00-2.838.776 2.935 2.935 0 00.017 4.172c.89.897 2.24 1.11 3.43.532.695-.335 1.379-1.238 1.545-2.031zM23.48 7.212c-.144-.104-.259-.208-.259-.231 0-.024.172.011.39.069.213.058.8.214 1.305.347 1.23.319 1.746.579 2.327 1.152a3.627 3.627 0 011.091 2.639c0 .457-.046.694-.367 1.932a46.007 46.007 0 01-.397 1.435c-.017.012-.057-.167-.098-.399-.235-1.504-.89-3.165-1.723-4.41-.609-.92-1.614-2.036-2.27-2.534zM4.893 17.831c0 .023-.144.578-.316 1.238-.27 1.036-.316 1.273-.316 1.725 0 1.024.373 1.92 1.086 2.632.614.608 1.028.81 2.545 1.216.672.179 1.235.318 1.246.312.012-.011-.051-.08-.143-.15-.322-.25-1.362-1.296-1.707-1.725-1.05-1.302-1.867-3.026-2.223-4.664-.103-.492-.172-.717-.172-.584zm19.442 6.151c.287-.295.626-.671.752-.84.127-.161.236-.277.247-.248.023.07-.591 2.367-.74 2.755-.288.787-.995 1.545-1.788 1.938-1.074.532-1.786.544-3.55.07-1.334-.358-1.333-.36-1.31-.382a5.53 5.53 0 01.62-.145 11.493 11.493 0 005.769-3.148z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="arrowDown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M4.293 12.707l1.414-1.414L11 16.586V4h2v12.586l5.293-5.293 1.414 1.414-7 7a1 1 0 01-1.414 0l-7-7z"></path>
      </symbol>
      ,
      <symbol id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7">
        <path d="M1.707 2.293L.293 3.707l3 3a1 1 0 001.414 0l5-5L8.293.293 4 4.586 1.707 2.293z"></path>
      </symbol>
      ,
      <symbol
        id="controller"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
      >
        <path
          fillRule="evenodd"
          d="M21.973 16.758l-1.135-7.974a4.16 4.16 0 00-4.122-3.57H7.284a4.16 4.16 0 00-4.122 3.57l-1.135 7.974a2.65 2.65 0 004.497 2.248l2.353-2.342h6.246l2.342 2.342c.5.5 1.177.781 1.874.781a2.652 2.652 0 002.634-3.03zm-2.186.75a.562.562 0 01-.438.197.575.575 0 01-.406-.167l-2.956-2.956H8.013l-2.956 2.956a.575.575 0 01-.406.167.562.562 0 01-.438-.198.542.542 0 01-.135-.458l1.135-7.974a2.112 2.112 0 012.071-1.78h9.432c1.03 0 1.915.77 2.06 1.79l1.136 7.975a.565.565 0 01-.125.447zM14.5 11a1 1 0 100-2 1 1 0 000 2zm3 1a1 1 0 11-2 0 1 1 0 012 0zm-10-3h2v1h1v2h-1v1h-2v-1h-1v-2h1V9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="feedbackInfo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M15.206 16.106a.75.75 0 00.9-.9l-.58-2.509a7.5 7.5 0 10-2.83 2.83l2.51.579zm-1.114-3.931a.75.75 0 00-.095.566l.377 1.633-1.633-.377a.75.75 0 00-.566.095 6 6 0 111.917-1.917zM7.5 8.25h2.25V12h-1.5V9.75H7.5v-1.5zm2.25-1.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="fidiboLogotype"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74 21"
      >
        <path
          fillRule="evenodd"
          d="M36.485 8.128c-1.936-.081-3.876 1.606-3.883 3.84-.008 2.24 1.915 3.879 3.852 3.887 1.93.008 3.869-1.603 3.883-3.856.013-2.274-1.968-3.947-3.852-3.87zm5.901-1.052c0 .515.003 1.03.006 1.544.007 1.147.014 2.294-.013 3.439-.063 2.764-1.826 4.834-4.077 5.544-1.44.454-2.866.396-4.232-.216-1.757-.786-2.901-2.135-3.332-4.03-.51-2.249.096-4.183 1.766-5.763.965-.913 2.147-1.382 3.463-1.499 1.43-.126 2.736.238 3.916 1.058l.013.009.142.098c.12.08.186.043.197-.098.003-.039.003-.078.003-.118v-.033V6.9v-.114l.012-1.512.027-3.469c.006-.641.45-1.113 1.035-1.108.605.006 1.056.453 1.06 1.096.006 1.256.005 2.512.004 3.768l-.001 1.516h.011zM2.108 16.468v.427l.001.746c.002.582.003 1.164-.006 1.746a.995.995 0 01-.907.99c-.556.053-.996-.245-1.142-.77a1.801 1.801 0 01-.045-.486c0-.722-.002-1.445-.004-2.167-.005-1.644-.01-3.288.003-4.931.013-1.667.57-3.139 1.771-4.317 1.051-1.03 2.33-1.601 3.798-1.734.248-.023.498-.023.747-.023h17.439c.148-.002.296-.003.443.042.498.154.807.614.745 1.126-.054.452-.472.89-1.006.887-2.192-.011-4.385-.01-6.577-.008l-2.25.001H7.045c-.323 0-.646.011-.97.022a95.44 95.44 0 01-.273.01c-1.387.045-3.098 1.04-3.596 2.87-.412 1.512.07 2.965 1.348 3.97.785.617 1.686.902 2.698.9 4.26-.01 8.521-.009 12.782-.007h4.306c.163 0 .325-.012.488-.03.47-.051.92.225 1.088.648.177.448.03.958-.355 1.252-.214.163-.458.184-.714.183H21.17a2748.188 2748.188 0 01-5.11-.004c-3.239-.003-6.477-.007-9.716.006-1.446.005-2.755-.346-3.919-1.214l-.033-.027c-.066-.052-.14-.111-.284-.108zm48.226-4.626c.016-2.162 1.808-3.855 3.893-3.844 2.114.018 3.857 1.77 3.837 3.899-.02 2.167-1.797 3.846-3.854 3.842a3.876 3.876 0 01-3.876-3.897zm.354-4.73c-.061.05-.124.1-.217.078-.053-.078-.048-.164-.043-.248l.003-.08-.03-3.878-.007-1.102v-.06c0-.069 0-.137-.007-.204A1.038 1.038 0 0049.1.733c-.499.135-.795.513-.802 1.054-.012.868-.015 1.736-.015 2.604v2.7c0 1.566 0 3.132-.003 4.698a6.25 6.25 0 00.396 2.177c.98 2.67 3.726 4.138 6.323 3.76 1.324-.192 2.498-.724 3.412-1.698 1.486-1.586 2.043-3.462 1.496-5.602-.582-2.277-2.047-3.699-4.304-4.286-1.76-.458-3.383-.098-4.867.936-.016.011-.032.024-.048.037zm-27.762 7.091c-.135.061-.244.057-.346.053l-.072-.002h-4.69c-3.967-.002-7.935-.004-11.903.011-1.017.005-2.159-.729-2.446-1.912-.22-.91.008-1.71.628-2.367a2.483 2.483 0 011.855-.787h16.793c.06 0 .118 0 .177.003.137.009.176.085.12.204-.04.086-.083.171-.126.256a7.87 7.87 0 00-.156.32c-.135.299-.22.615-.285.934-.034.169-.117.239-.281.233a4.49 4.49 0 00-.201 0H6.114c-.07 0-.141-.001-.211.001-.35.014-.603.25-.624.581-.017.262.262.585.555.628.09.013.182.01.274.008l.103-.001h15.612l.083.002c.06.002.121.004.18-.004.222-.028.294.064.331.286.09.531.27 1.04.509 1.553zm44.553-6.122c2.168 0 3.923 1.869 3.835 3.88.087 2.023-1.807 3.863-3.874 3.844-1.982-.017-3.834-1.808-3.817-3.883.017-1.97 1.678-3.841 3.856-3.841zm5.907 3.89c.014-3.362-2.56-5.89-5.883-5.95-3.335.035-5.92 2.545-5.933 5.9-.012 3.348 2.527 5.924 5.883 5.939 3.351.014 5.918-2.54 5.933-5.89zm-44.57 1.149v1.014c-.002.88-.002 1.762.002 2.643.002.448-.181.778-.577.98a1.044 1.044 0 01-1.465-.618 1.322 1.322 0 01-.06-.408V13.82c0-1.43 0-2.861.002-4.292.001-.532.281-.934.726-1.075.44-.14.887.005 1.176.374.165.211.198.452.197.71-.002.858-.001 1.717-.001 2.576v1.007zm15.458-1.044v1.074h.001v1.071c-.002.887-.003 1.774.003 2.662.004.553.418.98.96 1.023.515.042.992-.31 1.104-.83.031-.146.031-.3.031-.45.002-2.3.002-4.6.001-6.9v-.062c.001-.093.002-.185-.008-.277a1.063 1.063 0 00-1.047-.946c-.596-.002-1.038.432-1.042 1.051-.005.862-.004 1.723-.003 2.584zM29.15 6.022a1.413 1.413 0 01-1.402 1.392c-.76-.005-1.397-.649-1.39-1.405a1.406 1.406 0 011.401-1.39 1.413 1.413 0 011.391 1.403zm14.71-.048a1.409 1.409 0 001.382 1.398 1.405 1.405 0 001.414-1.367c.02-.75-.61-1.404-1.363-1.416a1.406 1.406 0 00-1.433 1.385z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="iran" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M6.797 3.545a1 1 0 01.631.584l.924 2.309.628.628 2.047.341.64-.962a1 1 0 01.59-.415l2-.5a1 1 0 01.486 0l2 .5a1 1 0 01.312.138l1.5 1A1 1 0 0119 8v2.377l.403 1.612.804.804a1 1 0 01.187 1.154l-.626 1.254 1.332.999a1 1 0 01.232.245l1 1.5a1 1 0 01-.125 1.262l-2 2a1 1 0 01-.831.285l-4-.5a1 1 0 01-.825-.676l-.164-.494-1.516.607a1 1 0 01-.926-.097l-3-2a1 1 0 01-.34-.385L7.883 16.5H6.5a1 1 0 01-.98-.804l-.441-2.203-1.786-1.786a1 1 0 01-.263-.95l.384-1.538L2.2 7.6A1 1 0 012 7V4.5a1 1 0 011.447-.894l1.481.74 1.017-.678a1 1 0 01.852-.123zM4 6.118v.549L5.3 8.4a1 1 0 01.17.843l-.363 1.45 1.6 1.6a1 1 0 01.274.51L7.32 14.5H8.5a1 1 0 01.894.553l.882 1.762 2.341 1.561 2.012-.805a1 1 0 011.32.613l.3.902 2.89.361 1.074-1.074-.45-.676L17.9 16.3a1 1 0 01-.294-1.247l.677-1.356-.49-.49a.999.999 0 01-.263-.465l-.5-2A.996.996 0 0117 10.5V8.535l-.91-.607-1.59-.397-1.382.345-.786 1.179a1 1 0 01-.996.431l-3-.5a1 1 0 01-.543-.279l-1-1a1 1 0 01-.221-.336l-.543-1.355-.474.316a1 1 0 01-1.002.062L4 6.118z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="linkedin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          fillRule="evenodd"
          d="M6.4 4h19.2C26.92 4 28 5.08 28 6.4v19.2c0 1.32-1.08 2.4-2.4 2.4H6.4C5.08 28 4 26.92 4 25.6V6.4C4 5.08 5.08 4 6.4 4zm1.2 20.4h3.6V13.6H7.6v10.8zm1.8-12.84c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.8 24.4h3.6v-6.84c0-2.28-1.92-4.2-4.2-4.2-1.08 0-2.4.72-3 1.68V13.6h-3.6v10.8h3.6v-6.36c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8v6.36z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="oneMonth"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-7 2v8h-2v-6h-1v-2h3z"></path>
      </symbol>
      ,
      <symbol
        id="paymentWallet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 15"
      >
        <path d="M8.875 8.375a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
        <path
          fillRule="evenodd"
          d="M12.086 3.5l-.216-.86A2.25 2.25 0 008.976 1.05L1.406 3.54A1.5 1.5 0 00.25 5v8.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V5a1.5 1.5 0 00-1.5-1.5h-.164zM1.75 5h10.5v2.25H8.875a1.875 1.875 0 100 3.75h3.375v2.25H1.75V5zm4.622-1.5h4.167l-.124-.497-.016-.055a.75.75 0 00-.949-.474L6.372 3.5zM8.875 8h3.375v2.25H8.875a1.125 1.125 0 010-2.25z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol id="pos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 38">
        <path
          fillRule="evenodd"
          d="M20.334 2.333c0-.92-.747-1.666-1.667-1.666H5.333c-.92 0-1.666.746-1.666 1.666V9a3.333 3.333 0 00-3.334 3.333V34a3.333 3.333 0 003.334 3.333h16.666A3.333 3.333 0 0023.668 34h6.666a3.333 3.333 0 003.334-3.333v-15a3.333 3.333 0 00-3.334-3.334h-6.666A3.333 3.333 0 0020.333 9V2.333zM3.666 34V12.333h1.667v3.334h13.333v-3.334h1.666V34H3.668zM7 4h10v5H7V4zm20 11.667h-3.333v15H27v-15zm1.667 0v15h1.666v-15h-1.666z"
          clipRule="evenodd"
        ></path>
        <path d="M5.333 17.333h3.334v3.334H5.334v-3.334zM10.334 17.333h3.333v3.334h-3.333v-3.334zM15.334 17.333h3.333v3.334h-3.334v-3.334zM5.333 22.333h3.334v3.334H5.334v-3.334zM10.334 22.333h3.333v3.334h-3.333v-3.334zM15.334 22.333h3.333v3.334h-3.334v-3.334zM5.333 27.333h3.334v3.334H5.334v-3.334zM10.334 27.333h3.333v3.334h-3.333v-3.334zM15.334 27.333h3.333v3.334h-3.334v-3.334z"></path>
      </symbol>
      ,
      <symbol
        id="shipByHub"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.396 1.5c-2.676 0-4.855 2.183-4.86 4.866 0 .3.03.608.087.917l.033.159c.058.264.14.522.241.77l.119.27c.387.835 1.525 2.36 3.059 4.014l.335.356.392.41.08.066a.857.857 0 001.13-.094l.366-.382.334-.357.322-.352c1.37-1.516 2.377-2.884 2.733-3.654l.12-.273c.077-.188.142-.38.195-.577l.049-.197.027-.131.044-.257a4.87 4.87 0 00.048-.688c0-2.682-2.178-4.866-4.854-4.866zM11 6a2.75 2.75 0 00-2.745 2.582l-.005.168V9H3.5a2.75 2.75 0 00-2.745 2.582l-.005.168v7a1.75 1.75 0 001.607 1.744l.143.006h.354a2.751 2.751 0 005.292 0h7.708a2.751 2.751 0 005.292 0h.354a1.75 1.75 0 001.744-1.607l.006-.143v-6.688a.75.75 0 00-1.493-.101l-.007.101V15H10a.25.25 0 01-.243-.193l-.007-.057v-6c0-.647.492-1.18 1.122-1.244L11 7.5h1a.75.75 0 00.102-1.493L12 6h-1zm7.5 12.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6.75 19.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zm.5-9.25h1v4.25a1.75 1.75 0 001.607 1.744L10 16.5h11.75v2.25a.25.25 0 01-.193.243L21.5 19h-.353a2.751 2.751 0 00-5.294 0H8.147a2.751 2.751 0 00-5.294 0H2.5a.25.25 0 01-.243-.193l-.007-.057V15.5H5.5a1.75 1.75 0 001.744-1.607l.006-.143V10.5zm-1.5 0H3.5l-.128.007A1.25 1.25 0 002.25 11.75V14H5.5l.057-.007a.25.25 0 00.193-.243V10.5zm14.929-4.143a2.29 2.29 0 00-2.286-2.286 2.29 2.29 0 00-2.285 2.286 2.29 2.29 0 002.285 2.285 2.29 2.29 0 002.286-2.285z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="sixMonths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v2h-3.333v1H14.5v5h-5v-8h5zm-1.667 5h-1.667v1h1.667v-1z"></path>
      </symbol>
      ,
      <symbol
        id="specialAmazing"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path d="M16 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.207 8.207l6.5-6.5L20.293.293l-6.5 6.5 1.414 1.414z"></path>
        <path
          fillRule="evenodd"
          d="M5.793 2.293a1 1 0 011.414 0l12.5 12.5a1 1 0 01-1.414 1.414l-.553-.552-1.829.653c.058.263.089.536.089.816C16 19.304 14.169 21 12 21c-1.502 0-2.841-.813-3.524-2.037l-2.665.952a1 1 0 01-1.518 1.292l-3.5-3.5a1 1 0 011.292-1.518l4.26-11.93-.552-.552a1 1 0 010-1.414zm4.625 15.977c.359.438.922.73 1.582.73 1.145 0 2-.88 2-1.876 0-.044-.002-.088-.005-.132l-3.577 1.278zm-6.158.075l-.605-.605L7.91 5.824l8.265 8.266L4.26 18.345z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="statusInProgress"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm4 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="termsAndConditions"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16 10v2H8v-2h8zM14 14H8v2h6v-2z"></path>
        <path
          fillRule="evenodd"
          d="M9.238 2.828a3 3 0 015.524 0L14.83 3H18l.15.005A2 2 0 0120 5v16l-.006.15A2 2 0 0118 23H6a2 2 0 01-1.995-1.85L4 21V5a2 2 0 011.85-1.995L6 3h3.17l.068-.172zM18 21V5h-1v1a2 2 0 01-2 2H9a2 2 0 01-2-2V5H6v16h12zM15 6V5h-1a1 1 0 01-.993-.883l-.014-.234a1 1 0 00-1.986 0l-.014.234A1 1 0 0110 5H9v1h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="threeMonths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v8h-5v-2h3v-1h-3v-2h3v-1h-3v-2h5z"></path>
      </symbol>
      ,
      <symbol
        id="topBrands"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"></path>
        <path
          fillRule="evenodd"
          d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z"
          clipRule="evenodd"
        ></path>
        <path d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"></path>
      </symbol>
      ,
      <symbol id="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.666 1.667v1.666h6.667V1.667H6.666zM3.333 5.833V4.167h13.333v1.666H3.333zm10.833.834h1.667v9.166a2.5 2.5 0 01-2.5 2.5H6.666a2.5 2.5 0 01-2.5-2.5V6.667h1.667v9.166c0 .46.373.834.833.834h6.667c.46 0 .833-.373.833-.834V6.667zm-5 0H7.5V15h1.666V6.667zm1.667 0H12.5V15h-1.667V6.667z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="twelveMonths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-9.5 2v8h-2v-6h-1v-2h3zm6 0v5h-3v1h3v2h-5v-5h3v-1h-3v-2h5z"></path>
      </symbol>
      ,
      <symbol
        id="twoMonths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v5h-3v1h3v2h-5v-5h3v-1h-3v-2h5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/activeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7.707 10.293l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addCircleFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addCircleOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-9-1V7h2v4h4v2h-4v4h-2v-4H7v-2h4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addItemSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.96 6.358A5 5 0 006 7H4l-.117.007A1 1 0 003 8v11l.005.176A3 3 0 006 22h10l.176-.005A3 3 0 0019 19h-2l-.007.117A1 1 0 0116 20H6l-.117-.007A1 1 0 015 19V9h1v2h2V9h4.803a6 6 0 103.156-2.642zM14 12a4 4 0 118 0 4 4 0 01-8 0zm5-3v2h2v2h-2v2h-2v-2h-2v-2h2V9h2zM8.005 6.824A3 3 0 0114 7H8l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addRectangleFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M0 7a5 5 0 015-5h14a5 5 0 015 5v10a5 5 0 01-5 5H5a5 5 0 01-5-5V7zm11 0h2v4h4v2h-4v4h-2v-4H7v-2h4V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addSimpleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addToCartSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M3.5 2.5h2V5H8v2H5.5v2.5h-2V7H1V5h2.5V2.5zM10 7h9v8H5.905l-.35-3.5h-2.01l.46 4.6A1 1 0 005 17h15a1 1 0 001-1V5h2V3h-3a1 1 0 00-1 1v1h-9v2zM6 22a2 2 0 110-4 2 2 0 010 4zM17 20a2 2 0 104 0 2 2 0 00-4 0z"></path>
        </g>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/adsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.198 1.408l2.779 15.757-4.803.847-2.737-.302a4 4 0 01-7.972-.207l-.006-.205-.005-.442-4.694.827-1.737-9.848 4.782-.843 9.591-4.737 4.802-.847zM9.456 17.05l.003.238a2 2 0 003.99.203l-3.993-.441zm7.15-12.979l1.97-.346 2.084 11.818-1.97.347L16.606 4.07zm-1.898.753L7.236 8.516l1.129 6.402 8.284.913-1.94-11.007zM3.34 9.458l1.97-.348 1.042 5.91-1.97.346L3.34 9.458z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/amazingSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/appleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.124 2c.128 1.172-.343 2.347-1.04 3.194-.7.845-1.845 1.503-2.968 1.415-.152-1.149.415-2.345 1.062-3.094C13.9 2.67 15.118 2.04 16.124 2zm3.623 6.828c-.205.126-2.17 1.343-2.145 3.799.025 2.96 2.54 3.987 2.678 4.043a.111.111 0 01.005.002c0 .004-.003.011-.006.022-.06.19-.464 1.486-1.379 2.823-.834 1.218-1.697 2.431-3.06 2.457-.655.012-1.093-.177-1.548-.374-.476-.207-.971-.42-1.754-.42-.82 0-1.339.22-1.838.433-.433.184-.85.362-1.439.386-1.315.049-2.316-1.316-3.156-2.531-1.72-2.482-3.031-7.016-1.268-10.077.874-1.52 2.44-2.482 4.137-2.507.733-.014 1.442.268 2.062.514.474.188.897.356 1.238.356.307 0 .719-.162 1.198-.351.755-.298 1.68-.662 2.632-.566.652.027 2.482.263 3.657 1.982l-.014.009z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/arrowLeftSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/arrowRightSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/askQuestionSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9.998 20.8l1.17 1.755a1 1 0 001.664 0l1.17-1.756A10.004 10.004 0 0022 11c0-5.523-4.477-10-10-10S2 5.477 2 11c0 4.79 3.389 8.863 7.998 9.8zm3.253-1.897a1 1 0 00-.677.433l-.574.861-.574-.86a1 1 0 00-.677-.434A8.002 8.002 0 014 11a8 8 0 1116 0 8.002 8.002 0 01-6.749 7.903zM10 9H8V8a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V14h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 8.93V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm3 6h-2v2h2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/attachFileSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15A3.993 3.993 0 018.5 17.5V5.14c0-1.31.94-2.5 2.24-2.63A2.5 2.5 0 0113.5 5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63A2.5 2.5 0 0015 15.5V5.17c0-2.09-1.53-3.95-3.61-4.15A3.998 3.998 0 007 5v12.27c0 2.87 2.1 5.44 4.96 5.71 3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/autoDetectOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 3.06c4.17.46 7.48 3.77 7.94 7.94H23v2h-2.06A8.994 8.994 0 0113 20.94V23h-2v-2.06A8.994 8.994 0 013.06 13H1v-2h2.06A8.994 8.994 0 0111 3.06V1h2v2.06zM5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7zm8 3v2h-2v-2h2zm-4-5h2V9h2v1.406l-.958.523A2 2 0 0011 12.684V14h2v-1.316l.958-.522A2 2 0 0015 10.406V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/autoDetectOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.94 11A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 4c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/barcodeScannerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 10V8a2 2 0 012-2h2V4H5a4 4 0 00-4 4v2h2zm4-2v8H5V8h2zm4 0v8H8V8h3zm5 8V8h-2v8h2zm3-8v8h-2V8h2zm-6 8V8h-1v8h1zM3 14v2a2 2 0 002 2h2v2H5a4 4 0 01-4-4v-2h2zm18 2v-2h2v2a4 4 0 01-4 4h-2v-2h2a2 2 0 002-2zm0-8v2h2V8a4 4 0 00-4-4h-2v2h2a2 2 0 012 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/beautySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.05 3.25c3.277 0 5.95 2.568 5.95 5.757a5.622 5.622 0 01-1.32 3.616c-.63.755-3.262 3.505-7.964 8.325a1 1 0 01-1.434-.002c-4.639-4.784-7.247-7.506-7.87-8.215A5.627 5.627 0 012 9.007C2 5.818 4.673 3.25 7.95 3.25c1.53 0 2.967.564 4.05 1.539a6.048 6.048 0 014.05-1.539zm3.095 8.091c.552-.66.855-1.475.855-2.334 0-2.066-1.76-3.757-3.95-3.757-1.312 0-2.51.611-3.243 1.612a1 1 0 01-1.614 0C10.46 5.861 9.261 5.25 7.95 5.25 5.76 5.25 4 6.941 4 9.007c0 .891.326 1.733.916 2.405.557.635 2.932 3.117 7.086 7.403 4.194-4.304 6.594-6.817 7.143-7.474zm-10.352.452a1 1 0 011.414 0L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/beautyFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 4.79a6.042 6.042 0 00-4.05-1.54C4.702 3.25 2 5.79 2 9.007c0 1.424.535 2.725 1.413 3.724.474.54 2.456 2.61 4.29 4.512a1758.77 1758.77 0 003.28 3.394l.299.309a1 1 0 001.434.002l.303-.311a1178.172 1178.172 0 003.316-3.419c1.846-1.912 3.861-4.016 4.345-4.595A5.624 5.624 0 0022 9.007c0-3.217-2.702-5.757-5.95-5.757A6.042 6.042 0 0012 4.79zm6.207 6.417a1 1 0 00-1.414-1.414L12 14.586l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/bookStationarySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/bookSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M22.47 5.2c-.47-.24-.96-.44-1.47-.61v12.03c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.48.44-4.97 1.2-.33.16-.53.51-.53.88v12.08c0 .58.47.99 1 .99.16 0 .32-.04.48-.12C3.69 18.4 5.05 18 6.5 18c2.07 0 3.98.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.81.4 4.02 1.04.16.08.32.12.48.12.52 0 1-.41 1-.99V6.08c0-.37-.2-.72-.53-.88zM10 16.62C8.86 16.21 7.69 16 6.5 16s-2.36.21-3.5.62V6.71C4.11 6.24 5.28 6 6.5 6c1.2 0 2.39.25 3.5.72v9.9zM19 .5l-5 5V15l5-4.5V.5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/bookStationaryFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.793 1.293a1 1 0 011.414 0L12.5 6.586l1.836-1.836 5.414 5.414L17.914 12l5.293 5.293a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414 0L12 17.914l-3.293 3.293a1 1 0 01-.444.258l-5.5 1.5a1 1 0 01-1.228-1.228l1.5-5.5a1 1 0 01.258-.444l2.5-2.5.003-.004.79-.789-5.293-5.293a1 1 0 010-1.414l4.5-4.5zM8 11.086L6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086zm8.414 8.414L18 21.086 21.086 18 16.5 13.414 13.414 16.5 15 18.086l1.293-1.293a1 1 0 011.414 1.414L16.414 19.5zM4.86 17.152l-.934 3.423 3.423-.934-2.49-2.49z"
          clipRule="evenodd"
        ></path>
        <path d="M21.164 8.75l.629-.629a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0l-.629.629 5.414 5.414z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/bugSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 7c0-1.48-.804-2.773-2-3.465V1h-2v2h-2V1H9v2.535A3.998 3.998 0 007 7v.416A5.018 5.018 0 004.416 10H3V8H1v3a1 1 0 001 1h2v1H1v2h3c0 1.06.207 2.074.582 3H2a1 1 0 00-1 1v3h2v-2h2.755A7.985 7.985 0 0012 23a7.985 7.985 0 006.245-3H21v2h2v-3a1 1 0 00-1-1h-2.581c.375-.926.581-1.94.581-3h3v-2h-3v-1h2a1 1 0 001-1V8h-2v2h-1.416A5.019 5.019 0 0017 7.416V7zm-4 13.917V9h2a3 3 0 013 3v3a6.002 6.002 0 01-5 5.917zM11 9H9a3 3 0 00-3 3v3a6.002 6.002 0 005 5.917V9zm2-4a2 2 0 012 2H9a2 2 0 012-2h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/buyNowSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 1a5 5 0 014.995 4.783L17 6h2a1 1 0 01.993.883L20 7v4h-2V8h-1v2h-2V8H9v2H7V8H6v11a1 1 0 00.883.993L7 20h10a1 1 0 00.993-.883L18 19v-2h2v2a3 3 0 01-2.824 2.995L17 22H7a3 3 0 01-2.995-2.824L4 19V7a1 1 0 01.883-.993L5 6h2a5 5 0 015-5zm1.293 8.293l1.414 1.414L12.414 13H22v2h-9.586l2.293 2.293-1.414 1.414-4-4a1 1 0 01-.083-1.32l.083-.094 4-4zm-4.288-3.47A3 3 0 0115 6H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/calendarEndDateSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 1v2h8V1h2v2h1a3 3 0 012.995 2.824L22 6v14a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20V6a3 3 0 012.824-2.995L5 3h1V1h2zm12 9H4v10a1 1 0 00.883.993L5 21h14a1 1 0 00.993-.883L20 20V10zm-2 6h-3v3h3v-3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/calendarStartDateSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 1v2h8V1h2v2h1a3 3 0 012.995 2.824L22 6v14a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20V6a3 3 0 012.824-2.995L5 3h1V1h2zm12 9H4v10a1 1 0 00.883.993L5 21h14a1 1 0 00.993-.883L20 20V10zM9 12H6v3h3v-3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cameraFlashOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.499 2l.117.007a1 1 0 01.878 1.086l-.017.117L15.236 9h3.263l.112.006a1 1 0 01.775 1.456l-.061.101-2.378 3.56-1.33-1.672.99-1.451h-2.608l-.118-.007a1 1 0 01-.878-1.086l.018-.117L14.26 4h-3.964l-.279 1.105-1.575-2.029.08-.298.033-.11a1 1 0 01.816-.66L9.5 2h6zM18.8 19.4l-12-16-1.6 1.2 2.233 2.976-1.41 6.202-.019.117a1 1 0 00.876 1.098L7 15h3.847l-.837 5.859-.01.114c-.038.936 1.157 1.398 1.76.679l.066-.089 2.903-4.258L17.2 20.6l1.6-1.2zm-6.203-2.52l.29-2.03.573.764-.863 1.266zM9.006 9.675l2.493 3.324L8.251 13l.755-3.325z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cameraFlashOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.476 3.21L14.236 9h3.263a1 1 0 01.826 1.563l-7.5 11c-.597.875-1.966.344-1.816-.704L9.846 15H5.999a1 1 0 01-.975-1.222l2.5-11A1 1 0 018.499 2h6a1 1 0 01.977 1.21zM13.262 4H9.297l-2.046 9H11a1 1 0 01.99 1.141l-.392 2.74L15.607 11h-2.608a1 1 0 01-.978-1.21L13.26 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cameraSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6.553 4.658L5.882 6H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3h-.883l-.67-1.341A3 3 0 0014.764 3H9.236a3 3 0 00-2.683 1.658zM9.236 5h5.528a1 1 0 01.894.553l.946 1.894A1 1 0 0017.5 8H19a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h1.5a1 1 0 00.894-.553l.948-1.894A1 1 0 019.236 5zM12 7a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-3.5 5.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cancelPolygonSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 2.34a1 1 0 01.866.5l5 8.66a1 1 0 010 1l-5 8.66a1 1 0 01-.866.5H7a1 1 0 01-.866-.5l-5-8.66a1 1 0 010-1l5-8.66A1 1 0 017 2.34h10zm-.577 2H7.577L3.155 12l4.422 7.66h8.846L20.845 12l-4.422-7.66zm-.18 4.832L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cancelSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 2.34a1 1 0 01.866.5l5 8.66a1 1 0 010 1l-5 8.66a1 1 0 01-.866.5H7a1 1 0 01-.866-.5l-5-8.66a1 1 0 010-1l5-8.66A1 1 0 017 2.34h10zm-.577 2H7.577L3.155 12l4.422 7.66h8.846L20.845 12l-4.422-7.66zm-.18 4.832L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cardCreditSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 3h16a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3zm0 2a1 1 0 00-1 1v1h18V6a1 1 0 00-1-1H4zm-1 6V9h18v2H3zm18 2H3v5a1 1 0 001 1h16a1 1 0 001-1v-5zm-2 4h-7v-2h7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cardGiftSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M23 6a3 3 0 00-3-3H4a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6zM4 5h6v3.17a3 3 0 00-2.176 5.59L6.086 15.5 7.5 16.914l2.5-2.5V19H4a1 1 0 01-1-1v-4h2v-2H3V6a1 1 0 011-1zm8 9.414V19h8a1 1 0 001-1v-4h-4v-2h4V6a1 1 0 00-1-1h-8v3.17a3 3 0 012.176 5.59l1.738 1.74-1.414 1.414-2.5-2.5zM12 11a1 1 0 102 0 1 1 0 00-2 0zm-2 0a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cartOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cartOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4h-2v11a1 1 0 01-1 1H4a1 1 0 01-.995-.9l-1-10A1 1 0 013 4h15V3a1 1 0 011-1h3v2zm-6 15a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/cashbackSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14 6a1 1 0 00-1-1H1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6zM2 7h10v2h-2v2h2v2H2v-2h2V9H2V7zm5 1a2 2 0 110 4 2 2 0 010-4zm8.293 2.707l4 4 1.414-1.414L18.414 11H20a2 2 0 012 2v2a2 2 0 01-2 2H8v2h12a4 4 0 004-4v-2l-.005-.2A4 4 0 0020 9h-1.586l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/categoryFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm11 11a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-7zm8-6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM6.5 22a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/categoryOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/categorySearchSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h9a2 2 0 002-2v-1.341a5.982 5.982 0 001.477-.768l2.816 2.816 1.414-1.414-2.816-2.816A6.002 6.002 0 0018 6.341V5zm2 7c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465zm-4 4V8a4 4 0 000 8zm0-11v1a6 6 0 000 12v1H7V5h9zM3 5a1 1 0 00-1 1v12a1 1 0 001 1h1V5H3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/changeDecreaseSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5 0l5 5 5-5h-3V8h-4v4H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/changeIncreaseSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm5 0l5-5 5 5h-3v4h-4v-4H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/chatSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8.586 19l2.707 2.707a1 1 0 001.414 0L15.414 19H19a4 4 0 004-4V7a4 4 0 00-4-4H5a4 4 0 00-4 4v8a4 4 0 004 4h3.586zm5.707-1.707L12 19.586l-2.293-2.293A1 1 0 009 17H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4a1 1 0 00-.707.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/chevronDownSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/chevronLeftSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/chevronRightSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.583 12L8.29 16.293l1.414 1.414 5-5a1 1 0 000-1.414l-5-5L8.29 7.707 12.583 12z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/chevronUpSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clearSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.636 5.636a9 9 0 1012.728 12.728A9 9 0 005.636 5.636zm10.607 3.536L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clearanceSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/closeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clubCoinOutlineSvg"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.3832 6.28971C11.3832 6.99999 10.8131 7.57009 10.1028 7.57009C9.39254 7.57009 8.8131 6.99999 8.82244 6.28971C8.82244 5.58878 9.39254 5.00934 10.1028 5.00934C10.8131 5.00934 11.3832 5.57943 11.3832 6.28971Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0935 7.55139L14.9533 8.41121C15.0841 8.54205 15.0935 8.74766 14.9626 8.89719C14.3365 9.57943 13.5701 10.1308 12.7009 10.5047V14.0093C12.7009 14.5047 12.2991 14.9065 11.8038 14.9065H8.39254C7.89721 14.9065 7.49534 14.5047 7.49534 14.0093V10.5047C6.63553 10.1308 5.85983 9.57943 5.23366 8.89719C5.10282 8.757 5.11216 8.55139 5.243 8.42055L6.09347 7.57009C6.23366 7.4299 6.4673 7.43924 6.59815 7.58878C7.44861 8.55139 8.6916 9.15887 10.0841 9.15887C11.4767 9.15887 12.7383 8.55139 13.5888 7.57009C13.7196 7.42055 13.9533 7.41121 14.0935 7.55139ZM11.0187 12.0934L11.5888 11.5327C11.6823 11.4486 11.6262 11.2897 11.5047 11.271L10.7196 11.1589C10.6636 11.1495 10.6168 11.1215 10.5981 11.0748L10.243 10.3551C10.1869 10.243 10.0187 10.243 9.96263 10.3551L9.60749 11.0748C9.57945 11.1215 9.53272 11.1495 9.486 11.1589L8.6916 11.271C8.57011 11.2897 8.51403 11.4392 8.60749 11.5327L9.17758 12.0934C9.21497 12.1308 9.23366 12.1869 9.22431 12.2336L9.09347 13.0187C9.07478 13.1495 9.20562 13.243 9.31777 13.1869L10.0281 12.8131C10.0654 12.785 10.1215 12.785 10.1682 12.8131L10.8785 13.1869C10.9907 13.243 11.1215 13.1495 11.1028 13.0187L10.972 12.2336C10.9626 12.1776 10.9813 12.1308 11.0187 12.0934Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clubCoinSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="10"></circle>
        <mask
          id="a"
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
        </mask>
        <g mask="url(#a)">
          <g filter="url(#filter0_d)">
            <path
              fillOpacity=".01"
              fillRule="evenodd"
              d="M12 9.341A2.997 2.997 0 0114.5 8H18v2h-3.5a1 1 0 00-1 1v2a1 1 0 001 1H18v2h-3.5a2.997 2.997 0 01-2.5-1.341A2.997 2.997 0 019.5 16H6v-2h3.5a1 1 0 001-1v-2a1 1 0 00-1-1H6V8h3.5c1.043 0 1.963.533 2.5 1.341z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm2.5 4A2.997 2.997 0 0012 9.341 2.997 2.997 0 009.5 8H6v2h3.5a1 1 0 011 1v2a1 1 0 01-1 1H6v2h3.5a2.997 2.997 0 002.5-1.341A2.997 2.997 0 0014.5 16H18v-2h-3.5a1 1 0 01-1-1v-2a1 1 0 011-1H18V8h-3.5z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="32"
            x2="12"
            y1="12"
            y2="-8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCA400"></stop>
            <stop offset="1" stopColor="#FFBC00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-8"
            x2="12"
            y1="12"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDF4E"></stop>
            <stop offset=".46" stopColor="#FFEA82"></stop>
            <stop offset="1" stopColor="#FFD914"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(90 -.002 12.002) scale(9.99683)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset=".594" stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset="1" stopColor="#FF6800"></stop>
          </radialGradient>
          <filter
            id="filter0_d"
            width="14"
            height="10"
            x="5"
            y="7"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clubMissionSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.994 1.888l.006.114v3h3c.813 0 1.256.898.848 1.534l-.065.089-.076.084-3 3a1 1 0 01-.576.284l-.131.009h-3.586l-3.707 3.707a1 1 0 01-1.497-1.32l.083-.094L14 8.586V5.002a1 1 0 01.206-.608l.087-.1 3-3c.575-.574 1.523-.252 1.684.486l.017.108zm-6.493 2.239a9 9 0 107.375 7.376l-2.037-.001A7 7 0 1112.5 6.163V4.127zm-.205 4.045A5 5 0 1016 13.002l-.01-.307a4.984 4.984 0 00-.137-.9l-.024-.087-1.888 1.89a3.001 3.001 0 11-3.536-3.537l1.89-1.889zM16 5.416l1-1v1.586l.007.117.02.112a1 1 0 00.973.771h1.584l-1 1H16V5.416z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/clubCoinFilledSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="10"></rect>
        <rect width="20" height="20" x="2" y="2" rx="10"></rect>
        <mask
          id="a"
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" x="2" y="2" rx="10"></rect>
          <rect width="20" height="20" x="2" y="2" stroke="#fff" rx="10"></rect>
        </mask>
        <g mask="url(#a)">
          <g filter="url(#filter0_d)">
            <path
              fillOpacity=".01"
              fillRule="evenodd"
              d="M12.333 8.786a3.144 3.144 0 012.64-1.453h3.694V9.5h-3.695c-.583 0-1.055.485-1.055 1.083v2.167c0 .598.472 1.083 1.055 1.083h3.695V16h-3.695a3.144 3.144 0 01-2.639-1.453A3.143 3.143 0 019.694 16H6v-2.167h3.694c.583 0 1.056-.485 1.056-1.083v-2.167c0-.598-.473-1.083-1.056-1.083H6V7.333h3.694c1.102 0 2.072.577 2.64 1.453z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fillRule="evenodd"
            d="M12 1.333c5.891 0 10.667 4.776 10.667 10.667S17.89 22.667 12 22.667C6.11 22.667 1.334 17.89 1.334 12S6.109 1.333 12 1.333zm0 2.134a8.533 8.533 0 100 17.066 8.533 8.533 0 000-17.066zm2.667 4.266A3.197 3.197 0 0012 9.163a3.197 3.197 0 00-2.666-1.43H5.6v2.134h3.734c.589 0 1.066.477 1.066 1.066v2.134c0 .589-.477 1.066-1.066 1.066H5.6v2.134h3.734A3.197 3.197 0 0012 14.837a3.197 3.197 0 002.667 1.43H18.4v-2.134h-3.733c-.59 0-1.067-.477-1.067-1.066v-2.134c0-.589.478-1.066 1.067-1.066H18.4V7.733h-3.733z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="32"
            x2="12"
            y1="12"
            y2="-8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCA400"></stop>
            <stop offset="1" stopColor="#FFBC00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-9.333"
            x2="12"
            y1="12"
            y2="33.333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDF4E"></stop>
            <stop offset=".46" stopColor="#FFEA82"></stop>
            <stop offset="1" stopColor="#FFD914"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(90 -.002 12.002) scale(9.99683)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset=".594" stopColor="#FFBE00" stopOpacity=".01"></stop>
            <stop offset="1" stopColor="#FF6800"></stop>
          </radialGradient>
          <filter
            id="filter0_d"
            width="16.667"
            height="12.667"
            x="4"
            y="5.333"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/comingSoonSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.585 15.384a1 1 0 111.882-.677A8.003 8.003 0 0011.997 20a8 8 0 100-16 1 1 0 110-2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10.003 10.003 0 01-9.412-6.616zM8.662 2.57a1 1 0 11.667 1.885 7.95 7.95 0 00-1.114.494 1 1 0 11-.947-1.762 9.95 9.95 0 011.394-.617zM5.804 5.39a1 1 0 00-1.41.11 9.95 9.95 0 00-.899 1.232 1 1 0 101.701 1.052 7.95 7.95 0 01.718-.984 1 1 0 00-.11-1.41zm-3.64 4.783a1 1 0 011.966.365A7.95 7.95 0 004 11.75a1 1 0 01-2-.06c.016-.51.07-1.016.163-1.517zM12.996 12V6h-2v5.307l-3.35 1.257.702 1.872 4-1.5a1 1 0 00.648-.936z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/commentSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 21a1 1 0 001.6.8l6.92-5.198A8 8 0 0014 2h-4a8 8 0 100 16v3zm7.373-6.037l-.037.027L12 18.998V17a1 1 0 00-1-1h-1a6 6 0 010-12h4a6 6 0 013.373 10.963z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/compareSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 2h-2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h7v2h2V2zm1 16v2h6a2 2 0 002-2V6a2 2 0 00-2-2h-6v2h6v12h-6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/copySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 00-1 1H7a3 3 0 013-3h8a3 3 0 013 3v12a3 3 0 01-3 3v-2a1 1 0 001-1V4a1 1 0 00-1-1h-8zm5 2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h10zM5 7v14h10V7H5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dkSmileSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M2.22 12.704a.966.966 0 01.194-1.405l1.61-1.126a.971.971 0 011.294.172A8.826 8.826 0 0012 13.413a8.825 8.825 0 006.682-3.068.971.971 0 011.295-.172l1.609 1.126a.965.965 0 01.194 1.405A12.72 12.72 0 0112 17.3a12.72 12.72 0 01-9.78-4.597z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dkSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 3.24C2 2.556 2.556 2 3.24 2H15c4 0 7 3 7 7v6c0 4-3 7-7 7H3.247a1.24 1.24 0 01-1.24-1.236L2 3.24zm3.354 8.453a.67.67 0 00-.135.974A8.818 8.818 0 0012 15.854c2.63 0 5.115-1.18 6.78-3.187a.67.67 0 00-.134-.974l-1.116-.78a.673.673 0 00-.897.118A6.119 6.119 0 0112 13.158a6.119 6.119 0 01-4.633-2.127.673.673 0 00-.897-.119l-1.116.78z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dkLogotypeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92 25"
      >
        <path
          fillRule="evenodd"
          d="M75.842 9.167c-.39 0-.67.278-.67.666V14.5c0 .909-.427 1.333-1.341 1.333h-6.034v-5c0-2.823-2.189-5-5.029-5H58.41c-.405 0-1.096.011-1.34.334l-1.341 2c-.258.34-.093 1 .335 1h6.704c.914 0 1.677.758 1.677 1.666v5h-14.08c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h2.682c0 .908-1.098 2-2.012 2h-6.034c-.913 0-1.34-.425-1.34-1.334v-6.666a.645.645 0 00-.671-.667h-2.012c-.39 0-.67.279-.67.667v6.666c0 3 1.676 4.667 4.693 4.667h6.034c2.84 0 5.364-2.51 5.364-5.333h10.727c.39 0 .67-.28.67-.667v-.667l.733.927c.244.322.538.407.944.407h4.358c2.84 0 4.693-1.844 4.693-4.667V9.833a.645.645 0 00-.67-.666h-2.012zm-4.693 12c-.39 0-.67.278-.67.666v2c0 .389.28.667.67.667h5.364c.39 0 .67-.278.67-.667v-2a.644.644 0 00-.67-.666h-5.364zm-12.068 0c-.39 0-.67.278-.67.666v2c0 .389.28.667.67.667h2.346c.39 0 .67-.278.67-.667v-2a.644.644 0 00-.67-.666h-2.346zM81.206 5.833c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h6.034c.914 0 1.341.424 1.341 1.333v4c0 .909-.427 1.333-1.34 1.333h-6.035c-.39 0-.67.279-.67.667v2c0 .388.28.667.67.667h6.034c2.84 0 4.693-1.844 4.693-4.667v-4c0-2.824-1.853-4.667-4.693-4.667h-6.034zm-51.96 0l3.385-4.336A.609.609 0 0032.159.5h-2.576c-.41 0-.799.182-1.06.496l-5.647 7.17c-.384.463-.268 1 .335 1h7.71c1.92 0 3.353 1.426 3.353 3.334v3.333h-13.41c-.86 0-1.34-.436-1.34-1.333V3.833a.645.645 0 00-.67-.666h-2.012c-.39 0-.67.278-.67.666V14.5c0 3 2.346 4.667 5.363 4.667h15.42c.39 0 .671-.28.671-.667v-6c0-3.823-2.86-6.667-6.704-6.667h-1.677zM11.477 3.167c-.39 0-.67.278-.67.666V14.5c0 .909-.427 1.333-1.341 1.333H2.092c-.39 0-.67.28-.67.667v2c0 .388.28.667.67.667h7.375c3.017 0 4.693-1.667 4.693-4.667V3.833a.645.645 0 00-.67-.666h-2.012zm-8.167 9.819L.75 3.833c-.105-.371.282-.666.67-.666h1.783c.356 0 .746.153.842.495l2.75 9.26c.105.369-.133.652-.518.652H4.092a.811.811 0 01-.781-.588z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dataBillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M13.5 11.25h-3v1.5h3v-1.5zM10.5 8.25h3v1.5h-3v-1.5z"></path>
        <path
          fillRule="evenodd"
          d="M1.5 15.75h15v-9a1.5 1.5 0 00-1.5-1.5H9v-1.5a1.5 1.5 0 00-1.5-1.5H3a1.5 1.5 0 00-1.5 1.5v12zm6-12H3v1.5h4.5v-1.5zm0 3H3v1.5h4.5v-1.5zM3 11.25v-1.5h4.5v1.5H3zm4.5 1.5H3v1.5h4.5v-1.5zm7.5 1.5H9v-7.5h6v7.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dataPackageSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M4.5 3a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v2.25H15V3A2.25 2.25 0 0012.75.75h-7.5A2.25 2.25 0 003 3v2.25h1.5V3zM4.5 15v-3H3v3a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0015 15v-3h-1.5v3a.75.75 0 01-.75.75h-7.5A.75.75 0 014.5 15z"></path>
        <path d="M9 14.77a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 10.449c-1.037 0-1.974.42-2.654 1.1L5.284 10.49A5.236 5.236 0 019 8.949c1.451 0 2.766.59 3.716 1.541l-1.062 1.06A3.736 3.736 0 009 10.449z"></path>
        <path d="M4.225 9.48A6.727 6.727 0 019 7.5c1.865 0 3.553.756 4.775 1.98l1.061-1.061A8.227 8.227 0 009 6c-2.28 0-4.344.925-5.836 2.419l1.06 1.06z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dateOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 3V1H6v2H5l-.176.005A3 3 0 002 6v14l.005.176A3 3 0 005 23h14l.176-.005A3 3 0 0022 20V6l-.005-.176A3 3 0 0019 3h-1V1h-2v2H8zM5 5h14l.117.007A1 1 0 0120 6v3H4V6l.007-.117A1 1 0 015 5zm-1 6h16v9l-.007.117A1 1 0 0119 21H5l-.117-.007A1 1 0 014 20v-9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dateRangeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.667 2.5V.833H5V2.5h-.833l-.147.004A2.5 2.5 0 001.667 5v11.667l.004.146a2.5 2.5 0 002.496 2.354h11.666l.147-.005a2.5 2.5 0 002.353-2.495V5l-.004-.147A2.5 2.5 0 0015.833 2.5H15V.833h-1.667V2.5H6.667zM3.333 8.333h13.334v8.334l-.006.097a.833.833 0 01-.828.736H4.167l-.098-.006a.834.834 0 01-.736-.827V8.333z"
          clipRule="evenodd"
        ></path>
        <path d="M10.833 12.5v-1.667H9.167V12.5H7.5v1.667h1.667v1.666h1.666v-1.666H12.5V12.5h-1.667z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deleteSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 2v2h8V2H8zM4 7V5h16v2H4zm13 1h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8h2v11a1 1 0 001 1h8a1 1 0 001-1V8zm-6 0H9v10h2V8zm2 0h2v10h-2V8z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryExpressSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryFastFmcgSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.17 19a3.001 3.001 0 005.66 0H21a1 1 0 001-1v-3h1v-2h-5v2h2v2h-1.17a3.001 3.001 0 00-5.66 0H10V6h12V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H4.556C2.033 6 0 8.096 0 10.667V18a1 1 0 001 1h1.17a3.001 3.001 0 005.66 0h5.34zM8 17V8H4.556C3.15 8 2 9.187 2 10.667V12h5v2H2v3h.17a3.001 3.001 0 015.66 0H8zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2zm0-12v2h8V7h-8zm1 5v-2h5v2h-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryHeavySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.17 19H8.83a3.001 3.001 0 01-5.66 0H2a1 1 0 01-1-1v-7.333C1 8.097 3.033 6 5.556 6H9V5a1 1 0 011-1h12a1 1 0 011 1v13a1 1 0 01-1 1h-2.17a3.001 3.001 0 01-5.66 0zm0-2H11V6h10v11h-1.17a3.001 3.001 0 00-5.66 0zM9 17h-.17a3.001 3.001 0 00-5.66 0H3v-3h5v-2H3v-1.333C3 9.187 4.151 8 5.556 8H9v9zm-2 1a1 1 0 11-2 0 1 1 0 012 0zm10 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryInPersonSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryJetSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.539 1.083l.224-.054a1 1 0 01.452-.006A6.098 6.098 0 0117 6.98v2.486l2.555 1.703a1 1 0 01.394.516l2 6a1 1 0 01-1.145 1.297L15.9 18H8.099l-4.903.98a1 1 0 01-1.145-1.296l2-6a1 1 0 01.394-.516L7 9.465V6.979a6.104 6.104 0 014.539-5.896zM7 11.868v4.312l-2.507.501 1.346-4.039L7 11.868zM15 10v6H9V6.979a4.099 4.099 0 012.839-3.9L12 3.03l.178.054A4.099 4.099 0 0115 6.98V10zm2 6.18l2.506.501-1.346-4.039-1.16-.773v4.311zM10 9a2 2 0 114 0 2 2 0 01-4 0zm0 13v-3H8v3h2zm6-3v3h-2v-3h2zm-3 4v-4h-2v4h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryMethodQuickSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.965 3.934l-.243 1.586a8.004 8.004 0 01-2.443 14.13l-1.65 2.309c5.23-.325 9.371-4.67 9.371-9.98 0-3.701-2.01-6.932-4.998-8.662.008.199-.004.405-.037.617zM4 11.978a8.004 8.004 0 015.72-7.67l1.65-2.31C6.142 2.322 2 6.667 2 11.978c0 3.7 2.01 6.932 4.998 8.661a3.272 3.272 0 01.037-.617l.244-1.585A7.989 7.989 0 014 11.978zM14.988 3.63l-.822 5.348H17.5a1 1 0 01.814 1.581l-7.5 10.5-.071.09c-.64.726-1.886.18-1.731-.823l.823-5.348H6.5a1 1 0 01-.814-1.581l7.5-10.5c.612-.857 1.963-.308 1.802.733zm-2.615 3.846l-3.93 5.502H11l.113.007a1 1 0 01.875 1.145l-.36 2.35 3.929-5.502H13a1 1 0 01-.988-1.152l.361-2.35z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryMethodSimultaneousSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.585 15.384a1 1 0 111.882-.677A8.003 8.003 0 0011.997 20a8 8 0 100-16 1 1 0 110-2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10.003 10.003 0 01-9.412-6.616zM8.662 2.57a1 1 0 11.667 1.885 7.95 7.95 0 00-1.114.494 1 1 0 11-.947-1.762 9.95 9.95 0 011.394-.617zM5.804 5.39a1 1 0 00-1.41.11 9.95 9.95 0 00-.899 1.232 1 1 0 101.701 1.052 7.95 7.95 0 01.718-.984 1 1 0 00-.11-1.41zm-3.64 4.783a1 1 0 011.966.365A7.95 7.95 0 004 11.75a1 1 0 01-2-.06c.016-.51.07-1.016.163-1.517zM12.996 12V6h-2v5.307l-3.35 1.257.702 1.872 4-1.5a1 1 0 00.648-.936z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryMethodSuggestedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 2a1 1 0 102 0 1 1 0 00-2 0zM8 4.072A1 1 0 117 2.34a1 1 0 011 1.732zM15 20a1 1 0 001-1v-2.255a7 7 0 10-8 0V19a1 1 0 001 1h6zm-.5-4.668a1 1 0 00-.5.865V18h-4v-1.803a1 1 0 00-.5-.865 5 5 0 114.999 0zm0 5.668c1.333 0 1.333 2 0 2h-5c-1.333 0-1.333-2 0-2h5zM3 12a1 1 0 100-2 1 1 0 000 2zm19-1a1 1 0 11-2 0 1 1 0 012 0zM3.706 7.366a1 1 0 101-1.732 1 1 0 00-1 1.732zM16 4.072a1 1 0 111-1.732 1 1 0 01-1 1.732zm3.294 1.562a1 1 0 101 1.732 1 1 0 00-1-1.732z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryNonInventorySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c5.523 0 10 4.477 10 10v1.5a3.5 3.5 0 01-6.396 1.966A5 5 0 1115 8v-.5h2v6a1.5 1.5 0 003 0V12a8 8 0 10-3.512 6.623l1.124 1.655A9.957 9.957 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm3 10a3 3 0 10-6 0 3 3 0 006 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryPostSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20.017 6.667c-.348 2.445-1.803 4.608-3.962 5.889l-2.418 1.434a1.093 1.093 0 01-1.46-.322l-2.91-4.334C7.765 7.101 4.697 6.476 2.41 7.938L1 8.84l6.46 9.348C8.674 19.946 10.704 21 12.876 21h8.507l-3.522-5.605-1.836 1.102 1.506 2.397h-4.655a4.41 4.41 0 01-3.632-1.886l-5.21-7.54c1.222-.504 2.676-.1 3.43 1.022l2.91 4.334c.956 1.422 2.893 1.85 4.38.966l2.418-1.434c2.713-1.61 4.542-4.327 4.979-7.399L23 1 10.55 8.666l1.15 1.782 8.527-5.25-.21 1.469z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryShipBySellerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a1 1 0 00-1-1H8a1 1 0 00-1 1v5a5 5 0 0010 0h3V6h-3V3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0121 22H3a1 1 0 01-.996-1.092C2.428 16.318 5.904 14 12 14zm0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4zM9 8a3 3 0 006 0H9zm0-4h6v2H9V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/deliveryTipoxSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 15v3a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2v8h5v-2H9V5h14V3H5a3 3 0 00-3 3v12a3 3 0 003 3h11a3 3 0 003-3v-3h-2zm-2-7h7V6h-7v2zm6 3h-4V9h4v2zm-6 3h5v-2h-5v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/digikalaSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 154 41"
      >
        <path
          fillRule="evenodd"
          d="M103 26h9V14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3zm36 0h9V14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3zM118 9.5v21c0 .662-.836 1.5-1.5 1.5l-3 .032c-.664 0-1.5-.87-1.5-1.532v-1l-1.361 1.634c-.415.564-1.438.866-2.139.866H103c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h13.5c.663 0 1.5.839 1.5 1.5zm36 0v21c0 .662-.836 1.5-1.5 1.5l-3 .032c-.664 0-1.5-.87-1.5-1.532v-1l-1.361 1.634c-.415.564-1.438.866-2.139.866H139c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h13.5c.663 0 1.5.839 1.5 1.5zM54 14h-9c-1.553 0-3 1.45-3 3v6c0 1.55 1.447 3 3 3h9V14zm6-4.5v23c0 4.815-4.174 8.5-9 8.5h-4.638c-.69 0-1.34-.323-1.756-.872l-2.64-3.486c-.438-.578-.193-1.642.534-1.642H51c1.553 0 3-.95 3-2.5V32h-9c-4.826 0-9-4.185-9-9v-6c0-4.815 4.174-9 9-9h5.5c.688 0 1.438.554 1.924 1L54 10.5v-1c0-.66.838-1.5 1.5-1.5h3c.664 0 1.5.838 1.5 1.5zM6 23c0 1.55 1.447 3 3 3h9V14H9c-1.553 0-3 1.45-3 3v6zM22.5 0c.664 0 1.5.838 1.5 1.5v29c0 .662-.836 1.5-1.5 1.5h-3c-.664 0-1.5-.838-1.5-1.5v-1l-1.573 1.683c-.426.473-1.248.817-1.927.817H9c-4.826 0-9-4.185-9-9v-5.954C0 12.23 4.174 8 9 8h9V1.5c0-.662.836-1.5 1.5-1.5h3zm62 20l8.35-10.57a.88.88 0 00-.687-1.432h-4.776c-.36 0-.703.162-.931.441L78 19V1.5c0-.662-.836-1.5-1.5-1.5h-3c-.664 0-1.5.838-1.5 1.5v29c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5V21l8.46 10.584c.228.283.572.448.937.448h4.77a.88.88 0 00.688-1.433L84.5 20zm-20-20c-.663 0-1.5.838-1.5 1.5v3c0 .662.837 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-3c0-.662-.836-1.5-1.5-1.5h-3zm0 8c-.663 0-1.5.838-1.5 1.5v21c0 .662 1.072 1.531 1.735 1.531L67.5 32c.664 0 1.5-.838 1.5-1.5v-21c0-.662-.836-1.5-1.5-1.5h-3zm-36-8c-.664 0-1.5.838-1.5 1.5v3c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-3c0-.662-.836-1.5-1.5-1.5h-3zm0 8c-.664 0-1.5.838-1.5 1.5v21c0 .662.836 1.5 1.5 1.5h3c.664 0 1.5-.838 1.5-1.5v-21c0-.662-.836-1.5-1.5-1.5h-3zM127 1.5v29c0 .662-.836 1.5-1.5 1.5h-3c-.664 0-1.5-.838-1.5-1.5v-29c0-.662.836-1.5 1.5-1.5h3c.664 0 1.5.838 1.5 1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/digipaySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M14 4.833A3.333 3.333 0 0010.667 1.5H4v1.111a3.333 3.333 0 003.333 3.333H14v-1.11zm0 3.334V7.056H7.333l-.125.002A3.333 3.333 0 004 10.388V16.5h1.111l.125-.002a3.333 3.333 0 003.208-3.331V11.5h2.223l.125-.002A3.333 3.333 0 0014 8.167z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/digipayLogotypeEnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 27"
      >
        <path
          fillRule="evenodd"
          d="M13.417 6.353H7.083C3.586 6.353.75 9.197.75 12.706v1.588c0 3.509 2.836 6.353 6.333 6.353h9.5V0h-3.166v6.353zm0 11.118H7.083a3.172 3.172 0 01-3.166-3.177v-1.588a3.172 3.172 0 013.166-3.177h6.334v7.942zm4.75-11.118h3.166v14.294h-3.166V6.353zm4.75 7.941v-1.588c0-3.509 2.835-6.353 6.333-6.353h9.5v14.294c0 3.509-2.836 6.353-6.333 6.353H29.25l-1.781-3.177h4.948a3.171 3.171 0 003.166-3.176H29.25c-3.498 0-6.333-2.844-6.333-6.353zm6.333 3.177h6.333V9.529H29.25a3.172 3.172 0 00-3.167 3.177v1.588a3.172 3.172 0 003.167 3.177zM92.583 6.353V17.47H86.25a3.172 3.172 0 01-3.167-3.177V6.353h-3.166v7.941c0 3.509 2.835 6.353 6.333 6.353h6.333a3.171 3.171 0 01-3.166 3.177h-4.948L86.25 27h3.167c3.498 0 6.333-2.844 6.333-6.353V6.353h-3.167zM62.5 12.706v1.588c0 3.509 2.835 6.353 6.333 6.353h9.5V6.353h-9.5c-3.498 0-6.333 2.844-6.333 6.353zm12.667 4.765h-6.334a3.172 3.172 0 01-3.166-3.177v-1.588a3.172 3.172 0 013.166-3.177h6.334v7.942zM45.083 6.353h9.5c3.498 0 6.334 2.844 6.334 6.353v1.588c0 3.509-2.836 6.353-6.334 6.353H48.25V27h-3.167V6.353zm9.5 11.118a3.172 3.172 0 003.167-3.177v-1.588a3.172 3.172 0 00-3.167-3.177H48.25v7.942h6.333zM21.333 0h-3.166v3.176h3.166V0zm19 6.353H43.5v14.294h-3.167V6.353zM43.5 0h-3.167v3.176H43.5V0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/digiplusSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 156 35"
      >
        <path
          fillRule="evenodd"
          d="M69.897 27.35c.56 0 1.02.421 1.078.962l.007.117v4.992c0 .556-.424 1.014-.967 1.073l-.118.006H66.86c-.56 0-1.02-.42-1.079-.962l-.006-.117-.001-1.409h-3.493c-.559 0-1.02-.42-1.078-.961l-.006-.118v-2.504c0-.556.422-1.014.966-1.072l.118-.007h7.616zm42.611-22.868c4.152 0 7.371 3.123 7.495 7.219l.004.246v7.466h8.998c1.304 0 1.943-.58 1.996-1.818l.004-.173v-6.968c0-.538.36-.935.878-.989l.122-.006h2.999c.54 0 .939.359.994.874l.006.121v6.968c0 4.128-2.65 6.853-6.736 6.965l-.263.003h-6.499c-.55 0-.962-.105-1.306-.485l-.102-.123-1.091-1.382v.995c0 .537-.361.935-.878.99l-.122.005H103.01c0 4.137-3.623 7.822-7.76 7.96l-.238.004h-8.01c-4.417 0-7.87-3.354-7.984-7.711l-.003-.253v-8.959c0-.537.36-.935.877-.989l.123-.006h2.999c.54 0 .94.36.993.874l.007.121-.01 8.942a3.001 3.001 0 002.823 2.999l.177.005h8.008c1.314 0 2.883-1.515 2.993-2.84l.006-.147h-4c-.54 0-.938-.358-.993-.873l-.006-.122v-2.986c0-.539.36-.935.878-.99l.122-.006h20.996v-7.466c0-1.302-1.048-2.397-2.337-2.483l-.163-.005h-9.998c-.602 0-.856-.88-.558-1.405l2.058-3.075c.287-.378.984-.469 1.563-.49l.437-.007h6.498zm20.496 22.895c.541 0 .94.358.994.874l.006.121v2.986c0 .539-.36.936-.877.99l-.123.006h-7.998c-.541 0-.939-.358-.994-.874l-.006-.122v-2.986c0-.538.36-.935.878-.989l.122-.006h7.998zm-22.495 0c.54 0 .939.358.993.874l.007.121v2.986c0 .539-.361.936-.878.99l-.122.006h-3.5c-.54 0-.939-.358-.993-.874l-.006-.122v-2.986c0-.538.36-.935.877-.989l.122-.006h3.5zM19 9.459c.54 0 .94.359.994.874l.006.121v8.959h3a3 3 0 002.995-2.823l.005-.177v-5.959c0-.537.362-.935.879-.989l.122-.006h2.947c.542 0 .989.409 1.046.934l.006.114v6.448c0 .867-.15 1.704-.427 2.482l.447-.003a3 3 0 002.975-2.825l.005-.175v-5.98c0-.537.362-.935.879-.989l.122-.006h2.947c.542 0 .989.409 1.046.934l.006.114v6.448a7.41 7.41 0 01-2.185 5.258 7.462 7.462 0 01-4.969 2.171l-.306.006h-1.35c-.29 0-.564-.118-.76-.323l-1.163-1.359a7.467 7.467 0 01-4.414 1.676l-.313.006-3.54-.033a7 7 0 01-6.76 6.997l-.24.005H7a7 7 0 01-6.996-6.76L0 24.36V12.444c0-.538.36-.935.878-.989L1 11.45h3c.54 0 .94.359.994.873l.006.122v10.936a3 3 0 002.824 2.995l.176.005h4a3 3 0 002.995-2.823L15 23.38V10.454c0-.537.36-.935.878-.989L16 9.46h3zm130.001-4.977c4.147 0 6.883 2.638 6.995 6.706l.004.262v5.972c0 4.128-2.65 6.853-6.736 6.965l-.263.003h-8.998c-.54 0-.939-.358-.993-.873l-.007-.122v-2.986c0-.538.361-.935.878-.99l.122-.006h8.998c1.304 0 1.943-.58 1.996-1.818l.004-.173V11.45c0-1.298-.583-1.935-1.826-1.987l-.174-.004h-8.998c-.54 0-.939-.36-.993-.874l-.007-.122V5.477c0-.538.361-.935.878-.989l.122-.006h8.998zM59.022.5c.54 0 .94.359.994.874l.006.121v15.927a9.92 9.92 0 01-.189 1.992H66.5c.694-.002 1.315-.32 1.773-.764.407-.405.669-.926.719-1.523l.008-.202v-6.45c0-.549.35-.958.883-1.01L70 9.459h3c.556 0 .942.35.994.872l.006.123v6.38a7.477 7.477 0 01-2.252 5.343c-1.314 1.295-2.958 2.128-4.933 2.207l-.315.006h-6.401c-.298 0-.58-.12-.784-.328l-.082-.095-1.045-1.358c-1.125 1.106-2.747 1.715-4.816 1.776l-.348.005H42.026c-.54 0-.94-.358-.994-.873l-.006-.122v-2.986c0-.538.36-.935.878-.99l.122-.006h10.998c1.303 0 1.943-.58 1.996-1.818l.003-.173V1.495c0-.537.36-.935.878-.989L56.023.5h3zM43.684.5c.531 0 1.112.23 1.256.739l4.1 13.827c.157.55-.197.974-.772.974h-3.26a1.21 1.21 0 01-1.165-.878L40.026 1.495c-.157-.554.421-.995 1-.995h2.658z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/digiplusEnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94 24"
      >
        <path
          fillRule="evenodd"
          d="M13.17 0c.39 0 .879.49.879.878v16.976c0 .387-.49.878-.878.878h-1.756c-.389 0-.878-.49-.878-.878v-.586l-.921.985c-.25.278-.73.479-1.128.479h-3.22C2.443 18.732 0 16.282 0 13.463V9.978C0 7.16 2.443 4.683 5.268 4.683h5.269V.878c0-.387.49-.878.878-.878h1.756zM3.513 13.463c0 .907.847 1.757 1.756 1.757h5.269V8.194H5.268c-.909 0-1.756.85-1.756 1.756v3.512zm31.61-7.902v13.463c0 2.819-2.443 4.976-5.268 4.976h-2.715a1.29 1.29 0 01-1.028-.51l-1.545-2.04c-.257-.34-.113-.962.312-.962h4.976c.909 0 1.756-.557 1.756-1.464v-.292h-5.268c-2.825 0-5.269-2.45-5.269-5.269V9.951c0-2.818 2.444-5.268 5.268-5.268h3.22c.403 0 .842.324 1.127.585l.922.878v-.585c0-.387.49-.878.878-.878h1.756c.388 0 .878.49.878.878zM31.61 8.195h-5.268c-.91 0-1.757.85-1.757 1.756v3.512c0 .908.847 1.757 1.756 1.757h5.269V8.194zm10.536 10.537V5.56c0-.388.49-.878.879-.878h1.756c.387 0 .878.491.878.878v.585l.922-.878c.284-.261.723-.585 1.126-.585h3.22c2.825 0 5.268 2.45 5.268 5.268v3.512c0 2.819-2.443 5.269-5.268 5.269h-5.268V22.5a1.5 1.5 0 01-1.5 1.5h-.513a1.5 1.5 0 01-1.5-1.5v-3.768zm8.78-10.537H45.66v7.024h5.268c.91 0 1.756-.848 1.756-1.756V9.951c0-.907-.847-1.756-1.756-1.756zm26.342-2.012a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l-.003.097c-.058.872-.878 1.66-1.753 1.66h-3.512l-.097-.004c-.87-.057-1.66-.876-1.66-1.753V6.183a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l.003.151c.085 2.76 2.498 5.117 5.266 5.117H72l.15-.002c2.755-.085 5.118-2.492 5.118-5.266V6.183zM37.756 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878l-1.618.018c-.389 0-1.016-.509-1.016-.896V5.56zM16.683 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878h-1.756c-.388 0-.878-.49-.878-.878V5.56zM61.464.878v16.976c0 .387-.49.878-.879.878H58.83c-.388 0-.878-.49-.878-.878V.878c0-.387.49-.878.878-.878h1.756c.389 0 .879.49.879.878zM79.61 17.232a1.5 1.5 0 001.5 1.5h7.942c2.158 0 3.975-1.711 4.02-3.881a3.958 3.958 0 00-2.973-3.927l-7.24-1.844a.446.446 0 01-.328-.512.458.458 0 01.456-.367h8a1.5 1.5 0 001.5-1.5v-.518a1.5 1.5 0 00-1.5-1.5h-7.941c-2.159 0-3.976 1.711-4.02 3.88a3.958 3.958 0 002.973 3.927l7.24 1.845a.446.446 0 01.327.511.457.457 0 01-.456.367h-8a1.5 1.5 0 00-1.5 1.5v.519z"
          clipRule="evenodd"
        ></path>
        <mask
          id="a"
          width="94"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fillRule="evenodd"
            d="M13.17 0c.39 0 .879.49.879.878v16.976c0 .387-.49.878-.878.878h-1.756c-.389 0-.878-.49-.878-.878v-.586l-.921.985c-.25.278-.73.479-1.128.479h-3.22C2.443 18.732 0 16.282 0 13.463V9.978C0 7.16 2.443 4.683 5.268 4.683h5.269V.878c0-.387.49-.878.878-.878h1.756zM3.513 13.463c0 .907.847 1.757 1.756 1.757h5.269V8.194H5.268c-.909 0-1.756.85-1.756 1.756v3.512zm31.61-7.902v13.463c0 2.819-2.443 4.976-5.268 4.976h-2.715a1.29 1.29 0 01-1.028-.51l-1.545-2.04c-.257-.34-.113-.962.312-.962h4.976c.909 0 1.756-.557 1.756-1.464v-.292h-5.268c-2.825 0-5.269-2.45-5.269-5.269V9.951c0-2.818 2.444-5.268 5.268-5.268h3.22c.403 0 .842.324 1.127.585l.922.878v-.585c0-.387.49-.878.878-.878h1.756c.388 0 .878.49.878.878zM31.61 8.195h-5.268c-.91 0-1.757.85-1.757 1.756v3.512c0 .908.847 1.757 1.756 1.757h5.269V8.194zm10.536 10.537V5.56c0-.388.49-.878.879-.878h1.756c.387 0 .878.491.878.878v.585l.922-.878c.284-.261.723-.585 1.126-.585h3.22c2.825 0 5.268 2.45 5.268 5.268v3.512c0 2.819-2.443 5.269-5.268 5.269h-5.268V22.5a1.5 1.5 0 01-1.5 1.5h-.513a1.5 1.5 0 01-1.5-1.5v-3.768zm8.78-10.537H45.66v7.024h5.268c.91 0 1.756-.848 1.756-1.756V9.951c0-.907-.847-1.756-1.756-1.756zm26.342-2.012a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l-.003.097c-.058.872-.878 1.66-1.753 1.66h-3.512l-.097-.004c-.87-.057-1.66-.876-1.66-1.753V6.183a1.5 1.5 0 00-1.5-1.5h-.512a1.5 1.5 0 00-1.5 1.5v6.695l.003.151c.085 2.76 2.498 5.117 5.266 5.117H72l.15-.002c2.755-.085 5.118-2.492 5.118-5.266V6.183zM37.756 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878l-1.618.018c-.389 0-1.016-.509-1.016-.896V5.56zM16.683 0c-.388 0-.878.49-.878.878v1.756c0 .388.49.878.878.878h1.756c.389 0 .878-.49.878-.878V.878c0-.387-.49-.878-.878-.878h-1.756zm-.878 5.561c0-.387.49-.878.878-.878h1.756c.389 0 .878.49.878.878v12.293c0 .387-.49.878-.878.878h-1.756c-.388 0-.878-.49-.878-.878V5.56zM61.464.878v16.976c0 .387-.49.878-.879.878H58.83c-.388 0-.878-.49-.878-.878V.878c0-.387.49-.878.878-.878h1.756c.389 0 .879.49.879.878zM79.61 17.232a1.5 1.5 0 001.5 1.5h7.942c2.158 0 3.975-1.711 4.02-3.881a3.958 3.958 0 00-2.973-3.927l-7.24-1.844a.446.446 0 01-.328-.512.458.458 0 01.456-.367h8a1.5 1.5 0 001.5-1.5v-.518a1.5 1.5 0 00-1.5-1.5h-7.941c-2.159 0-3.976 1.711-4.02 3.88a3.958 3.958 0 002.973 3.927l7.24 1.845a.446.446 0 01.327.511.457.457 0 01-.456.367h-8a1.5 1.5 0 00-1.5 1.5v.519z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#a)">
          <path d="M0 0h93v24H0z"></path>
        </g>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/discountSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/doneSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M9.5 15.586l9.293-9.293 1.414 1.414-10 10a1 1 0 01-1.414 0l-4.5-4.5 1.414-1.414L9.5 15.586z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dotSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3"></circle>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dotOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="2"></circle>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/doubtSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 8h2V7a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-.4.8l-2.4 1.8A3 3 0 0014 14v3h2v-3a1 1 0 01.4-.8l2.4-1.8A3 3 0 0020 9V7a3 3 0 00-3-3h-4a3 3 0 00-3 3v1zM6 5h2v12H6V5zm2 13H6v2h2v-2zm8 0h-2v2h2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/downloadSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path
          fillRule="evenodd"
          d="M13.5 3v9.586l3.293-3.293 1.414 1.414-5 5a1 1 0 01-1.414 0l-5-5 1.414-1.414 3.293 3.293V3h2zm-11 14v2a2 2 0 002 2h16a2 2 0 002-2v-2h-2v2h-16v-2h-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dropUpSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 14l5-5 5 5H7z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/dropdownSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5H7z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/editSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-12 12A1 1 0 018 21H4a1 1 0 01-1-1v-4a1 1 0 01.293-.707l12-12zM5 16.414V19h2.586l11-11L16 5.414l-11 11zM21 21H10l2-2h9v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/electronicSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/electronicsFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/errorSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 21a9 9 0 110-18 9 9 0 010 18zm1-14v7h-2V7h2zm0 9a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/expandLessSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/expandMoreSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/expandShowLessSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.293 5.414L8.707 4 12 7.293 15.293 4l1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4zm0 13.169l1.414 1.414L12 16.704l3.293 3.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/expandShowMoreSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.293 16.704l1.414-1.414L12 18.583l3.293-3.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4zm0-9.411l1.414 1.414L12 5.414l3.293 3.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/externalLinkSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path d="M18.5 13v3a2 2 0 01-2 2h-8a2 2 0 01-2-2V8a2 2 0 012-2h3V4h-3a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-3h-2z"></path>
        <path d="M9.793 13.293l1.414 1.414L18.5 7.414V11h2V5a1 1 0 00-1-1h-6v2h3.586l-7.293 7.293z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/faceSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        <path
          fillRule="evenodd"
          d="M20 33.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333-7.364 0-13.333 5.97-13.333 13.333 0 7.364 5.97 13.333 13.333 13.333zm0 3.334c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M27.597 23.617c.764.514.966 1.55.452 2.314C26.373 28.42 23.35 30 19.993 30c-3.344 0-6.36-1.569-8.039-4.044a1.667 1.667 0 112.758-1.872c1.012 1.491 2.954 2.583 5.281 2.583 2.335 0 4.283-1.1 5.29-2.598a1.667 1.667 0 012.314-.452z"
          clipRule="evenodd"
        ></path>
        <path d="M16.667 15.833a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        <path d="M28.333 15.833a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        <defs>
          <linearGradient
            id="paint0_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_1582_4945"
            x1="3.707"
            x2="38.083"
            y1="21.544"
            y2="21.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC0721"></stop>
            <stop offset="1" stopColor="#FF939B"></stop>
          </linearGradient>
        </defs>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/facebookSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.597 2.005L14.742 2c-2.888 0-4.754 1.914-4.754 4.878V9H7.404A.404.404 0 007 9.404v3.192c0 .223.181.404.404.404h2.584v8.415c0 .223.181.404.404.404h3.204a.404.404 0 00.404-.404V13h2.596c.223 0 .404-.18.404-.404l.001-3.192A.405.405 0 0016.597 9H14V7.22c0-.916.387-1.22 1.58-1.22h1.017A.404.404 0 0017 5.597V2.41a.404.404 0 00-.404-.404z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fashionSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fashionFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M9 4H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.543-1.334l-5-2A1.004 1.004 0 0017 4H15a1 1 0 00-1 1c0 .537-.18 1.041-.497 1.398C13.202 6.737 12.729 7 12 7c-.729 0-1.202-.263-1.503-.602C10.18 6.041 10 5.537 10 5a1 1 0 00-1-1z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fastBackwardSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.707 16l-4.293-4.293 4.293-4.293L17.293 6l-5 5a1 1 0 000 1.414l5 5L18.707 16zm-7 0l-4.293-4.293 4.293-4.293L10.293 6l-5 5a1 1 0 000 1.414l5 5L11.707 16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fastForwardSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 16l4.293-4.293L5 7.414 6.414 6l5 5a1 1 0 010 1.414l-5 5L5 16zm7 0l4.293-4.293L12 7.414 13.414 6l5 5a1 1 0 010 1.414l-5 5L12 16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/favOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6 20a1 1 0 001.514.858L12 18.166l4.485 2.692A1 1 0 0018 20V4a1 1 0 00-1-1H7a1 1 0 00-1 1v16zm2-1.766V5h8v13.234l-3.486-2.092a1 1 0 00-1.028 0L8 18.234z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/favOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.514 20.858A1 1 0 016 20V4a1 1 0 011-1h10a1 1 0 011 1v16a1 1 0 01-1.515.858L12 18.166l-4.486 2.692z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/favoriteOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 3a6 6 0 00-3.844 10.607l6.982 6.492a2 2 0 002.724 0l6.993-6.503C21.685 12.504 22.5 10.818 22.5 9A6 6 0 0012 5.03 5.995 5.995 0 007.5 3zm-2.502 9.124l-.044-.039a4 4 0 116.147-4.83 1 1 0 001.799 0A4 4 0 0120.5 9a3.99 3.99 0 01-1.461 3.091L12 18.634l-7.002-6.51z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/favoriteOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M1.5 9A6 6 0 0112 5.03 6 6 0 0122.5 9c0 1.818-.814 3.504-2.145 4.596L13.362 20.1a2 2 0 01-2.724 0l-6.982-6.492A5.988 5.988 0 011.5 9z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/feedbackSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.275 21.474a1 1 0 001.2-1.199l-.773-3.345A9.958 9.958 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c1.753 0 3.44-.453 4.93-1.298l3.345.772zm-1.485-5.24a1 1 0 00-.127.754l.503 2.178-2.178-.503a1 1 0 00-.755.127 8 8 0 112.556-2.556zM10 11h3v5h-2v-3h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fidiboBannerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 89 25"
      >
        <path
          fillRule="evenodd"
          d="M43.826 9.413c-2.326-.098-4.657 1.928-4.665 4.608-.008 2.688 2.301 4.655 4.627 4.664 2.32.01 4.648-1.923 4.664-4.627.017-2.729-2.363-4.737-4.626-4.645zm7.088-1.262c0 .618.004 1.235.008 1.853.008 1.376.016 2.751-.016 4.126-.076 3.317-2.194 5.8-4.898 6.653-1.73.545-3.442.476-5.083-.259-2.11-.944-3.485-2.562-4.002-4.836-.614-2.7.115-5.02 2.12-6.916 1.16-1.095 2.58-1.658 4.16-1.798 1.719-.152 3.288.284 4.704 1.268l.016.011c.056.04.113.08.17.118.146.096.224.052.237-.117.004-.047.004-.094.004-.141v-.04-.136-.136l.014-1.817c.01-1.387.02-2.773.033-4.16.007-.77.54-1.336 1.244-1.33.725.007 1.268.545 1.272 1.316a687.9 687.9 0 01.005 4.52v.001l-.001 1.82h.013zM2.532 19.421v.513l.001.895c.002.698.004 1.397-.007 2.095a1.195 1.195 0 01-1.089 1.188c-.668.064-1.197-.294-1.372-.924a2.16 2.16 0 01-.054-.583c0-.867-.003-1.734-.005-2.601C0 18.03-.005 16.059.01 14.086c.015-2 .684-3.766 2.127-5.18C3.4 7.671 4.936 6.985 6.7 6.826c.298-.028.598-.028.898-.028H28.544c.178-.002.355-.004.532.05.599.185.97.737.895 1.352-.065.542-.567 1.067-1.209 1.064-2.633-.013-5.266-.011-7.9-.01l-2.702.002H8.463c-.389 0-.777.013-1.165.027l-.328.01c-1.666.055-3.722 1.25-4.32 3.445-.495 1.815.083 3.558 1.62 4.765.942.74 2.024 1.081 3.24 1.078 5.118-.01 10.236-.01 15.354-.008l5.172.001c.197 0 .39-.015.586-.036a1.267 1.267 0 011.307.778c.213.537.036 1.149-.426 1.501-.258.197-.55.221-.858.221-1.071-.002-2.142-.002-3.212-.002H23.887c-1.532 0-3.064-.002-4.596-.004-3.89-.004-7.78-.008-11.67.007-1.737.007-3.31-.414-4.708-1.457l-.04-.031a.472.472 0 00-.341-.13zm57.929-5.552c.02-2.594 2.172-4.626 4.677-4.612 2.54.022 4.632 2.124 4.609 4.679-.023 2.6-2.159 4.615-4.63 4.61a4.654 4.654 0 01-4.656-4.677zm.426-5.674c-.074.058-.15.118-.261.092-.064-.094-.058-.196-.052-.298.002-.032.004-.064.004-.095-.013-1.547-.024-3.095-.036-4.642v-.009l-.01-1.325v-.073A1.247 1.247 0 0058.979.54c-.598.16-.954.614-.963 1.263a256.282 256.282 0 00-.018 3.125v3.236c0 1.88.002 3.761-.003 5.642a7.49 7.49 0 00.476 2.613c1.176 3.203 4.475 4.965 7.595 4.511 1.59-.23 3-.868 4.098-2.037 1.786-1.904 2.454-4.154 1.797-6.722-.7-2.733-2.458-4.44-5.17-5.144-2.113-.549-4.063-.117-5.846 1.123-.02.014-.038.03-.057.044zm-33.349 8.508c-.161.073-.292.068-.415.064l-.087-.002c-1.875 0-3.75 0-5.624-.002h-.01c-4.765-.001-9.531-.003-14.297.015-1.222.005-2.593-.875-2.938-2.295-.265-1.092.01-2.052.754-2.841.584-.62 1.353-.944 2.229-.944h20.172c.07 0 .141 0 .212.004.165.01.212.101.144.245-.049.103-.1.205-.152.307-.064.127-.128.254-.187.383a5.25 5.25 0 00-.342 1.122c-.04.202-.14.286-.338.28-.08-.003-.16-.002-.241-.001H7.343c-.085 0-.17-.002-.254.002-.42.016-.723.3-.749.697-.02.314.315.702.667.753.108.015.219.013.33.01l.122-.002h18.754l.1.003c.072.002.145.005.217-.004.266-.034.352.075.397.342.106.638.323 1.248.61 1.864zm53.517-7.347c2.605 0 4.713 2.243 4.607 4.656.104 2.428-2.17 4.636-4.653 4.613-2.381-.02-4.605-2.17-4.585-4.66.02-2.364 2.016-4.609 4.631-4.609zm7.096 4.668c.018-4.034-3.074-7.067-7.066-7.14-4.006.043-7.112 3.055-7.127 7.08-.015 4.018 3.036 7.11 7.067 7.127 4.025.018 7.109-3.047 7.126-7.067zm-53.537 1.379l-.001 1.215c-.001 1.058-.002 2.116.003 3.174.002.537-.217.933-.693 1.175a1.254 1.254 0 01-1.76-.74 1.583 1.583 0 01-.071-.49v-3.493c0-1.717 0-3.434.002-5.15.001-.64.338-1.122.872-1.292.53-.167 1.065.007 1.412.45.199.253.239.543.238.852-.003 1.03-.003 2.06-.002 3.09v1.209zm18.568-1.252v1.288h.002l-.002 1.286c-.001 1.064-.003 2.129.005 3.194a1.23 1.23 0 001.152 1.228 1.26 1.26 0 001.327-.997c.037-.174.037-.36.037-.54.003-2.76.002-5.52.002-8.28v-.074c0-.11.001-.222-.01-.332a1.276 1.276 0 00-1.258-1.135c-.715-.003-1.247.518-1.252 1.261a416.18 416.18 0 00-.003 3.1zM35.017 6.885a1.697 1.697 0 01-1.684 1.671c-.914-.006-1.68-.779-1.67-1.685a1.688 1.688 0 011.683-1.67c.914.006 1.673.77 1.67 1.684zm17.668-.057c-.006.903.752 1.668 1.661 1.677a1.687 1.687 0 001.698-1.64c.024-.9-.733-1.684-1.637-1.699a1.688 1.688 0 00-1.721 1.662z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fidiboSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.234 4.271c1.32-.152 2.393.844 2.526 1.983a2.299 2.299 0 01-2.004 2.553 2.285 2.285 0 01-2.557-2.004c-.154-1.362.849-2.39 2.035-2.532zm4.694 5.827l.01-1.26-1.718-.01c.07-.147.144-.258.22-.372.134-.2.273-.41.404-.839C11.99 3.814 6.99 1.292 4.585 4.464c-1.34 1.76-.603 4.028.798 4.994.94.64 1.616.65 2.925.65.174 0 .451.002.777.005.999.006 2.458.016 2.843-.015zm-4.326 8.449c-.13-.005-.243-.008-.344-.01-.395-.008-.616-.013-1.108-.17-4.101-1.303-3.64-5.604-1.135-7.048.875-.506 1.594-.503 2.635-.5l.28.001h10.4c.083 0 .186-.003.299-.006.446-.012 1.06-.03 1.297.108.399.224.512.763.123 1.088-.265.23-.758.215-1.202.2a9.478 9.478 0 00-.302-.007H9.853c-.21 0-.477-.005-.77-.011-.9-.019-2.052-.043-2.615.072-.93.194-1.636.784-1.953 1.506-.45 1.027-.092 2.003.5 2.582.708.703 1.265.9 2.588.817v-.735c-.149-.026-.265-.026-.375-.025-.187 0-.358.001-.647-.128a1.874 1.874 0 01-.696-.539c-.368-.447-.542-1.26-.194-1.84.57-.987 2.17-.977 3.566-.968l.382.002c1.635.005 3.267.007 4.898.01 1.634.002 3.267.005 4.9.01-.011.173-.349 1.088-.44 1.322-.325.041-6.529.022-9.302.013l-1.253-.003c-.105 0-.22-.005-.342-.01-.457-.022-.982-.046-1.233.203-.184.194-.123.407.051.57.153.133.44.142.685.1v-.354h2.2v.355l9.122-.06c.043.028.06.033.067.035.003 0 .004.001.005.002l.004.009a.73.73 0 00.047.106l.378 1.078-9.624.081v.448l-.007.325 9.692-.01c.43 0 .819.224.829.661.026.804-.998.76-1.786.725a9.774 9.774 0 00-.413-.013c-.986 0-1.932-.005-2.864-.01a285.335 285.335 0 00-5.478.01l-.024 2.42-.092-.101c-.092-.102-.798-1.272-.972-1.607-.197.294-.347.56-.486.807l-.015.027a29.77 29.77 0 00-.055.1c-.081.146-.16.287-.252.429l-.276.315v-2.382zM16.94 4.322c-1.095.214-2.087 1.302-1.8 2.695.225 1.078 1.299 2.044 2.68 1.79 1.124-.214 2.075-1.292 1.83-2.675a2.302 2.302 0 00-2.71-1.81zm-4 4.536l1.73-.02c-.522-.59-.931-1.689-.758-2.767.502-3.224 4.593-4.027 6.382-1.596 1.156 1.556.87 3.793-.808 5.003-.88.64-1.687.65-2.945.65h-3.6v-1.27z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fileTransferUploadSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.969 8.355C19.635 4.782 16.643 2 13 2a6.996 6.996 0 00-5.795 3.072A3.5 3.5 0 003.07 9.2 5.5 5.5 0 006.5 19H9v-2H6.5l-.192-.005a3.5 3.5 0 01-1.553-6.53 1 1 0 00.443-1.198l-.1-.234a1.5 1.5 0 012.05-1.887l.051.027.107.046a1 1 0 001.235-.485A5 5 0 0118 9l-.005.235.004.117a1 1 0 00.665.848A3.5 3.5 0 0117.5 17H15v2h2.5l.221-.004a5.5 5.5 0 002.473-10.291l-.207-.11-.018-.24zm-8.823.084l-5 5 1.415 1.415L11 11.413V21h2v-9.293l3.146 3.147 1.415-1.415-5-5-.095-.083a1 1 0 00-1.32.083z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/filterSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.17 6a3.001 3.001 0 005.66 0H22V4H10.83a3.001 3.001 0 00-5.66 0H2v2h3.17zM9 5a1 1 0 11-2 0 1 1 0 012 0zm7 10a3.001 3.001 0 01-2.83-2H2v-2h11.17a3.001 3.001 0 015.66 0H22v2h-3.17A3.001 3.001 0 0116 15zm1-3a1 1 0 11-2 0 1 1 0 012 0zM5.17 18H2v2h3.17a3.001 3.001 0 005.66 0H22v-2H10.83a3.001 3.001 0 00-5.66 0zM9 19a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/flagSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2h7a1 1 0 011 1v19h-2v-8h-4v1a1 1 0 01-1 1H5a1 1 0 01-.958-1.287L5.456 10 4.042 5.287A1 1 0 015 4h6V3a1 1 0 011-1zm6 10V4h-5v8h5zM6.344 6l1.114 3.713a1 1 0 010 .574L6.344 14H12a1 1 0 01-1-1V6H6.344z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/freeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path
          fillRule="evenodd"
          d="M21.001 7H24V5h-4l-.117.007a1 1 0 00-.883.995l.018 8 .006.11a1 1 0 001.003.888l3.982-.035-.018-2-2.976.026-.005-1.992 1.973.001V9l-1.977-.001L21.001 7zM24 19v-2H0v2h24zM14 5h4v2h-2.999l.005 1.999L16.983 9v2l-1.973-.001.005 1.992 2.976-.026.018 2-3.982.035a1 1 0 01-1.003-.888l-.006-.11-.018-8a1 1 0 01.883-.995L14 5zM2 7h3V5H1l-.117.007A1 1 0 000 6v9h2v-4.001L3.983 11V9L2 8.999V7zm7-2a3 3 0 011.762 5.428l-.159.107.072.075a4.981 4.981 0 011.32 3.173L12 14v1h-2v-1a3 3 0 00-1.817-2.758L8 11.17V15H6V6a1 1 0 01.883-.993L7 5h2zM8 7h1l.117.007A1 1 0 019 9H8V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/freshSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/giftSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.5 2a3.5 3.5 0 013.163 5H20a1 1 0 011 1v5a1 1 0 01-1 1v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a1 1 0 01-1-1V8a1 1 0 011-1h2.337A3.5 3.5 0 0112 3.05 3.49 3.49 0 0114.5 2zM11 20V9h2v11h-2zm3.5-13H13V5.5A1.5 1.5 0 1114.5 7zm.5 13v-6h3v6h-3zm0-8V9h4v3h-4zm-6 8v-6H6v6h3zm0-8V9H5v3h4zm.5-5H11V5.5A1.5 1.5 0 109.5 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/googlePlusSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.719 13.49h3.437a4.373 4.373 0 01-4.15 2.915 4.38 4.38 0 01-4.331-4.194 4.372 4.372 0 014.363-4.54 4.35 4.35 0 012.932 1.134.474.474 0 00.644-.002l1.262-1.189a.472.472 0 00.001-.686 7.013 7.013 0 00-4.699-1.927C8.298 4.926 5.028 8.107 5 11.988a7.038 7.038 0 0014.065.446c.005-.046.009-1.615.009-1.615h-6.355a.472.472 0 00-.472.471v1.729c0 .26.211.471.472.471z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/guaranteeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4.725 4.038l7-2a1 1 0 01.55 0l7 2A1 1 0 0120 5v7.938a8 8 0 01-4.03 6.946l-3.474 1.984a1 1 0 01-.992 0L8.03 19.884A8 8 0 014 12.938V5a1 1 0 01.725-.962zM6 5.754v7.184a6 6 0 003.023 5.21l2.977 1.7 2.977-1.7A6 6 0 0018 12.937V5.754L12 4.04 6 5.754zm9 2.539l-3.793 3.793-1.793-1.793L8 11.707l2.5 2.5a1 1 0 001.414 0l4.5-4.5L15 8.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/hamburgerMenuSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/handleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 6.5c0 .825-.675 1.5-1.5 1.5S8 7.325 8 6.5 8.675 5 9.5 5s1.5.675 1.5 1.5zm5 0c0 .825-.675 1.5-1.5 1.5S13 7.325 13 6.5 13.675 5 14.5 5s1.5.675 1.5 1.5zM8 12c0 .825.675 1.5 1.5 1.5S11 12.825 11 12s-.675-1.5-1.5-1.5S8 11.175 8 12zm6.5 1.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm-6.5 4c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5zm6.5 1.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/hashtagSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.389 7l.266-3h2l-.267 3h3l-.177 1.999H17.21L16.677 15h3l-.177 2h-3l-.267 2.999h-2L14.499 17H8.5l-.267 2.999h-2L6.499 17H3.5l.178-2h2.999l.533-6.001H4.211L4.388 7h3l.267-3h2l-.267 3h6.001zm-.179 1.999H9.211L8.677 15h6.001l.532-6.001z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/historyLogSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 3a2 2 0 011.994 1.85L19 5v2h-2V5h-1v1a2 2 0 01-2 2H8a2 2 0 01-2-2V5H5v16h6v2H5a2 2 0 01-1.995-1.85L3 21V5a2 2 0 011.85-1.995L5 3h3.17l.068-.172A3 3 0 0111 1c1.293 0 2.403.82 2.823 2H17zm-6 0a1 1 0 00-.993.883l-.014.234A1 1 0 019 5H8v1h6V5h-1a1 1 0 01-1-.963l-.003-.113A1 1 0 0011 3zm10 8a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a1 1 0 00.293.707L14.586 16l-1.293 1.293A1 1 0 0013 18v3a2 2 0 002 2h4a2 2 0 002-2v-3a1 1 0 00-.293-.707L19.414 16l1.293-1.293A1 1 0 0021 14v-3zm-2 8l-2-1-2 1v-.586l1.707-1.707a.996.996 0 00.285-.58L17 16l.008.128a.996.996 0 00.285.58L19 18.413V19zm-1.707-3.707A.997.997 0 0017 16a.997.997 0 00-.293-.707L15 13.586V11h4v2.586l-1.707 1.707z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/homeKitchenSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/home1FillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/home1OutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585a3 3 0 00-4.242 0l-8.586 8.585 1.414 1.415L4 11.586v6.586a3 3 0 003 3h10a3 3 0 003-3zm-14 0V9.586l5.293-5.293a1 1 0 011.414 0L18 9.586v8.586a1 1 0 01-1 1H7a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/home2FillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.997 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585a3 3 0 00-4.242 0L1.29 11.464l1.414 1.415 1.293-1.293v6.586a3 3 0 003 3h10a3 3 0 003-3zM14.29 11h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/home2OutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.977 2.744a3 3 0 00-4.098.135l-8.586 8.585 1.414 1.415L4 11.586v6.586l.005.176A3 3 0 007 21.172h10l.176-.006A3 3 0 0020 18.172v-6.586l1.293 1.293 1.414-1.415-8.586-8.585-.144-.135zM18 9.586l-5.293-5.293a1 1 0 00-1.32-.083l-.094.083L6 9.586v8.586a1 1 0 00.883.993l.117.007h10a1 1 0 00.993-.884l.007-.116V9.586zm-3 1.586h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/homeKitchenFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 3C5.522 3 4 4.03 4 5.667v1.86A4.5 4.5 0 019 12v1h6v-1a4.5 4.5 0 015-4.473v-1.86C20 4.03 18.478 3 17 3H7z"></path>
        <path d="M8 12a3.5 3.5 0 10-5 3.163V17.5a2 2 0 002 2V21h2v-1.5h10V21h2v-1.5a2 2 0 002-2v-2.337A3.5 3.5 0 1016 12v2H8v-2z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/imageSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4zM6 4a2 2 0 00-2 2v8.586l-1.707 1.707 1.414 1.414.293-.293V18a2 2 0 002 2h12a2 2 0 002-2v-2.586l.293.293 1.414-1.414L20 12.586V6a2 2 0 00-2-2H6zm14 8.586v2.828l-4-4-5.293 5.293a1 1 0 01-1.414 0L7 14.414l-3 3v-2.828l2.293-2.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 011.414 0L20 12.586zM8 10a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/importSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15 2c.237 0 .454.082.625.22l.082.073 5 5A.997.997 0 0121 8v12a2 2 0 01-2 2H8a2 2 0 01-2-2l-.001-5H3v-2h2.999L6 4a2 2 0 012-2h7zm-1 2H8l-.001 8.999h4.586l-2.292-2.292 1.414-1.414 4 4a1 1 0 010 1.414l-4 4-1.414-1.414L12.585 15l-4.586-.001L8 20h11V9h-4a1 1 0 01-1-1V4zm2 3l-.001-1.586L17.585 7H16z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/indicatorSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" opacity=".1"></circle>
        <circle cx="12" cy="12" r="4"></circle>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/infoFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10-5a1 1 0 110 2 1 1 0 010-2zm-2 3h3v7h-2v-5h-1v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/infoOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-10-2h3v7h-2v-5h-1v-2zm3-2a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/instagramSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16.033 3H7.967A4.973 4.973 0 003 7.967v8.066A4.973 4.973 0 007.967 21h8.066A4.973 4.973 0 0021 16.033V7.967A4.973 4.973 0 0016.033 3zm3.37 13.033a3.374 3.374 0 01-3.37 3.37H7.967a3.374 3.374 0 01-3.37-3.37V7.967a3.374 3.374 0 013.37-3.37h8.066a3.374 3.374 0 013.37 3.37v8.066zM7.362 12A4.643 4.643 0 0112 7.362 4.643 4.643 0 0116.638 12 4.643 4.643 0 0112 16.638 4.643 4.643 0 017.362 12zM12 15.041a3.044 3.044 0 01-3.041-3.04A3.045 3.045 0 0112 8.958 3.045 3.045 0 0115.041 12 3.044 3.044 0 0112 15.041zm4.005-8.69c.218-.219.52-.343.828-.343.308 0 .61.124.828.343a1.176 1.176 0 010 1.656c-.218.218-.52.343-.828.343a1.18 1.18 0 01-.828-.343 1.18 1.18 0 01-.343-.828c0-.309.125-.611.343-.828z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/invoiceSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 2H7a4 4 0 00-4 4v15a1 1 0 001.555.832L7 20.202l2.445 1.63a1 1 0 001.11 0L13 20.202l2.445 1.63A1 1 0 0017 21V5.5a1.5 1.5 0 013 0V14h-1v2h2a1 1 0 001-1V5.5a3.5 3.5 0 00-4-3.465V2zm-3 3.5v13.631l-1.445-.963a1 1 0 00-1.11 0L10 19.798l-2.445-1.63a1 1 0 00-1.11 0L5 19.13V6a2 2 0 012-2h8.337A3.486 3.486 0 0015 5.5zM13 8H7V6h6v2zm-6 4h6v-2H7v2zm6 4H7v-2h6v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/kidsToySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.817 4.5a3.5 3.5 0 103.5-3.5 1 1 0 100 2 1.5 1.5 0 11-1.5 1.5 1 1 0 10-2 0zM1 14.5A3.5 3.5 0 004.5 18h.015A8.993 8.993 0 0012 22a8.993 8.993 0 007.485-4h.015a3.5 3.5 0 001.332-6.738 8.954 8.954 0 00-1.4-3.339 1 1 0 10-1.65 1.13 6.955 6.955 0 011.168 3.105 1 1 0 00.817.866 1.5 1.5 0 11-.59 2.941 1 1 0 00-1.084.484A6.996 6.996 0 0112 20a6.996 6.996 0 01-6.093-3.551 1 1 0 00-1.084-.484 1.5 1.5 0 11-.59-2.942 1 1 0 00.817-.865A7.008 7.008 0 019.807 6.35a1 1 0 00-.626-1.9 9.012 9.012 0 00-6.013 6.812A3.502 3.502 0 001 14.5zm10-4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 18a4.997 4.997 0 01-4.307-2.459 1 1 0 011.722-1.017A2.997 2.997 0 0012 16a2.998 2.998 0 002.59-1.485 1 1 0 011.725 1.012A4.997 4.997 0 0112 18z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/kidsFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.5 1a1 1 0 100 2A1.5 1.5 0 1115 4.5a1 1 0 10-2 0A3.5 3.5 0 1016.5 1z"></path>
        <path
          fillRule="evenodd"
          d="M18.947 8.277A4.5 4.5 0 0112.027 5H12c-4.376 0-8.023 3.124-8.832 7.263A3.5 3.5 0 004.5 19h.016a8.996 8.996 0 008.591 3.933A8.999 8.999 0 0019.485 19h.015a3.5 3.5 0 001.332-6.737 8.965 8.965 0 00-1.885-3.986zM11 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6.807 3.541A4.997 4.997 0 0012 19a4.998 4.998 0 004.315-2.473 1 1 0 00-1.725-1.012A2.998 2.998 0 0112 17a2.997 2.997 0 01-2.585-1.476 1 1 0 00-1.722 1.018z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/listSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15 6v2H5V6h10zm0 7v-2H5v2h10zm0 5v-2H5v2h10zm5-5v-2h-3v2h3zm0 3v2h-3v-2h3zm0-8V6h-3v2h3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/loadingSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <mask
          id="a"
          width="6"
          height="6"
          x="17"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#a)">
          <path d="M17 9h6v6h-6z" opacity=".6"></path>
        </g>
        <mask
          id="b"
          width="6"
          height="6"
          x="9"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#b)">
          <path d="M9 9h6v6H9z" opacity=".8"></path>
        </g>
        <mask
          id="c"
          width="6"
          height="6"
          x="1"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="4" cy="12" r="3"></circle>
        </mask>
        <g mask="url(#c)">
          <path d="M1 9h6v6H1z"></path>
        </g>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/lockSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path d="M10.5 4.667h-.583V3.5a2.918 2.918 0 00-5.834 0v1.167H3.5a1.17 1.17 0 00-1.167 1.166v5.834A1.17 1.17 0 003.5 12.833h7a1.17 1.17 0 001.167-1.166V5.833A1.17 1.17 0 0010.5 4.667zM5.25 3.5c0-.968.782-1.75 1.75-1.75s1.75.782 1.75 1.75v1.167h-3.5V3.5zm5.25 8.167h-7V5.833h7v5.834zM7 9.917A1.17 1.17 0 008.167 8.75 1.17 1.17 0 007 7.583 1.17 1.17 0 005.833 8.75 1.17 1.17 0 007 9.917z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/luckyDrawSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/magnetSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 1a4 4 0 00-4 4v14a4 4 0 004 4h10a4 4 0 004-4V5a4 4 0 00-4-4H7zM5 5a2 2 0 012-2h10a2 2 0 012 2v7H5V5zm0 9v5a2 2 0 002 2h10a2 2 0 002-2v-5H5zm12 3H7v-2h10v2zm-7 3h7v-2h-7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/mapSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.707 4.856L9.293 3.05a1 1 0 00-.59-.013L2.725 4.746A1 1 0 002 5.708v13.92a1 1 0 001.275.961l5.428-1.55a1 1 0 01.59.012L15 20.953l6.275-1.792a1 1 0 00.725-.962V4.28a1.001 1.001 0 00-1.275-.961l-5.428 1.55a1 1 0 01-.59-.012zM16 6.747l4-1.142v11.84l-4 1.142V6.747zm-6-1.352v11.783l4 1.334V6.728l-4-1.333zM4 6.462L8 5.32v11.84l-4 1.143V6.462z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/micSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 1a5 5 0 015 5v6a5 5 0 01-10 0V6a5 5 0 015-5zm0 2a3 3 0 00-3 3v6a3 3 0 106 0V6a3 3 0 00-3-3zm1 20v-2.055c4.5-.497 8-4.312 8-8.945h-2a7 7 0 11-14 0H3c0 4.633 3.5 8.448 8 8.945V23h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/microphoneSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M13 20.945V23h-2v-2.055C6.5 20.448 3 16.633 3 12h2a7 7 0 1014 0h2c0 4.633-3.5 8.448-8 8.945z"></path>
        <path
          fillRule="evenodd"
          d="M17 6A5 5 0 007 6v6a5 5 0 0010 0V6zM9 6a3 3 0 116 0v6a3 3 0 11-6 0V6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/mobileSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/moneySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 3a3 3 0 012.995 2.824L23 6v12a3 3 0 01-2.824 2.995L20 21H4a3 3 0 01-2.995-2.824L1 18V6a3 3 0 012.824-2.995L4 3h16zM3 15a4 4 0 013.995 3.8L7 19h10a4 4 0 014-4V9a4 4 0 01-3.995-3.8L17 5H7a4 4 0 01-4 4v6zm13-3a4 4 0 10-8 0 4 4 0 008 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/moreHorizSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/moreVertSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/moveToCartSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M0 7.014h6.286L5 8.3l1.414 1.414 3-3a1 1 0 000-1.414l-3-3L5 3.714l1.3 1.3H0v2zM12 7V5h6V4a1 1 0 011-1h3v2h-2v11a1 1 0 01-1 1H4a1 1 0 01-.995-.9l-.71-7.097 2.01-.005.6 6.002H18V7h-6zM5 22a2 2 0 110-4 2 2 0 010 4zm13 0a2 2 0 110-4 2 2 0 010 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/multiSelectSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M21 8a5 5 0 00-5-5H9v2h7a3 3 0 013 3v8h2V8zm-7-2H7l-.2.005A4 4 0 003 10v7l.005.2A4 4 0 007 21h7l.2-.005A4 4 0 0018 17v-7l-.005-.2A4 4 0 0014 6zM7 8h7a2 2 0 012 2v7l-.005.15A2 2 0 0114 19H7l-.15-.006A2 2 0 015 17v-7l.005-.15A2 2 0 017 8zm7 2l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L7.414 12l2.293 2.293L14 10z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/nativeBusinessSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 1v3l-3 3V4l3-3zM11.5 9v2.984L8.5 9v3l3 3v8.005L7 23l-.5-1C8 22 9 21.395 9 20c0-1.6-1.12-2.72-2.464-4.064C4.52 13.92 2 11.4 2 6h6.5l3 3zM12.5 9v2.984L15.5 9v3l-3 3v8.005L17 23l.5-1C16 22 15 20.895 15 19.5c0-1.6 1.12-2.64 2.464-3.888C19.48 13.74 22 11.4 22 6h-6.5l-3 3zM8.5 4V1l3 3v3l-3-3z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/newAddressSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zM11 6v3H8v2h3v3h2v-3h3V9h-3V6h-2zm3.768 10.281A21.542 21.542 0 0112 18.769a21.536 21.536 0 01-2.768-2.488C7.2 14.101 6 11.826 6 9.611 6 6.521 8.67 4 12 4s6 2.522 6 5.611c0 2.215-1.2 4.49-3.232 6.67z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/newSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.78 5.374l.068.096L6 10.513V5h2v9c0 .964-1.212 1.35-1.78.626l-.068-.096L3 9.487V15H1V6c0-.924 1.113-1.318 1.706-.711l.074.085zM18 11.238V5h-2v9l.006.114c.09.855 1.188 1.215 1.762.526l1.732-2.078 1.732 2.078.078.084c.616.598 1.69.172 1.69-.724V5h-2v6.238l-.732-.878-.084-.09a1 1 0 00-1.452.09l-.732.878zM23 19v-2H1v2h22zM15 7V5h-5l-.117.007A1 1 0 009 6.003l.022 8 .007.117a1 1 0 001 .88l4.978-.035-.014-2-3.974.028-.006-1.994L14 11V9h-2.992l-.005-2H15z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/notificationActiveFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 12c0 .854-.54 1.606-1.333 1.886A1 1 0 003 14.83V19a1 1 0 001 1h16a1 1 0 001-1v-4.17a1 1 0 00-.667-.944A2.001 2.001 0 0119 12V9A7 7 0 105 9v3zm7 11c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2zm6.02-19.262l1.504-1.318a9.964 9.964 0 012.477 6.589h-2a7.964 7.964 0 00-1.981-5.27zM4 9.008c0-1.966.711-3.82 1.981-5.27L4.477 2.42A9.964 9.964 0 002 9.009h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/notificationActiveOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2zm6.02-19.262l1.504-1.318a9.964 9.964 0 012.477 6.589h-2a7.964 7.964 0 00-1.981-5.27zM4 9.008c0-1.966.711-3.82 1.981-5.27L4.477 2.42A9.964 9.964 0 002 9.009h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/notificationMarkAsReadSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c1.93 0 3.734.786 5.041 2.143l.192.208L15.74 5.68a5 5 0 00-8.734 3.103L7 9v3a4 4 0 01-1.918 3.416L5 15.463 4.999 18H19v-2.537l-.081-.046a4 4 0 01-1.913-3.204L17 12h2c0 .854.54 1.606 1.333 1.886a1 1 0 01.66.818l.007.125V19a1 1 0 01-.883.993L20 20H4a1 1 0 01-.993-.884L3 19v-4.171a1 1 0 01.552-.894l.115-.049a2.001 2.001 0 001.327-1.727L5 12V9a7 7 0 017-7zm3 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2h6zm5.207-13.793l-1.414-1.414L12 12.585l-2.293-2.292-1.414 1.414 3 3 .094.083a1 1 0 001.32-.083l7.5-7.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/notificationOffFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 12c0 .854-.54 1.606-1.333 1.886A1 1 0 003 14.83V19a1 1 0 001 1h16a1 1 0 001-1v-4.17a1 1 0 00-.667-.944A2.001 2.001 0 0119 12V9A7 7 0 105 9v3zm7 11c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/notificationOffOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3.667 13.886A2.001 2.001 0 005 12V9a7 7 0 0114 0v3c0 .854.54 1.606 1.333 1.886a1 1 0 01.667.943V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.17a1 1 0 01.667-.944zM19 18v-2.535A4 4 0 0117 12V9A5 5 0 007 9v3a4 4 0 01-2 3.465V18h14zm-7 5c-1.385 0-2.563-.835-3-2h6c-.437 1.165-1.615 2-3 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/openInNewWindowSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 13v3a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h3V4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-3h-2zm-8.707.293l1.414 1.414L18 7.414V11h2V5a1 1 0 00-1-1h-6v2h3.586l-7.293 7.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/orderSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 014.995 4.783L17 7h2a1 1 0 01.993.883L20 8v11a3 3 0 01-2.824 2.995L17 22H7a3 3 0 01-2.995-2.824L4 19V8a1 1 0 01.883-.993L5 7h2a5 5 0 015-5zm6 7h-1v2h-2V9H9v2H7V9H6v10a1 1 0 00.77.974l.113.02L7 20h10a1 1 0 00.993-.883L18 19V9zM9.005 6.824A3 3 0 0115 7H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packageErrorSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM11 7v7h2V7h-2zm2 9a1 1 0 10-2 0 1 1 0 002 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packageInProgressSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm4 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packageNoReceivedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.172 4.243l1.415-1.415L13.413 12l2.83-2.828-1.415-1.415L12 10.587l-2.828-2.83-1.415 1.415L10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packagePartlyReceivedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zM7 11h10v2H7v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packageReceivedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zm-9.293 1.293L15 9l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L8.414 11l2.293 2.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/packageReturnedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM10 8.207h4.586l-2.293-2.293L13.707 4.5l4 4a1 1 0 010 1.414l-4 4-1.414-1.414 2.293-2.293H10a2 2 0 00-2 2V13.5a2 2 0 002 2h7v2h-7a4 4 0 01-4-4v-1.293a4 4 0 014-4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/pauseSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 18V6H8v12h3zm6 0V6h-3v12h3z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/pendingSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path
          fillRule="evenodd"
          d="M1.508 8.974a.583.583 0 111.098-.395A4.668 4.668 0 0011.666 7a4.667 4.667 0 00-4.668-4.667.583.583 0 110-1.166 5.833 5.833 0 11-5.49 7.807zm3.545-7.475a.583.583 0 01.39 1.1c-.225.08-.442.175-.65.288a.583.583 0 11-.553-1.028c.261-.14.533-.26.813-.36zM3.386 3.144a.583.583 0 00-.823.065 5.804 5.804 0 00-.524.718.583.583 0 00.992.614c.125-.202.265-.394.42-.574a.583.583 0 00-.065-.823zm-2.124 2.79a.583.583 0 111.147.213c-.043.234-.069.47-.076.707a.583.583 0 11-1.166-.035c.009-.297.04-.593.095-.885zM7.582 7V3.5H6.415v3.096l-1.955.733.41 1.092 2.333-.875A.583.583 0 007.582 7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/phoneSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12.413 18.069l2.33-3.883a1 1 0 011.173-.435c1.7.567 3.393.849 5.084.849a1 1 0 011 1V21a1 1 0 01-1 1C9.648 22 2 14.352 2 3a1 1 0 011-1h5.4a1 1 0 011 1c0 1.691.282 3.384.849 5.084a1 1 0 01-.434 1.173l-3.884 2.33a14.784 14.784 0 006.482 6.482zM20 19.979V16.57a17.988 17.988 0 01-3.947-.683l-1.792 2.987c1.739.634 3.661 1.012 5.739 1.103zM7.43 4c.076 1.317.304 2.633.682 3.947L5.125 9.739C4.491 8 4.113 6.078 4.022 4h3.407z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/pinSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/playCircleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm5-8L9 7v10l8-5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/playSimpleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 5l11 7-11 7V5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/plusIncredibleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222 24"
      >
        <path d="M192.699 0a.613.613 0 00-.484.237l-3.92 5.039a.154.154 0 00.121.247h.614a.613.613 0 00.484-.236l3.92-5.04a.154.154 0 00-.122-.247h-.613zM184.113.614c.332 0 .577.22.61.536l.004.075v1.832c0 .33-.221.574-.539.607l-.075.004h-2.147c-.332 0-.577-.22-.61-.536l-.004-.075V1.225c0-.33.221-.574.539-.607l.075-.004h2.147zM212.089 5.002a.664.664 0 01-.661-.59l-.004-.073V1.276c0-.341.26-.622.593-.658l.072-.004h1.865c.343 0 .625.258.661.59l.004.072.001.865h2.144c.343 0 .625.258.661.59l.004.072v1.536c0 .342-.26.623-.593.659l-.072.004h-4.675zM36.223 3.069c.331 0 .576.22.61.536l.004.074v9.84c0 .44-.04.847-.117 1.223h4.092c.426-.002.807-.196 1.088-.47.25-.248.41-.568.441-.934l.005-.124V9.19c0-.337.215-.589.542-.62l.072-.004h1.841c.341 0 .578.215.61.535l.004.076v3.98a4.588 4.588 0 01-1.382 3.28c-.807.794-1.816 1.305-3.028 1.354l-.193.004h-3.928a.672.672 0 01-.481-.202l-.05-.058-.642-.834c-.69.679-1.686 1.053-2.956 1.09l-.214.004h-6.75a.587.587 0 01-.609-.537l-.004-.074v-1.833c0-.33.221-.574.539-.607l.075-.004h6.75c.8 0 1.192-.356 1.224-1.116l.003-.106V3.68c0-.33.22-.573.538-.607l.075-.003h1.84zM73.648 9.943c-.077-2.514-2.052-4.43-4.6-4.43H65.06l-.269.003c-.355.014-.783.07-.959.302L62.57 7.705c-.182.322-.027.862.343.862h6.136l.1.003a1.546 1.546 0 011.434 1.524v4.672H57.696l-.075.003a.586.586 0 00-.538.607v1.833l.004.075a.587.587 0 00.61.536h2.454l-.004.09c-.068.813-1.03 1.743-1.837 1.743h-4.915l-.108-.003a1.842 1.842 0 01-1.733-1.84l.006-5.578-.003-.074a.588.588 0 00-.61-.537h-1.84l-.076.004a.587.587 0 00-.538.607v5.588l.001.155c.07 2.674 2.19 4.732 4.9 4.732h4.916l.147-.002c2.538-.084 4.762-2.346 4.762-4.885h9.817l.075-.004a.588.588 0 00.539-.607v-.61l.67.848.062.075c.211.234.464.298.802.298h3.988l.162-.002c2.507-.069 4.133-1.83 4.133-4.364V9.178l-.003-.075a.587.587 0 00-.61-.536h-1.84l-.076.004a.587.587 0 00-.538.607v4.276l-.003.196c-.032.76-.425 1.116-1.225 1.116H73.65v-4.672l-.002-.151zM42.897 19.612c.343 0 .625.259.661.59l.004.072v3.064c0 .341-.26.622-.593.658l-.072.004h-1.864a.664.664 0 01-.662-.59l-.004-.072v-.865h-2.144a.664.664 0 01-.662-.59l-.004-.072v-1.537c0-.34.26-.622.593-.658l.073-.004h4.674zM81.627 19.653c.332 0 .576.22.61.536l.003.075v1.832c0 .331-.22.575-.538.608l-.075.003h-4.91a.587.587 0 01-.609-.536l-.004-.075v-1.832c0-.33.221-.574.539-.607l.075-.004h4.909z"></path>
        <path d="M67.82 19.653c.333 0 .577.22.61.536l.004.075v1.832c0 .331-.22.575-.538.608l-.075.003h-2.148a.587.587 0 01-.61-.536l-.003-.075v-1.832c0-.33.22-.574.538-.607l.075-.004h2.148zM11.66 8.567c.332 0 .577.22.61.536l.004.075v5.568h1.842c.98 0 1.782-.766 1.838-1.733l.003-.108V9.178c0-.33.222-.574.539-.607l.075-.004h1.808c.333 0 .607.25.642.573l.004.07v4.028c0 .532-.092 1.045-.261 1.523l.274-.002a1.841 1.841 0 001.825-1.734l.003-.107v-3.74c0-.33.223-.574.54-.607l.075-.004h1.808c.333 0 .607.25.642.573l.004.07v4.028a4.548 4.548 0 01-1.34 3.226 4.58 4.58 0 01-3.05 1.333l-.189.004h-.828a.647.647 0 01-.467-.199l-.713-.834a4.583 4.583 0 01-2.709 1.029l-.192.004-2.172-.02a4.296 4.296 0 01-4.149 4.294l-.148.002H4.296A4.296 4.296 0 01.003 17.93L0 17.781V10.4c0-.33.221-.573.539-.607l.075-.003h1.84c.333 0 .577.22.61.536l.005.074v6.783c0 .98.766 1.782 1.733 1.838l.108.003h2.455c.98 0 1.782-.767 1.838-1.733l.003-.108V9.178c0-.33.221-.574.539-.607l.074-.004h1.842zM91.444 5.512c2.545 0 4.224 1.62 4.293 4.116l.002.16v3.733c0 2.534-1.626 4.206-4.133 4.274l-.162.003h-5.522a.588.588 0 01-.61-.537l-.004-.074v-1.833c0-.33.221-.574.539-.607l.075-.004h5.522c.8 0 1.193-.356 1.225-1.116l.002-.106V9.79c0-.797-.357-1.188-1.12-1.22l-.107-.002h-5.522a.588.588 0 01-.61-.537l-.004-.074V6.123c0-.33.221-.574.539-.607l.075-.004h5.522zM27.58 3.522c-.088-.313-.444-.453-.77-.453h-1.632c-.355 0-.71.27-.613.61l2.342 8.387c.09.32.383.54.715.54h2.001c.352 0 .57-.26.474-.598L27.58 3.522zM166.618 6.06a.588.588 0 00-.61-.537h-4.909l-.075.004a.586.586 0 00-.538.607v1.833l.004.075a.586.586 0 00.609.536h4.909l.075-.004a.586.586 0 00.539-.607V6.134l-.004-.074zM117.521 20.1a.588.588 0 00-.61-.537h-4.909l-.075.004a.586.586 0 00-.538.607v1.833l.003.074a.588.588 0 00.61.537h4.909l.075-.004a.586.586 0 00.538-.607v-1.833l-.003-.075zM107.706 2.455c.332 0 .577.22.61.536l.004.075v1.833c0 .33-.221.573-.539.607l-.075.003h-1.841c-.332 0-.577-.22-.61-.536l-.004-.074V3.066c0-.33.221-.574.539-.607l.075-.004h1.841zM141.149 2.991a.587.587 0 00-.61-.536h-2.147l-.075.004a.586.586 0 00-.539.607v1.833l.004.074c.033.317.278.536.61.536h2.147l.075-.003a.586.586 0 00.539-.607V3.066l-.004-.075zM125.32.237a.613.613 0 01.484-.237h.614c.127 0 .199.147.121.248l-3.919 5.038a.615.615 0 01-.485.237h-.613a.153.153 0 01-.121-.247l3.919-5.04z"></path>
        <path
          fillRule="evenodd"
          d="M188.103 12.888c0 .651-.127 1.273-.357 1.841h8.946c1.756 0 3.068-1.312 3.068-3.068v-.614c0-1.757-1.312-3.069-3.068-3.069h-7.056c-.552 0-.659-.495-.307-.92l5.168-6.601c.239-.29.595-.457.97-.457h2.358a.56.56 0 01.431.918l-3.098 3.992h1.534c3.519 0 6.136 2.618 6.136 6.137v.614a6.359 6.359 0 01-.76 3.068h3.195a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h2.189a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h.366a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .613.275.613.614v3.682a4.91 4.91 0 01-4.909 4.91h-.59a.614.614 0 01-.505-.265l-.633-.914a4.89 4.89 0 01-3.191 1.179h-2.431a.614.614 0 01-.505-.265l-.626-.904a4.891 4.891 0 01-3.18 1.169h-3.667a.614.614 0 01-.505-.265l-.647-.935c-1.021.76-2.311 1.2-3.752 1.2h-22.714a.612.612 0 01-.504-.265l-.626-.904a4.89 4.89 0 01-3.18 1.169h-12.251a4.91 4.91 0 01-4.91-4.91V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682a1.84 1.84 0 001.841 1.841h12.251a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .613.275.613.614v3.682c0 .651-.126 1.273-.356 1.841h4.419a4.898 4.898 0 01-.357-1.841v-1.841a4.91 4.91 0 119.82 0v1.841zm-3.069-1.841v1.841a1.84 1.84 0 11-3.682 0v-1.841a1.84 1.84 0 113.682 0z"
          clipRule="evenodd"
        ></path>
        <path d="M135.933 11.66c0 1.137-.272 2.179-.76 3.07h5.036a1.842 1.842 0 001.842-1.842V9.206c0-.34.274-.614.613-.614h1.841c.339 0 .614.275.614.614v3.682a4.91 4.91 0 01-4.91 4.91h-4.281a.612.612 0 01-.504-.265l-1.116-1.611c-1.101 1.17-2.684 1.876-4.511 1.876h-10.591l-.941-1.202a4.889 4.889 0 01-3.218 1.202h-5.509a.614.614 0 01-.504-.265l-.674-.973v.01c0 3.52-2.618 6.137-6.136 6.137h-.627c-.377 0-.734-.173-.966-.47l-1.314-1.678c-.351-.425-.245-.92.307-.92h2.6c1.756 0 3.068-1.312 3.068-3.069l-.001-7.364c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v5.523h6.687a1.84 1.84 0 001.841-1.841V9.206c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v3.682c0 .651-.127 1.273-.357 1.841h10.197c1.756 0 3.068-1.312 3.068-3.068v-.614c0-1.757-1.312-3.069-3.068-3.069h-7.056c-.552 0-.659-.495-.307-.92l5.168-6.601c.239-.29.595-.457.971-.457h2.357a.56.56 0 01.432.918l-3.099 3.992h1.534c3.519 0 6.136 2.618 6.136 6.137v.614zM146.984 2.455c0-.34.275-.614.614-.614h1.841c.339 0 .614.275.614.614v14.729a.614.614 0 01-.614.614h-1.841a.614.614 0 01-.614-.614V2.454z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/plusMonthSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20 4h-1V2h-2v2H7V2H5v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V8h16v12zM10 10h3v8h-2v-6h-1v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/plusSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.362 13.877a.738.738 0 00.638-.732v-2.29l-.008-.11a.738.738 0 00-.63-.622l-.1-.007-.16.005-.066-.001-.276.014a5.745 5.745 0 01-4.215-1.68 5.748 5.748 0 01-1.665-4.492L13.88 3.9l.01-.002v-.159l-.008-.11a.739.739 0 00-.63-.621L13.15 3h-2.302l-.1.007a.738.738 0 00-.638.731v.159l.01.002-.001.063a5.748 5.748 0 01-1.665 4.492 5.746 5.746 0 01-4.491 1.666h-.067l-.16-.004-.1.007a.738.738 0 00-.637.732v2.29l.008.11a.738.738 0 00.63.622l.1.007.16-.005.066.001.276-.014a5.745 5.745 0 014.215 1.68 5.748 5.748 0 011.665 4.492l.001.063-.01.002v.159l.008.11a.739.739 0 00.63.621l.1.007h2.302l.1-.007a.738.738 0 00.638-.731v-.159l-.01-.002.001-.063a5.748 5.748 0 011.665-4.492 5.746 5.746 0 014.491-1.666h.067l.16.004.1-.007zM12.06 17.88l-.056.266-.003-.007-.003.014-.056-.273-.081-.322a7.734 7.734 0 00-5.715-5.495L5.835 12l.31-.063a7.737 7.737 0 005.796-5.816l.054-.264.005.004.003-.014.056.273.081.322a7.733 7.733 0 005.715 5.495l.31.063-.31.063a7.737 7.737 0 00-5.796 5.816z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/postSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M23 7v10a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h16a3 3 0 013 3zm-2 0a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V7zm-1 .993l-8 4.828L4 8v2.223l7.47 4.625a1 1 0 001.06 0L20 10.223v-2.23z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/priceChartSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M4 18V4H2v15a1 1 0 001 1h19v-2H4zM22 8a2 2 0 10-3.933.517l-2.55 2.55a2.003 2.003 0 00-1.034 0l-1.55-1.55A2.003 2.003 0 0011 7a2 2 0 00-1.933 2.517l-1.55 1.55A2.003 2.003 0 005 13a2 2 0 103.933-.517l1.55-1.55a2.003 2.003 0 001.035 0l1.55 1.55A2.003 2.003 0 0015 15a2 2 0 001.933-2.517l2.55-2.55A2.002 2.002 0 0022 8z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/priceTagSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2.293 12.293l9-9A1 1 0 0112 3h5a1 1 0 01.707.293l3 3A1 1 0 0121 7v5a1 1 0 01-.293.707l-9 9a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414zM4.414 13L11 19.586l8-8V7.414L16.586 5h-4.172l-8 8zM15 12a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/productAvailableSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/productIdealSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 2h-2v7H8V5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zm-8 0h4v5h-4V5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/productNotAvailableSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm4.95 4.636l1.414 1.414-2.95 2.95 2.95 2.95-1.414 1.414-2.95-2.95-2.95 2.95-1.414-1.414 2.95-2.95-2.95-2.95 1.414-1.414 2.95 2.95 2.95-2.95z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/profileOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/profileOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 7A5 5 0 007 7v1a5 5 0 0010 0V7zm4.996 13.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/promoSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3.65 1.408L.87 17.165l4.803.847 2.737-.302a4 4 0 007.973-.207l.005-.205.005-.442 4.695.827 1.736-9.848-4.782-.843-9.59-4.737-4.803-.847zM14.39 17.05l-.003.238a2 2 0 01-3.99.203l3.993-.441zM7.241 4.07l-1.97-.346-2.083 11.818 1.97.347L7.24 4.07zm1.898.753l7.473 3.692-1.13 6.402-8.284.913L9.14 4.824zm11.368 4.634l-1.97-.348-1.041 5.91 1.97.346 1.041-5.908z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/questionSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm2 6H8V9a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V15h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 9.93V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm1 6h2v2h-2v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/recommendedProductSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M17 21v-4.914l.028-.017.035-.022c.735-.462 1.078-.729 1.418-1.212.34-.482.472-.884.675-1.77l.007-.03c.069-.3.105-.445.153-.596l.019-.06a8.36 8.36 0 01.21-.542C19.873 11.032 20 10.6 20 10c0-.6-.127-1.032-.455-1.836a8.366 8.366 0 01-.21-.543l-.02-.06a7.472 7.472 0 01-.152-.595l-.007-.031c-.203-.885-.336-1.287-.674-1.769-.34-.483-.682-.748-1.418-1.211l-.031-.02a6.859 6.859 0 01-.501-.333 6.226 6.226 0 01-.407-.344l-.082-.073c-.644-.578-1-.837-1.56-1.025-.555-.187-.964-.192-1.86-.117-.138.012-.202.017-.278.022-.135.01-.245.014-.345.014-.095 0-.199-.004-.323-.013a16.69 16.69 0 01-.3-.023c-.896-.075-1.305-.07-1.86.116-.56.19-.916.448-1.561 1.026l-.083.074c-.186.167-.296.26-.406.343-.121.091-.24.17-.5.333l-.034.021c-.734.461-1.075.728-1.415 1.21-.339.483-.472.885-.675 1.773l-.006.027c-.07.302-.106.446-.153.596l-.009.029-.01.03a8.391 8.391 0 01-.21.543C4.127 8.968 4 9.399 4 10s.127 1.032.455 1.837c.125.306.164.406.21.542l.01.03.01.03c.046.15.082.294.152.596l.006.026c.203.888.336 1.29.675 1.774.34.482.683.75 1.415 1.21l.038.024.029.018V21a1 1 0 001.243.97L12 21.03l3.758.94A1 1 0 0017 21zm.693-12.081c.232.57.307.823.307 1.081s-.075.511-.307 1.082a9.71 9.71 0 00-.255.662l-.03.096a9.062 9.062 0 00-.195.748l-.007.03c-.144.63-.224.871-.36 1.066-.137.193-.334.347-.847.669l-.035.022c-.305.192-.455.29-.634.425a7.88 7.88 0 00-.538.45l-.083.076c-.446.399-.65.547-.865.62-.201.067-.435.07-1.054.018a20.846 20.846 0 00-.307-.024 6.953 6.953 0 00-.483-.018c-.144 0-.29.005-.457.016a18.6 18.6 0 00-.333.026c-.62.052-.854.049-1.058-.02-.213-.071-.416-.22-.861-.618l-.084-.075a7.863 7.863 0 00-.536-.45 8.33 8.33 0 00-.636-.426l-.038-.024c-.51-.32-.707-.474-.842-.667-.138-.195-.218-.438-.363-1.07l-.006-.026a9.16 9.16 0 00-.193-.747l-.016-.05-.015-.047a9.736 9.736 0 00-.255-.662C6.075 10.511 6 10.258 6 10c0-.258.075-.511.307-1.081.143-.349.19-.47.255-.663l.015-.047.016-.049c.067-.216.112-.396.193-.747l.006-.027c.145-.631.225-.874.362-1.07.136-.192.332-.345.843-.666l.034-.021c.308-.194.459-.294.64-.43.166-.125.31-.248.536-.45l.083-.075c.446-.398.65-.546.865-.62.202-.067.436-.07 1.054-.018.16.013.238.02.334.026.166.011.313.017.457.017.152 0 .306-.006.483-.019l.307-.024c.619-.052.853-.049 1.055.02.215.072.419.22.864.618l.082.074c.227.203.37.326.537.451.182.137.332.236.64.43l.031.02c.514.322.711.475.847.668.136.194.216.436.36 1.065l.008.03c.08.35.126.532.194.749l.03.095c.065.193.113.314.255.663zm-3.4-1.626l1.414 1.414-3.5 3.5a1 1 0 01-1.414 0l-2-2 1.414-1.414 1.293 1.293 2.793-2.793zm.188 10.549c.19-.065.357-.137.519-.227v2.104l-2.758-.69a1 1 0 00-.485 0L9 19.72v-2.103c.161.09.327.161.516.225.557.186.965.19 1.86.116.15-.012.22-.018.3-.023.125-.008.23-.012.324-.012.1 0 .21.004.345.013.076.006.14.01.279.022.895.075 1.303.07 1.857-.116z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/redoSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M17.586 9H8a4 4 0 00-4 4v2a4 4 0 004 4h12v-2H8a2 2 0 01-2-2v-2a2 2 0 012-2h9.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 000-1.414l-4-4-1.414 1.414L17.586 9z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/referralSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6 1a3 3 0 013 3v1a3 3 0 01-6 0V4a3 3 0 013-3zm11.5 7a3.5 3.5 0 013.5 3.5v1a3.5 3.5 0 11-7 0v-1A3.5 3.5 0 0117.5 8zM6.707 13.293l-.094-.083a1 1 0 00-1.32.083l-3 3 1.414 1.414L5 16.414V19a3 3 0 003 3h2v-2H8a1 1 0 01-1-1v-2.586l1.293 1.293 1.414-1.414-3-3zm17.287 7.595C23.697 18.26 21.387 17 17.5 17c-3.886 0-6.197 1.26-6.494 3.888A1 1 0 0012 22h11a1 1 0 00.994-1.112zm-12.02-7.21C11.64 10.616 9.53 9 6 9 2.378 9 .251 10.702.003 13.923L0 14s2 0 2.004.002l.012-.126C2.239 11.904 3.451 11 6 11c2.606 0 3.814.944 3.997 3.008C10 14 12 14 12 14l-.026-.322zM5 4a1 1 0 012 0v1a1 1 0 01-2 0V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/registerationSignInSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/registerationSignOutSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm-9-2h12.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 000-1.414l-4-4-1.414 1.414L19.586 11H7v2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/reloadSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.9 7a7 7 0 102.1 5h2a9 9 0 11-3-6.71V3h2v5a1 1 0 01-1 1h-5V7h2.9z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/removeCircleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm15 1v-2H7v2h10z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/removeSimpleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20 11v2H4v-2h16z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/repurchaseSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8.293 15.707l3 3 1.414-1.414L11.415 16H12l.176.005A3 3 0 119 19a1 1 0 00-1-1H7l-.117-.007A1 1 0 016 17V7h1v2h2V7h6v2h2V7h1v13l.15-.006A2 2 0 0020 18V6l-.007-.117A1 1 0 0019 5h-2l-.005-.217A5 5 0 007 5H5l-.117.007A1 1 0 004 6v11l.005.176A3 3 0 007 20h.101l.011.059A5.002 5.002 0 0017 19a5 5 0 00-5-5h-.585l1.292-1.293-1.414-1.414-3 3-.083.094a1 1 0 00.083 1.32zm.712-10.883A3 3 0 0115 5H9l.005-.176z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/returnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 2H6l-.176.005A3 3 0 003 5v11l.005.176A3 3 0 006 19h1.1l.048.212A5.002 5.002 0 0017 18a5 5 0 00-4.601-4.984l1.308-1.309-1.414-1.414-3 3-.083.094a1 1 0 00.083 1.32l3 3 1.414-1.414-1.258-1.26A3 3 0 119 18a1 1 0 00-1-1H6l-.117-.007A1 1 0 015 16V5l.007-.117A1 1 0 016 4h2v5h8V4h2l.117.007A1 1 0 0119 5v11l-.007.117A1 1 0 0118 17v2l.176-.005A3 3 0 0021 16V5l-.005-.176A3 3 0 0018 2zm-8 2h4v3h-4V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/saveForLaterSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9 1H7v1a3 3 0 00-3 3v15a3 3 0 003 3h10a3 3 0 003-3v-1h-2v1a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1v1h2V4h2v1h2V4h2v1h2V4a1 1 0 011 1v8h2V5a3 3 0 00-3-3V1h-2v1h-2V1h-2v1H9V1zM8 8h5v2H8V8zm5 4H8v2h5v-2zm-5 4h3v2H8v-2zm7-8a1 1 0 100 2 1 1 0 000-2zm1.414 7H22v2h-5.586l1.293 1.293-1.414 1.414-3-3a1 1 0 010-1.414l3-3 1.414 1.414L16.414 15z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/searchHistorySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-14v5.586l3.707 3.707-1.414 1.414-4-4A1 1 0 0111 12V6h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/searchPlaceSuggestSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M17 8.414L6.707 18.707l-1.414-1.414L15.586 7H9V5h9a1 1 0 011 1v9h-2V8.414z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/searchSearchSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/searchTrendSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sellerTrustedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.758 21.972a1 1 0 001.242-.97v-5H7v5a1 1 0 001.243.97L12 21.033l3.758.94z"></path>
        <path d="M21.003 11c0 .676-.143 1.16-.513 2.066-.14.344-.184.456-.236.61l-.021.067c-.054.17-.095.333-.172.67l-.008.035c-.229.995-.378 1.448-.76 1.99-.382.543-.768.844-1.594 1.362l-.04.025c-.291.183-.424.27-.558.371a7.027 7.027 0 00-.457.386l-.093.084c-.726.65-1.126.94-1.758 1.153-.622.208-1.082.214-2.089.13a19.775 19.775 0 00-.313-.024 5.643 5.643 0 00-.388-.016c-.107 0-.224.005-.365.014l-.338.026c-1.006.084-1.466.078-2.092-.13-.629-.213-1.03-.503-1.755-1.153l-.093-.084a7.026 7.026 0 00-.456-.385 7.729 7.729 0 00-.559-.372l-.043-.027c-.823-.517-1.21-.818-1.591-1.36-.382-.543-.531-.996-.76-1.995l-.007-.03a8.55 8.55 0 00-.172-.67l-.021-.067a9.447 9.447 0 00-.236-.61c-.37-.905-.512-1.39-.512-2.066 0-.676.143-1.16.512-2.065a9.43 9.43 0 00.236-.61l.021-.066c.053-.17.094-.332.172-.672l.007-.03c.229-.998.378-1.451.76-1.993.381-.543.766-.843 1.591-1.361l.038-.024c.294-.184.426-.272.563-.375.124-.093.247-.198.457-.386l.093-.083c.726-.65 1.126-.94 1.757-1.153.624-.21 1.083-.216 2.09-.131.17.014.247.02.339.026.14.01.257.014.364.014.112 0 .236-.005.388-.015l.313-.025c1.007-.085 1.467-.079 2.091.131.63.212 1.03.503 1.756 1.153l.092.082c.21.189.334.294.458.387.136.103.269.19.564.375l.034.022c.829.52 1.213.82 1.595 1.362.381.542.53.994.759 1.99l.008.034c.077.338.118.5.172.671l.021.067c.052.153.096.266.236.61.37.905.513 1.39.513 2.065z"></path>
        <path d="M19 11.003c0-.301-.087-.597-.358-1.262a11.333 11.333 0 01-.297-.773l-.036-.111c-.08-.253-.133-.465-.226-.873l-.009-.036c-.168-.734-.261-1.016-.42-1.243-.159-.225-.388-.403-.988-.78l-.036-.023a9.82 9.82 0 01-.747-.5 9.198 9.198 0 01-.626-.526l-.097-.087c-.519-.465-.756-.638-1.007-.722-.237-.08-.51-.083-1.23-.023-.173.015-.256.021-.359.028a8.042 8.042 0 01-.564.022c-.168 0-.34-.006-.533-.02a21.266 21.266 0 01-.39-.03c-.721-.06-.994-.057-1.23.022-.251.085-.489.258-1.008.723l-.098.088a9.206 9.206 0 01-.625.524c-.211.16-.387.275-.747.501l-.039.025c-.596.375-.825.553-.983.778-.16.228-.254.511-.423 1.248l-.007.031c-.094.41-.147.62-.226.872l-.036.112c-.075.225-.13.366-.297.773-.271.665-.358.96-.358 1.262 0 .3.087.596.358 1.261.166.407.222.549.297.774l.036.112c.08.252.132.461.226.871l.007.031c.169.737.262 1.02.423 1.249.158.225.388.404.983.778l.044.028c.356.223.531.34.742.497.194.146.361.29.625.525l.098.087c.52.466.757.638 1.005.722.238.08.512.083 1.234.023.188-.016.277-.023.39-.03a7.92 7.92 0 01.532-.02c.177 0 .357.008.564.022l.357.028c.722.06.996.057 1.23-.022.252-.085.49-.257 1.009-.723l.098-.087a9.22 9.22 0 01.627-.526c.21-.157.384-.272.74-.496l.041-.026c.598-.375.828-.555.987-.78.16-.227.253-.51.421-1.244l.009-.036c.093-.408.147-.62.226-.872l.036-.111c.075-.225.13-.367.297-.774.27-.665.358-.96.358-1.261z"></path>
        <path d="M11.207 11.793L15 8l1.414 1.414-4.5 4.5a1 1 0 01-1.414 0l-2.5-2.5L9.414 10l1.793 1.793z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sellerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/serialSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6zM5 6h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1zm3 2v8H6V8h2zm5 8V8H9v8h4zm5-8v8h-2V8h2zm-3 8V8h-1v8h1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/settingSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19.562 9.009a8.208 8.208 0 00-.098-.237l.402-.562a2.11 2.11 0 00-.23-2.724l-1.118-1.117a2.104 2.104 0 00-2.72-.225l-.56.4a8.009 8.009 0 00-.284-.118l-.112-.664A2.11 2.11 0 0012.758 2h-1.583A2.11 2.11 0 009.09 3.763l-.119.7a7.958 7.958 0 00-.235.099l-.55-.396a2.104 2.104 0 00-1.23-.395c-.565 0-1.104.224-1.5.626L4.34 5.51c-.73.73-.828 1.88-.23 2.721l.413.58c-.034.079-.066.159-.098.24l-.663.111A2.11 2.11 0 002 11.246v1.583a2.11 2.11 0 001.763 2.084l.7.12c.032.079.065.157.099.235l-.392.546a2.11 2.11 0 00.228 2.727l1.117 1.117a2.104 2.104 0 002.72.224l.576-.409c.064.028.13.055.196.08l.113.682A2.111 2.111 0 0011.205 22h1.586a2.11 2.11 0 002.085-1.763l.115-.682c.08-.032.159-.064.237-.098l.562.401a2.1 2.1 0 001.228.393c.562 0 1.095-.222 1.493-.62l1.12-1.12c.73-.73.827-1.879.228-2.72l-.403-.566c.035-.078.067-.157.099-.236l.68-.113A2.111 2.111 0 0022 12.79v-1.583a2.094 2.094 0 00-1.755-2.084l-.683-.115zM20 11.195v1.596a.11.11 0 01-.094.112l-1.263.21-.612.103-.18.594c-.106.348-.252.7-.437 1.052l-.285.544 1.101 1.545a.113.113 0 01-.013.146l-1.12 1.12a.104.104 0 01-.08.034.105.105 0 01-.062-.018l-1.044-.746-.503-.36-.546.29a6.135 6.135 0 01-1.054.435l-.587.182-.318 1.87a.111.111 0 01-.112.096h-1.586a.11.11 0 01-.112-.094l-.21-1.263-.102-.607-.587-.183a6.12 6.12 0 01-1.021-.42l-.544-.285-1.558 1.108a.098.098 0 01-.063.022.104.104 0 01-.078-.034l-1.121-1.121a.11.11 0 01-.013-.146l.738-1.026.365-.508-.296-.55a5.959 5.959 0 01-.441-1.046l-.183-.585-1.882-.32A.112.112 0 014 12.828v-1.583a.11.11 0 01.094-.112l1.25-.21.612-.104.179-.594c.11-.37.253-.72.428-1.054l.285-.544L5.74 7.071a.113.113 0 01.013-.145l1.123-1.12a.105.105 0 01.08-.035c.025 0 .046.007.062.018L8.56 6.9l.55-.296a5.96 5.96 0 011.047-.441l.584-.183.321-1.882A.112.112 0 0111.175 4h1.583a.11.11 0 01.111.094l.211 1.25.104.613.596.178c.37.11.734.261 1.09.45l.545.287 1.547-1.102a.098.098 0 01.063-.022c.03 0 .055.01.08.035l1.12 1.12c.04.04.045.1.012.146l-.743 1.04-.36.503.29.546c.176.334.322.686.436 1.054l.182.587 1.87.317c.055.01.089.05.088.099zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/shareSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M15.917 14.16l-6.94 3.47a3 3 0 11-.895-1.789l6.94-3.47a3.021 3.021 0 010-.742l-6.94-3.47a3 3 0 11.895-1.789l6.94 3.47a3 3 0 110 4.319z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/shuffleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22.414 6.293l-3-3L18 4.707 19.292 6h-2.464l-.198.006a3 3 0 00-1.923.873L12.305 9.28l1.414 1.414 2.402-2.402.1-.087A1 1 0 0116.827 8h2.464L18 9.293l1.414 1.414 3-3 .083-.094a1 1 0 000-1.226l-.083-.094zM5.172 6l.198.006a3 3 0 011.763.724l.16.149 8.828 8.828.1.087a1 1 0 00.476.197l.131.009h2.464L18 14.707l1.414-1.414 3 3 .083.094a1 1 0 010 1.226l-.083.094-3 3L18 19.293 19.292 18h-2.464l-.198-.007a3 3 0 01-1.763-.723l-.16-.149L5.88 8.293l-.1-.087a1 1 0 00-.476-.197l-.131-.01H2V6h3.172zm3.111 7.302l1.415 1.415-2.405 2.404a3 3 0 01-1.923.872L5.172 18H2v-2h3.172a1 1 0 00.608-.206l.099-.087 2.404-2.405z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/smsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8.586 19l2.707 2.707a1 1 0 001.414 0L15.414 19H19a4 4 0 004-4V7a4 4 0 00-4-4H5a4 4 0 00-4 4v8a4 4 0 004 4h3.586zm5.707-1.707L12 19.586l-2.293-2.293A1 1 0 009 17H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4a1 1 0 00-.707.293z"
          clipRule="evenodd"
        ></path>
        <circle cx="12" cy="11" r="1"></circle>
        <circle cx="8" cy="11" r="1"></circle>
        <circle cx="16" cy="11" r="1"></circle>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sortSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6 15.793L3.707 13.5l-1.414 1.414 4 4a1 1 0 001.414 0l4-4-1.414-1.414L8 15.793V5H6v10.793zM22 5H10v2h12V5zm0 4H12v2h10V9zm0 4h-8v2h8v-2zm-6 4h6v2h-6v-2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sportOutdoorSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a1 1 0 11-.55 1.924C18.814 19.986 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.924c.628-.179 1.255-.342 1.883-.49.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm-6.13 12.8c.897-.145 1.794-.259 2.69-.34.024-.064.054-.127.092-.187l2.5-4a1 1 0 011.696 0l2.5 4c.038.06.068.123.091.187.898.081 1.794.195 2.691.34L12 8.804l-6.13 9.195zm7.147-.483L12 15.887l-1.017 1.627a37.471 37.471 0 012.034 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sportsFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a.998.998 0 01.612 1.425 1 1 0 01-1.162.498C18.814 19.988 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.923c.628-.18 1.255-.343 1.883-.491.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm3.44 12.46a37.862 37.862 0 00-6.88 0L12 12.5l3.44 5.157z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/starFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M11.98 2.1a.455.455 0 00-.414.315L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014-2.144-6.635a.455.455 0 00-.451-.315z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/starOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M14.575 9.05L12.43 2.415a.455.455 0 00-.865 0L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014zm-3.694 2.003L12 7.585l.671 2.08.449 1.388 3.64-.007-1.768 1.28-1.182.855 1.133 3.464-1.765-1.288-1.18-.86-2.94 2.146.679-2.075.453-1.387-2.95-2.135 2.181.004 1.46.003z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/stateReceivedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-11.293 1.293L15 9l1.414 1.414-5 5a1 1 0 01-1.414 0l-3-3L8.414 11l2.293 2.293z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/statusDeactiveSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.243-12.828L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/streetSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13 1h-2v2.5H5a1 1 0 00-.928 1.371L4.923 7l-.851 2.129A1 1 0 005 10.5h6v1H6a1 1 0 00-.928.629l-1 2.5a1 1 0 000 .742l1 2.5A1 1 0 006 18.5h5v4h2v-4h6a1 1 0 00.928-1.371L19.078 15l.851-2.129A1 1 0 0019 11.5h-6v-1h5a1 1 0 00.928-.629l1-2.5a1 1 0 000-.742l-1-2.5A1 1 0 0018 3.5h-5V1zM6.928 6.629L6.477 5.5h10.846l.6 1.5-.6 1.5H6.477l.451-1.129a1 1 0 000-.742zM6.677 13.5h10.846l-.451 1.129a1 1 0 000 .742l.451 1.129H6.677l-.6-1.5.6-1.5z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/subItemSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M18 4v11a1 1 0 01-.883.993L17 16H7.415l2.292 2.293-1.414 1.414-4-4a1 1 0 01-.083-1.32l.083-.094 4-4 1.414 1.414L7.415 14H16V4h2z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/supportSimpleSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M4.5 8.25v-1.5a3 3 0 013-3h3a3 3 0 013 3v1.5h-.75A.75.75 0 0012 9v5.25c0 .414.336.75.75.75h1.125A3.375 3.375 0 0015 8.442V6.75a4.5 4.5 0 00-4.5-4.5h-3A4.5 4.5 0 003 6.75v1.692A3.376 3.376 0 004.125 15H5.25a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H4.5zm9.375 1.5H13.5v3.75h.375a1.875 1.875 0 000-3.75zM2.25 11.625c0-1.036.84-1.875 1.875-1.875H4.5v3.75h-.375a1.875 1.875 0 01-1.875-1.875z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/supportSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/telegramSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.465 13.063l-4.147-1.548a.49.49 0 01-.005-.915l17.022-6.566c.36-.14.733.176.654.555l-3.054 14.694a.489.489 0 01-.766.295l-4.17-3.027a.69.69 0 00-.84.023L9.845 18.46a.488.488 0 01-.775-.233l-1.606-5.163zm9.453-5.817L8.812 12.24a.816.816 0 00-.356.918l.876 3.08c.062.218.379.195.41-.03l.227-1.69c.043-.317.195-.61.43-.829l6.69-6.218c.125-.116-.025-.313-.171-.224z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/threeDSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5 11v2h3.586l.414.414V15H4v2h5a2 2 0 002-2v-1.586A2 2 0 0010.414 12 2 2 0 0011 10.586V9a2 2 0 00-2-2H4v2h5v1.586L8.586 11H5zm7-4h5a3 3 0 013 3v4a3 3 0 01-3 3h-5V7zm5 2h-3v6h3a1 1 0 001-1v-4a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/thumbsDownSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 16l3.15 4.2a4.5 4.5 0 003.6 1.8 2.482 2.482 0 002.449-2.89L16.18 16h2.424a3 3 0 002.951-3.537l-.974-5.357A5 5 0 0015.661 3h-6.55a1 1 0 00-.428.096l-.824.39A1 1 0 007 3H3a1 1 0 00-1 1v11a1 1 0 001 1h4.5zm.5-2V5.633L9.336 5h6.326a3 3 0 012.951 2.463l.974 5.358A1 1 0 0118.603 14H15a1 1 0 00-.986 1.164l.712 4.274a.482.482 0 01-.476.562 2.5 2.5 0 01-2-1L8.8 14.4A1 1 0 008 14zm-2 0H4V5h2v9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/thumbsUpSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/timeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-14v5.586l3.707 3.707-1.414 1.414-4-4A1 1 0 0111 12V6h2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/tomanSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path
          fillRule="evenodd"
          d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/toolsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M21.207 16.793l-6.833-6.834A6.502 6.502 0 004.975 2.42 1 1 0 004.755 4l3.036 3.036a.5.5 0 11-.707.707L4.05 4.708a1 1 0 00-1.58.219 6.502 6.502 0 007.464 9.42l6.86 6.86a3.121 3.121 0 104.414-4.414zm-11.38-4.52A4.5 4.5 0 013.73 7.217l1.94 1.94a2.5 2.5 0 003.536-3.536l-1.94-1.94a4.503 4.503 0 015.032 6.152 1 1 0 00.215 1.093l7.28 7.28a1.121 1.121 0 01-1.586 1.586l-7.3-7.3a1 1 0 00-1.08-.22z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/toolsFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37 36"
      >
        <path d="M6.883 17.98a8.254 8.254 0 01-1.371-9.858l4.553 4.554a2.25 2.25 0 103.182-3.182L8.694 4.94A8.254 8.254 0 0120.33 15.33l10.92 10.92a3.182 3.182 0 01-4.5 4.5L15.8 19.8a8.252 8.252 0 01-8.917-1.82z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/topUpSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18 1a3 3 0 012.995 2.824L21 4v16a3 3 0 01-2.824 2.995L18 23h-7v-2h7a1 1 0 00.993-.883L19 20V4a1 1 0 00-.883-.993L18 3H8a1 1 0 00-.993.883L7 4v1H5V4a3 3 0 012.824-2.995L8 1h10zm-3 17a2 2 0 11-4 0 2 2 0 014 0zm-8 2v-9.292l2.146 2.146 1.415-1.415-4-4-.095-.083a1 1 0 00-1.32.083l-4 4 1.415 1.415L5 10.414V20l.005.176A3 3 0 008 23h1v-2H8l-.117-.007A1 1 0 017 20zm9-14V4h-6v2h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/twitterSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 6.73a7.374 7.374 0 01-2.12.581 3.708 3.708 0 001.623-2.041 7.444 7.444 0 01-2.346.896 3.693 3.693 0 00-6.292 3.367 10.483 10.483 0 01-7.61-3.858 3.665 3.665 0 00-.5 1.856 3.69 3.69 0 001.642 3.073 3.692 3.692 0 01-1.673-.464v.046a3.696 3.696 0 002.962 3.621c-.31.083-.636.13-.973.13-.238 0-.47-.024-.695-.07a3.695 3.695 0 003.448 2.565 7.409 7.409 0 01-4.585 1.579c-.298 0-.592-.018-.881-.051a10.437 10.437 0 005.66 1.661c6.793 0 10.506-5.626 10.506-10.505l-.013-.478A7.373 7.373 0 0021 6.73z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/undoSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.414 9H17a4 4 0 014 4v2a4 4 0 01-4 4H5v-2h12a2 2 0 002-2v-2a2 2 0 00-2-2H7.414l2.293 2.293-1.414 1.414-4-4a1 1 0 010-1.414l4-4 1.414 1.414L7.414 9z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/usersSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          fillRule="evenodd"
          d="M12 12a4 4 0 018 0v1.333a4 4 0 11-8 0V12zm4-1.333c-.736 0-1.333.597-1.333 1.333v1.333a1.333 1.333 0 102.666 0V12c0-.736-.597-1.333-1.333-1.333z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M6.667 8a4 4 0 014-4h10.666a4 4 0 014 4v16a4 4 0 01-4 4H10.667a4 4 0 01-4-4V8zm4-1.333c-.737 0-1.334.597-1.334 1.333v13.657c1.374-1.8 3.727-2.99 6.667-2.99s5.293 1.19 6.667 2.99V8c0-.736-.597-1.333-1.334-1.333H10.667zm10.657 18.666c-.145-1.988-1.91-4-5.324-4-3.414 0-5.179 2.012-5.324 4h10.648z"
          clipRule="evenodd"
        ></path>
        <path d="M26.667 6.667a4 4 0 014 4v10.666a4 4 0 01-4 4v-2.666c.736 0 1.333-.597 1.333-1.334V10.667c0-.737-.597-1.334-1.333-1.334V6.667zM1.333 21.333a4 4 0 004 4v-2.666A1.333 1.333 0 014 21.333V10.667c0-.737.597-1.334 1.333-1.334V6.667a4 4 0 00-4 4v10.666z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/variationColorSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"></path>
        <path
          stroke="#030A16"
          strokeOpacity=".1"
          d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/variationSizeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2h9a1 1 0 011 1v18a1 1 0 01-1 1h-9a1 1 0 01-1-1V3a1 1 0 011-1zm1 17v1h7V4h-7v1h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2zm-4.707-2.707L7 17.586V6.414l1.293 1.293 1.414-1.414-3-3a1 1 0 00-1.414 0l-3 3 1.414 1.414L5 6.414v11.172l-1.293-1.293-1.414 1.414 3 3a1 1 0 001.414 0l3-3-1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/verifiedUserSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M20.661 7l-.274 2.623a.347.347 0 00.065.24L22 12l-1.548 2.137a.347.347 0 00-.065.24L20.661 17l-2.41 1.073a.346.346 0 00-.177.176L17 20.661l-2.624-.274a.347.347 0 00-.24.065L12 22l-2.138-1.548a.345.345 0 00-.238-.065l-2.625.274-1.073-2.41a.348.348 0 00-.176-.177L3.339 17l.274-2.624a.349.349 0 00-.065-.24L2 12l1.548-2.137a.349.349 0 00.065-.24L3.339 7l2.41-1.073a.345.345 0 00.177-.176L7 3.339l2.625.274a.35.35 0 00.24-.065L12 2l2.137 1.548a.35.35 0 00.24.065L17 3.34l1.073 2.41a.348.348 0 00.176.177L20.661 7zM7.707 10.292l2.793 2.793 5.793-5.793 1.414 1.414-6.5 6.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/videoSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 3c2.372 0 4.989.256 7.86.767l.712.13a2 2 0 011.562 1.46C22.711 7.57 23 9.785 23 12c0 1.994-.234 3.988-.704 5.991l-.162.651a2 2 0 01-1.562 1.46C17.425 20.7 14.568 21 12 21c-2.372 0-4.989-.256-7.86-.767l-.712-.13a2 2 0 01-1.562-1.46A26.229 26.229 0 011 12c0-1.994.234-3.988.704-5.991l.162-.651a2 2 0 011.562-1.46C6.575 3.3 9.432 3 12 3zm0 2c-2.435 0-5.169.287-8.2.863l-.152.615A24.091 24.091 0 003 12c0 2.044.267 4.09.8 6.137l.697.128C7.251 18.755 9.753 19 12 19c2.435 0 5.169-.287 8.2-.863l.152-.615A24.09 24.09 0 0021 12c0-2.044-.267-4.09-.8-6.137l-.697-.128C16.749 5.245 14.247 5 12 5zm4 7L9 8v8l7-4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/viewGridSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h7zm1 12a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7zm11 0a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7zm-2 1h-5v5h5v-5zM4 15h5v5H4v-5zM22 3a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3zM9 4H4v5h5V4zm6 0h5v5h-5V4z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/viewListFillSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 1v2a2 2 0 002 2h14a2 2 0 002-2V1H3zm2 6h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zM3 21v2h18v-2a2 2 0 00-2-2H5a2 2 0 00-2 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/viewListOutlineSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M19 1v2H5V1H3v2a2 2 0 002 2h14a2 2 0 002-2V1h-2zm0 6H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zM5 15V9h14v6H5zm14 6v2h2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2h2v-2h14z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/visibilityOffSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 16.942a8.537 8.537 0 01-1.92-.452l-.67 1.842-1.88-.684.743-2.042c-.4-.25-.795-.534-1.182-.85L4.8 16.292 3.27 15.006l1.367-1.63a18.86 18.86 0 01-1.45-1.794l1.626-1.164C7.028 13.509 9.413 15 12 15c2.587 0 4.972-1.49 7.187-4.582l1.626 1.164a18.85 18.85 0 01-1.45 1.794l1.367 1.63-1.532 1.286-1.289-1.536c-.396.323-.8.613-1.21.867l.737 2.025-1.88.684-.666-1.831a8.535 8.535 0 01-1.89.441V19h-2v-2.058z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/visibilityOnSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 18c3.304 0 6.252-1.843 8.813-5.418L21.23 12l-.417-.582C18.252 7.843 15.303 6 12 6c-3.304 0-6.252 1.843-8.813 5.418L2.77 12l.417.582C5.748 16.157 8.697 18 12 18zm0-10c2.42 0 4.662 1.303 6.753 4-2.091 2.697-4.334 4-6.753 4-2.333 0-4.501-1.212-6.529-3.716L5.247 12C7.338 9.303 9.58 8 12 8zm0 7a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/voucherSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M10 4h10a3 3 0 013 3v10a3 3 0 01-3 3H10a1 1 0 01-1-1 1 1 0 10-2 0 1 1 0 01-1 1H4a3 3 0 01-3-3V7a3 3 0 013-3h2a1 1 0 011 1 1 1 0 002 0 1 1 0 011-1zM8 8a3.001 3.001 0 01-2.83-2H4a1 1 0 00-1 1v10a1 1 0 001 1h1.17a3.001 3.001 0 015.66 0H20a1 1 0 001-1V7a1 1 0 00-1-1h-9.17A3.001 3.001 0 018 8zm5.5 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6.848-.03l1.696 1.06 5-8-1.696-1.06-5 8zM7 15v-2h2v2H7zm0-6v2h2V9H7z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/whatsappSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M3 21.02l1.26-4.478a8.96 8.96 0 01-1.237-4.554C3.023 7.032 7.055 3 12.012 3 16.968 3 21 7.032 21 11.989c0 4.956-4.032 8.988-8.988 8.988a8.977 8.977 0 01-4.395-1.146L3 21.02zm4.853-2.824l.275.168a7.448 7.448 0 003.884 1.088c4.115 0 7.463-3.348 7.463-7.464 0-4.115-3.348-7.463-7.463-7.463-4.116 0-7.464 3.348-7.464 7.463 0 1.434.407 2.827 1.178 4.027l.186.289-.726 2.578 2.667-.686zm1.05-10.423l.584.032a.302.302 0 01.261.183l.85 1.988a.302.302 0 01-.05.316l-.74.856a.224.224 0 00-.027.25c.974 1.876 2.749 2.619 3.279 2.805.09.032.19.002.249-.074l.774-1.003a.302.302 0 01.365-.09l1.971.909c.129.059.2.2.17.337l-.094.435c-.105.491-.396.925-.819 1.196-.534.341-1.226.509-2.105.26-2.73-.772-4.273-2.579-5.101-3.708-.829-1.13-1.149-2.26-.942-3.181.14-.62.591-1.094.874-1.34a.705.705 0 01.501-.17z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/addCommentSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 .5H3V3H.5v2H3v2.5h2V5h2.5V3H5V.5z"></path>
        <path d="M3 11a8 8 0 008 8v3a1 1 0 001.6.8l6.92-5.198A8 8 0 0015 3H9.5v2H15a6 6 0 013.373 10.963l-.037.027L13 19.998V18a1 1 0 00-1-1h-1a6 6 0 01-6-6V9.5H3V11z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/androidSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/aparatSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
      >
        <path
          fillRule="evenodd"
          d="M10.58 4.07a5.768 5.768 0 00-.804.33c-.66.324-1.321.978-1.626 1.609-.172.347-.546 1.597-.804 2.667-.029.11.184-.075.781-.671 1.184-1.192 2.31-1.95 3.763-2.546.65-.266 1.92-.625 2.47-.7.168-.024.294-.052.277-.064a28.734 28.734 0 00-1.195-.347c-1.046-.284-1.241-.319-1.856-.342-.494-.017-.781 0-1.005.064zm1.207 2.523a10.498 10.498 0 013.493-.984 10.5 10.5 0 016.877 1.76c2.333 1.573 3.861 3.911 4.436 6.77.149.746.149 2.957 0 3.703-.575 2.859-2.103 5.197-4.436 6.77a10.405 10.405 0 01-10.37.776 10.4 10.4 0 01-5.831-7.899c-.11-.74-.11-2.257 0-2.997a10.399 10.399 0 015.831-7.9zm4.395 5.463c.408-1.592-.643-3.276-2.258-3.611-.994-.209-1.947.086-2.688.827-1.173 1.18-1.178 2.969-.018 4.138 1.615 1.626 4.39.868 4.964-1.354zm5.332-2.142c1.333.348 2.223 1.482 2.223 2.83 0 .874-.247 1.499-.833 2.09-.402.404-.89.682-1.413.81-.724.167-1.333.092-2.04-.261-1.149-.567-1.81-1.898-1.557-3.13.132-.649.35-1.06.816-1.534.603-.608 1.224-.874 2.068-.886.224-.005.558.035.736.081zm-3.982 6.111c0-.463-.27-.885-.706-1.11-1.08-.562-2.264.566-1.758 1.683.155.347.258.457.597.614.902.428 1.867-.186 1.867-1.187zm-5.165.284c.173.029.523.162.776.289 1.149.567 1.81 1.898 1.557 3.13-.132.649-.35 1.06-.816 1.534-.942.955-2.258 1.163-3.464.55-1.546-.787-2.057-2.83-1.069-4.277.66-.954 1.85-1.44 3.016-1.226zm9.813 4.93c.316-1.522-.643-3.055-2.154-3.449a2.991 2.991 0 00-2.838.776 2.935 2.935 0 00.017 4.172c.89.897 2.24 1.11 3.43.532.695-.335 1.379-1.238 1.545-2.031zM23.48 7.212c-.144-.104-.259-.208-.259-.231 0-.024.172.011.39.069.213.058.8.214 1.305.347 1.23.319 1.746.579 2.327 1.152a3.627 3.627 0 011.091 2.639c0 .457-.046.694-.367 1.932a46.007 46.007 0 01-.397 1.435c-.017.012-.057-.167-.098-.399-.235-1.504-.89-3.165-1.723-4.41-.609-.92-1.614-2.036-2.27-2.534zM4.893 17.831c0 .023-.144.578-.316 1.238-.27 1.036-.316 1.273-.316 1.725 0 1.024.373 1.92 1.086 2.632.614.608 1.028.81 2.545 1.216.672.179 1.235.318 1.246.312.012-.011-.051-.08-.143-.15-.322-.25-1.362-1.296-1.707-1.725-1.05-1.302-1.867-3.026-2.223-4.664-.103-.492-.172-.717-.172-.584zm19.442 6.151c.287-.295.626-.671.752-.84.127-.161.236-.277.247-.248.023.07-.591 2.367-.74 2.755-.288.787-.995 1.545-1.788 1.938-1.074.532-1.786.544-3.55.07-1.334-.358-1.333-.36-1.31-.382a5.53 5.53 0 01.62-.145 11.493 11.493 0 005.769-3.148z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/arrowDownSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M4.293 12.707l1.414-1.414L11 16.586V4h2v12.586l5.293-5.293 1.414 1.414-7 7a1 1 0 01-1.414 0l-7-7z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/checkSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 7"
      >
        <path d="M1.707 2.293L.293 3.707l3 3a1 1 0 001.414 0l5-5L8.293.293 4 4.586 1.707 2.293z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/controllerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
      >
        <path
          fillRule="evenodd"
          d="M21.973 16.758l-1.135-7.974a4.16 4.16 0 00-4.122-3.57H7.284a4.16 4.16 0 00-4.122 3.57l-1.135 7.974a2.65 2.65 0 004.497 2.248l2.353-2.342h6.246l2.342 2.342c.5.5 1.177.781 1.874.781a2.652 2.652 0 002.634-3.03zm-2.186.75a.562.562 0 01-.438.197.575.575 0 01-.406-.167l-2.956-2.956H8.013l-2.956 2.956a.575.575 0 01-.406.167.562.562 0 01-.438-.198.542.542 0 01-.135-.458l1.135-7.974a2.112 2.112 0 012.071-1.78h9.432c1.03 0 1.915.77 2.06 1.79l1.136 7.975a.565.565 0 01-.125.447zM14.5 11a1 1 0 100-2 1 1 0 000 2zm3 1a1 1 0 11-2 0 1 1 0 012 0zm-10-3h2v1h1v2h-1v1h-2v-1h-1v-2h1V9z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/feedbackInfoSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M15.206 16.106a.75.75 0 00.9-.9l-.58-2.509a7.5 7.5 0 10-2.83 2.83l2.51.579zm-1.114-3.931a.75.75 0 00-.095.566l.377 1.633-1.633-.377a.75.75 0 00-.566.095 6 6 0 111.917-1.917zM7.5 8.25h2.25V12h-1.5V9.75H7.5v-1.5zm2.25-1.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/fidiboLogotypeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74 21"
      >
        <path
          fillRule="evenodd"
          d="M36.485 8.128c-1.936-.081-3.876 1.606-3.883 3.84-.008 2.24 1.915 3.879 3.852 3.887 1.93.008 3.869-1.603 3.883-3.856.013-2.274-1.968-3.947-3.852-3.87zm5.901-1.052c0 .515.003 1.03.006 1.544.007 1.147.014 2.294-.013 3.439-.063 2.764-1.826 4.834-4.077 5.544-1.44.454-2.866.396-4.232-.216-1.757-.786-2.901-2.135-3.332-4.03-.51-2.249.096-4.183 1.766-5.763.965-.913 2.147-1.382 3.463-1.499 1.43-.126 2.736.238 3.916 1.058l.013.009.142.098c.12.08.186.043.197-.098.003-.039.003-.078.003-.118v-.033V6.9v-.114l.012-1.512.027-3.469c.006-.641.45-1.113 1.035-1.108.605.006 1.056.453 1.06 1.096.006 1.256.005 2.512.004 3.768l-.001 1.516h.011zM2.108 16.468v.427l.001.746c.002.582.003 1.164-.006 1.746a.995.995 0 01-.907.99c-.556.053-.996-.245-1.142-.77a1.801 1.801 0 01-.045-.486c0-.722-.002-1.445-.004-2.167-.005-1.644-.01-3.288.003-4.931.013-1.667.57-3.139 1.771-4.317 1.051-1.03 2.33-1.601 3.798-1.734.248-.023.498-.023.747-.023h17.439c.148-.002.296-.003.443.042.498.154.807.614.745 1.126-.054.452-.472.89-1.006.887-2.192-.011-4.385-.01-6.577-.008l-2.25.001H7.045c-.323 0-.646.011-.97.022a95.44 95.44 0 01-.273.01c-1.387.045-3.098 1.04-3.596 2.87-.412 1.512.07 2.965 1.348 3.97.785.617 1.686.902 2.698.9 4.26-.01 8.521-.009 12.782-.007h4.306c.163 0 .325-.012.488-.03.47-.051.92.225 1.088.648.177.448.03.958-.355 1.252-.214.163-.458.184-.714.183H21.17a2748.188 2748.188 0 01-5.11-.004c-3.239-.003-6.477-.007-9.716.006-1.446.005-2.755-.346-3.919-1.214l-.033-.027c-.066-.052-.14-.111-.284-.108zm48.226-4.626c.016-2.162 1.808-3.855 3.893-3.844 2.114.018 3.857 1.77 3.837 3.899-.02 2.167-1.797 3.846-3.854 3.842a3.876 3.876 0 01-3.876-3.897zm.354-4.73c-.061.05-.124.1-.217.078-.053-.078-.048-.164-.043-.248l.003-.08-.03-3.878-.007-1.102v-.06c0-.069 0-.137-.007-.204A1.038 1.038 0 0049.1.733c-.499.135-.795.513-.802 1.054-.012.868-.015 1.736-.015 2.604v2.7c0 1.566 0 3.132-.003 4.698a6.25 6.25 0 00.396 2.177c.98 2.67 3.726 4.138 6.323 3.76 1.324-.192 2.498-.724 3.412-1.698 1.486-1.586 2.043-3.462 1.496-5.602-.582-2.277-2.047-3.699-4.304-4.286-1.76-.458-3.383-.098-4.867.936-.016.011-.032.024-.048.037zm-27.762 7.091c-.135.061-.244.057-.346.053l-.072-.002h-4.69c-3.967-.002-7.935-.004-11.903.011-1.017.005-2.159-.729-2.446-1.912-.22-.91.008-1.71.628-2.367a2.483 2.483 0 011.855-.787h16.793c.06 0 .118 0 .177.003.137.009.176.085.12.204-.04.086-.083.171-.126.256a7.87 7.87 0 00-.156.32c-.135.299-.22.615-.285.934-.034.169-.117.239-.281.233a4.49 4.49 0 00-.201 0H6.114c-.07 0-.141-.001-.211.001-.35.014-.603.25-.624.581-.017.262.262.585.555.628.09.013.182.01.274.008l.103-.001h15.612l.083.002c.06.002.121.004.18-.004.222-.028.294.064.331.286.09.531.27 1.04.509 1.553zm44.553-6.122c2.168 0 3.923 1.869 3.835 3.88.087 2.023-1.807 3.863-3.874 3.844-1.982-.017-3.834-1.808-3.817-3.883.017-1.97 1.678-3.841 3.856-3.841zm5.907 3.89c.014-3.362-2.56-5.89-5.883-5.95-3.335.035-5.92 2.545-5.933 5.9-.012 3.348 2.527 5.924 5.883 5.939 3.351.014 5.918-2.54 5.933-5.89zm-44.57 1.149v1.014c-.002.88-.002 1.762.002 2.643.002.448-.181.778-.577.98a1.044 1.044 0 01-1.465-.618 1.322 1.322 0 01-.06-.408V13.82c0-1.43 0-2.861.002-4.292.001-.532.281-.934.726-1.075.44-.14.887.005 1.176.374.165.211.198.452.197.71-.002.858-.001 1.717-.001 2.576v1.007zm15.458-1.044v1.074h.001v1.071c-.002.887-.003 1.774.003 2.662.004.553.418.98.96 1.023.515.042.992-.31 1.104-.83.031-.146.031-.3.031-.45.002-2.3.002-4.6.001-6.9v-.062c.001-.093.002-.185-.008-.277a1.063 1.063 0 00-1.047-.946c-.596-.002-1.038.432-1.042 1.051-.005.862-.004 1.723-.003 2.584zM29.15 6.022a1.413 1.413 0 01-1.402 1.392c-.76-.005-1.397-.649-1.39-1.405a1.406 1.406 0 011.401-1.39 1.413 1.413 0 011.391 1.403zm14.71-.048a1.409 1.409 0 001.382 1.398 1.405 1.405 0 001.414-1.367c.02-.75-.61-1.404-1.363-1.416a1.406 1.406 0 00-1.433 1.385z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/iranSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M6.797 3.545a1 1 0 01.631.584l.924 2.309.628.628 2.047.341.64-.962a1 1 0 01.59-.415l2-.5a1 1 0 01.486 0l2 .5a1 1 0 01.312.138l1.5 1A1 1 0 0119 8v2.377l.403 1.612.804.804a1 1 0 01.187 1.154l-.626 1.254 1.332.999a1 1 0 01.232.245l1 1.5a1 1 0 01-.125 1.262l-2 2a1 1 0 01-.831.285l-4-.5a1 1 0 01-.825-.676l-.164-.494-1.516.607a1 1 0 01-.926-.097l-3-2a1 1 0 01-.34-.385L7.883 16.5H6.5a1 1 0 01-.98-.804l-.441-2.203-1.786-1.786a1 1 0 01-.263-.95l.384-1.538L2.2 7.6A1 1 0 012 7V4.5a1 1 0 011.447-.894l1.481.74 1.017-.678a1 1 0 01.852-.123zM4 6.118v.549L5.3 8.4a1 1 0 01.17.843l-.363 1.45 1.6 1.6a1 1 0 01.274.51L7.32 14.5H8.5a1 1 0 01.894.553l.882 1.762 2.341 1.561 2.012-.805a1 1 0 011.32.613l.3.902 2.89.361 1.074-1.074-.45-.676L17.9 16.3a1 1 0 01-.294-1.247l.677-1.356-.49-.49a.999.999 0 01-.263-.465l-.5-2A.996.996 0 0117 10.5V8.535l-.91-.607-1.59-.397-1.382.345-.786 1.179a1 1 0 01-.996.431l-3-.5a1 1 0 01-.543-.279l-1-1a1 1 0 01-.221-.336l-.543-1.355-.474.316a1 1 0 01-1.002.062L4 6.118z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/linkedinSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          fillRule="evenodd"
          d="M6.4 4h19.2C26.92 4 28 5.08 28 6.4v19.2c0 1.32-1.08 2.4-2.4 2.4H6.4C5.08 28 4 26.92 4 25.6V6.4C4 5.08 5.08 4 6.4 4zm1.2 20.4h3.6V13.6H7.6v10.8zm1.8-12.84c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zM20.8 24.4h3.6v-6.84c0-2.28-1.92-4.2-4.2-4.2-1.08 0-2.4.72-3 1.68V13.6h-3.6v10.8h3.6v-6.36c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8v6.36z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/oneMonthSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-7 2v8h-2v-6h-1v-2h3z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/paymentWalletSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 15"
      >
        <path d="M8.875 8.375a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
        <path
          fillRule="evenodd"
          d="M12.086 3.5l-.216-.86A2.25 2.25 0 008.976 1.05L1.406 3.54A1.5 1.5 0 00.25 5v8.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V5a1.5 1.5 0 00-1.5-1.5h-.164zM1.75 5h10.5v2.25H8.875a1.875 1.875 0 100 3.75h3.375v2.25H1.75V5zm4.622-1.5h4.167l-.124-.497-.016-.055a.75.75 0 00-.949-.474L6.372 3.5zM8.875 8h3.375v2.25H8.875a1.125 1.125 0 010-2.25z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/posSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 34 38"
      >
        <path
          fillRule="evenodd"
          d="M20.334 2.333c0-.92-.747-1.666-1.667-1.666H5.333c-.92 0-1.666.746-1.666 1.666V9a3.333 3.333 0 00-3.334 3.333V34a3.333 3.333 0 003.334 3.333h16.666A3.333 3.333 0 0023.668 34h6.666a3.333 3.333 0 003.334-3.333v-15a3.333 3.333 0 00-3.334-3.334h-6.666A3.333 3.333 0 0020.333 9V2.333zM3.666 34V12.333h1.667v3.334h13.333v-3.334h1.666V34H3.668zM7 4h10v5H7V4zm20 11.667h-3.333v15H27v-15zm1.667 0v15h1.666v-15h-1.666z"
          clipRule="evenodd"
        ></path>
        <path d="M5.333 17.333h3.334v3.334H5.334v-3.334zM10.334 17.333h3.333v3.334h-3.333v-3.334zM15.334 17.333h3.333v3.334h-3.334v-3.334zM5.333 22.333h3.334v3.334H5.334v-3.334zM10.334 22.333h3.333v3.334h-3.333v-3.334zM15.334 22.333h3.333v3.334h-3.334v-3.334zM5.333 27.333h3.334v3.334H5.334v-3.334zM10.334 27.333h3.333v3.334h-3.333v-3.334zM15.334 27.333h3.333v3.334h-3.334v-3.334z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/shipByHubSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.396 1.5c-2.676 0-4.855 2.183-4.86 4.866 0 .3.03.608.087.917l.033.159c.058.264.14.522.241.77l.119.27c.387.835 1.525 2.36 3.059 4.014l.335.356.392.41.08.066a.857.857 0 001.13-.094l.366-.382.334-.357.322-.352c1.37-1.516 2.377-2.884 2.733-3.654l.12-.273c.077-.188.142-.38.195-.577l.049-.197.027-.131.044-.257a4.87 4.87 0 00.048-.688c0-2.682-2.178-4.866-4.854-4.866zM11 6a2.75 2.75 0 00-2.745 2.582l-.005.168V9H3.5a2.75 2.75 0 00-2.745 2.582l-.005.168v7a1.75 1.75 0 001.607 1.744l.143.006h.354a2.751 2.751 0 005.292 0h7.708a2.751 2.751 0 005.292 0h.354a1.75 1.75 0 001.744-1.607l.006-.143v-6.688a.75.75 0 00-1.493-.101l-.007.101V15H10a.25.25 0 01-.243-.193l-.007-.057v-6c0-.647.492-1.18 1.122-1.244L11 7.5h1a.75.75 0 00.102-1.493L12 6h-1zm7.5 12.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6.75 19.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zm.5-9.25h1v4.25a1.75 1.75 0 001.607 1.744L10 16.5h11.75v2.25a.25.25 0 01-.193.243L21.5 19h-.353a2.751 2.751 0 00-5.294 0H8.147a2.751 2.751 0 00-5.294 0H2.5a.25.25 0 01-.243-.193l-.007-.057V15.5H5.5a1.75 1.75 0 001.744-1.607l.006-.143V10.5zm-1.5 0H3.5l-.128.007A1.25 1.25 0 002.25 11.75V14H5.5l.057-.007a.25.25 0 00.193-.243V10.5zm14.929-4.143a2.29 2.29 0 00-2.286-2.286 2.29 2.29 0 00-2.285 2.286 2.29 2.29 0 002.285 2.285 2.29 2.29 0 002.286-2.285z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/sixMonthsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v2h-3.333v1H14.5v5h-5v-8h5zm-1.667 5h-1.667v1h1.667v-1z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/specialAmazingSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
      >
        <path d="M16 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.207 8.207l6.5-6.5L20.293.293l-6.5 6.5 1.414 1.414z"></path>
        <path
          fillRule="evenodd"
          d="M5.793 2.293a1 1 0 011.414 0l12.5 12.5a1 1 0 01-1.414 1.414l-.553-.552-1.829.653c.058.263.089.536.089.816C16 19.304 14.169 21 12 21c-1.502 0-2.841-.813-3.524-2.037l-2.665.952a1 1 0 01-1.518 1.292l-3.5-3.5a1 1 0 011.292-1.518l4.26-11.93-.552-.552a1 1 0 010-1.414zm4.625 15.977c.359.438.922.73 1.582.73 1.145 0 2-.88 2-1.876 0-.044-.002-.088-.005-.132l-3.577 1.278zm-6.158.075l-.605-.605L7.91 5.824l8.265 8.266L4.26 18.345z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/statusInProgressSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm4 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/termsAndConditionsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16 10v2H8v-2h8zM14 14H8v2h6v-2z"></path>
        <path
          fillRule="evenodd"
          d="M9.238 2.828a3 3 0 015.524 0L14.83 3H18l.15.005A2 2 0 0120 5v16l-.006.15A2 2 0 0118 23H6a2 2 0 01-1.995-1.85L4 21V5a2 2 0 011.85-1.995L6 3h3.17l.068-.172zM18 21V5h-1v1a2 2 0 01-2 2H9a2 2 0 01-2-2V5H6v16h12zM15 6V5h-1a1 1 0 01-.993-.883l-.014-.234a1 1 0 00-1.986 0l-.014.234A1 1 0 0110 5H9v1h6z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/threeMonthsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v8h-5v-2h3v-1h-3v-2h3v-1h-3v-2h5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/topBrandsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
      >
        <path d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"></path>
        <path
          fillRule="evenodd"
          d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z"
          clipRule="evenodd"
        ></path>
        <path d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/trashSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.666 1.667v1.666h6.667V1.667H6.666zM3.333 5.833V4.167h13.333v1.666H3.333zm10.833.834h1.667v9.166a2.5 2.5 0 01-2.5 2.5H6.666a2.5 2.5 0 01-2.5-2.5V6.667h1.667v9.166c0 .46.373.834.833.834h6.667c.46 0 .833-.373.833-.834V6.667zm-5 0H7.5V15h1.666V6.667zm1.667 0H12.5V15h-1.667V6.667z"
          clipRule="evenodd"
        ></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/twelveMonthsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-9.5 2v8h-2v-6h-1v-2h3zm6 0v5h-3v1h3v2h-5v-5h3v-1h-3v-2h5z"></path>
      </symbol>
      ,
      <symbol
        id="src/statics/icons/optimized/twoMonthsSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7 2v2h10V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2zm13 6H4v12h16V8zm-5.5 2v5h-3v1h3v2h-5v-5h3v-1h-3v-2h5z"></path>
      </symbol>
    </svg>
  );
};

export default SvgReturner;
