import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Create = () => import('components/post/Create')
const Home = () => import('views/Home')
const Edit = () => import('components/post/Edit')
const Post = () => import('components/post/Post')
const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
