<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="black">
        <ion-title>Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label>Tipo de Usuario</ion-label>
          <ion-select v-model="userType" interface="popover">
            <ion-select-option value="paciente">Paciente</ion-select-option>
            <ion-select-option value="profesional"
              >Profesional</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Número de Identificación</ion-label>
          <ion-input v-model="idNumber" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Contraseña</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="full" color="secondary" @click="login">
        Iniciar Sesión
      </ion-button>
      <ion-button href="/home" expand="full" color="dark">Cancelar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      userType: null,
      idNumber: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.primerIngreso()) {
        this.solicitarActualizacionContraseña();
      } else {
        this.$router.push("/home");
      }
    },
    primerIngreso() {
      return true; 
    },
    solicitarActualizacionContraseña() {
      
      this.$router.push("/update-password");
    },
  },
};
</script>
