import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React from 'react';
import CustomImage from '../../components/CustomImage';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Title from '../../components/Title';
import { useWindowSize } from '../../hooks/window-size';
import { getAdataim } from '../../lib/data/adataim';
import { Adataim } from '../../lib/models';

type Props = {
  adataim: Adataim;
};

export default function Index({ adataim }: Props) {
  const size = useWindowSize();
  const url = `/rolam`;
  const title = 'Rólam';
  return (
    <Layout darkImage='/images/rolam.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <motion.div
        initial={{ translateY: 200 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='card'>
          <Title title='Rólam' />
          <div className='img-container'>
            <CustomImage
              radius={25}
              src='images/profilkep_1.jpg?nf_resize=fit&w=800'
              alt='Proifilkép'
            />
          </div>
          <div className='rolam-container'>
            <p>{adataim ? adataim.rolam : ''}</p>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 70%;
          box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -webkit-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -moz-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          background: #f0f0f0;
          border-radius: 16px;
          margin: -100px auto 150px;
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
          font-size: 20px;
          text-align: center;
          line-height: 1.5;
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
      adataim: adataim,
    },
  };
};
