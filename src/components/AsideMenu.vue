<template>
    <el-menu
            class="el-menu-vertical-demo"
            :router="true"
            :collapse="collapse"
            unique-opened
    >
        <template v-for="(item,index) in routeMap">
            <template v-if="item.children && item.children.length > 0">
                <el-submenu :index="item.path" :key="index">
                    <template slot="title">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <template v-for="(subItem,subIndex) in item.children">
                        <el-menu-item :index="item.path + '/' + subItem.path" :key="index + '-' +subIndex">
                            <i v-if="subItem.icon" :class="subItem.icon"></i>
                            <span>{{subItem.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.path" :key="index">
                    <i v-if="item.icon" :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </template>
        </template>
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
    export default {
        name: "AsideMenu",
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
