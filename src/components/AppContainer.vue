<template>
    <el-container>
        <el-aside>
            <AsideMenu :route-map="routeMap"/>
        </el-aside>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from '@/components/Header'
    import AsideMenu from "@/components/AsideMenu"
    import routeMap from "@/router/routeMap"

    export default {
        name: "AppContainer",
        components: {
            Header,
            AsideMenu
        },
        data: () => {
            return {
                routeMap,
            }
        }
    }
</script>

<style scoped>
    .el-aside {
        width: auto !important;
    }
</style>
