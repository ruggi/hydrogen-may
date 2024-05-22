import React from 'react';

// Import configured class names generator functions with predetermined styles.
import {cx, cva} from './cva.config';

/**
 * Configuration for "cva" to generate a dynamic class string based on the provided flex configuration.
 */
const flex = cva({
  base: 'flex',
  variants: {
    p: {
      0: 'p-0',
      1: 'p-1',
      2: 'p-2',
      3: 'p-3',
      4: 'p-4',
      5: 'p-6',
      6: 'p-8',
      7: 'p-10',
      8: 'p-12',
      9: 'p-16',
    },
    px: {
      0: 'px-0',
      1: 'px-1',
      2: 'px-2',
      3: 'px-3',
      4: 'px-4',
      5: 'px-6',
      6: 'px-8',
      7: 'px-10',
      8: 'px-12',
      9: 'px-16',
    },
    py: {
      0: 'py-0',
      1: 'py-1',
      2: 'py-2',
      3: 'py-3',
      4: 'py-4',
      5: 'py-6',
      6: 'py-8',
      7: 'py-10',
      8: 'py-12',
      9: 'py-16',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      right: 'flex-row',
      down: 'flex-col',
      left: 'flex-row-reverse',
      up: 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-6',
      6: 'gap-8',
      7: 'gap-10',
      8: 'gap-12',
      9: 'gap-16',
    },
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    resizeX: 'hug',
    resizeY: 'hug',
  },
});

/**
 * A highly customizable Flex component designed to facilitate the easier use of CSS flexbox layout
 * with additional options to control alignment, distribution, and direction of child components.
 *
 * @component
 * @param {React.ElementType} [as='div'] - The element type to be rendered as the Flex container.
 * @param {React.ReactNode} children - Elements to be included inside the Flex container.
 * @param {string} className - Additional custom classes to enhance or modify the default styling.
 * @param {'row' | 'column'} direction - Direction which children are laid out in the Flex container.
 * @param {'start' | 'center' | 'end' | 'baseline' | 'stretch'} align - Align children vertically or horizontally (dependent on `direction`).
 * @param {'center' | 'start' | 'end' | 'between'} justify - Control the distribution of children along main axis.
 * @returns {React.ReactNode} The React component rendering the Flex container with applied styles.
 */
export const Flex = React.forwardRef(
  ({as: Component = 'div', children, className = '', ...props}, ref) => {
    const classes = cx(
      flex(props),
      props.wrap ? 'flex-wrap' : 'flex-nowrap',
      className,
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);

const grid = cva({
  base: ['grid'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-9',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    },
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    gap: 4,
    resizeX: 'hug',
    resizeY: 'hug',
  },
});

export const Grid = React.forwardRef(({children, className, ...props}, ref) => {
  const classes = cx(grid(props), className);

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

const background = cva({
  base: ['grid', 'absolute', 'z-0', 'inset-0', 'pointer-events-none'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

export const Background = React.forwardRef(
  ({children, className, ...props}, ref) => {
    const classes = cx(background(props), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

const container = cva({
  base: [
    'mx-auto',
    'px-4',
    'md:px-8',
    'lg:px-10',
    'w-full',
    'relative',
    'z-10',
  ],
  variants: {
    resizeX: {
      hug: 'w-auto',
      fill: 'w-full',
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: 'h-full',
      fixed: '',
    },
  },
  defaultVariants: {
    resizeX: 'hug',
    resizeY: 'hug',
  },
});

export const Container = React.forwardRef(
  ({as: Component = 'div', children, className, ...props}, ref) => {
    const classes = cx(
      container(props),
      props.fluid ? 'max-w-none' : 'max-w-7xl',
      className,
    );
    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);

const section = cva({
  base: ['w-full', 'relative', 'min-h-8'],
  variants: {},
});

export const Section = React.forwardRef(
  ({as: Component = 'section', padded, children, className, ...props}, ref) => {
    const classes = cx(section(props), padded && 'py-8', className);

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);