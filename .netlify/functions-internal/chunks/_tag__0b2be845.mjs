export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_da3b2cdd.mjs').then(n => n.c);

export { page };
