import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Title from '../../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Munka } from '../../lib/models';
import Layout from '../../components/misc/Layout';
import MunkaGallery from '../../components/MunkaGallery';
import { getMunkak, getMunkaWithPrevAndNextSlug } from '../../lib/data/munkak';

type Props = {
  munka: Munka;
  nextSlug: string;
  prevSlug: string;
};

export default function Page({ munka, nextSlug, prevSlug }: Props) {
  const url = `/munkak/${munka ? munka.slug : ''}`;
  const title = munka ? munka.name : '';
  return (
    <Layout darkImage={munka ? munka.cover : ''}>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className='title-container'>
        <Link href={`/munkak/${prevSlug}`}>
          <a>
            <FontAwesomeIcon width={20} cursor={'pointer'} icon={faAngleLeft} />
          </a>
        </Link>
        <Title title={title} />
        <Link href={`/munkak/${nextSlug}`}>
          <a>
            <FontAwesomeIcon
              width={20}
              cursor={'pointer'}
              icon={faAngleRight}
            />
          </a>
        </Link>
      </div>
      <MunkaGallery gallery={munka ? munka.gallery : []} />
      <style jsx>{`
        .title-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 10px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [munka, prevSlug, nextSlug] = getMunkaWithPrevAndNextSlug(
    (params as { page: string }).page
  );
  return {
    props: {
      munka: munka,
      prevSlug: prevSlug,
      nextSlug: nextSlug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const munkak = getMunkak();
  const paths = munkak.map((munka) => {
    return { params: { page: munka.slug } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
