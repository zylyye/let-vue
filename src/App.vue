<template>
  <el-container>
    <el-header>
      <Nav/>
    </el-header>
    <el-container>
      <el-aside>
        <Aside :route-map="routeMap"/>
      </el-aside>
      <el-main>
<!--        <el-card>-->
          <router-view/>
<!--        </el-card>-->
      </el-main>
    </el-container>

<!--    <el-footer>footer</el-footer>-->
  </el-container>
</template>
<script>
  import Nav from '@/components/Nav.vue'
  import Aside from '@/components/Aside.vue'
  import routeMap from "@/router/routeMap"

  export default {
    name: 'app',
    components: {
      Nav,
      Aside
    },
      data() {
        return {
            routeMap,
        }
      }
  }
</script>

<style scoped>
</style>
