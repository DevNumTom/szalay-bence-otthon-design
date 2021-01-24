import Layout from '../components/misc/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import React from 'react';
import Landing from '../components/Landing';
import Title from '../components/Title';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { Szolgaltatas, Review, Munka, Adataim } from '../lib/models';
import { GetStaticProps } from 'next';
import { getSzolgaltatasok } from '../lib/data/szolgaltatasok';
import { getReviews } from '../lib/data/reviews';
import { getMunkak } from '../lib/data/munkak';
import { getAdataim } from '../lib/data/adataim';
import ContactInfos from '../components/ContactInfos';
import Calculator from '../components/Calculator';

type Props = {
  szolgaltatasok: Szolgaltatas[];
  reviews: Review[];
  munkak: Munka[];
  adataim: Adataim;
};

export default function Index({
  szolgaltatasok,
  reviews,
  munkak,
  adataim,
}: Props) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <Landing />
      <Title title='Szolgáltatások' />
      <Services szolgaltatasok={szolgaltatasok} />
      {/* <Reviews reviews={reviews} /> */}
      <Title title='Munkáim' />
      <Works munkak={munkak} />
      <Title title='Kapcsolat' />
      <p className='short-desc'>{adataim.shortDesc}</p>
      <Contact />
      <Title title='Elérhetőségek' />
      <ContactInfos adataim={adataim} />
      <Title title='Árkalkulátor' />
      <Calculator munkadijSzorzo={+adataim.munkadijSzorzo} />
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
  const reviews = getReviews();
  const munkak = getMunkak();
  const adataim = getAdataim();
  return {
    props: {
      szolgaltatasok: szolgaltatasok,
      reviews: reviews,
      munkak: munkak,
      adataim: adataim,
    },
  };
};
