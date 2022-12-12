<script>
export default {
  data() {
    return {
      coverImage: {
        0: {
          name: "Andre",
          instagramName: "andrewulf99",
          carBrand: "Ducati",
          carModel: "Panigale",
          carModelSpecific: "V2",
          imageDescription:
            "Ein großes Dankeschön geht an Andre und Ducati Schleswig Holstein raus. Von dort haben wir nämlich diese schöne weiße Panigale V2 mit der wir dann einen ganz netten Tag in Hamburg verbringen durften. Einfach ein schönes Motorrad",
          imageDate: "0921",
          imageCoverName: "ducati.jpg",
          imageSmallName: "ducatiSmall.jpg",
          componentUrl: "ducati",
        },
      },
    };
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        top: 915,
        left: 0,
        behavior: 'smooth'
      });
    },
    openInstagramUrl(instagramName) {
      window
        .open("https://www.instagram.com/" + instagramName, "_blank")
        .focus();
    },
  },
};
</script>

<template>
  <div class="absolute top-0 -z-10 flex flex-col md:flex-row overflow-hidden">
    <div class="h-1/2 md:w-1/2">
      <div class="px-5">
        <div class="absolute top-1/3 md:top-auto md:bottom-16 font-bold">
          <p class="text-xl md:text-3xl text-white tracking-wider">owned by</p>
          <p
            class="text-neon-yellow cursor-pointer md:text-neon-yellow/75 hover:text-neon-yellow text-4xl md:text-7xl tracking-wider"
            @click="openInstagramUrl(coverImage[0].instagramName)"
          >
            {{ coverImage[0].name }}
          </p>
          <a
            @click="openInstagramUrl(coverImage[0].instagramName)"
            target="_blank"
            class="cursor-pointer text-neon-yellow md:text-neon-yellow/75 text-4xl md:text-7xl tracking-wider z-30 hover:text-neon-yellow"
          >
            @{{ coverImage[0].instagramName }}
          </a>
        </div>
        <div
          class="md:hidden absolute bottom-1/2 left-1/2 bounce z-20"
          @click="scrollDown()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="#f4ff57"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <img
        class="object-cover w-full h-screen"
        :src="`src/assets/img/ducati/${coverImage[0].imageCoverName}`"
      />
    </div>
    <div class="h-screen md:w-1/2">
      <router-link :to="coverImage[0].componentUrl">
        <div class="px-5 h-screen w-full flex flex-col justify-between">
          <div class="pt-20 md:pt-20">
            <p class="text-3xl tracking-wider">{{ coverImage[0].carBrand }}</p>
            <div class="flex justify-between w-full pl-20">
              <p class="text-3xl tracking-wider">
                {{ coverImage[0].carModel }}
              </p>
              <p class="text-3xl tracking-wider">
                {{ coverImage[0].carModelSpecific }}
              </p>
            </div>
          </div>
          <div class="flex flex-row pt-20">
            <p class="pr-14 md:pr-28">
              {{ coverImage[0].imageDescription }}
            </p>
            <img
              class="object-contain w-1/2"
              :src="`src/assets/img/ducati/${coverImage[0].imageSmallName}`"
            />
            <p class="text-6xl md:text-8xl absolute bottom-0 text-gray-400/75">
              {{ coverImage[0].imageDate }}
            </p>
          </div>
          <div>
          </div>
        </div></router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.arrow {
  width: 30px;
  height: 30px;
  color: #f4ff57;

  /**
   * Dark Arrow Down
   */
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU0MC4zNjIyKSI+PHBhdGggZD0ibSAxMjcuNDA2MjUsNjU3Ljc4MTI1IGMgLTQuOTg1MywwLjA3ODQgLTkuOTEwNzcsMi4xNjMwOCAtMTMuNDM3NSw1LjY4NzUgbCAtNTUsNTUgYyAtMy42MDA1NjUsMy41OTkyNyAtNS42OTY4ODMsOC42NTg5NSAtNS42OTY4ODMsMTMuNzUgMCw1LjA5MTA1IDIuMDk2MzE4LDEwLjE1MDczIDUuNjk2ODgzLDEzLjc1IEwgMjQyLjI1LDkyOS4yNSBjIDMuNTk5MjcsMy42MDA1NiA4LjY1ODk1LDUuNjk2ODggMTMuNzUsNS42OTY4OCA1LjA5MTA1LDAgMTAuMTUwNzMsLTIuMDk2MzIgMTMuNzUsLTUuNjk2ODggTCA0NTMuMDMxMjUsNzQ1Ljk2ODc1IGMgMy42MDA1NiwtMy41OTkyNyA1LjY5Njg4LC04LjY1ODk1IDUuNjk2ODgsLTEzLjc1IDAsLTUuMDkxMDUgLTIuMDk2MzIsLTEwLjE1MDczIC01LjY5Njg4LC0xMy43NSBsIC01NSwtNTUgYyAtMy41OTgxNSwtMy41OTEyNyAtOC42NTA2OCwtNS42ODEyNyAtMTMuNzM0MzgsLTUuNjgxMjcgLTUuMDgzNjksMCAtMTAuMTM2MjIsMi4wOSAtMTMuNzM0MzcsNS42ODEyNyBMIDI1Niw3NzguMDMxMjUgMTQxLjQzNzUsNjYzLjQ2ODc1IGMgLTMuNjY2NzgsLTMuNjY0MjMgLTguODQ4MDEsLTUuNzY0NDIgLTE0LjAzMTI1LC01LjY4NzUgeiIgaWQ9InBhdGgzNzY2LTEiIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiMwMDAwMDA7ZmlsbDojMjIyMjIyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozOC44ODAwMDEwNzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIi8+PC9nPjwvc3ZnPg==);
  background-size: contain;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
