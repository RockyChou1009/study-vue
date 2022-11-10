//引入vue
import Vue from 'vue'
//引入App组件，他是所有组件的入口
import App from './App.vue'
/* 
关于不同版本的Vue：
Vue.js与Vue.runtime.xxx.js的区别：
1.vue.js是完整版的vue  包含：核心功能+模板解析器
2.vue.runtime.xxx.js是运行版的Vue  只包含：核心功能，没有模板解析器
因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接受到的createElement函数去指定具体的内容
*/
// 创建Vue实例对象
new Vue({
    el: '#app',
    // template: `<App></App>`,
    render: h => h(App)
})