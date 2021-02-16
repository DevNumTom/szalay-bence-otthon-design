import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React from 'react';
import Calculator from '../../components/Calculator';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import { getAdataim } from '../../lib/data/adataim';
import { Adataim } from '../../lib/models';

type Props = {
  adataim: Adataim;
};

export default function Index({ adataim }: Props) {
  const url = `/arkalkulator`;
  const title = 'Árkalkulátor';
  return (
    <Layout darkImage='/images/calculator.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <motion.div
        initial={{ translateY: 200 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={{ marginTop: -70 }}>
          <Calculator munkadijSzorzo={+adataim.munkadijSzorzo} />
        </div>
      </motion.div>
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
