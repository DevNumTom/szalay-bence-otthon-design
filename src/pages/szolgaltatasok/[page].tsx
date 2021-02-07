import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import ContactInfos from '../../components/ContactInfos';
import CustomImage from '../../components/CustomImage';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import Layout from '../../components/misc/Layout';
import Services from '../../components/Services';
import Title from '../../components/Title';
import { getAdataim } from '../../lib/data/adataim';
import {
  getAllSzolgaltatasok,
  getSzolgaltatas,
} from '../../lib/data/szolgaltatasok';
import { Adataim, ArListItem, Szolgaltatas } from '../../lib/models';

type Props = {
  szolgaltatas: Szolgaltatas;
  url: string;
  adataim: Adataim;
};

export default function Asd({ szolgaltatas, url, adataim }: Props) {
  const szolgaltatasUrl = 'szolgaltatas';
  console.log(szolgaltatas);
  const getValueByKey = (key: string): any => {
    return szolgaltatas ? szolgaltatas[key] : null;
  };
  return (
    <Layout darkImage='images/services.jpg'>
      <BasicMeta url={url || szolgaltatasUrl} title={getValueByKey('title')} />
      <OpenGraphMeta
        url={url || szolgaltatasUrl}
        title={getValueByKey('title')}
      />
      <TwitterCardMeta
        url={url || szolgaltatasUrl}
        title={getValueByKey('title')}
      />
      <div className='card'>
        <div className='img-container'>
          <CustomImage
            src={getValueByKey('thumbnail')}
            alt={getValueByKey('title')}
          />
        </div>
      </div>
      <div className='main-title'>
        <Title title={getValueByKey('title')} />
        <p>{getValueByKey('desc')}</p>
        {getValueByKey('arlista') && getValueByKey('arlista').length && (
          <>
            <Title isSmall={true} title='Árlista' />
            <table className='table'>
              <tbody>
                <tr>
                  <th className='table-header'>Szolgáltatás</th>
                  <th className='table-header'>Ár</th>
                </tr>
                {getValueByKey('arlista').map((el: ArListItem, i) => (
                  <tr key={i}>
                    <td>{el.specSzolg}</td>
                    <td>{el.ar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='arkalkulator-link'>
              <Link href='/arkalkulator'>
                <a>Kipróbálom az árkalkulátort!</a>
              </Link>
            </div>
          </>
        )}
      </div>
      {szolgaltatas.alSzolgaltatasok &&
        szolgaltatas.alSzolgaltatasok.length && (
          <Services szolgaltatasok={getValueByKey('alSzolgaltatasok')} />
        )}
      <ContactInfos adataim={adataim} />
      <style jsx>{`
        .card {
          display: flex;
          width: 30vw;
          min-width: 300px;
          box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -webkit-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -moz-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          background: #f0f0f0;
          border-radius: 16px;
          margin: -100px auto 100px;
        }
        .img-container {
          padding: 10px;
          width: 30vw;
          min-width: 250px;
          border-radius: 16px 0 0 16px;
        }
        .rolam-container {
          width: 50%;
          padding: 20px;
        }
        .arkalkulator-link {
          font-weight: bold;
          text-align: center;
          margin-top: 20px;
        }
        p {
          font-size: 20px;
          width: 70%;
          text-align: center;
          line-height: 1.5;
          opacity: 0.8;
          margin: 0 auto;
        }
        .main-title {
          margin-top: -40px;
          margin-bottom: 75px;
          position: relative;
        }
        table {
          margin: 0 auto;
          width: 50%;
        }
        th {
          font-size: 22px;
        }
        td {
          padding: 10px;
          text-align: center;
          font-size: 18px;
          border: 1px solid #c4c4c4;
        }
        @media screen and (max-width: 1450px) {
          .card {
            flex-direction: column;
            align-items: center;
          }
          .img-container {
            width: 80%;
            margin-top: 20px;
          }
          .rolam-container {
            width: 80%;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const szolgaltatas = getSzolgaltatas((params as { page: string }).page);
  const adataim = getAdataim();
  return {
    props: {
      szolgaltatas: szolgaltatas || null,
      url: `/szolgaltatasok/${(params as { page: string }).page}` || null,
      adataim,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const szolgaltatasok = getAllSzolgaltatasok();
  const paths = szolgaltatasok.map((el) => {
    return { params: { page: `${el.slug}` } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
