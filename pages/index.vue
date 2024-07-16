<template>
  <div class="w-screen h-screen flex relative overflow-hidden bg-gray-300">
    <!-- Left side -->
    <div class="w-2/5 text-right">

      <h1 class="pr-3 pb-20 uppercase font-bold text-4xl pt-20 text-white">Team-Deathmatch</h1>

      <div class="w-full h-0.5 my-1 bg-gradient-to-l from-white"></div>
      <ul class="pr-3 uppercase text-3xl font-semibold text-white flex flex-col space-y-3">
        <li>Klasseneditor</li>
        <li>Rufzeichen & Abschussserien</li>
        <li>Quartiere</li>
      </ul>
      <div class="w-full h-0.5 my-1 bg-gradient-to-l from-white"></div>

      <ul class="pr-3 pb-32 mt-1 uppercase text-3xl text-white font-semibold flex flex-col space-y-3">
        <li>Einladen</li>
        <li>Fur Wechsel stimmen</li>
      </ul>

      <div class="flex w-full justify-end align-end relative">
        <div class="bg-gray-900 w-3/5 h-10 opacity-60 absolute"></div>

        <div class="absolute w-3/5 h-10 flex justify-end content-center">
          <p class="my-auto text-white text-xl pr-3">Absturz</p>
        </div>

        <img class="w-3/5 h-60" alt="" src="https://callofdutymaps.com/wp-content/uploads/crash1-1-570x300.jpg">
        <div class="bg-gray-900 w-3/5 h-10 bottom-0 opacity-60 absolute"></div>

        <div class="absolute bottom-0 w-3/5 h-10 flex justify-end content-center">
          <p class="my-auto text-gray-400 text-xl pr-3">Team-Deathmatch</p>
        </div>
      </div>

      <ul class="pr-3 pt-20 mt-1 uppercase text-3xl font-semibold flex flex-col space-y-3">
        <li class="text-white">Spieluebersicht<span class="text-black"> - </span><span class="text-yellow-400">F1</span></li>
        <li class="text-white">Zuruck<span class="text-black"> - </span><span class="text-yellow-400">ESC</span></li>
      </ul>

    </div>

    <!-- Right side -->
    <div class="w-3/5"></div>

    <div class="w-screen h-screen gradient absolute bottom-0 left-0"></div>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.cloud {
  background: url("/smoke-hd-png-rising-white-foggy-smoke-on-black-background-motion-background-videoblocks-1920.png");
}

.gradient {
  background-size: 100% 100%;
  background-position: 0px 0px,0px 0px;
  background-image: radial-gradient(142% 91% at 2% 98%, #FFDB00FF 0%, #FF000000 38%),radial-gradient(142% 91% at 37% 107%, #FFDB00FF 0%, #FF000000 44%);
}
</style>