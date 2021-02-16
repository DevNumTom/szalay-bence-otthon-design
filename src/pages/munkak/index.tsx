import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React from 'react';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Works from '../../components/Works';
import { getMunkak } from '../../lib/data/munkak';
import { Munka } from '../../lib/models';

type Props = {
  munkak: Munka[];
};

export default function Munkak({ munkak }: Props) {
  const url = `/munkak`;
  const title = 'Munkák';
  return (
    <Layout darkImage='/images/works.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <motion.div
        initial={{ translateY: 200 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='munkak-container'>
          <Works munkak={munkak} />
        </div>
      </motion.div>

      <style jsx>{`
        .munkak-container {
          margin: -100px 0 100px 0;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const munkak = getMunkak();
  return {
    props: {
      munkak: munkak,
    },
  };
};
