<!-- Configuracion.vue -->
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Configuración del Paciente</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Número de Identificación</ion-label>
                    <ion-input v-model="idNumber" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input v-model="firstName" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Apellidos</ion-label>
                    <ion-input v-model="lastName" required></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Correo Electrónico</ion-label>
                    <ion-input v-model="email" type="email"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Número de Celular</ion-label>
                    <ion-input v-model="phoneNumber" type="tel"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Ubicación</ion-label>
                    <ion-input v-model="location"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input v-model="password" type="password" :value="idNumber" required></ion-input>
                </ion-item>
                <ion-button href="/patient" expand="full" color="secondary">
                    Actualizar Información
                </ion-button>
            </ion-list>
            <ion-button href="/login" expand="full" color="dark">
                Salir de la Sesión
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: 'ConfiguracionPatient',
    methods: {
        actualizarInformacion() {
            // Lógica para actualizar la información del paciente
            console.log("Información actualizada:", this.$data);
        },
        salirSesion() {
            // Lógica para cerrar la sesión del paciente
            // Por ejemplo, puedes utilizar algún servicio de autenticación para manejar la sesión
            console.log("Sesión cerrada");
            // Redirige al paciente a la página de inicio de sesión
            this.$router.push("/login"); // Reemplaza con la ruta correcta
        },
    },
};
</script>
