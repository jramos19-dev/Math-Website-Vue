<template>
    <router-link class='navbar' to='/' >Home</router-link> |
    <router-link class='navbar' to='/algebra'> Algebra</router-link> |
    <router-link class='navbar' to='/trigonometry'>Trigonometry</router-link> |
    <router-link class='navbar' to='/calculus'>Calculus</router-link> |
    <router-link class='navbar' to='/stats'>Stats</router-link> |
    <router-link class='navbar' to='/vectors'>Vectors</router-link> |
    <router-link class='navbar' to='/linear_algebra'>Linear Algebra</router-link> |
<router-view/>
</template>

<style scoped>
.navbar{
    color: blue;
    font: Times;
    font-size: 26px;
    text-decoration: none;
}
.navbar:visited{
    color: blue;
    text-decoration: none;
    }
</style>



