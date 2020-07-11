import React from "react";

function Waves() {
  return (
    <section className="bottom-0 right-0 left-0 bg-coolGray-100">
      <svg
        className="waves "
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" fill="rgba(58,52,98,0.7" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(58,52,98,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(58,52,98,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#3A3462" />
        </g>
      </svg>
      <style jsx>{`
        .waves {
          transform: translateY(2px);
          width: 100%;
          height: 10vh;
          margin-bottom: -7px;
          /*Fix for safari gap*/
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
        }

        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }

        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }

        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }

        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }

          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .waves {
            margin-bottom: -9px;
            height: 60px;
            min-height: 60px;
          }
        }
      `}</style>
    </section>
  );
}

export default Waves;
