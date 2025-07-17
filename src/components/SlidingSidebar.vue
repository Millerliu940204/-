<template>
  <div class="siderbar">
    <ul>
      <li class="Logo">
        <router-link to="/">
          <span class="icon"><ion-icon name="logo-gitlab"></ion-icon></span>
          <span class="text">websiteLogo</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
          <span class="text">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <span class="icon"><ion-icon name="information-circle-outline"></ion-icon></span>
          <span class="text">Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="/inbox">
          <span class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
          <span class="text">Inbox</span>
        </router-link>
      </li>
      <li>
        <router-link to="/analytics">
          <span class="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
          <span class="text">Analytics</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <span class="icon"><ion-icon name="cart-outline"></ion-icon></span>
          <span class="text">Order</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
          <span class="text">Setting</span>
        </router-link>
      </li>
      <li>
        <router-link to="/logout">
          <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
          <span class="text">Logout</span>
        </router-link>
      </li>
      <li>
        <router-link to="/About">
          <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
          <span class="text">About</span>
        </router-link>
      </li>
      <li>
        <router-link to="/game">
          <span class="icon"><ion-icon name="game-controller-outline"></ion-icon></span>
          <span class="text">game</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Vue Router 全域元件，通常不需 import
</script>
