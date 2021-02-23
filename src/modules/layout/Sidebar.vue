<template>
  <el-drawer v-model="isDrawerOpen" size="'25%'" direction="ltr" :before-close="handleDrawerClose">
    <el-menu :default-openeds="['2']">
      <el-submenu index="1">
        <template #title> <i class="el-icon-message" /> Navigator One </template>
        <el-menu-item-group>
          <template #title> Group 1 </template>
          <el-menu-item index="1-1"> Option 1 </el-menu-item>
          <el-menu-item index="1-2"> Option 2 </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3"> Option 3 </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title> Option4 </template>
          <el-menu-item index="1-4-1"> Option 4-1 </el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template #title> <i class="el-icon-menu" /> Navigator Two </template>
        <el-menu-item-group>
          <template #title> Group 1 </template>
          <el-menu-item index="2-1"> Option 1 </el-menu-item>
          <el-menu-item index="2-2"> Option 2 </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3"> Option 3 </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template #title> Option 4 </template>
          <el-menu-item index="2-4-1"> Option 4-1 </el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="3">
        <template #title> <i class="el-icon-setting" /> Navigator Three </template>
        <el-menu-item-group>
          <template #title> Group 1 </template>
          <el-menu-item index="3-1"> Option 1 </el-menu-item>
          <el-menu-item index="3-2"> Option 2 </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3"> Option 3 </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template #title> Option 4 </template>
          <el-menu-item index="3-4-1"> Option 4-1 </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Sidebar',

  setup(props, { emit }) {
    const store = useStore();

    return {
      isDrawerOpen: computed(() => store.state.layout.isDrawerOpen),
      handleDrawerClose: () => store.commit('layout/toggleDrawerOpen'),
    };
  },
});
</script>

<style scoped>
.el-drawer__body {
  overflow-y: auto;
}
</style>
