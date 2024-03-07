<template>
    <div class="buttons">
        <button @click="showLoginForm" class="login__button">Login</button>
        <button @click="showSignInForm" class="signup__button">Sign-in</button>
    </div>
    <main v-if="showLogin" class="login__main">
        <section class="login__form">
            <h1>Login Page</h1>
            <FormComponent :inputs="logInInputs"/>
        </section>
    </main>
    <div v-if="showSignin" class="signin__main">
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
import { onMounted, ref } from 'vue';

defineProps({
  formInputs: {
    type: Array,
    default: () => []
  }
});

//onMounted(() =>{
//    Register.storeUser({
//    username:'Lucientest',
//    password:'feohnuzobjndop',
//})
//})



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

const showLogin = ref(true); 
const showSignin = ref(false); 

function showSignInForm() {
    showLogin.value = false;
    showSignin.value = true;
}

function showLoginForm() {
    showLogin.value = true;
    showSignin.value = false;
}

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