<script>
export default {
  data() {
    return {
      randomNumber: 24,
      hideMenu: false,
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
      <router-link to="/" class="md>text-xl tracking-wider uppercase">Projects ({{ randomNumber }})</router-link>
      <a class="md:text-xl tracking-wider uppercase cursor-pointer" @click="showMenu">Menu</a>
    </div>
  </div>
  <RouterView></RouterView>
  <Transition name="fade">
    <div class="bg-gray-700/50 h-screen w-screen top-0 absolute z-0" v-if="hideMenu">
      <div class="w-full lg:w-1/3 h-screen bg-white right-0 absolute z-10">
        <div class="mx-16 my-10">
          <ul>
            <li>
              <div class="flex" @click="hideMenu = !hideMenu">
                <router-link to="/" class="w-full">Home</router-link>
              </div>
            </li>
            <li>
              <div class="flex" @click="hideMenu = !hideMenu">
                <router-link to="/projects" class="w-full">Projects</router-link>
              </div>
              <ul>
                <li class="ml-6">
                  <div class="flex" @click="hideMenu = !hideMenu">
                    <router-link to="/ducati" class="w-full">Ducati Panigale V2</router-link>
                  </div>
                </li>
                <li class="ml-6">
                  <div class="flex" @click="hideMenu = !hideMenu">
                    <router-link to="/aarhus" class="w-full">
                      Aarhus Cars and Coffe 2022
                    </router-link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute left-[20px] lg:left-auto bg-black lg:bg-transparent z-20 lg:right-1/3 top-10 cursor-pointer mr-2" @click="hideMenu = !hideMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f4ff57"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

li .router-link-active {
  color: #f4ff57;
  background-color: black;
  padding: 4px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
