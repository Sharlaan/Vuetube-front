<template>
  <el-autocomplete
    v-model="searchState"
    value-key="label"
    :fetch-suggestions="querySearchAsync"
    :debounce="2000"
    placeholder="Search ..."
    prefix-icon="el-icon-search"
    class="search-input"
    clearable
    @select="handleSearch"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'SearchInput',

  setup() {
    type FakeLink = {
      [K in 'label' | 'link']: string;
    };
    const fakeLinks: FakeLink[] = [
      { label: 'vue', link: 'https://github.com/vuejs/vue' },
      { label: 'element', link: 'https://github.com/ElemeFE/element' },
      { label: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { label: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { label: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { label: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { label: 'babel', link: 'https://github.com/babel/babel' },
    ];

    const links = ref<FakeLink[]>([]);
    const loadAll = () => fakeLinks;

    const createFilter = <I extends Record<string, string>>(queryString: string) => (item: I) =>
      item.label.toLowerCase().includes(queryString.toLowerCase());

    let timeout: NodeJS.Timeout;
    const querySearchAsync = (queryString: string, cb: (R: FakeLink[]) => unknown) => {
      const results: FakeLink[] = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random()); // simulate 3secs throttle
    };

    const handleSearch = (item: FakeLink) => {
      console.log(item);
    };

    onMounted(() => {
      links.value = loadAll();
    });

    return {
      searchState: ref(''),
      querySearchAsync,
      handleSearch,
    };
  },
});
</script>

<style scoped lang="postcss">
@import '../theme-colors';

.search-input {
  height: $search-height;
}
</style>
