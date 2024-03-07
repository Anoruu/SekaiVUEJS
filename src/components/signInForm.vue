<template>
    <form @submit.prevent="handleSubmit">
      <article v-for="(el, index) in inputs" :key="index">
        <input class="input__form" :type="el.type" :placeholder="el.placeholder" :id="el.name" v-model="formData[el.name]">
      </article>
      <button type="submit" class="input__button">Submit</button>
    </form>
    <div v-if="signInSuccess" class="success-message">Sign in successful!</div>
    <div v-if="signInFailure" class="failure-message">Sign in failed, check the console for more error</div>
  </template>
  
  <script setup>
  import { Register } from '../services/apollo';
  import { ref } from 'vue';
  
  const signInSuccess = ref(false);
  const signInFailure = ref(false);

  const formData = ref({
    username: '',
    password: ''
  });
  

  const handleSubmit = async () => {
  try {
    await Register.storeUser(formData.value);
    signInSuccess.value = true;
  } catch (error) {
    console.error(error);
    signInFailure.value = true;
  }
};
  

  const inputs = ref([
    {
      name: 'username',
      placeholder: 'Enter your username',
      type: 'text'
    },
    {
      name: 'password',
      placeholder: 'Enter your password',
      type: 'password'
    }
  ]);
  </script>
  
  <style scoped>
  .input__form {
    width: 90%;
    margin: 0px 0 10px 0;
    padding: 10px;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 5px;
  }
  
  .input__button {
    display: flex;
    position: relative;
    width: 15%;
    padding: 0 1% 0 1%;
    margin-bottom: 1vh;
    align-self: flex-start;
    margin-left: 3%;
  }

  .success-message {
    color: green;
    margin-top: 10px;
}

  .failure-message {
    color: red;
    margin-top: 10px;
  }

  </style>