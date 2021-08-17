<template>
  
  <h1>Stats Topics:</h1>
  <h2><router-link class='stats_topics' to='/Stats_Topics/Probability'>Probability</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Combinations_Permutations'>Combinations Permutations</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Mean'>Mean</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Median'>Median</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Standard_Deviation'>Standard Deviation</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Z_Score'>Z Score</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Expected_Value'>Expected Value</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Bernoulli_Trials_Distribution'>Bernoulli Trials Distribution</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Normal_Distribution'>Normal Distribution</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Normal_Curve_Probability'>Normal Curve Probability</router-link><br>
  <router-link class='stats_topics' to='/Stats_Topics/Area_Under_Normal_Curve'>Area Under Normal Curve</router-link><br></h2>
  <br><br><router-link class='stats_topics' to='../'>Back to Homepage</router-link>
</template>

<script>
export default {

}
</script>

<style>
.stats_topics{
  color: blue;
  font-size: 26px;
  font: Times;
  text-decoration: none;
}

.stats_topics:visited{
  text-decoration: none;
}
</style>