<template>
    <el-menu
            class="el-menu-vertical-demo"
            :router="true"
            :collapse="collapse"
            unique-opened
    >
        <LetMenuItem v-for="(item, index) in routeMap" :key="index" :menu-item="item" parent-path="/" />
        <el-menu-item @click="collapse = !collapse">
            <template v-if="collapse">
                <i class="el-icon-arrow-right"></i>
                <span>展开</span>
            </template>
            <template v-else>
                <i class="el-icon-arrow-left"></i>
                <span>收起</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import LetMenuItem from "@/components/LetMenuItem"

    export default {
        name: "AsideMenu",
        components: {
          LetMenuItem,
        },
        props: {
            routeMap: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                collapse: false,
                defaultActive: '',
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .el-menu-vertical-demo {
        min-height: 800px;
        &:not(.el-menu--collapse) {
            width: 200px;
        }
    }

</style>
