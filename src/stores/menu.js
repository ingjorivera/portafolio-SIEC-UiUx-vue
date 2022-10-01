import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", ()=>{
    const items= [
        {
          "id":"0",
          "titulo": "Parametrizacion Sistema",
          "icono": "fas fa-cogs",
          "subItems": [
            {
              "titulo": "Parametros del Sistema",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Ciclos Liquidacion",
                  "vinculo": ""
                },
                {
                  "titulo": "Dias Festivos",
                  "vinculo": ""
                },
                {
                  "titulo": "Clases Servicio",
                  "vinculo": ""
                },
                {
                  "titulo": "Estratos",
                  "vinculo": ""
                },
                {
                  "titulo": "Conceptos",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Dominios y Estados",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Dominios",
                  "vinculo": ""
                },
                {
                  "titulo": "Estado",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Parametros de Cartera",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Parametros de Corte",
                  "vinculo": ""
                },
                {
                  "titulo": "Parametros Recargo",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Parametros Conexión",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Departamentos",
                  "vinculo": ""
                },
                {
                  "titulo": "Municipios",
                  "vinculo": ""
                },
                {
                  "titulo": "Sectores",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Tipos",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Tipos Instalacion",
                  "vinculo": ""
                },
                {
                  "titulo": "Tipos Observacion",
                  "vinculo": ""
                },
                {
                  "titulo": "Tipos transformador",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Marcas del Sistema",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Marcas Transformadores",
                  "vinculo": ""
                },
                {
                  "titulo": "Marcas Contadores",
                  "vinculo": ""
                },
                {
                  "titulo": "Norma Contadores",
                  "vinculo": ""
                }
              ]
            }
          ]
        },
        {
          "id":"1",
          "titulo": "Parametrizacion Contable",
          "icono": "fas fa-file-invoice-dollar",
          "subItems": [
            {
              "titulo": "Cuenta Contable",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Cuentas",
                  "vinculo": ""
                },
                {
                  "titulo": "Imputaciones",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Combinaciones Contables",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Combinacion Contabilizacion",
                  "vinculo": ""
                },
                {
                  "titulo": "Combinacion Cargos",
                  "vinculo": ""
                },
                {
                  "titulo": "Distribucion de Costos",
                  "vinculo": ""
                }
              ]
            }
          ]
        },
        {
            "id":"2",
          "titulo": "Operación periodicas",
          "icono": "fas fa-calendar-check",
          "subItems": [
            {
              "titulo": "Operaciones del Mes",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Tarifas Periodo",
                  "vinculo": ""
                },
                {
                  "titulo": "parametro Periodo",
                  "vinculo": ""
                },
                {
                  "titulo": "Costos_unitarios",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Operación del Ciclo",
              "vinculo": ""
            },
            {
              "titulo": "Aplicación Subsidios Regulatorios",
              "vinculo": ""
            },
            {
              "titulo": "Generacion Facturacion Sitio",
              "vinculo": ""
            },
            {
              "titulo": "Seguimiento Sitio",
              "vinculo": ""
            },
            {
              "titulo": "Generacion Formatos Regulatorios",
              "vinculo": ""
            }
          ]
        },
        {
          "id":"3",
          "titulo": "Recaudo",
          "icono": "fas fa-hand-holding-usd",
          "subItems": [
            {
              "titulo": "Bancos",
              "vinculo": ""
            },
            {
              "titulo": "Grabacion de extractos",
              "vinculo": ""
            },
            {
              "titulo": "Generacion de Archivos",
              "vinculo": ""
            },
            {
              "titulo": "Generar movimiento de tesoreria",
              "vinculo": ""
            },
            {
              "titulo": "Manejo de Acreditados",
              "vinculo": ""
            },
            {
              "titulo": "Consulta de extractos",
              "vinculo": ""
            }
          ]
        },
        {
            "id":"4",
          "titulo": "Solicitudes",
          "icono": "fas fa-user-check",
          "subItems": [
            {
              "titulo": "Nuevas personas",
              "vinculo": ""
            },
            {
              "titulo": "Nuevas Disponibilidades",
              "vinculo": ""
            },
            {
              "titulo": "Nuevas solicitudes de conexión",
              "vinculo": ""
            },
            {
              "titulo": "Autorizacion Solicitud Conexión",
              "vinculo": ""
            },
            {
              "titulo": "Parametrizacion Cuentas especiales",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Cuentas Otros Comercializadores",
                  "vinculo": ""
                },
                {
                  "titulo": "Periodos Carga",
                  "vinculo": ""
                },
                {
                  "titulo": "Autogeneradores",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Solicitudes Clientes",
              "vinculo": ""
            },
            {
              "titulo": "Solicitudes internas",
              "vinculo": ""
            },
            {
              "titulo": "Cuentas Embebidas XXXXX",
              "vinculo": ""
            }
          ]
        },
        {
          "id":"5",
          "titulo": "Distribucion",
          "icono": "fas fa-industry",
          "subItems": [
            {
              "titulo": "Liquidacion SAIDI SAIFI",
              "vinculo": ""
            },
            {
              "titulo": "Simuladores",
              "vinculo": ""
            },
            {
              "titulo": "Codificacion IUA - IUL",
              "vinculo": ""
            },
            {
              "titulo": "Manejo Transformadores",
              "vinculo": ""
            },
            {
              "titulo": "Consignaciones SAP",
              "vinculo": ""
            }
          ]
        },
        {
            "id":"6",
          "titulo": "Convenios de AP",
          "icono": "fas fa-hands-helping",
          "subItems": [
            {
              "titulo": "Cuentas de AP y Medidores",
              "vinculo": ""
            },
            {
              "titulo": "Manejo de CALP",
              "vinculo": ""
            },
            {
              "titulo": "Parametrizacion AP",
              "vinculo": ""
            },
            {
              "titulo": "Convenios Municipio",
              "vinculo": ""
            },
            {
              "titulo": "Autorizacion de Pagos",
              "vinculo": ""
            }
          ]
        },
        {
            "id":"7",
          "titulo": "Cartera",
          "icono": "fas fa-wallet",
          "subItems": [
            {
              "titulo": "Manejo de contratos",
              "vinculo": ""
            },
            {
              "titulo": "Cortes por gestion",
              "vinculo": ""
            },
            {
              "titulo": "Cargue de archivos",
              "vinculo": ""
            },
            {
              "titulo": "Terminacion de contratos",
              "vinculo": ""
            }
          ]
        },
        {
            "id":"8",
          "titulo": "Consulta",
          "icono": "fas fa-search",
          "subItems": [
            {
              "titulo": "Consulta clientes",
              "vinculo": ""
            },
            {
              "titulo": "Consultas por contador",
              "vinculo": ""
            },
            {
              "titulo": "Consultas cuentas agrupadas",
              "vinculo": ""
            },
            {
              "titulo": "Consulta tarifas",
              "vinculo": "",
              "elementos": [
                {
                  "titulo": "Por tarifa",
                  "vinculo": ""
                },
                {
                  "titulo": "Por periodo",
                  "vinculo": ""
                }
              ]
            },
            {
              "titulo": "Consultas distribucion",
              "vinculo": ""
            },
            {
              "titulo": "Consultas por transformador",
              "vinculo": ""
            },
            {
              "titulo": "Consulta Aliados",
              "vinculo": ""
            }
          ]
        },
        {
            "id":"9",
          "titulo": "Estadisticas",
          "icono": "fas fa-chart-bar",
          "subItems": [
            {
              "titulo": "Consumo",
              "vinculo": ""
            },
            {
              "titulo": "Ventas",
              "vinculo": ""
            },
            {
              "titulo": "Usuarios",
              "vinculo": ""
            },
            {
              "titulo": "Cartera",
              "vinculo": ""
            },
            {
              "titulo": "Informacion Financiera",
              "vinculo": ""
            }
          ]
        }
      ]

    //Filtrar menu
    const filtrarMenu=(rol)=>{
        let items=[]
        let res=[]
        if(rol==='Productivo'){
            items=['1','5','7']
        }
        else if(rol==='Admin'){
        items=['0','1','2','3','4','5','6','7','8','9']
        }
        for(let j=0;j<items.length;j++){
            for(let i=0;i<menu.length;i++){
                if(menu[i].id===items[j]){
                res.push(menu[i])   
                }
            }
        }
        return res
    }
    return{
        filtrarMenu,
        items
    }
})