import React, { lazy, Suspense } from 'react';

const LazyHeroes = lazy(() => import('./Heroes'));

const Heroes = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeroes {...props} />
  </Suspense>
);

export default Heroes;
