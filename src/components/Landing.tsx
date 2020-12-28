import React from 'react';

export default function Landing() {
  return (
    <section id='landing'>
      <div className='bg-overlay'></div>
      <video autoPlay muted loop>
        <source
          src='/images/landing-video.mp4?nf_resize=fit&w=300'
          type='video/mp4'
        ></source>
      </video>
      <div className='viewport-header'>
        <h1>
          Szalay Bence
          <span>Otthon design</span>
        </h1>
      </div>
      <style jsx>{`
        video {
          object-fit: cover;
          width: 100%;
          height: 100vh;
          position: relative;
          top: 0;
          left: 0;
          filter: blur(5px);
        }
        .viewport-header {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h1 {
          text-transform: uppercase;
          letter-spacing: 3vw;
          line-height: 1.2;
          font-size: 3vw;
          text-align: center;
          max-width: 1200px;
        }
        span {
          display: block;
          font-size: 10vw;
          letter-spacing: 0.1vw;
        }
        .bg-overlay {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: ' ';
          z-index: 2;
          backface-visibility: hidden;
          background: #ffffff;
          background: linear-gradient(180deg, white 0%, transparent 50%);
          opacity: 0.8;
        }
        @media screen and (min-width: 1200px) {
          h1 {
            font-size: 40px;
            letter-spacing: 40px;
          }
          span {
            font-size: 123px;
          }
        }
      `}</style>
    </section>
  );
}
