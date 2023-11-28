<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Módulo del Profesional</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list>
                <ion-item href="/medical">
                    <ion-label>Historial</ion-label>
                    <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                </ion-item>
                <ion-item href="/newmedical">
                        <ion-label>Nueva Historia</ion-label>
                        <ion-icon slot="end" :icon="arrowForward"></ion-icon>
                    </ion-item>

                <ion-item href="/configuration">
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
};
</script>
