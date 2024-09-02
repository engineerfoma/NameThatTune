/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

// import { Vue } from 'vue'
// import VueRouter from 'vue-router'
// //Подключим наши страницы
// import Main from '../pages/index'
// import Tune from '../pages/tune'
// import TuneGame from '../pages/tune-game'
// import Quiz from '../pages/quiz'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Main,
//     //Так, как синий шаблон у нас является дефолтным, его можно не указывать в мета-данных
//   },
//   {
//     path: '/tune',
//     name: 'Tune',
//     component: Tune,
//   },
//   {
//     path: '/tune-game',
//     name: 'TuneGame',
//     component: TuneGame,
//     meta: {
//       layout: 'game-layout',
//     },
//   },
//   {
//     path: '/quiz',
//     name: 'Quiz',
//     component: Quiz,
//     meta: {
//       layout: 'game-layout',
//     },
//     //И снова ничего не указываем, чтобы задействовать дефолтный шаблон
//   },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

// export default router