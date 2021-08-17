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
import Angles from '../Pages/Trigonometry_Topics/Angles'
import Pythagorean_Theorem from '../Pages/Trigonometry_Topics/Pythagorean_Theorem'
import Trigonometric_Functions from '../Pages/Trigonometry_Topics/Trigonometric_Functions'
import Inverse_Trigonometric_Functions from '../Pages/Trigonometry_Topics/Inverse_Trigonometric_Functions'
import Trigonometric_Identities from '../Pages/Trigonometry_Topics/Trigonometric_Identities'
import Law_of_Cosines from '../Pages/Trigonometry_Topics/Law_of_Cosines'
import Law_of_Sines from '../Pages/Trigonometry_Topics/Law_of_Sines'
import Degrees_Minutes_Seconds from '../Pages/Trigonometry_Topics/Degrees_Minutes_Seconds'
import Rectangular_to_Polar_Coordinates from '../Pages/Trigonometry_Topics/Rectangular_to_Polar_Coordinates'
import Polar_Coordinates_to_Rectangular from '../Pages/Trigonometry_Topics/Polar_Coordinates_to_Rectangular'
import Cis_form from '../Pages/Trigonometry_Topics/Cis_form'
import De_Moivres_Theorem from '../Pages/Trigonometry_Topics/De_Moivres_Theorem'
import Adding_Vectors from '../Pages/Trigonometry_Topics/Adding_Vectors'
import Dot_Product from '../Pages/Trigonometry_Topics/Dot_Product'
import Conic_Sections from '../Pages/Trigonometry_Topics/Conic_Sections'
import Probability from '../Pages/Stats_Topics/Probability'
import Combinations_Permutations from '../Pages/Stats_Topics/Combinations_Permutations'
import Mean from '../Pages/Stats_Topics/Mean'
import Median from '../Pages/Stats_Topics/Median'
import Standard_Deviation from '../Pages/Stats_Topics/Standard_Deviation'
import Z_Score from '../Pages/Stats_Topics/Z_Score'
import Expected_Value from '../Pages/Stats_Topics/Expected_Value'
import Bernoulli_Trials_Distribution from '../Pages/Stats_Topics/Bernoulli_Trials_Distribution'
import Normal_Distribution from '../Pages/Stats_Topics/Normal_Distribution'
import Normal_Curve_Probability from '../Pages/Stats_Topics/Normal_Curve_Probability'
import Area_Under_Normal_Curve from '../Pages/Stats_Topics/Area_Under_Normal_Curve'

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
  path: '/Trigonometry_Topics/Angles',
  name: 'Angles',
  component: Angles
  },
  {
  path: '/Trigonometry_Topics/Pythagorean_Theorem',
  name: 'Pythagorean_Theorem',
  component: Pythagorean_Theorem
  },
  {
  path: '/Trigonometry_Topics/Trigonometric_Functions',
  name: 'Trigonometric_Functions',
  component: Trigonometric_Functions
  },
  {
  path: '/Trigonometry_Topics/Inverse_Trigonometric_Functions',
  name: 'Inverse_Trigonometric_Functions',
  component: Inverse_Trigonometric_Functions
  },
  {
  path: '/Trigonometry_Topics/Trigonometric_Identities',
  name: 'Trigonometric_Identities',
  component: Trigonometric_Identities
  },
  {
  path: '/Trigonometry_Topics/Law_of_Cosines',
  name: 'Law_of_Cosines',
  component: Law_of_Cosines
  },
  {
  path: '/Trigonometry_Topics/Law_of_Sines',
  name: 'Law_of_Sines',
  component: Law_of_Sines
  },
  {
  path: '/Trigonometry_Topics/Degrees_Minutes_Seconds',
  name: 'Degrees_Minutes_Seconds',
  component: Degrees_Minutes_Seconds
  },
  {
  path: '/Trigonometry_Topics/Rectangular_to_Polar_Coordinates',
  name: 'Rectangular_to_Polar_Coordinates',
  component: Rectangular_to_Polar_Coordinates
  },
  {
  path: '/Trigonometry_Topics/Polar_Coordinates_to_Rectangular',
  name: 'Polar_Coordinates_to_Rectangular',
  component: Polar_Coordinates_to_Rectangular
  },
  {
  path: '/Trigonometry_Topics/Cis_form',
  name: 'Cis_form',
  component: Cis_form
  },
  {
  path: '/Trigonometry_Topics/De_Moivres_Theorem',
  name: 'De_Moivres_Theorem',
  component: De_Moivres_Theorem
  },
  {
  path: '/Trigonometry_Topics/Adding_Vectors',
  name: 'Adding_Vectors',
  component: Adding_Vectors
  },
  {
  path: '/Trigonometry_Topics/Dot_Product',
  name: 'Dot_Product',
  component: Dot_Product
  },
  {
  path: '/Trigonometry_Topics/Conic_Sections',
  name: 'Conic_Sections',
  component: Conic_Sections
  },
  {
  path: '/Stats_Topics/Probability',
  name: 'Probability',
  component: Probability
  },
  {
  path: '/Stats_Topics/Combinations_Permutations',
  name: 'Combinations_Permutations',
  component: Combinations_Permutations
  },
  {
  path: '/Stats_Topics/Mean',
  name: 'Mean',
  component: Mean
  },
  {
  path: '/Stats_Topics/Median',
  name: 'Median',
  component: Median
  },
  {
  path: '/Stats_Topics/Standard_Deviation',
  name: 'Standard_Deviation',
  component: Standard_Deviation
  },
  {
  path: '/Stats_Topics/Z_Score',
  name: 'Z_Score',
  component: Z_Score
  },
  {
  path: '/Stats_Topics/Expected_Value',
  name: 'Expected_Value',
  component: Expected_Value
  },
  {
  path: '/Stats_Topics/Bernoulli_Trials_Distribution',
  name: 'Bernoulli_Trials_Distribution',
  component: Bernoulli_Trials_Distribution
  },
  {
  path: '/Stats_Topics/Normal_Distribution',
  name: 'Normal_Distribution',
  component: Normal_Distribution
  },
  {
  path: '/Stats_Topics/Normal_Curve_Probability',
  name: 'Normal_Curve_Probability',
  component: Normal_Curve_Probability
  },
  {
  path: '/Stats_Topics/Area_Under_Normal_Curve',
  name: 'Area_Under_Normal_Curve',
  component: Area_Under_Normal_Curve
  },    
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
