import { GetStaticProps } from 'next';
import React from 'react';
import CustomImage from '../../components/CustomImage';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Services from '../../components/Services';
import Works from '../../components/Works';
import { getSzolgaltatasok } from '../../lib/data/szolgaltatasok';
import { Szolgaltatas } from '../../lib/models';

type Props = {
  szolgaltatasok: Szolgaltatas[];
};

export default function Szolgaltatasok({ szolgaltatasok }: Props) {
  const url = `/szolgaltatasok`;
  const title = 'Szolgáltatások';
  return (
    <Layout darkImage='/images/works.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className='szolgaltatasok-container'>
        <Services szolgaltatasok={szolgaltatasok} />
      </div>
      <style jsx>{`
        .szolgaltatasok-container {
          margin: 50px 0 100px 0;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const szolgaltatasok = getSzolgaltatasok();
  return {
    props: {
      szolgaltatasok: szolgaltatasok,
    },
  };
};
