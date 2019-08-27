<template>
    <el-menu class="menu" mode="horizontal">
        <el-dropdown id="avatar">
            <div class="user-photo">
                <el-avatar size="small" :src="src">
                    <i class="el-icon-user"></i>
                </el-avatar>
                <el-divider direction="vertical"/>
                <span>{{username}}</span>
            </div>


            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>系统设置</el-dropdown-item>
                <el-dropdown-item>
                    <router-link to="/login">退出登录</router-link>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            src: {
                type: String,
                // default: 'http://zylyye.cn/assets/images/avatar.png'
            },
            username: {
                type: String,
                default: '左边路口'
            }
        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss">

    .menu {
        padding: 10px;
        #avatar {
            float: right;
            margin-right: 20px;
        }
        .user-photo {
            display: flex;
            align-content: space-around;
            align-items: center;

            span {
                font-weight: bold;
            }
        }
    }
</style>
