<template>
  <el-footer>
    <el-row type="flex" justify="center" align="middle">
      <div>FOOTER</div>
    </el-row>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="postcss" scoped>
@import '../../theme-colors';

.el-footer {
  background-color: $black;
  color: $white;
  margin-top: 1rem;
}

.el-row {
  height: 100%;
}
</style>
