import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Title from '../../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { GalleryItem, Munka, MunkaType } from '../../lib/models';
import Layout from '../../components/misc/Layout';
import MunkaGallery from '../../components/MunkaGallery';
import { getMunkak, getMunkaWithPrevAndNextSlug } from '../../lib/data/munkak';

type Props = {
  munka: Munka;
  nextSlug: string;
  prevSlug: string;
};

export default function Page({ munka, nextSlug, prevSlug }: Props) {
  const [isBeforeShown, setIsBeforeShown] = useState(false);
  const url = `/munkak/${munka ? munka.slug : ''}`;
  const title = munka ? munka.name : '';
  const getCurrentGallery = (): GalleryItem[] => {
    return isBeforeShown ? munka.before_gallery : munka.gallery;
  };
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
      {munka && munka.type === MunkaType.Felujitas && (
        <div className='tabs'>
          <p
            onClick={() => setIsBeforeShown(true)}
            className={`tab ${isBeforeShown ? 'active' : null}`}
          >
            Felújítás előtt
          </p>
          <p
            onClick={() => setIsBeforeShown(false)}
            className={`tab ${!isBeforeShown ? 'active' : null}`}
          >
            Felújítás után
          </p>
        </div>
      )}
      <MunkaGallery gallery={munka ? getCurrentGallery() : []} />
      <style jsx>{`
        .title-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 10px;
        }
        .tabs {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .tab {
          color: rgba(0, 0, 0, 0.8);
          font-size: 24px;
          cursor: pointer;
        }
        .tab:hover {
          color: rgba(0, 0, 0, 1);
        }
        .active {
          color: rgba(0, 0, 0, 0.6);
          text-decoration: underline;
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
