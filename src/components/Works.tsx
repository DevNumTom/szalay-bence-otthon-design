import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { Munka, MunkaType } from '../lib/models';
import { useRouter } from 'next/router';

type Props = {
  munkak: Munka[];
};

export default function Works({ munkak }: Props) {
  const router = useRouter();
  return (
    <div className='card'>
      <div className='carousel-container'>
        <Carousel
          onClickItem={(i) => router.push(`/munkak/${munkak[i].slug}`)}
          showArrows={true}
        >
          {munkak.map((el, i) => (
            <div key={el.cover}>
              <img src={`${el.cover}?nf_resize=fit&w=1000`} alt={el.name} />
              <p className='legend legend-font'>
                <Link href={`/munkak/${el.slug}`}>
                  <a>{`${el.name} - ${el.type}`}</a>
                </Link>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
        .card {
          width: 70%;
          margin: 0 auto;
          box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -webkit-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -moz-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          background: #f0f0f0;
          border-radius: 16px;
        }
        .carousel-container {
          padding: 20px;
          cursor: pointer;
        }
        .legend-font.legend-font.legend-font {
          font-size: 2vw;
          font-weight: 700;
        }
        a {
          color: #fff;
        }
        a:hover {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
