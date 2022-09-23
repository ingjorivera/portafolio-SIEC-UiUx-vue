<script >
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar:{
            show:false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series1: [76],
      chartOptions1: {
            chart: {
              type: 'radialBar',
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
                  strokeWidth: '97%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: false,
                    top: 2,
                    left: 0,
                    color: '#999',
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
                    fontSize: '22px',
                    color:'#ffffff'
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
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91],
                colorStops:[
                    {
      offset: 0,
      color: '#eee',
      opacity: 1
    },
    {
      offset: 0.6,
      color: 'green',
      opacity: 50
    },
    {
      offset: 100,
      color: 'red',
      opacity: 1
    }
                ]
              },
            },
            labels: ['Average Results'],
          },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>
<template>
    <div class="row justify-center" style="height: 100vh;">
       <div class="col-11 column" style="gap:20px">
            <div class="col-3 column">
                
                <div class="col row text-white" style="gap: 30px;">
                    <div class="col column justify-center">
                        <h4 class="q-ma-none">Bienvenido(a)</h4>
                        <p class="text-subtitle">Usuario</p>
                    </div>
                    <q-card class="col row fondo-tarjeta" style="border-radius: 15px;">
                       
                        
                            <div class="col"></div>
                        <div class="col items-center">
                            <apexchart class="svg-tams" type="radialBar" :options="chartOptions1" :series="series1"  width="99%"
                            height="100%"></apexchart>
                        </div>
                        
                       
                        
                    </q-card>
                    <q-card class="col fondo-tarjeta" style="border-radius: 15px;">
                        <q-item class="row justify-between">
                        <q-item-section class="col">
                            <h6 class="q-mb-none q-mt-none text-bold">Titulo tarjeta</h6> 
                        </q-item-section>
                        <q-item-section class="col-1 items-end" >
                            <q-icon name="fas fa-ellipsis-v">
                                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                    <strong>Tooltip</strong> on <em>top</em>
                                    
                                </q-tooltip>
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 1</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 2</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 3</q-item-section>
                                        </q-item>
                                        
                                    </q-list>
                                </q-menu>
                            </q-icon>
                        </q-item-section>
                    </q-item>
                    </q-card>
                </div>
            </div>
            <div class="col row" style="gap: 20px;">
                <div class="col column" style="gap: 20px;">
                    <q-card class="col-7 q-pa-lg" style="border-radius: 15px; position:relative">
                        <apexchart
                            width="99%"
                            height="100%"
                            type="line"
                            :options="chartOptions"
                            :series="series"
                            ></apexchart>
                    </q-card>
                    <div class="col column" style="gap: 20px;">
                        <h6 class="col-1 q-mt-none q-mb-sm text-white">Titulo grupo</h6>
                        <div class="col row" style="gap: 10px;">
                            <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                            <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                            <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                            <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                        </div>
                        
                    </div>
                </div>
                <q-card class="col-5 fondo-tarjeta text-white" style="border-radius: 15px;">
                    <q-item class="row justify-between">
                        <q-item-section class="col">
                            <h6 class="q-mb-none q-mt-none text-bold">Titulo tarjeta</h6> 
                        </q-item-section>
                        <q-item-section class="col-1 items-end" >
                            <q-icon name="fas fa-ellipsis-v">
                                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                    <strong>Tooltip</strong> on <em>top</em>
                                    
                                </q-tooltip>
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 1</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 2</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable v-close-popup>
                                        <q-item-section>Opcion 3</q-item-section>
                                        </q-item>
                                        
                                    </q-list>
                                </q-menu>
                            </q-icon>
                        </q-item-section>
                    </q-item>
                    <q-card-section>
                        <q-scroll-area style="height: 52vh" visible>
                            <q-timeline class="q-pl-xl q-pr-xl" color="primary">
                            <q-timeline-entry heading tag="div" class="q-pa-none q-ma-none">
                                <p class="q-pa-none q-ma-none">Heading</p>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 21, 1986"
                                icon="delete"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry heading>
                                November, 2017
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                                avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                                color="orange"
                                icon="done_all"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>

                            <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                            >
                                <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </q-timeline-entry>
                            </q-timeline>
                        </q-scroll-area>
                    </q-card-section>
                </q-card>
            </div>
            
       </div>
    </div>
</template>