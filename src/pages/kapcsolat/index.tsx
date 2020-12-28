import { faAt, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Contact from '../../components/Contact';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Title from '../../components/Title';

export default function Index() {
  const url = `/kapcsolat`;
  const title = 'Kapcsolat';
  return (
    <Layout darkImage='images/kapcsolat.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Title title='Kapcsolat' />
      <Contact />
      <Title title='Elérhetőségek' />
      <div className='cards-container'>
        <div className='card'>
          <FontAwesomeIcon width={50} icon={faPhone} />
          <h2>+36 (30) 123 4567</h2>
        </div>
        <div className='card'>
          <FontAwesomeIcon width={50} icon={faAt} />
          <h2>szalaybence@gmail.com</h2>
        </div>
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
    </Layout>
  );
}
