<template>
  <el-header>
    <el-row>
      <el-row>
        <el-button icon="el-icon-s-fold" circle plain class="menu" @click="toggleDrawer()" />
        <div>
          <h1>Vuetube</h1>
          <p>Youtube clone</p>
        </div>
      </el-row>

      <el-row class="search">
        <el-autocomplete
          v-model="searchState"
          value-key="label"
          :fetch-suggestions="querySearchAsync"
          :debounce="2000"
          placeholder="Search ..."
          prefix-icon="el-icon-search"
          clearable
          @select="handleSearch"
        />
      </el-row>

      <el-row>
        <el-button v-if="!isAuthenticated" plain round class="login"> login </el-button>
        <el-dropdown v-else>
          <el-avatar icon="el-icon-user-solid">
            <img :src="avatar" />
          </el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-user-solid">Profile</el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-tools">Settings</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button" divided>Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-row>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Header',
  setup(props, { emit }) {
    const store = useStore();
    const user = store.state.auth.user;

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
      // isAuthenticated: true,
      isAuthenticated: !!user,
      username: user?.nickName,
      avatar: user?.avatarUrl,
      searchState: ref(''),
      querySearchAsync,
      handleSearch,
      isDrawerOpen: computed(() => store.state.layout.isDrawerOpen),
      toggleDrawer: () => store.commit('layout/toggleDrawerOpen'),
    };
  },
});
</script>

<style lang="postcss" scoped>
@import '../../theme-colors';

.el-header {
  background-color: $gray-lighter;
}

.menu {
  margin-right: 1rem;
}

.search {
  flex: 1;
  justify-content: center;
}

.login {
  text-transform: uppercase;
}
</style>
