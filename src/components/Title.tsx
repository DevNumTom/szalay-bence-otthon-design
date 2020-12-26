import React from 'react';

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <h1>
      {title}
      <style jsx>
        {`
          h1 {
            margin: 50px 0;
            text-align: center;
            font-size: 40px;
            letter-spacing: 3px;
          }
        `}
      </style>
    </h1>
  );
}
