<script >
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
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
       <div class="col-10 column" style="gap:20px">
            <div class="col-5 column">
                <div class="col-3 text-white">
                    <h6 class="q-mb-none q-mt-md">Bienvenido(a) usuario</h6>
                    <p class="text-caption">El tiempo actual es:</p>
                </div>
                <div class="col row text-white" style="gap: 30px;">
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
                        <q-card-section>
                            
                        </q-card-section>
                    </q-card>
                    <q-card class="col fondo-tarjeta" style="border-radius: 15px;">
                        <q-card-section>
                            <h6 class="q-mb-none q-mt-none text-bold">Titulo tarjeta</h6>
                        </q-card-section>
                    </q-card>
                    <q-card class="col fondo-tarjeta" style="border-radius: 15px;">
                        <q-card-section>
                            <h6 class="q-mb-none q-mt-none text-bold">Titulo tarjeta</h6>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <div class="col row" style="gap: 20px;">
                <div class="col column" style="gap: 20px;">
                    <q-card class="col-7 q-pa-lg" style="border-radius: 15px; position:relative">
                        <apexchart
                            width="100%"
                            height="100%"
                            type="bar"
                            :options="chartOptions"
                            :series="series"
                            ></apexchart>
                    </q-card>
                    <div class="col row" style="gap: 20px;">
                        <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                        <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                        <q-card class="col fondo-tarjeta" style="border-radius: 15px;"></q-card>
                    </div>
                </div>
                <q-card class="col-5 fondo-tarjeta text-white" style="border-radius: 15px;">
               
                <q-card-section>
                            <h6 class="q-mb-none q-mt-none text-bold">Titulo tarjeta</h6>
                        </q-card-section></q-card>
            </div>
            
       </div>
    </div>
</template>