import Vue from "vue"
import 'element-ui/lib/theme-chalk/index.css';

import {
    Menu,
    Button,
    Radio,
    RadioGroup,
} from "element-ui"



const element = {
    install: function (Vue) {   
        Vue.use(Button)
        Vue.use(Menu)
        Vue.use(Radio)
        Vue.use(RadioGroup)
    }
}

export default element

// Vue.use(Button)        //注册Button组件
// Vue.use(Menu)

// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;





