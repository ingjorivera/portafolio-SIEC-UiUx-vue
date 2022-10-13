import { defineStore } from "pinia";
import { Notify } from 'quasar'


export const useNotificacionesStore=defineStore("notificaciones", ()=>{
    const historial=[{
        date:String,
        time:String,
        mensaje:String,
        icono:String,
        color:String
    }]
    function crearNotificacion(mensaje,subtexto,icono,fecha,tiempo,color){
        Notify.create({
            icon:icono,
            message: mensaje,
            caption:subtexto,
            classes:'notificacion enfasis',
            attrs:{date:fecha,time:tiempo,color:color},
            
            position:'top-right'
          })
        
    }

    return{
        historial,
        crearNotificacion
    }


})