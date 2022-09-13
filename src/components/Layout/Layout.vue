<template>
    <div>
        <el-row>
            <el-col :span="24">  <!--一行row最多分为24个栅格，一个栅格大小就是:span 宽度-->
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

        <el-row :gutter="10">   <!--:gutter指定每列之间的间隔  单位是像素 -->
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <el-row >
            <el-col :span="16" offset="2">   <!-- offset 指定偏移的栅格数-->
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center" :gutter="6">   <!-- flex布局 justify("start,end,center,space-around,space-between") 和 align("top,middle,bottom")-->
            <el-col span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Vue from "vue"
export default Vue.extend({
    name: "Layout",
    data() {
        return {

        }
    }
})
</script>

<style >
.el-row {
    margin-bottom: 20px;

}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: darkred;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>