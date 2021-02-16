import Link from 'next/link';
import React from 'react';
import CustomImage from '../CustomImage';
import Copyright from './Copyright';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className='image-container'>
        <CustomImage
          src='/images/logo_white.png'
          alt='Otthon design logó'
          width={200}
        />
      </div>
      <Copyright />
      <ul>
        <li>
          <Link href='/'>
            <a className={router.pathname === '/' ? 'active' : null}>Főoldal</a>
          </Link>
        </li>
        <li>
          <Link href='/munkak'>
            <a
              className={
                router.pathname.startsWith('/munkak') ? 'active' : null
              }
            >
              Munkáim
            </a>
          </Link>
        </li>
        <li>
          <Link href='/szolgaltatasok'>
            <a
              className={
                router.pathname.startsWith('/szolgaltatasok') ? 'active' : null
              }
            >
              Szolgáltatások
            </a>
          </Link>
        </li>
        <li>
          <Link href='/arkalkulator'>
            <a
              className={
                router.pathname.startsWith('/arkalkulator') ? 'active' : null
              }
            >
              Árkalkulátor
            </a>
          </Link>
        </li>
        <li>
          <Link href='/rolam'>
            <a
              className={router.pathname.startsWith('/rolam') ? 'active' : null}
            >
              Rólam
            </a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a
              className={router.pathname.startsWith('/posts') ? 'active' : null}
            >
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href='/kapcsolat'>
            <a
              className={
                router.pathname.startsWith('/kapcsolat') ? 'active' : null
              }
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
          <a href='https://www.instagram.com/home.design.budapest/'>
            <img
              style={{ marginLeft: 10 }}
              className='social-image'
              src='/images/instagram.svg'
              alt='homedesignbudapest_instagram'
            />
          </a>
        </li>
      </ul>
      <style jsx>{`
        footer {
          align-items: center;
          background: black;
          min-height: 300px;
          display: flex;
          justify-content: space-around;
          padding: 20px;
        }
        .image-container {
          width: 200px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          padding: 5px 0;
        }
        a {
          font-size: 20px;
          color: #fff;
        }
        a:hover {
          color: rgba(255, 255, 255, 0.5);
        }
        @media screen and (max-width: 500px) {
          footer {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
