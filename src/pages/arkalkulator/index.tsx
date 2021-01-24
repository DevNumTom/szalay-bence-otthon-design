import { GetStaticProps } from 'next';
import React from 'react';
import Calculator from '../../components/Calculator';
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
  const url = `/arkalkulator`;
  const title = 'Árkalkulátor';
  return (
    <Layout darkImage='/images/calculator.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div style={{ marginTop: -70 }}>
        <Calculator munkadijSzorzo={+adataim.munkadijSzorzo} />
      </div>
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
