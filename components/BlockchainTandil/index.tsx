import * as React from 'react'

const BlokchainTandil: React.FunctionComponent<any> = () => (
  <div>
    <h1 className="text white skew">BLOCKCHAIN TANDIL</h1>

    <style jsx>{`
      .text {
        font-size: 300%;
        text-align: center;
        font-family: 'Roboto Slab',serif;
      }

      .white {
        color: #FAFAFA;
        position: relative;
      }

      .skew {
        animation: skew 0.95s infinite alternate;
      }

      .glitch-up {
        animation: glitch-up 1.8s infinite alternate;
      }

      @keyframes skew {
        0% {
          transform: skew(0deg);
        }
        20% {
          transform: skew(0deg);
        }
        24% {
          transform: skew(-7deg);
        }
        28% {
          transform: skew(0deg);
        }
        70% {
          transform: skew(0deg);
        }
        74%{
          transform: skew(10deg);
        }
        78% {
          transform: skew(0deg);
        }
        100% {
          transform: skew(0deg);
        }
      }

      @keyframes glitch-up{
        0% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
        20% {
          transform: translate3d(0, 0, 0);
          opacity: 0.3;
        }
        24% {
          transform: translate3d(3px, 1px, 0);
          opacity: 1;
        }
        28% {
          transform: translate3d(0, 0, 0);
        }
        60% {
          transform: translate3d(0, 0, 0);
        }
        64%{
          transform: translate3d(-4px, -3px, 0);
        }
        68% {
          transform: translate3d(0, 0, 0);
        }
        70% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        74%{
          opacity: 0.3;
          transform: translate3d(8px, -6px, 0);
        }
        78% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(0, 0, 0);
        }
      }
  `}</style>
  </div>
)

export default BlokchainTandil;