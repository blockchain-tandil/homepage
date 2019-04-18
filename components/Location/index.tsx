import * as React from 'react'

const Location: React.FunctionComponent<any> = () => (
  <div>
      <h2 className="text">IDEB</h2>
      <h3 className="text">9 de julio 555. Of 28</h3>
      <h4 className="text">Galería de los Puentes</h4>
      <style jsx>{`
        .text {
          color: #FAFAFA;
          position: relative;
          text-align: center;
          font-size: 150%;
          font-family: 'Roboto Slab',serif;
        }
      `}</style>
  </div>
)

export default Location;