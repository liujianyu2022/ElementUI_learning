<template>
    
    <div style="margin-top:80px">
        <el-form :model="search" inline="true">
            <el-form-item label="搜素内容">
                <el-input v-model="search.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-on:click="search">search</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="tableData">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" v-on:click="edit(scope)">edit</el-button>
                    <el-button type="danger" v-on:dele="dele(scope)">delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="visible" title="increase" width="30%">

            <el-form :model="formData" label-position="left" label-width="60px">
                <el-form-item label="name">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="age">
                    <el-input v-model="formData.age"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer">
                <el-button type="primary" v-on:click="done">确定</el-button>
                <el-button v-on:click="cancel">取消</el-button>
            </div>
        </el-dialog>

        
    </div>
</template>

<script>
    import Vue from "vue"

    export default Vue.extend({
        name:"TableApplication",
        data(){
            return {
                visible:false,
                tableData:[
                    {
                        id:1,
                        name:"aa",
                        age:18
                    },
                    {
                        id:2,
                        name:"bb",
                        age:19
                    }
                ],

                formData:{
                    name:"",
                    age:""
                },

                search:{
                    content:""
                }
            }
        },
        methods:{
            edit(scope){
                console.log("scope--", scope)
                this.visible = true
                this.formData.name = scope.row.name         //一打开dialog就能显示行的内容
                this.formData.age = scope.row.age
            },
            dele(scope){

            },

            done(){         //修改行的内容
                this.visible = false
                console.log("this.formData----", this.formData)

                let i = 0
                for(; i < this.tableData.length; i++){
                    if(this.formData.name == this.tableData[i].name){
                        break;
                    }
                }
                this.tableData.splice(i,1,this.formData)
            },

            cancel(){
                console.log("cancel--------")

                this.visible = false
            }
        }
    })
</script>