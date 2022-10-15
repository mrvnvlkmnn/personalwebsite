<script>
export default {
    data() {
        return {
        }
    },
    props: {
        direction: String,
        color: String,
        size: Number,
    }
    
}
</script>
<template>
    <svg v-if="direction === 'right'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="color" :class="['w-' + size, 'h-' + size]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="color" :class="['w-' + size, 'h-' + size]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
</template>