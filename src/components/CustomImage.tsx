import React from 'react';

type Props = {
  src: string;
  alt: string;
  resize?: 'fit' | 'smartcrop';
  width?: number;
  height?: number;
};

export default function CustomImage({
  src,
  alt,
  resize = 'fit',
  width,
  height,
}: Props) {
  const transformSrc = (): string => {
    if (!width && !height) {
      return src;
    }
    let srcWithQueries = `${src}?nf_resize=${resize}`;
    if (width) {
      srcWithQueries = `${srcWithQueries}&w=${width}`;
    }
    if (height) {
      srcWithQueries = `${srcWithQueries}&h=${height}`;
    }
    return srcWithQueries;
  };
  return <img src={transformSrc()} alt={alt} style={{ width: '100%' }} />;
}
