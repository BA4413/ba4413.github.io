<script setup>

    import { ref, reactive } from 'vue';
    import { RouterLink } from 'vue-router';
    import Header from '@/components/header.vue';

    

    const lists = reactive({
        index: "首页",
        article: "文章",
        picture: "图片"
    })

</script>

<template>
    <Header />
    <h3>施工中</h3><br>
    <!-- <h3>也不知道是睡着了还是似了……</h3> -->

    <ul>
        <li><router-link to="/index">{{ lists.index }}</router-link>
        </li>
        <li><router-link to="/article">{{ lists.article }}</router-link>
        </li>
    </ul>
</template>

<style scoped>
    h3, li{
        font-family:  Verdana;
        color: white;
        
    }
    
    a{
        color: rgb(255, 127, 127);
    }

</style>