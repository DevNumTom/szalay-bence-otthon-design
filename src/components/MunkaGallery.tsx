import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import { GalleryItem } from '../lib/models';

type Props = {
  gallery: GalleryItem[];
};

interface Photo {
  src: string;
  width: number;
  height: number;
}

export default function MunkaGallery({ gallery }: Props) {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const IMAGES: Photo[] = gallery.map((el) => ({
    src: el.image + `?nf_resize=fit&w=800`,
    width: 4,
    height: 3,
  }));
  return (
    <section id='gallery'>
      <Gallery
        margin={10}
        onClick={(_, photo) => {
          setphotoIndex(photo.index);
          setisOpen(true);
        }}
        photos={IMAGES}
      ></Gallery>
      {isOpen && (
        <Lightbox
          mainSrc={IMAGES[photoIndex].src}
          nextSrc={IMAGES[(photoIndex + 1) % IMAGES.length].src}
          prevSrc={IMAGES[(photoIndex + IMAGES.length - 1) % IMAGES.length].src}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + IMAGES.length - 1) % IMAGES.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % IMAGES.length)
          }
        />
      )}
      <style jsx>{`
        #gallery {
          margin: 0 auto;
          max-width: 1920px;
        }
      `}</style>
    </section>
  );
}
