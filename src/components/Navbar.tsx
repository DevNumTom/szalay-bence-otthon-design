import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  isDarkBackground: boolean;
};

export default function Navbar({ isDarkBackground = false }: Props) {
  const router = useRouter();
  return (
    <div>
      <ul>
        {/* {router.pathname !== '/' && (
          <li>
            <Link href='/'>
              <a className={isDarkBackground ? 'white' : null}>Főoldal</a>
            </Link>
          </li>
        )} */}
        <li>
          <Link href='/munkak'>
            <a
              className={[
                router.pathname.startsWith('/munkak') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Munkáim
            </a>
          </Link>
        </li>
        <li>
          <Link href='/szolgaltatasok'>
            <a
              className={[
                router.pathname.startsWith('/szolgaltatasok') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Szolgáltatások
            </a>
          </Link>
        </li>
        <li>
          <Link href='/arkalkulator'>
            <a
              className={[
                router.pathname.startsWith('/arkalkulator') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Árkalkulátor
            </a>
          </Link>
        </li>
        <li>
          <Link href='/rolam'>
            <a
              className={[
                router.pathname.startsWith('/rolam') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Rólam
            </a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a
              className={[
                router.pathname.startsWith('/posts') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href='/kapcsolat'>
            <a
              className={[
                router.pathname.startsWith('/kapcsolat') ? 'active' : null,
                isDarkBackground ? 'white' : null,
              ].join(' ')}
            >
              Kapcsolat
            </a>
          </Link>
        </li>
        <li>
          <a href='https://www.facebook.com/bence.b.szalay'>
            <img
              className='social-image'
              src='/images/facebook.svg'
              alt='homedesignbudapest_facebook'
            />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/home.design.budapest/'>
            <img
              className='social-image'
              src='/images/instagram.svg'
              alt='homedesignbudapest_instagram'
            />
          </a>
        </li>
      </ul>
      <style jsx>{`
        ul {
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          background-color: transparent;
          display: flex;
          justify-content: center;
          z-index: 11;
          font-size: 24px;
        }
        li {
          margin-right: 20px;
        }
        .white {
          color: rgba(255, 255, 255, 0.9);
        }
        .white:hover {
          color: rgba(255, 255, 255, 0.6);
        }
        .active {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
