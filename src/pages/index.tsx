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
import { Szolgaltatas, Review, Munka } from '../lib/models';
import { GetStaticProps } from 'next';
import { getSzolgaltatasok } from '../lib/data/szolgaltatasok';
import { getReviews } from '../lib/data/reviews';
import { getMunkak } from '../lib/data/munkak';

type Props = {
  szolgaltatasok: Szolgaltatas[];
  reviews: Review[];
  munkak: Munka[];
};

export default function Index({ szolgaltatasok, reviews, munkak }: Props) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <Landing />
      <Title title='Szolgáltatások' />
      <Services szolgaltatasok={szolgaltatasok} />
      <Reviews reviews={reviews} />
      <Title title='Referenciák' />
      <Works munkak={munkak} />
      <Title title='Kapcsolat' />
      <Contact />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const szolgaltatasok = getSzolgaltatasok();
  const reviews = getReviews();
  const munkak = getMunkak();
  return {
    props: {
      szolgaltatasok: szolgaltatasok,
      reviews: reviews,
      munkak: munkak,
    },
  };
};
