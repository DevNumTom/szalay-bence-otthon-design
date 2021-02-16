import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Title from '../../components/Title';
import { useWindowSize } from '../../hooks/window-size';
import { getAllSzolgaltatasok } from '../../lib/data/szolgaltatasok';
import { AlSzolgaltatas, Szolgaltatas } from '../../lib/models';

type Props = {
  szolgaltatasok: (Szolgaltatas | AlSzolgaltatas)[];
};

export default function Szolgaltatasok({ szolgaltatasok }: Props) {
  const url = `/szolgaltatasok`;
  const title = 'Szolgáltatások';
  const size = useWindowSize();
  return (
    <Layout darkImage='/images/works.jpg'>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className='szolgaltatasok-container'>
        {szolgaltatasok.map((el, i) => (
          <motion.div
            initial={{ translateX: i % 2 === 0 ? -200 : 200 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1 }}
            key={i}
          >
            <div className={`row ${i % 2 === 0 ? 'even' : 'odd'}`}>
              {size.width > 700 && (
                <div className='img-container'>
                  <img
                    src={el.thumbnail + '?nf_resize=fit&w=300'}
                    alt={el.title}
                  />
                </div>
              )}
              <div className='content'>
                <Title isSmall={true} title={el.title} />
                <p className='description'>{el.desc}</p>
                <Link href={`/szolgaltatasok/${el.slug}`}>
                  <a>
                    Bővebben
                    <FontAwesomeIcon width={10} icon={faArrowRight} />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .szolgaltatasok-container {
          margin: 50px 0 100px 0;
        }
        .row {
          display: flex;
          width: 80%;
          margin: 0 auto 30px;
          max-width: 1000px;
          height: 300px;
          transition: background 0.5s ease;
          border-radius: 20px;
          border: 2px solid rgba(241, 241, 241, 0.7);
          -webkit-box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
          box-shadow: 15px 15px 27px #cecece, -15px -15px 27px #ffffff;
        }
        .odd {
          flex-direction: row-reverse;
        }
        .row:hover {
          background: rgba(228, 228, 228, 0.7);
        }
        img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
        }
        .content {
          position: relative;
          width: 100%;
        }
        .description {
          margin: 0 20px;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }
        a {
          position: absolute;
          font-weight: 500;
          bottom: 10px;
          right: 10px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const szolgaltatasok = getAllSzolgaltatasok();
  return {
    props: {
      szolgaltatasok: szolgaltatasok,
    },
  };
};
