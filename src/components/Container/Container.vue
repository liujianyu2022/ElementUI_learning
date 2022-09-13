<template>
    <div>
        <!--顶部 的 菜单导航 -->
        <el-row type="flex" align="middle">

            <el-col span="4">
                <!--左边放logo-->
                <div style="margin-left:50px">Logo</div>
            </el-col>

            <el-col span="20">
                <!--右边放菜单-->
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="gray" text-color="#fff" active-text-color="#ffd04b" >

                    <el-menu-item index="1">处理中心</el-menu-item>

                    <el-submenu index="2">
                        <!--这是有下拉框功能的-->
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="3" disabled>消息中心</el-menu-item>

                </el-menu>
            </el-col>
        </el-row>

        <br />

        <el-container style="margin-top:10px">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>

                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>

                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>

                    </el-submenu>

                    <el-menu-item index="2">        <!--只有一条时可以使用 el-menu-item -->
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>

                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
            <el-footer>footer</el-footer>
        </el-container>




    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "Container",
    data() {
        return {
            activeIndex: "1"            //activeIndex必须接收字符串
        }
    },
    methods: {
        handleSelect(first, second, third, fourth) {
            console.log(first, second, third, fourth)
        }
    }
});
</script>

<style>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>