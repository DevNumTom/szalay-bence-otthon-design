import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
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
    <div>
      <Works munkak={munkak} />
    </div>
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
