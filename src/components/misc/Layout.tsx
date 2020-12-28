import Head from 'next/head';
import Copyright from './Copyright';
import Navigation from './Navigation';

type Props = {
  children: React.ReactNode;
  darkImage?: string;
};
export default function Layout({ children, darkImage = '' }: Props) {
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
      <main>{children}</main>
      <footer>
        <Copyright />
      </footer>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
          }
          main {
            min-height: calc(100vh - 462px);
          }
          footer {
            background: black;
            height: 200px;
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
              url('${darkImage}?nf_resize=fit&w=1920');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
}
