<script setup>

    import { ref, reactive } from 'vue';
    import Header from '../../components/header.vue';

</script>

<template>
    <Header />
    <p>这里怎么写，我还没想好（（（</p><br>
    <router-link to="/index">点我返回首页</router-link>
</template>

<style scoped>
    template{
        background-color: #17191A;
    }

    p{
        color: white;
    }

    a{
        color: rgb(255, 127, 127);
    }

</style>