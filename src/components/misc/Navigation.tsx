import Link from 'next/link';
import { useRouter } from 'next/router';
import Burger from './Burger';
import { useState } from 'react';
import { useWindowSize } from '../../hooks/window-size';

type Props = {
  isWhiteLogo?: boolean;
};

export default function Navigation({ isWhiteLogo = false }: Props) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const size = useWindowSize();
  return (
    <>
      {size.width < 1024 ? (
        <Burger active={active} onClick={() => setActive(!active)} />
      ) : null}
      <div className={'container ' + (active ? 'active' : '')}>
        <Link href='/'>
          <a>
            <img
              className={'logo'}
              src={isWhiteLogo ? '/images/logo_white.png' : '/images/logo.png'}
              alt='Otthon Design Logo'
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href='/'>
              <a className={router.pathname === '/' ? 'active' : null}>
                Főoldal
              </a>
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
                className={
                  router.pathname.startsWith('/rolam') ? 'active' : null
                }
              >
                Rólam
              </a>
            </Link>
          </li>
          <li>
            <Link href='/posts'>
              <a
                className={
                  router.pathname.startsWith('/posts') ? 'active' : null
                }
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
        <style jsx>
          {`
            .container {
              width: 0;
            }
            .navbar {
              position: absolute;
              right: 50px;
              top: 50px;
               {
                /* z-index: 5; */
              }
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: center;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 11;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }
            img {
              max-width: 250px;
              min-width: 200px;
              width: 15vw;
              position: absolute;
              left: 2rem;
              top: 2rem;
              z-index: 10;
            }

            @media (max-width: 460px) {
              img {
                min-width: 125px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
