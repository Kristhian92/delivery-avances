<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Módulo del Profesional</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list>
                <ion-item @click="irAHistorial">
                    <ion-label>Historial</ion-label>
                    <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                </ion-item>

                <ion-item @click="irAConfiguracion">
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
    name:"ProfessionalVist",
    components: {
        IonIcon,
    },
    data() {
        return {
            arrowForward,
        };
    },
    methods: {
        irAHistorial() {
            this.$router.push('/historial'); 
        },
        irAConfiguracion() {
            this.$router.push('/configuracion');
        },
    },
};
</script>
