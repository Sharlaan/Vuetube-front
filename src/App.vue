<template>
  <!-- named routers: front-office / back-office -->

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="postcss">
@import './theme-colors';

$search-height: 40px;

/* GLOBAL STYLES */

body {
  margin: 0;
  min-height: 100vh;
  color: $main;
  background-color: $white;
  font-family: system-ui, -apple-system, 'Segoe UI', Raleway, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app-root {
  height: 100vh;
  display: flex;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

.el-row {
  height: 100%;
  align-items: center;
}

.search .el-input__inner {
  height: $search-height;
  border-radius: calc($search-height / 2);
}

.el-page-header__content {
  text-align: center;
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
