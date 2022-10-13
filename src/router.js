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
            },
            {
                path:'consulta-clientes',
                component:() => import('./pages/Dashboard/ConsultaClientes.vue'),
                children:[
                    {
                        path:'facturas',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Facturas.vue')
                    },
                    {
                        path:'consumos',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Consumos.vue')
                    },
                    {
                        path:'pagos',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Pagos.vue')
                    },
                    {
                        path:'cargos',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Cargos.vue')
                    },
                    {
                        path:'financiaciones',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Financiaciones.vue')
                    },
                    {
                        path:'gestion-cartera',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/GestionCartera.vue')
                    },
                    {
                        path:'compensaciones',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Compensaciones.vue')
                    },
                    {
                        path:'ajuste-periodos',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/AjustePeriodos.vue')
                    },
                    {
                        path:'solicitudes',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Solicitudes.vue')
                    },
                    {
                        path:'imprimir',
                        component:() => import ('./pages/Dashboard/ConsultaClientes/Imprimir.vue')
                    }
                ]
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