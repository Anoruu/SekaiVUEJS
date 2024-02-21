<template>

<form>
    <article v-for="(el, inputs) in inputs" :key="index">
    <label :for="el.name"></label>
    <input :type="el.type" :id="el.name" :value="el.placeholder" v-if="el.type=='button'" >
    <input :type="el.type" :placeholder="el.placeholder" :id="el.name" v-else>
    </article>
</form>

</template>

<script setup>

defineProps({
    inputs: {
        type: Array,
        default : []
    }
})

</script>

<style lang="scss" scoped>

</style>