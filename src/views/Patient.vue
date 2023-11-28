<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Módulo del Paciente</ion-title>
            </ion-toolbar>
        </ion-header>

         <ion-content class="ion-padding">
                <ion-list>
                    <ion-item href="/historial">
                        <ion-label>Historial</ion-label>
                        <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                    </ion-item>

                    <ion-item href="/configuracion">
                        <ion-label>Configuración</ion-label>
                        <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                    </ion-item>
                </ion-list>
            </ion-content>
    </ion-page>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';



export default {
    name: 'PatientVue',
    components: {
        IonIcon,
    },
    data() {
        return {
            arrowForward,
        };
    },
   
};
</script>
