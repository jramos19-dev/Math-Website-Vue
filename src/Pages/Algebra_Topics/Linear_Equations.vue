<template>
  
    <div class="container">
      <h1>Linear Equations</h1>
      <h2>What are Linear Equations?</h2>
      <div class="description">
        <p>
          Equations are Mathematical Statements that contain an '=' sign. Linear Equations are equations that describe a line.<br>
          Linear equations can have either 1 or 2 variables. A variable is a value that is represented by a letter and its called a variable because it can vary in value.<br>
          In an equation there can be two types of variables: <span>independent variables</span> and <span>Dependent variables</span> 
          Linear equations are distinguised because theyre variables can only have an exponent of  1. 
        </p>
        <h4>Dependent Variables </h4>
        <p>Dependent variable are values that depend on another variable. In linear equations they are usually denoted as the Y variable.</p>
        <p>if using <b>function</b> notation then the <b>Dependent Variable</b> is denoted as <b>f(x)</b>  </p>
        <h2>
          Standard Form
        </h2>
        <p>
          An equation can be written in different ways called forms,so there could be different equations that represent the same line. <br>
          The standard form for linear equations of 1 variable are in the form <span>ax+b=0</span> <br>

          A linear equation with 2 variables has a standard form of <span>ax+by+c=0</span>
        </p>
      <h2>Slope Intercept Form </h2>
       <p>
         Another one of the forms used in Algebra is the point slope form.<br> 
         This form gives us 2 important bits of information. First of all it gives us the value of the slope,
         and secondly it gives us the value of the Y intercept. <br>
       </p>
       <h3>whats the slope ? </h3>
       <p>The best way to define the slope is to think about it as the ratio <b>rise</b>/<b>run</b></p>
       <p>The slope is the type of slant that the line has , we can calculate the value by taking a 2 points in the graph of the line and </p>
        <p>comparing the y value of each point and the x value of each point.  </p>


      </div>
    </div>
      
     



    
</template>
<script>
import { ref } from '@vue/reactivity'
import algebra from 'algebra.js'
export default {
components:  {},
setup(){



}
 
}
</script>

<style>
.pdf_link{
  color: blue;
  font-size: 26px;
  font: Times;
  text-decoration: none;
}
.pdf_link{
  text-decoration: none;
}
.container {
  background-color: rgb(219, 211, 211);
  max-width:  680px;
  margin: 0 auto;
}

span{
 font-size:20px;
 font-weight: bold;
}
h3{ color: rgb(28, 118, 202);}

h4{color: rgb(28, 118, 202);}

input{ 
  margin-left: auto;
  max-width: 600px;
  width: 180px;
  height: 30px;
  align-items: center;
  }
</style>