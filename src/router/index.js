import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../Pages/Homepage'
import Algebra from '../Pages/Algebra'
import Trigonometry from '../Pages/Trigonometry'
import Calculus from '../Pages/Calculus'
import Stats from '../Pages/Stats'
import Vectors from '../Pages/Vectors'
import Linear_Algebra from '../Pages/Linear_Algebra'
import Linear_Equations from '../Pages/Algebra_Topics/Linear_Equations'
import Non_Linear_Equations from '../Pages/Algebra_Topics/Non_Linear_Equations'
import Graphing_Functions from '../Pages/Algebra_Topics/Graphing_Functions'
import Asymptotes from '../Pages/Algebra_Topics/Asymptotes'
import Inequalities from '../Pages/Algebra_Topics/Inequalities'
import Factoring from '../Pages/Algebra_Topics/Factoring'
import Completing_The_Square from '../Pages/Algebra_Topics/Completing_The_Square'
import Quadratic_Equations from '../Pages/Algebra_Topics/Quadratic_Equations'
import Quadratic_Solutions_Determinant from '../Pages/Algebra_Topics/Quadratic_Solutions_Determinant'
import Radicals from '../Pages/Algebra_Topics/Radicals'
import Logarithms from '../Pages/Algebra_Topics/Logarithms'
import Function_Transformations from '../Pages/Algebra_Topics/Function_Transformations'
import Pythagorean_Theorem from '../Pages/Algebra_Topics/Pythagorean_Theorem'


const routes = [
  {
  path: '/',
  name: 'Homepage',
  component: Homepage
  },
  {
    path: '/algebra',
    name: 'Algebra',
    component: Algebra
  },
  {
    path: '/trigonometry',
    name: 'Trigonometry',
    component: Trigonometry
  },
  {
    path: '/calculus',
    name: 'Calculus',
    component: Calculus
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/vectors',
    name: 'Vectors',
    component: Vectors
  },
  {
    path: '/linear_algebra',
    name: 'Linear_Algebra',
    component: Linear_Algebra,
  },
  {
    path: '/Algebra_Topics/Linear_Equations',
    name: 'Linear_Equations',
    component: Linear_Equations
  },
  {
    path: '/Algebra_Topics/Non_Linear_Equations',
    name: 'Non_Linear_Equations',
    component: Non_Linear_Equations
  },
  {
    path: '/Algebra_Topics/Graphing_Functions',
    name: 'Graphing_Functions',
    component: Graphing_Functions
  },
  {
    path: '/Algebra_Topics/Asymptotes',
    name: 'Asymptotes',
    component: Asymptotes
  },
  {
    path: '/Algebra_Topics/Inequalities',
    name: 'Inequalities',
    component: Inequalities
  },
  {
    path: '/Algebra_Topics/Factoring',
    name: 'Factoring',
    component: Factoring
  },
  {
    path: '/Algebra_Topics/Completing_The_Square',
    name: 'Completing_The_Square',
    component: Completing_The_Square
  },
  {
    path: '/Algebra_Topics/Quadratic_Equations',
    name: 'Quadratic_Equations',
    component: Quadratic_Equations
  },
  {
    path: '/Algebra_Topics/Quadratic_Solutions_Determinant',
    name: 'Quadratic_Solutions_Determinant',
    component: Quadratic_Solutions_Determinant
  },
  {
    path: '/Algebra_Topics/Radicals',
    name: 'Radicals',
    component: Radicals
  },
  {
    path: '/Algebra_Topics/Logarithms',
    name: 'Logarithms',
    component: Logarithms
  },
  {
    path: '/Algebra_Topics/Function_Transformations',
    name: 'Function_Transformations',
    component: Function_Transformations
  },
  {
    path: '/Algebra_Topics/Pythagorean_Theorem',
    name: 'Pythagorean_Theorem',
    component: Pythagorean_Theorem
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
