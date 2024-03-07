<template>

<form>
    <article v-for="(el, inputs) in inputs" :key="index">
    <label :for="el.name"></label>
    <input class="input__button" :type="el.type" :id="el.name" :value="el.placeholder" v-if="el.type=='button'">
    <input class="input__form" :type="el.type" :placeholder="el.placeholder" :id="el.name" v-else>
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

.input__form{
    width: 90%;
    margin: 0px 0 10px 0;
    padding: 10px;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 5px;
}

.input__button{
    display: flex;
    position: relative;
    width: 15%;
    padding: 0 1% 0 1%;
    margin-bottom: 1vh;
    align-self: flex-start;
    margin-left: 3%;
}

</style>