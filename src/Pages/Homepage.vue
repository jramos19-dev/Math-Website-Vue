<template>
<title>Math Index</title>
<h1 class='homepage'>Math Index</h1>
<router-link class='homepage_text' to='/algebra'>Algebra</router-link><br>
<router-link class='homepage_text' to='/trigonometry'>Trigonometry</router-link><br>
<router-link class='homepage_text' to='/calculus'>Calculus</router-link><br>
<router-link class='homepage_text' to='/stats'>Stats</router-link><br>
<router-link class='homepage_text' to='/vectors'>Vectors</router-link><br>
<router-link class='homepage_text' to='/linear_algebra'>Linear Algebra</router-link><br><br><br><br>
<router-link class='homepage_text_resource' to='https://www.desmos.com/calculator' target='_blank'>Desmos Graphing Calculator</router-link><br>
<router-link class='homepage_text_resource' to='https://www.desmos.com/scientific' target='_blank'>Desmos Scientific Calculator</router-link><br>
<router-link class='homepage_text_resource' to='https://www.wolframalpha.com/input/?i=integral' target='_blank'>Antiderivative Calculator</router-link><br>
<router-link class='homepage_text_resource' to='https://www.wolframalpha.com/input/?i=definite+integral' target='_blank'>Definite Integral Calculator</router-link><br>
<router-view/>
</template>


<style>
.homepage {
  color: red;
  font-size: 36px;
  font: Times;
}
.homepage_text {
  font: Times;
  font-size: 28px;
  text-decoration: none;
  color: black;
}

.homepage_text:visited {
  font: Times;
  text-decoration: none;
  font-size: 28px;
  color: black;
}
.homepage_text_resource{
  font: Times;
  font-size: 28px;
  text-decoration: none;
  color :green;
}
.homepage_text_resource:visited{
  font: Times;
  text-decoration: none;
  font-size: 28px;
  color: green;
}
</style>
