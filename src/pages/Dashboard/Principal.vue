<script >

import DashboardCard1 from '../../components/Principal/DashboardCard1.vue';
export default {
    data: function () {
        return {
            chartOptions: {
                chart: {
                    id: "vuechart-example",
                    toolbar: {
                        show: false
                    },
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995],
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ["#ffc629", "#247BA0"],
            },
            series1: [76],
            chartOptions1: {
                chart: {
                    type: "radialBar",
                    offsetY: 30,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: "97%",
                            margin: 0,
                            dropShadow: {
                                enabled: false,
                                top: 2,
                                left: 0,
                                color: "#999",
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: "22px",
                                color: "#ffffff"
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "light",
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91],
                        colorStops: [
                            {
                                offset: 0,
                                color: "#eee",
                                opacity: 1
                            },
                            {
                                offset: 0.6,
                                color: "green",
                                opacity: 50
                            },
                            {
                                offset: 100,
                                color: "red",
                                opacity: 1
                            }
                        ]
                    },
                },
                labels: ["Average Results"],
            },
            
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 35, 50, 49],
                },
            ],
            series3: [44, 55, 41, 17, 15],
          chartOptions3: {
            chart: {
              type: 'donut',
              offsetY: 10,
              
            },
            
          },
            
            
        };
    },
    components: { DashboardCard1 }
};
</script>
<template>
    <div class="row justify-center" style="height: 100vh;">
       <div class="col-11 column" style="gap: 20px;">
            
            <div class="col row" style="gap: 20px;">
                <div class="col column" style="gap: 20px;">
                    <div class="col row">
                        <q-card flat class="col row borde-15 fondo-tarjeta q-pa-md">
                            <div class="col-5">
                                <q-item class="column text-white" style="gap:15px">
                                    <q-item-section>
                                        <h5 class="q-ma-none text-bold enfasis">Titulo grafico</h5>
                                        <q-item-label caption class="text-white">Subtitulo grafico</q-item-label>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item>
                                            <q-item-section side>
                                                <q-avatar icon="fas fa-times" color="red" size="sm"></q-avatar>
                                            </q-item-section>
                                            <q-item-section>
                                                <q-item-label>Texto informativo 1</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-item>
                                            <q-item-section side>
                                                <q-avatar icon="fas fa-times" color="red" size="sm"></q-avatar>
                                            </q-item-section>
                                            <q-item-section>
                                                <q-item-label>Texto informativo 1</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-item>
                                            <q-item-section side>
                                                <q-avatar icon="fas fa-times" color="red" size="sm"></q-avatar>
                                            </q-item-section>
                                            <q-item-section>
                                                <q-item-label>Texto informativo 1</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        
                                    </q-item-section>
                                </q-item>
                            </div>
                            <div class="col row">
                                <q-card class="col borde-15 q-pa-sm overflow-hidden">
                                    <apexchart type="area" height="100%" :options="chartOptions" :series="series"></apexchart>
                                </q-card>
                            </div>
                        </q-card>
                    </div>
                    <div class=" row" style="gap: 20px;">
                        <dashboard-card1 icono="fas fa-envelope" titulo="Mensajes" subtitulo="2 nuevos" color="red"></dashboard-card1>
                        <dashboard-card1 icono="fas fa-envelope" titulo="Solicitudes" subtitulo="3 nuevas" color="red"></dashboard-card1>
                        <dashboard-card1 icono="fas fa-envelope" titulo="Tareas" subtitulo="5 nuevas" color="red"></dashboard-card1>
                    </div>
                    <div class="col-5 row" style="gap: 20px;">
                        <q-card flat class="col-7 borde-15  q-pa-md">
                           
                        </q-card>
                        <q-card flat class="col borde-15 fondo-tarjeta1 q-pa-sm"></q-card>
                    </div>
                    
                </div>
                <div class="col-4 row">
                    <q-card flat class="col column borde-15 fondo-tarjeta q-pa-sm">
                        <q-card-section class="col column " style="gap: 20px;">
                        <div class="col row" style="gap: 20px;">
                            <q-card class="col borde-15 ">1</q-card>
                            <q-card class="col borde-15">2</q-card>
                        </div>
                        <div class="col row" style="gap: 20px;">
                            <q-card class="col borde-15 ">3</q-card>
                            <q-card class="col borde-15">4</q-card>
                        </div>
                           
                        </q-card-section>
                        
                        <q-card-section class="col row">
                        
                        </q-card-section>
                    </q-card>
                </div>
            </div>
       </div>
    </div>
</template>