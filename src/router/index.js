import Vue from 'vue'
import Router from 'vue-router'
const Todo = () => import('@/views/day01/Test-todoList')
const Home = () => import('@/views/home')
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, 
        { 
            path: '/home',
            name: 'home',
            component: Home
        }, 
        { 
            path: '/todo',
            name: 'todo',
            component: Todo
        }, 
    ]
})

