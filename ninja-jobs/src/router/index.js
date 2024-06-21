import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Job from '../views/jobs/JobView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Job
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
