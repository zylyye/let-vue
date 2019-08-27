<template>
    <el-submenu v-if="menuItem.children && menuItem.children.length > 0" :index="`${parentPath}{menuItem.path}`">
        <slot slot="title">
            <el-icon :class="menuItem.icon"/>
            <span>{{ menuItem.name }}</span>
        </slot>
        <LetMenuItem v-for="(item, index) in menuItem.children" :menu-item="item" :key="`${parentPath}-${index}`" :parent-path="`${parentPath}${menuItem.path}/`"/>
    </el-submenu>
    <el-menu-item v-else :index="`${parentPath}${menuItem.path}`">
        <el-icon :class="menuItem.icon"/>
        <span>{{ menuItem.name }}</span>
    </el-menu-item>
</template>

<script>
    export default {
        name: "LetMenuItem",
        props: {
            parentPath: {
                type: String,
                default: '',
            },
            menuItem: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>
