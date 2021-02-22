<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">parent page 1</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/' }">parent page 2</el-breadcrumb-item>
    <el-breadcrumb-item>current page</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
});
</script>
