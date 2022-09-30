<script >

import DashboardCard1 from '../../components/Principal/DashboardCard1.vue';
import DashboardGraphicItem from '../../components/Principal/DashboardGraphicItem.vue'
import DashboardCard2 from '../../components/Principal/DashboardCard2.vue';

export default {
    data: function () {
        return {
            chartOptions: {
              theme: {
      mode: 'dark', 
      palette: 'palette8', 
      monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'dark',
          shadeIntensity: 0.65
      },
  },
                chart: {
                    id: "vuechart-example",
                    background: 'transparent',
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
            
            
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 35, 50, 49],
                },
            ],
            series2: [75],
          chartOptions2: {
            
            chart: {
              height: 350,
              background: 'transparent',
              type: 'radialBar',
              toolbar: {
                show: false
              },
              offsetY:20
              
            },
            
            colors: ["#ffc629"],
            
            plotOptions: {
                
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                 hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                  }
                },
            
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                  },
                  value: {
                    formatter: function(val) {
                      return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '27px',
                    show: true,
                    offsetY:5
                  }
                }
              }
            },
            fill: {
                
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ff3434'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
                
              }
            },
            stroke: {
              lineCap: 'round'
            },
            labels: ['Total'],
          },
          series3: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45]
          }],
          chartOptions3: {
            theme: {
      mode: 'dark', 
      palette: 'palette1', 
      monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
  },
            chart: {
              type: 'bar',
              background: 'transparent',
              toolbar: {
                show: false
              },
              height: 350
            },
            plotOptions: {
                
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
            
            
        };
    },
    components: { DashboardCard1, DashboardGraphicItem, DashboardCard2 }
};
</script>
<template>
    <div class="row justify-center" style="height: 100vh;">
       <div class="col-11 column" style="gap: 20px;">
            
            <div class="col row" style="gap: 20px;">
                <div class="col column" style="gap: 20px;">
                    <div class="col row">
                        <q-card flat class="col row borde-15 fondo-tarjeta q-pa-md" style="gap:20px">
                            <div class="col column">
                                <q-item class="col-3">
                                  <q-item-section>
                                    <q-item-label class="text-h5 text-bold enfasis text-white">Titulo Grafico</q-item-label>
                                    <q-item-label caption class="text-white">Subtitulo grafico</q-item-label>
                                  </q-item-section>
                                </q-item>
                                <q-card class="col row q-pa-sm fondo-tarjeta1" flat style="border-radius: 5px;" >
                                  <q-scroll-area class="col row q-pl-md q-pr-md " visible>
                                    
                                      <dashboard-graphic-item icono="fas fa-envelope" titulo="Opcion grafico 1" color="red"></dashboard-graphic-item>
                                      <dashboard-graphic-item icono="fas fa-envelope" titulo="Opcion grafico 2" color="red"></dashboard-graphic-item>
                                      <dashboard-graphic-item icono="fas fa-envelope" titulo="Opcion grafico 2" color="red"></dashboard-graphic-item>
                                      <dashboard-graphic-item icono="fas fa-envelope" titulo="Opcion grafico 2" color="red"></dashboard-graphic-item>
                                      <dashboard-graphic-item icono="fas fa-envelope" titulo="Opcion grafico 2" color="red"></dashboard-graphic-item>
                                    
                                  </q-scroll-area>
                                </q-card>
                            </div>
                            <div class="col row">
                                <q-card class="col borde-15 q-pa-sm overflow-hidden" flat style="background-color: transparent;" >
                                    <apexchart type="area" height="100%" :options="chartOptions" :series="series"></apexchart>
                                </q-card>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-1 row" style="gap: 20px;">
                        <dashboard-card1 icono="fas fa-envelope" titulo="Mensajes" subtitulo="2 nuevos" color="red"></dashboard-card1>
                        <dashboard-card1 icono="fas fa-envelope" titulo="Solicitudes" subtitulo="3 nuevas" color="red"></dashboard-card1>
                        <dashboard-card1 icono="fas fa-envelope" titulo="Tareas" subtitulo="5 nuevas" color="red"></dashboard-card1>
                    </div>
                    <div class="col-5 row" style="gap: 20px;">
                        <q-card flat class="col-7 borde-15  q-pa-md overflow-hidden fondo-tarjeta" >
                            <apexchart type="bar" height="95%" :options="chartOptions3" :series="series3" ></apexchart>
                        </q-card>
                        <q-card flat class="col column borde-15 fondo-tarjeta q-pa-sm q-pb-md">
                            <div class="col overflow-hidden"> <apexchart type="radialBar" height="90%" width="99%" :options="chartOptions2" :series="series2"></apexchart></div>
                            <div class="col-5 column ">
                                <div class="col-7 text-bold text-center text-h5 text-white">
                                    <div>Titulo Grafico</div>
                                    <div class="text-caption text-white">Subtitulo grafico</div>
                                </div>
                                <div class="col row q-pl-sm q-pr-sm" style="gap: 10px;">
                                    <q-card class="col row q-pl-sm q-pr-sm" style="border-radius: 10px;">
                                   
                                    </q-card>
                                    <q-card class="col row q-pl-sm q-pr-sm" style="border-radius: 10px;">
                                   
                                </q-card>
                                </div>
                               
                            </div>
                           
                        </q-card>
                    </div>
                    
                </div>
                <div class="col-4 row">
                    <q-card flat class="col column borde-15 fondo-tarjeta q-pa-sm">
                        <q-item>
                          <q-item-section>
                            <h6 class="q-ma-none text-bold enfasis text-white">Titulo tarjeta</h6>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-icon color="white" name="fas fa-sync-alt" size="xs" />
                          </q-item-section>
                        </q-item>
                                              
                        <q-card-section class="col row">
                          <q-scroll-area class="col row q-pl-md q-pr-md mascara-scroll">
                             <q-timeline>
                              <q-timeline-entry class="text-white text-bold enfasis" heading tag="h6" >
                                7:30 am
                              </q-timeline-entry>
                              <q-timeline-entry>
                                
                                <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#039BE5"></dashboard-card2>
                                <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#388E3C"></dashboard-card2>
                                <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#D32F2F"></dashboard-card2>
                              </q-timeline-entry>
                              <q-timeline-entry class="text-white text-bold enfasis" heading tag="h6" >
                                8:30 am
                              </q-timeline-entry>
                              <q-timeline-entry>
                                <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#388E3C"></dashboard-card2>

                              </q-timeline-entry>
                              <q-timeline-entry class="text-white text-bold enfasis" heading tag="h6" >
                                9:30 am
                              </q-timeline-entry>
                              <q-timeline-entry>
                                
                                
                                <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#039BE5"></dashboard-card2>

                                  <dashboard-card2 titulo="Titulo tarjeta" icono="fas fa-envelope" texto="texto de la tarjeta pueden ser dos lineas y cuando se pase se pone ..." color="#D32F2F"></dashboard-card2>

                              </q-timeline-entry>
                             </q-timeline>
                          </q-scroll-area>
                        
                        </q-card-section>
                    </q-card>
                </div>
            </div>
       </div>
    </div>
</template>