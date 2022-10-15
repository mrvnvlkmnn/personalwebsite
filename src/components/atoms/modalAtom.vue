<script>
import arrowAtom from '@/components/atoms/arrowAtom.vue'

export default {
  components: {
    arrowAtom
  }
}
</script>
<template>
    <div class="modal" @click="this.$emit('close')">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-image">
                  <slot name="image">
                  </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">  
.modal {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;


  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    width: fit-content;
    z-index: 9999;
    max-width: 60%;
    margin: 0px auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    @media (min-width: 1280px) {
      max-width: 30%;
    }
  }

  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-active .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

</style>