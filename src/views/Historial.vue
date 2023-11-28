<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Historial del Paciente</ion-title>
            </ion-toolbar>
        </ion-header>

   <ion-content class="ion-padding">
                <!-- Detalles de la Historia Médica -->
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>{{ historiaMedica.profesional }}</ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Paciente:</ion-label>
                            <ion-note>{{ historiaMedica.paciente.nombre }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Edad:</ion-label>
                            <ion-note>{{ historiaMedica.paciente.edad }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Sexo:</ion-label>
                            <ion-note>{{ historiaMedica.paciente.sexo }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Nro. Identificación:</ion-label>
                            <ion-note>{{ historiaMedica.paciente.nroIdentificacion }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Ubicación:</ion-label>
                            <ion-note>{{ historiaMedica.paciente.ubicacion }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Fecha y Hora:</ion-label>
                            <ion-note>{{ historiaMedica.fechaHora }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Consecutivo:</ion-label>
                            <ion-note>{{ historiaMedica.consecutivo }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Estado del Paciente:</ion-label>
                            <ion-note>{{ historiaMedica.estadoPaciente }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Antecedentes:</ion-label>
                            <ion-note>{{ historiaMedica.antecedentes }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Evolución Final:</ion-label>
                            <ion-note>{{ historiaMedica.evolucionFinal }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Concepto del Profesional:</ion-label>
                            <ion-note>{{ historiaMedica.conceptoProfesional }}</ion-note>
                        </ion-item>

                        <ion-item>
                            <ion-label>Recomendaciones:</ion-label>
                            <ion-note>{{ historiaMedica.recomendaciones }}</ion-note>
                        </ion-item>
                        <ion-button href="/patient" expand="full" color="secondary">Marcar Asistida</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        </ion-page>
</template>

<script>
export default {
    name: 'HistorialPatient',
    data() {
        return {
            historiaMedica: {
                profesional: "Dr. Juan Pérez",
                paciente: {
                    nombre: "Ana García",
                    edad: 30,
                    sexo: "Femenino",
                    nroIdentificacion: "123456789",
                    ubicacion: "Bucaramanga"
                },
                fechaHora: "2023-01-01T10:30:00",
                consecutivo: "CMH-2023-001",
                estadoPaciente: "Estable",
                antecedentes: "Sin antecedentes relevantes",
                evolucionFinal: "Recuperación completa",
                conceptoProfesional: "Paciente respondió positivamente al tratamiento.",
                recomendaciones: "Reposo y seguir tomando medicamentos según indicaciones."
            }
        };
    }
};
</script>