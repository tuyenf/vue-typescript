<template>
  <div class="loading-block">
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup name="TheLoading"></script>
<style>
.loading-block {
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lds-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 45%;
  top: 40%;
  div:after {
    background-color: blue;
  }
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: ' ';
  display: block;
  position: absolute;
  top: 22px;
  left: 37px;
  width: 3px;
  height: 10px;
  border-radius: 20%;
  background: blue;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes shadowPulse {
  33% {
    background: #fff;
    box-shadow:
      -20px 0 var(--bs-primary),
      20px 0 #fff;
  }
  66% {
    background: var(--bs-primary);
    box-shadow:
      -20px 0 #fff,
      20px 0 #fff;
  }
  100% {
    background: #fff;
    box-shadow:
      -20px 0 var(--bs-primary),
      20px 0 var(--bs-primary);
  }
}
@keyframes shadowPulse2 {
  33% {
    background: #fff;
    box-shadow:
      -20px 0 var(--bs-orange),
      20px 0 #fff;
  }
  66% {
    background: var(--bs-orange);
    box-shadow:
      -20px 0 #fff,
      20px 0 #fff;
  }
  100% {
    background: #fff;
    box-shadow:
      -20px 0 var(--bs-orange),
      20px 0 var(--bs-orange);
  }
}
</style>
