<template>
    <main class="login__main">
        <section class="login__form">
            <h1>Login</h1>
            <FormComponent :inputs="inputs"/>
        </section>
    </main>
</template>
  
<script setup>

import FormComponent from '../components/myForm.vue'

const inputs = [
    {
        name:'email',
        placeholder:'Enter your email',
        type:'email'
    },
    {
        name:'password',
        placeholder:'Enter your password',
        type:'password'
    },
    {
        name:'button',
        placeholder:'Submit',
        type:'button'
    }
]

</script>
  
<style lang="scss" scoped>

.login__form {
    text-align: center;
}

</style>