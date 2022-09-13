<template>
  <div>
<!-- 
    <Layout />

    <hr>
     -->
    <Container />

    <hr>

    <TableAndForm />

    <hr>

    <Dialog></Dialog>
    <hr>
    
    <TableApplication />
  </div>
</template>

<script>
import Vue from "vue";
import Layout from "./components/Layout/Layout.vue";
import Container from "./components/Container/Container.vue";
import TableAndForm from "./components/TableAndForm/TableAndForm.vue";
import Dialog from "./components/Dialog/Dialog.vue";
import TableApplication from "./components/TableApplication/TableApplication.vue"


const App = Vue.extend({
  name: "App",

  components: {
    Layout,
    Container,
    TableAndForm,
    Dialog,
    TableApplication
  },

  methods: {
    handleOpen(){
      console.log("I open ")
    },
    handleClose(){
      console.log("I close ")
    },
    handleCollapse(){
      this.isCollapse = !isCollapse
    }
  },

  data(){
    return {
      isCollapse: true
    }
  }
});
export default App;

</script>

<style scoped>

</style>
