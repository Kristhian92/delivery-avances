<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Nueva Historia Clínica</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-label>Profesional que Registra</ion-label>
                    <ion-input v-model="profesional" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Información Relevante del Paciente</ion-label>
                    <ion-textarea v-model="informacionPaciente" required></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-label>Hora y Fecha</ion-label>
                    <ion-datetime v-model="fechaHora" display-format="D MMM YYYY HH:mm" required></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label>Consecutivo de Historia</ion-label>
                    <ion-input v-model="consecutivo" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Estado Actual del Paciente</ion-label>
                    <ion-input v-model="estadoActual"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Antecedentes</ion-label>
                    <ion-textarea v-model="antecedentes"></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-label>Evolución Final</ion-label>
                    <ion-textarea v-model="evolucionFinal"></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-label>Concepto del Profesional</ion-label>
                    <ion-textarea v-model="conceptoProfesional"></ion-textarea>
                </ion-item>

                <ion-item>
                    <ion-label>Recomendaciones</ion-label>
                    <ion-textarea v-model="recomendaciones"></ion-textarea>
                </ion-item>
            </ion-list>

            <ion-button href="/professional" expand="full" color="secondary" @click="guardarHistoria">Guardar
                Historia</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: "NewMedicalVue",
    data() {
        return {
            profesional: "",
            informacionPaciente: "",
            fechaHora: "",
            consecutivo: "",
            estadoActual: "",
            antecedentes: "",
            evolucionFinal: "",
            conceptoProfesional: "",
            recomendaciones: "",
        };
    },
    methods: {
        guardarHistoria() {
            console.log("Historia clínica guardada:", this.$data);
        },
    },
};
</script>
