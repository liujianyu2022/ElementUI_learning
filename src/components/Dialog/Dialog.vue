<template>
    <div>
        <el-button type="primary" v-on:click="dialogFormVisible = true" style="margin-top:80px">新增dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" >
            
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <div slot="title" class="dialog-footer">
                <!-- slot 是插槽。因为这是外部的div，因此使用插槽把下面两个el-button插进了el-dialog组件内部，这里放在了title部位-->
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
                <el-button type="danger" @click="del">delete</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "Dialog",
    data() {
        return {
            dialogFormVisible: false, //dialog不是一开始就出现的，而是点击新增按钮后出现的

            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: "",
            },

            formLabelWidth: "120px",
        };
    },

    methods: {
        save() {
            this.dialogFormVisible = false; //  发送数据到后台服务器，并且关闭提示框
        },

        del() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {   //这就需要在按需引入上写入 Vue.prototype.$confirm = MessageBox.confirm
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'         //展示前面的小图标
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!',
                    showClose: true,         //只能手动关闭
                    onClose:function(){         //手动关闭的时候执行的回调函数

                    },
                    duration: 5000
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
})
</script>