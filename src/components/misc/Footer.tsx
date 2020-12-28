import Link from 'next/link';
import React from 'react';
import CustomImage from '../CustomImage';
import Copyright from './Copyright';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className='image-container'>
        <CustomImage
          src='/images/logo_white.png'
          alt='Otthon design logó'
          width={300}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href=''>
              <a>
                <FontAwesomeIcon icon={'facebook'} color='#fff' />
              </a>
            </Link>
          </li>
          <li>
            <Link href=''>
              <a>
                <FontAwesomeIcon icon={'instagram'} color='#fff' />
              </a>
            </Link>
          </li>
        </ul>
        <Copyright />
      </div>
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
      </ul>
      <style jsx>{`
        footer {
          align-items: center;
          background: black;
          height: 300px;
          display: flex;
          justify-content: space-around;
        }
        .image-container {
          width: 200px;
        }
        ul {
          list-style: none;
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
      `}</style>
    </footer>
  );
}
