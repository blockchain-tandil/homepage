import * as React from 'react'
import moment from 'moment';

const Clock: React.FunctionComponent<any> = () => {
  const timeLeft = moment("05/08/2019 18:00:00").fromNow()
  return (
  <div>
      <h2>Next meeting {timeLeft}</h2>
      <style jsx>{`
        h2 {
          color: #FAFAFA;
          position: relative;
          font-size: 200%;
          text-align: center;
          font-family: 'Roboto Slab',serif;
          }
        }
      `}</style>
  </div>
  );
}

export default Clock