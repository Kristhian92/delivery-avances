<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="black">
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Número de Identificación *</ion-label>
          <ion-input v-model="idNumber" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Nombres *</ion-label>
          <ion-input v-model="firstName" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Apellidos *</ion-label>
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
          <ion-label position="floating">Contraseña *</ion-label>
          <ion-input v-model="password" type="password" :value="idNumber" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Tipo *</ion-label>
          <ion-select v-model="userType" interface="popover" required>
            <ion-select-option value="paciente">Paciente</ion-select-option>
            <ion-select-option value="profesional">Profesional</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <div class="ion-text-center">
        <ion-button expand="full" color="secondary" @click="register">Registrar</ion-button>
        <ion-button href="/home" expand="full" color="dark">Cancelar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "RegistrationForm",
  emits: ['click'],
  data() {
    return {
      idNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      location: "",
      password: "",
      userType: "",
    };
  },
  methods: {
    register() {
      
    },
    cancel() {
      
    },
  },
};
</script>
