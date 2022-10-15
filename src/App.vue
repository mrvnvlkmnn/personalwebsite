<script>
export default {
  data() {
    return {
      randomNumer: 24,
      hideMenu: true,
    }
  },
  methods: {
    showMenu() {
      this.hideMenu = !this.hideMenu
    }
  }
};
</script>

<template>
  <div class="p-5 flex flex-row z-0">
    <div class="w-1/2">
      <router-link to="/" class="md:text-xl tracking-wider uppercase text-neon-yellow">Marvin Volkmann</router-link>
    </div>
    <div class="pl-5 w-1/2 flex justify-between">
      <router-link to="/" class="md>text-xl tracking-wider uppercase">Projects ({{randomNumer}})</router-link>
      <a class="md:text-xl tracking-wider uppercase cursor-pointer" @click="showMenu">Menu</a>
    </div>
  </div>
    <RouterView></RouterView>
  <div class="bg-gray-700/50 h-screen w-screen top-0 absolute" :class="{'hidden': hideMenu}" @click="hideMenu = !hideMenu">
    <div class="w-1/3 h-screen bg-white right-0 absolute">
      <div class="mx-16 my-10">
        <ul>
          <li class="text-neon-yellow bg-black">
            Home
          </li>
          <li>
            Projects
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
