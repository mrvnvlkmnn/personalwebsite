<script>
import modalAtom from '@/components/atoms/modalAtom.vue';
const allImages = import.meta.glob('../assets/img/**/*.jpg');

export default {
  data() {
    return {
      url: "",
      images: [],
      showModal: false,
      currentImage: '',
    };
  },
  components: {
    modalAtom
  },
  mounted() {
    this.loadImages()
  },
  watch: {
    $route(to, from) {
      this.url = window.location.href.split('/')[window.location.href.split('/').length - 1];
    },
    url() {
      this.loadImages();
    }
  },
  methods: {
    showImageBig(imageKey) {
      this.currentImage = this.images[imageKey];
      this.showModal = true;
    },
    loadImages() {
      this.images = [];
      for (const path in allImages) {
        allImages[path]().then(() => {
          if (path.includes(this.url)) {
            if (!this.images.includes(path.split('../').pop())) {
              this.images.push(path.split('../').pop());
            }
          }
        });
      }
    }
  },
  created() {
    this.url = window.location.href.split('/')[window.location.href.split('/').length - 1];
  },
};
</script>
<template>
  <div>
    <div class="flex lg:flex-row flex-col flex-wrap justify-around">
      <div class="cursor-pointer px-auto" v-for="image, key in images" :key="key" @click="showImageBig(key)">
        <img class="lg:w-72 lg:m-6 mb-5" :src="`src/${image}`" />
      </div>
    </div>
    <modalAtom v-if="showModal" @close="showModal = false">
      <template #image>
        <img :src="`src/${currentImage}`" loading="lazy"/>
      </template>
    </modalAtom>
  </div>
</template>
