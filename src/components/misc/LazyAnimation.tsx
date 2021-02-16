import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  cssProp: string;
  initial: any;
  final: any;
};

const LazyAnimation = ({ children, cssProp, initial, final }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <motion.div
      animate={{ [cssProp]: inView ? final : initial }}
      initial={{ [cssProp]: initial }}
      transition={{ delay: 0.3 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default LazyAnimation;
