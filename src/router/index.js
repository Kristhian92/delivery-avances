import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Professional from '../views/Professional.vue'
import Medical from '../views/Medical.vue'
import NewMedical from '../views/NewMedical.vue'
import Configuration from '../views/Configuration.vue'
import Patient from '../views/Patient.vue'
import Historial from '../views/Historial.vue'
import Configuracion from '../views/Configuracion.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/professional',
    name: 'Professional',
    component: Professional
  },
  {
    path: '/medical',
    name: 'Medical',
    component: Medical
  },
  {
    path: '/newmedical',
    name: 'NewMedical',
    component: NewMedical
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: Configuration
  },
  {
    path: '/patient',
    name: 'Patient',
    component: Patient
  },
  {
    path: '/historial',
    name: 'Historial',
    component: Historial
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: Configuracion
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
