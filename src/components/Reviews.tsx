import React from 'react';
import { Review } from '../lib/models';

type Props = {
  reviews: Review[];
};

export default function Reviews({ reviews }: Props) {
  return (
    <section id='reviews'>
      {reviews.map((el, i) => (
        <article key={i}>
          {/* TODO - change image */}
          <q className='review'>{el.review}</q>
          <footer>
            <p className='name'> - {el.name}</p>
            <p className='status'>{el.status}</p>
          </footer>
        </article>
      ))}
      <style jsx>{`
        #reviews {
          margin-top: 85px;
          background: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          background-size: cover;
          background-position: center;

          width: 100%;
          display: flex;
          justify-content: space-around;
          gap: 20px;
          padding: 0;
        }
        article {
          padding: 20px 0;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        img {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          margin: 1rem 0;
        }
        p,
        q {
          color: white;
          text-align: center;
        }
        q {
          width: 90%;
          font-size: 20px;
        }
        q::before {
          content: open-quote;
        }
        q::after {
          content: close-quote;
        }
        .review {
          font-weight: 700;
          font-style: italic;
        }
        .name {
          font-style: italic;
        }
        .status {
          font-size: 0.8rem;
          color: #9b9b9b;
        }
        @media screen and (max-width: 776px) {
          #reviews {
            flex-direction: column;
          }
          article:not(:first-child) {
            padding: 0px;
          }
          article:first-child {
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
