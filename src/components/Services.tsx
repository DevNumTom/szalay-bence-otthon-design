import { useRouter } from 'next/router';
import React from 'react';
import { Szolgaltatas } from '../lib/models';

type Props = {
  szolgaltatasok: Szolgaltatas[];
};

export default function Services({ szolgaltatasok }: Props) {
  const router = useRouter();
  return (
    <section id='szolgaltatasok'>
      {szolgaltatasok.map((el, i) => (
        <div
          key={i}
          className='card'
          style={{ backgroundImage: `url(${el.thumbnail})` }}
          onClick={() => router.push(`/szolgaltatasok/${el.slug}`)}
        >
          <div className='title-container'>
            <h2>{el.title}</h2>
          </div>
        </div>
      ))}
      <style jsx>{`
        #szolgaltatasok {
          margin: 0 auto 50px;
          display: grid;
          width: 80%;
          grid-template-columns: repeat(auto-fit, calc(33.333% - 2rem));
          grid-gap: 2rem;
        }
        .card {
          position: relative;
          height: 250px;
          border-radius: 16px;
          -webkit-box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
          box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
          transition: all 0.2s ease-in-out;
          background-position: center;
          background-size: cover;
          cursor: pointer;
        }
        .card:hover {
          transform: scale(1.1);
        }
        .title-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0.9;
          display: flex;
          justify-content: center;
          height: 20%;
          align-items: center;
          border-radius: 0 0 16px 16px;
        }
        h2 {
          position: absolute;
          bottom: 2px;
          margin: 0 0 5px 0;
          color: white;
        }
        @media screen and (max-width: 1024px) {
          #szolgaltatasok {
            grid-template-columns: repeat(auto-fit, calc(50% - 2rem));
          }
        }
        @media screen and (max-width: 776px) {
          #szolgaltatasok {
            grid-template-columns: repeat(auto-fit, 100%);
          }
        }
      `}</style>
    </section>
  );
}
