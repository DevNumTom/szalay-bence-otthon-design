import { GetStaticProps } from 'next';
import React from 'react';
import CustomImage from '../../components/CustomImage';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Title from '../../components/Title';
import { getAdataim } from '../../lib/data/adataim';
import { Adataim } from '../../lib/models';

type Props = {
  adataim: Adataim;
};

export default function Index({ adataim }: Props) {
  const url = `/rolam`;
  const title = 'Rólam';
  return (
    <Layout darkImage='/images/rolam.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className='card'>
        <div className='img-container'>
          <CustomImage src='images/profilkep_1.jpg' alt='Proifilkép' />
        </div>
        <div className='rolam-container'>
          <Title title='Rólam' />
          <p>{adataim.rolam}</p>
        </div>
      </div>
      <div className='card secondary-card'></div>
      <style jsx>{`
        .card {
          display: flex;
          width: 70%;
          box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -webkit-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -moz-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          background: #f0f0f0;
          border-radius: 16px;
          margin: -100px auto 100px;
        }
        .img-container {
          padding: 10px;
          width: 50%;
          border-radius: 16px 0 0 16px;
        }
        .rolam-container {
          width: 50%;
          padding: 20px;
        }
        p {
          font-size: 18px;
        }
        @media screen and (max-width: 1450px) {
          .card {
            flex-direction: column;
            align-items: center;
          }
          .img-container {
            width: 80%;
            margin-top: 20px;
          }
          .rolam-container {
            width: 80%;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const adataim = getAdataim();
  return {
    props: {
      szolgaltatasok: adataim,
    },
  };
};
