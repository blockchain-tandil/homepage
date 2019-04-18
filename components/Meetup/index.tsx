import * as React from 'react'
import Link from 'next/link';

const Meetup: React.FunctionComponent<any> = () => (
  <div>
      <Link href="https://meetu.ps/e/GCqVk/yLdlg/f">
        <a target="_blank" rel="noopener noreferrer">
          <h3>Inscripciones</h3>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: #00FAFA;
          position: relative;
          font-size: 150%;
          text-align: center;
          text-decoration: none;
          font-family: 'Roboto Slab',serif;
        }
      `}</style>
  </div>
)

export default Meetup;