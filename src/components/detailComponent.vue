<script>
import modalAtom from '@/components/atoms/modalAtom.vue';

export default {
  data() {
    return {
      url: "",
      images: [
        'ducati.jpg',
        'ducatiSmall.jpg'

      ],
      showModal: false,
      currentImage: '',
    };
  },
  components: {
    modalAtom
  },
  methods: {
    showImageBig(imageKey) {
      this.currentImage = this.images[imageKey];
      this.showModal = true;
    },
  },
  created() {
      this.url = window.location.href.split('/')[window.location.href.split('/').length - 1];
  },
};
</script>
<template>
  <div class="lg:px-20">
    <div class="flex lg:flex-row flex-col">
      <div class="cursor-pointer px-10" v-for="image, key in images" :key="key" @click="showImageBig(key)">
        <img class="lg:w-72 lg:m-12 mb-5" :src="`src/assets/img/${image}`"/>
      </div>
    </div>
      <modalAtom v-if="showModal" @close="showModal = false">
        <template #image>
          <img :src="`src/assets/img/${currentImage}`" />
        </template>
      </modalAtom>
  </div>
</template>
