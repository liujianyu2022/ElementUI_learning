<template>
    <div>
        
        <el-table :data="tableData" style="width: 100%; margin-top: 50px;">
            <el-table-column prop="date" label="日期" width="180" />
            
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            
            <el-table-column prop="address" label="地址"></el-table-column>
            

            <el-table-column label="操作">
                <tempalte slot-scope="scope">  <!--这个scope就包含了row，column等信息-->
                    <el-button type="primary" v-on:click="edit(scope)">edit</el-button> 
                    <el-button type="danger" v-on:clcik="del">delete</el-button>
                </tempalte>                
            </el-table-column>
        </el-table>



        <el-form :inline="true" :model="formInline" class="demo-form-inline">    <!--inline 变成的是行内表单，水平排列的-->
           
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>

            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <hr />


        <el-form ref="FORM" :model="form" label-width="80px" :rules="rules" style="margin-top:40px">
            <el-form-item label="活动名称" prop="name1">  <!-- prop属性 用来确定匹配的时候是哪条规则-->
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="活动区域" prop="area">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;" value-format="yyyy-MM-dd" >  <!--如果不加value-format属性，那么返回的是一个Date对象-->
                    </el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;" value-format="HH:mm:ss"></el-time-picker>
                </el-col>
            </el-form-item>

            <el-form-item label="即时配送">  <!--开关-->
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="活动性质" prop="characteristic">
                <el-checkbox-group v-model="form.type">    <!-- 多选框组， 需要收到数组，否则选其中一个就会都选上了 -->
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">   <!-- 单选框 -->    
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="活动形式" prop="introduction">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('FORM')">立即创建</el-button>  <!--为了实现点击提交表单的时候进行表单验证-->
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Vue from "vue"
export default Vue.extend({

    name: "TableAndForm",

    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎4',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

            formInline: {
                user: '',
                region: ''
            },

            form: {
                name: '',
                region: '',         //保存的是el-option中value的值
                date1: '',          //如果添加了value-format属性，就会返回相对应格式的字符串 value-format="yyyy-MM-dd" "HH:mm:ss"
                date2: '',
                delivery: false,
                type: [],           //这个数组接收到的内容就是 el-check-box 中 label 的值
                resource: '',       //保存的是 el-radio 中label的值
                desc: ''
            },

            rules:{
                name1:[
                    {required: true, message:"输入活动内容", trigger:"blur"},
                    {}
                ],
                area:[
                    {required: true, message:"select area", trigger:"change"}
                ],
                introduction:[
                    {required:true, message:"input something", trigger:"blur"}
                ],
                characteristic:[
                    {type:"array", required:true, message:"select one option at laest"}
                ]
            },
        }
    },
    methods:{
        onSubmit(FORM){         //传入的是form表单的对象
            let _this = this
            this.$refs.FORM.validate((valid)=>{
                console.log(this == _this)       //这边的this指向的是组件实例对象
                if(valid){
                    console.log("validate sucessfully")
                    //把数据提交给后台
                } else {
                    console.log("validate failly")
                    return false    //阻止默认行为    
                }  
            })
        },
        edit(scope){
            console.log("scope-----", scope)
        }
    }
})
</script>