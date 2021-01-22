import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
  darkImage?: string;
};
export default function Layout({ children, darkImage = '' }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='root'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name='theme-color' content='#fff' />
      </Head>
      <nav className={darkImage ? 'dark-nav' : ''}>
        <Navigation isWhiteLogo={!!darkImage} />
      </nav>
      <div className='navbar'>
        <Navbar isDarkBackground={true} />
      </div>
      {scrollPosition > 110 && (
        <header>
          <div className='navbar-container'>
            <Navbar isDarkBackground={true} />
          </div>
        </header>
      )}
      <main>{children}</main>
      <Footer />
      <style jsx>
        {`
          .root {
            display: block;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
          }
          .navbar {
            position: absolute;
            right: 50px;
            top: 100px;
            z-index: 5;
          }
          header {
            position: fixed;
            top: 0;
            height: 70px;
            width: 100%;
            background: #000;
            display: flex;
            justify-content: flex-end;
            z-index: 11;
            all: 0.5s ease;
             {
              /* box-shadow: 0 4px 2px -2px gray; */
            }
          }
          .navbar-container {
            width: 500px;
            display: flex;
            align-items: center;
            margin-right: 50px;
          }
          main {
            min-height: calc(100vh - 462px);
          }
          .dark-nav {
            display: table;
            width: 100%;
            height: 350px;
            color: white;
            background: linear-gradient(
                rgba(0, 0, 0, 0.85),
                rgba(0, 0, 0, 0.85)
              ),
              url('${darkImage}?nf_resize=smartcrop&w=1920&h=400');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
}
