import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
export const Button: React.FunctionComponent<HTMLMotionProps<'button'>> = (
  props
) => {
  return <motion.button style={{}} {...props} />;
};
