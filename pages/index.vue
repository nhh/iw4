<template>
  <div class="h-full w-full flex relative overflow-hidden">
    <!-- Left side -->
    <div class="w-2/6 text-right z-10">

      <h1 class="pr-3 1080p:pb-20 pb-10 uppercase font-bold 1080p:text-4xl text-3xl pt-20 text-white">Team-Deathmatch</h1>

      <div class="w-full h-0.5 my-1 bg-gradient-to-l from-white"></div>

      <ul class="uppercase 1080p:text-3xl text-2xl font-semibold text-white flex flex-col space-y-3">
        <li class="pr-3 align-middle">Klasseneditor</li>
        <li class="pr-3 align-middle">Rufzeichen & Abschussserien</li>
        <li class="pr-3 align-middle">Quartiere</li>
      </ul>

      <div class="w-full h-0.5 my-1 bg-gradient-to-l from-white"></div>

      <ul class="pr-3 1080p:pb-32 pb-24 mt-1 uppercase 1080p:text-3xl text-2xl text-white font-semibold flex flex-col space-y-3">
        <li>Einladen</li>
        <li>Fur Wechsel stimmen</li>
      </ul>

      <div class="flex w-full justify-end align-end relative">
        <div class="bg-gray-900 w-3/5 h-10 opacity-60 absolute"></div>

        <div class="absolute w-3/5 h-10 flex justify-end content-center">
          <p class="my-auto text-white 1080p:text-xl pr-3">Absturz</p>
        </div>

        <img class="1080p:w-4/6 w-3/5 h-60 " alt="" src="https://callofdutymaps.com/wp-content/uploads/crash1-1-570x300.jpg">
        <div class="bg-gray-900 1080p:w-4/6 w-3/5 h-10 bottom-0 opacity-60 absolute"></div>

        <div class="absolute bottom-0 1080p:w-4/6 w-3/5 h-10 flex justify-end content-center">
          <p class="my-auto text-gray-400 1080p:text-xl pr-3">Team-Deathmatch</p>
        </div>
      </div>

      <ul class="pr-3 1080p:pt-20 pt-20 mt-1 uppercase 1080p:text-3xl text-2xl font-semibold flex flex-col space-y-3">
        <li class="text-white">Spieluebersicht<span class="text-black"> - </span><span class="text-yellow-400">F1</span></li>
        <li class="text-white">Zuruck<span class="text-black"> - </span><span class="text-yellow-400">ESC</span></li>
      </ul>

    </div>

    <!-- Right side -->
    <div class="w-3/5"></div>

    <div class="h-full w-full gradient absolute bottom-0 left-0 -z-9 bg-gray-400"></div>

    <img alt="clouds" src="public/20806_smoke-clouds-png.png" class="slide h-full w-full absolute -top-100 left-0 -z-8 opacity-30 slide">

    <img alt="clouds" src="public/clipart-cloud-halloween-18-568848867.png" class="slide origin-center h-full w-full scale-150 rotate-30 absolute -z-8 opacity-20">

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

img {
  pointer-events: none;
  user-select: none;
  user-drag: none;
}

li {
  user-select: none;
  user-drag: none;
}

p {
  user-select: none;
  user-drag: none;
}

h1 {
  user-select: none;
  user-drag: none;
}

.cloud {
  background: url("/public/smoke-hd-png-rising-white-foggy-smoke-on-black-background-motion-background-videoblocks-1920.png");
}

li:hover {
 background: black;
  /*
 background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='141' fill='rgb(0,0,0)' fill-opacity='1'%3E%3Cpolygon points='0,141 800,141 800,0'%3E%3C/polygon%3E%3C/svg%3E");
  */
}

@keyframes slide {
  0% { right: -150%; top: 0 }
  100% { right: 200%; top: 80% }
}

.slide {
  animation: slide;
  animation-duration: 300s;
}

.gradient {
  background-size: 100% 100%;
  background-position: 0px 0px,0px 0px;
  background-image: radial-gradient(60% 61% at 0% 98%, #FFDB00FF 0%, #FF000000 50%),
                    radial-gradient(200% 80% at 20% 107%, #FFDB00FF 5%, #FF000000 35%);
}
</style>