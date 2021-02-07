import React from 'react';

type Props = {
  title: string;
  isSmall?: boolean;
};

export default function Title({ title, isSmall = false }: Props) {
  return (
    <h1 className={isSmall ? 'small' : null}>
      {title}
      <style jsx>
        {`
          h1 {
            margin: 50px 0;
            text-align: center;
            font-size: 40px;
            letter-spacing: 3px;
          }
          .small {
            font-size: 30px;
          }
          @media screen and (max-width: 776px) {
            h1 {
              font-size: 34px;
            }
            .small {
              font-size: 24px;
            }
          }
          @media screen and (max-width: 400px) {
            h1 {
              font-size: 30px;
            }
            .small {
              font-size: 20px;
            }
          }
        `}
      </style>
    </h1>
  );
}
