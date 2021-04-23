<template>
  <section class="login">
    <el-alert
      v-if="error"
      :title="error.title"
      type="warning"
      :description="error.message"
      show-icon
    />

    <el-form
      ref="login-form"
      class="login-form"
      :class="{ shaking: error }"
      auto-complete="off"
      :model="model"
      :rules="rules"
      label-position="top"
    >
      <h2 class="heading">Sign-in</h2>

      <el-form-item label="Login" prop="email">
        <el-input v-model="model.email" type="text" placeholder="Please enter email" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="model.password" type="password" placeholder="Please enter password" />
      </el-form-item>

      <el-button type="primary" :loading="isLoading" @click="onSubmit">
        {{ isLoading ? 'Loading...' : 'Login' }}
      </el-button>
    </el-form>

    <footer class="login-footer">← Back to <a href="/">WEDN.NET</a></footer>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { AuthState } from './auth.store';

export default defineComponent({
  name: 'SignIn',

  setup() {
    // form model
    // TODO: remove default values
    const model = {
      email: 'zce',
      password: 'wanglei',
    };

    // form validate rules
    const rules = {
      email: [
        { required: true, message: 'Username is required' },
        { min: 2, max: 16, message: 'Username must be between 2 and 16 characters' },
      ],
      password: [
        { required: true, message: 'Password is required' },
        { min: 4, max: 16, message: 'Password must be between 4 and 16 characters' },
      ],
    };

    const store = useStore();
    const authStore = useStore<AuthState>();

    const isLoading = computed(() => store.state.isLoading);
    const error = computed(() => authStore.state.error);

    console.log({
      model,
      rules,
      isLoading,
      error,
    });

    const onSubmit = (event: FormData) => {
      console.log({ event });
      authStore.dispatch('signIn', model);
    };

    return {
      model,
      rules,
      isLoading,
      error,
      onSubmit,
    };
  },

  // data: () => ({
  //   email: '',
  //   password: '',
  //   loading: false,
  // }),

  // methods: {
  //   async signin() {
  //     if (this.loading) return;
  //     this.loading = true;

  //     const data = await this.$store
  //       .dispatch('signIn', { email: this.email, password: this.password })
  //       .catch((err) => {
  //         this.loading = false;
  //         console.log(err);
  //         this.$refs.form.setErrors({
  //           Email: ["We don't reconize, this email"],
  //           Password: ["We don't reconize, this password"],
  //         });
  //       });

  //     if (!data) return;
  //     const user = await this.$store
  //       .dispatch('getCurrentUser', data.token)
  //       .catch((err) => console.log(err));

  //     if (!user) return;

  //     this.loading = false;
  //     this.$router.push({ name: 'Home' });
  //   },
  // },
});
</script>

<style lang="postcss">
@import '../../styles/colors';

.login {
  flex: 1;
  font-size: 0.875rem;
  overflow: auto;
  border: 1px solid red;

  &-form {
    @include inner;

    margin-bottom: 2.5rem;
    padding: 1.875rem 1.25rem;
    background: $login-form-background;
    color: $login-form-color;

    .heading {
      margin: 0 0 1rem;
      font-weight: 400;
      font-size: 1.5rem;
    }

    .el-button {
      margin-top: 0.5rem;
      width: 100%;
    }

    &.shaking {
      animation: shakeX 1s;
    }
  }

  &-footer {
    @include inner;
    margin-bottom: 1rem;
    padding: 0.625rem;
    border: 0.0625rem solid $brand-color;
    font-size: 0.75rem;
    text-align: center;

    a {
      color: $brand-color;
    }
  }
}

@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-0.5rem, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0.5rem, 0, 0);
  }
}
</style>
