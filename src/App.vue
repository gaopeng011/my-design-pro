<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>| -->
      <router-link to="/home">Go to home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/bar">bar</router-link>|
      <router-link to="/user">user</router-link>|
    </div>
    <router-view></router-view>
    <!-- <router-view /> -->
  </div>
</template>

<style lang="less"></style>
