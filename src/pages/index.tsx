import Layout from '../components/misc/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import React from 'react';
import Landing from '../components/Landing';
import Title from '../components/Title';
import Services from '../components/Services';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { Szolgaltatas, Munka, Adataim } from '../lib/models';
import { GetStaticProps } from 'next';
import { getSzolgaltatasok } from '../lib/data/szolgaltatasok';
import { getMunkak } from '../lib/data/munkak';
import { getAdataim } from '../lib/data/adataim';
import ContactInfos from '../components/ContactInfos';
import Calculator from '../components/Calculator';
import LazyAnimation from '../components/misc/LazyAnimation';

type Props = {
  szolgaltatasok: Szolgaltatas[];
  munkak: Munka[];
  adataim: Adataim;
};

export default function Index({ szolgaltatasok, munkak, adataim }: Props) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <Landing />
      <LazyAnimation cssProp={'translateY'} initial={100} final={0}>
        <Title title='Szolgáltatások' />
        <Services szolgaltatasok={szolgaltatasok} />
      </LazyAnimation>
      <LazyAnimation cssProp={'opacity'} initial={0} final={1}>
        <Title title='Munkáim' />
        <Works munkak={munkak} />
      </LazyAnimation>
      <Title title='Kapcsolat' />
      <p className='short-desc'>{adataim.shortDesc}</p>
      <Contact />
      <Title title='Elérhetőségek' />
      <ContactInfos adataim={adataim} />
      <LazyAnimation cssProp={'translateY'} initial={200} final={0}>
        <Title title='Árkalkulátor' />
        <Calculator munkadijSzorzo={+adataim.munkadijSzorzo} />
      </LazyAnimation>
      <style jsx>{`
        .short-desc {
          max-width: 750px;
          margin: 0 auto;
          opacity: 0.6;
          font-size: 20px;
          text-align: center;
          margin-bottom: 50px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const szolgaltatasok = getSzolgaltatasok();
  const munkak = getMunkak();
  const adataim = getAdataim();
  return {
    props: {
      szolgaltatasok: szolgaltatasok,
      munkak: munkak,
      adataim: adataim,
    },
  };
};
