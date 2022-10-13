import { defineStore } from "pinia";


export const useConsultaCliente = defineStore("consulta_cliente", ()=>{
    const info=[
        {
            label:'Sec. impresion',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                   
                    valor:''
                },
            ]
        },
        {
            label:'No. Factura',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
            ]
        },
        {
            label:'Telefono',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
            ]
        },
        {
            label:'Correo electronico',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
            ]
        },
        {
            label:'Departamento',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
            ]
        },
        {
            label:'Municipio',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
            ]
        },
        {
            label:'Direccion Cuenta',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Direccion Postal',
            categoria:'Datos de usuario',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Ruta',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Ubicacion',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Ciclo',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Comercializador',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'NIU',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Clase Servicio',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Estrato',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Carga instalada',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Contratada',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Liquidar con',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Nivel Tension',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Contrato',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Nodo',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Grupo',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Fases',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Frontera',
            categoria:'Datos de conexion',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Banco pago',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Fecha matricula',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Modalidad cobro',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Estado',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
            ]
        },
        {
            label:'Prd vencidos',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Altitud',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Longitud',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Latitud',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Observacion cuenta',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                
                
            ]
        },
        {
            label:'Saldo actual',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Saldo a favor',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Saldo financiado',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Saldos pendientes',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Periodo actual',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Fecha de vencimiento',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Destacada',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Agrupada',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'Sitio',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },
        {
            label:'NIFF',
            categoria:'Datos bancarios',
            valores:[
                {
                    tipo:'texto',
                    
                    valor:''
                },
               
                
            ]
        },

        
    ]    
    const categorias=[
        {
            label:'Datos de usuario'
        },
        {
            label:'Datos de conexion'
        },
        {
            label:'Datos bancarios'
        }
    ]

    function cargarInfo(res){
        for(let i=0;i<info1.length;i++){
            for(let j=0;j<res.length;j++){
                if(info1[i].label===res[j].label){
                    for(let k=0;k<res[j].valores.length;k++){
                        info1[i].valores[k].valor=res[j].valores[k].valor
                    }
                }
            }
        }
    }
return {
    cargarInfo,
    info,
    categorias
}

})


