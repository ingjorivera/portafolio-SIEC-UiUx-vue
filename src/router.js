import { createRouter, createWebHistory } from "vue-router";
import  Dashboard  from './layouts/Dashboard.vue'
import  Login  from './layouts/Login.vue'


const routes=[
    {
        path:"/",
        name:'Login',
        component:Login,
        children:[
            {
                path:'formulario',
                component:()=> import('./pages/Login/Formulario.vue')
            },
            {
                path:'loader',
                component:()=> import('./pages/Login/Loader.vue')
            }
        ]
    },
    {
        path:'/dashboard',
        name:'SIEC 4.0',
        component:Dashboard,
        children:[
            {
                path:'conexion-usuario',
                component:() => import('./components/ConexionUsuario.vue')
            },
            {
                path:'principal',
                component:() => import('./pages/Dashboard/Principal.vue')
            }
        ]
    }
]

const history= createWebHistory()
const router=createRouter({
    history,
    routes
})

export default router