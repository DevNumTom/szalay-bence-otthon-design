import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import React from 'react';
import Contact from '../../components/Contact';
import ContactInfos from '../../components/ContactInfos';
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
  const url = `/kapcsolat`;
  const title = 'Kapcsolat';
  return (
    <Layout darkImage='/images/kapcsolat_2.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Title title='Kapcsolat' />
      <Contact />
      <Title title='Elérhetőségek' />
      <ContactInfos adataim={adataim} />
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
