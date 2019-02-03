import VueRouter from 'vue-router';

import { defaultSpace, spaces } from './config/spaces';
import { getId } from './helpers/get-id';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        next(defaultSpace.name);
      },
    },
    {
      path: '/:spaceName',
      beforeEnter: (to, from, next) => {
        if (spaces.has(to.params.spaceName)) {
          next(`/${to.params.spaceName}/${getId()}`);
        } else {
          next('/');
        }
      },
    },
    {
      path: '/:spaceName/:entryId',
    },
  ],
});
