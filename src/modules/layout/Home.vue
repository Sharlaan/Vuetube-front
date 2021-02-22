<template>
  <el-container direction="vertical">
    <Header />

    <el-container>
      <Sidebar />

      <el-container direction="vertical">
        <PageHeader />

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-main>

        <Footer />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import PageHeader from './PageHeader.vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
  name: 'Home',
  components: { PageHeader, Footer, Header, Sidebar },
  setup() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    };

    return {
      tableData: Array(5).fill(item),
    };
  },
});
</script>

<style scoped>
.el-main {
  padding: 0 1rem;
}
</style>
