<template>
  <header>
    <el-page-header content="Page header" @back="goBack" />
    <Breadcrumb />
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import Breadcrumb from './Breadcrumb.vue';

/**
 * If path of the page is simple, it is recommended
 * to use PageHeader instead of the Breadcrumb.
 */
export default defineComponent({
  name: 'PageHeader',

  components: { Breadcrumb },

  setup() {
    const goBack = () => console.log('go back');

    return { goBack };
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
}
</style>
