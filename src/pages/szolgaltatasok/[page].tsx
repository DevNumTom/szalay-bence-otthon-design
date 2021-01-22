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
  return (
    <Layout darkImage='images/services.jpg'>
      <BasicMeta url={url} title={szolgaltatas.title} />
      <OpenGraphMeta url={url} title={szolgaltatas.title} />
      <TwitterCardMeta url={url} title={szolgaltatas.title} />
      <div className='card'>
        <div className='img-container'>
          <CustomImage src={szolgaltatas.thumbnail} alt={szolgaltatas.title} />
        </div>
        <div className='rolam-container'>
          <Title title={szolgaltatas.title} />
          <p>{szolgaltatas.desc}</p>
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
      szolgaltatas: szolgaltatas,
      url: `/szolgaltatasok/${(params as { page: string }).page}`,
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
