<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="white">
        <ion-title color="black">Application Health Delivery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="ion-text-center">
        <img src="public\logo.png" alt="Logo" class="app-logo" />
      </div>


      <ion-button href="/login" expand="full" color="secondary" @click="login">
        Iniciar Sesión
      </ion-button>
      <ion-button href="/register" expand="full" color="dark" @click="register">
        Registrarse
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script>
export default {
  emits: ['click'],
  methods: {
    login() {
      
    },
    register() {
      
    },
  },
};
</script>

<style scoped>
.app-logo {
  max-width: 100%;
  height: auto;
}
</style>
