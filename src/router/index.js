import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import Note from '../views/Note.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'notes',
    component: Notes
  },
  {
    path: '/:id',
    name: 'note-preview',
    component: Note
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
