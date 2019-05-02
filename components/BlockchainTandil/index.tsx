import * as React from 'react'

type Props = {
  text? : string;
}

const BlokchainTandil: React.FunctionComponent<Props> = ({ text = "Default" }) => (
  <div className="container">
    <h1>
      <span className="main-text skew">{text}</span>
      <span className="back-text glitch-up">{text}</span>
    </h1>

    <style jsx>{`
      .main-text {
        position: relative;
        display: inline-block;
        opacity: .5;
        color: #00FAFA;
      }

      .back-text {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        opacity: .8;
        display: inline-block;
      }

      h1 {
        font-family: 'Roboto Slab',serif;
        font-weight: 500;
        font-style: normal;
        text-transform: uppercase;
        font-size: 300%;
        position: relative;
        margin: auto;
        margin-top: 0px;
      }

      .container {
        color: white;
        width: 80%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }

      .skew {
        animation: skew 0.95s infinite alternate;
      }

      .glitch-up {
        animation: glitch-up 1.8s infinite alternate;
      }

      @keyframes skew {
        0% {
          transform: skew(-10deg);
        }
        20% {
          transform: skew(0deg);
        }
        24% {
          transform: skew(-27deg);
        }
        28% {
          transform: skew(0deg);
        }
        70% {
          transform: skew(0deg);
        }
        74%{
          transform: skew(27deg);
        }
        78% {
          transform: skew(0deg);
        }
        100% {
          transform: skew(10deg);
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
          transform: translate3d(10px, -6px, 0);
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