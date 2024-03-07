<template>
    <div class="buttons">
        <button>Login</button>
        <button>Sign-in</button>
    </div>
    <main class="login__main">
        <section class="login__form">
            <h1>Login Page</h1>
            <FormComponent :inputs="logInInputs"/>
        </section>
    </main>
    <div class="signin__main">
        <section class="signin__form">
            <h1>Sign-in Page</h1>
            <signInComponent :inputs="signInInputs"/>
        </section>
    </div>
</template>
  
<script setup>

import { Register } from '../services/apollo';
import FormComponent from '../components/loginForm.vue'
import signInComponent from '../components/signInForm.vue'
import { onMounted } from 'vue';

onMounted(() =>{
    Register.storeUser({
    username:'LucienJ',
    password:'ojezofjozjfozf',
})
})

const logInInputs = [
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

const signInInputs = [
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

.buttons {
    right: auto;
    left: auto;
    text-align: center;

    button {
        width: 10vw;
        text-decoration: none;
        border: none;
    }
}

.login__main,
.signin__main{
    justify-content: center;
    display: flex;
    padding: 0 10%;
}
.login__form,
.signin__form {
    text-align: center;
    width: 30%;
    left: auto;
    right: auto;
    border: solid 2px rgba(58, 57, 57, 0.384);
}


</style>