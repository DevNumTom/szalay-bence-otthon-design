import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Adataim } from '../lib/models';

type Props = {
  adataim: Adataim;
};

export default function ContactInfos({ adataim }: Props) {
  return (
    <div className='cards-container'>
      <div className='card'>
        <FontAwesomeIcon width={50} icon={faPhone} />
        <h2>{adataim.telefon}</h2>
      </div>
      <div className='card'>
        <FontAwesomeIcon width={50} icon={faAt} />
        <h2>{adataim.email}</h2>
      </div>
      <style jsx>{`
        .cards-container {
          display: flex;
          max-width: 800px;
          margin: 0 auto;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40%;
          height: 300px;
          border-radius: 16px;
          -webkit-box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
          box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
          transition: all 0.2s ease-in-out;
          background-position: center;
          background-size: cover;
        }
        h2 {
          margin-top: 50px;
          font-size: 22px;
        }
        .card:hover {
          transform: scale(1.1);
        }
        @media screen and (max-width: 780px) {
          .cards-container {
            flex-direction: column;
            align-items: center;
          }
          .card {
            width: 70%;
          }
          .card:first-child {
            margin-bottom: 50px;
          }
        }
        @media screen and (max-width: 350px) {
          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
