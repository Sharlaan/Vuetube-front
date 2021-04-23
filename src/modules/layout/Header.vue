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
        <SearchInput />
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
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../../components/SearchInput.vue';

export default defineComponent({
  name: 'Header',

  components: { SearchInput },

  setup() {
    const store = useStore();
    const user = store.state.auth.user;

    return {
      // isAuthenticated: true,
      isAuthenticated: !!user,
      username: user?.nickName,
      avatar: user?.avatarUrl,
      isDrawerOpen: computed(() => store.state.layout.isDrawerOpen),
      toggleDrawer: () => store.commit('layout/toggleDrawerOpen'),
    };
  },
});
</script>

<style lang="postcss" scoped>
@import '../../styles/colors';

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
