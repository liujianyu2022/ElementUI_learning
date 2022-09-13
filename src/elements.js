import Vue from "vue"
import 'element-ui/lib/theme-chalk/index.css';

import {
    Menu,
    Button,
    Radio,
    RadioGroup,
    RadioButton,
    Submenu,
    MenuItem, 
    Loading,
    MessageBox,
    Notification,
    Message,
    InputNumber,
    Row,
    Col,
    Container,
    Header,
    Aside,
    Main,
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    DatePicker,
    TimePicker,
    Switch,
    CheckboxGroup,
    Checkbox,
    Dialog,
    Footer
} from "element-ui"



const element = {
    install: function (Vue) {   
        Vue.use(Button)
        Vue.use(Menu)
        Vue.use(Radio)
        Vue.use(RadioGroup)
        Vue.use(RadioButton)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(InputNumber)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(DatePicker)
        Vue.use(TimePicker)
        Vue.use(Switch)
        Vue.use(CheckboxGroup)
        Vue.use(Checkbox)
        Vue.use(Dialog)
        Vue.use(Message)
        Vue.use(Footer)
    }
}

export default element



// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;





