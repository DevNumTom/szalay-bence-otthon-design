import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import CustomImage from '../../components/CustomImage';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Title from '../../components/Title';
import {
  getSzolgaltatas,
  getSzolgaltatasok,
} from '../../lib/data/szolgaltatasok';
import { Szolgaltatas } from '../../lib/models';

type Props = {
  szolgaltatas: Szolgaltatas;
  url: string;
};

export default function Asd({ szolgaltatas, url }: Props) {
  const szolgaltatasUrl = 'szolgaltatas';
  const getValueByKey = (key: string): any => {
    return szolgaltatas ? szolgaltatas[key] : null;
  };
  return (
    <Layout darkImage='images/services.jpg'>
      <BasicMeta url={url || szolgaltatasUrl} title={getValueByKey('title')} />
      <OpenGraphMeta
        url={url || szolgaltatasUrl}
        title={getValueByKey('title')}
      />
      <TwitterCardMeta
        url={url || szolgaltatasUrl}
        title={getValueByKey('title')}
      />
      <div className='card'>
        <div className='img-container'>
          <CustomImage
            src={getValueByKey('thumbnail')}
            alt={getValueByKey('title')}
          />
        </div>
        <div className='rolam-container'>
          <Title title={getValueByKey('title')} />
          <p>{getValueByKey('desc')}</p>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const szolgaltatas = getSzolgaltatas(+(params as { page: string }).page);
  return {
    props: {
      szolgaltatas: szolgaltatas || null,
      url: `/szolgaltatasok/${(params as { page: string }).page}` || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const szolgaltatasok = getSzolgaltatasok();
  const paths = szolgaltatasok.map((_, i) => {
    return { params: { page: `${i}` } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
