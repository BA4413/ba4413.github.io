<script setup>

    import { ref, reactive } from 'vue';
    import { RouterLink } from 'vue-router';
    import Header from '@/components/header.vue';
    import baImg from '@/assets/img/BA4413.jpg';

    

    const lists = reactive({
        index: "首页",
        article: "文章",
        picture: "图片",
    })

</script>

<template>
    <Header />
    <div class="flex-box">
        <!-- <img :src="baImg" /> -->
        <h3>施工中</h3><br>
        <h3>最近忙于转专业可能会慢些</h3><br>
        <h3>还有页面没做适配，不要再跟我说怎么只有jio了</h3><br>
        <!-- <h3>也不知道是睡着了还是似了……</h3> -->
    </div>

    <ul>
        <li><router-link to="/index">{{ lists.index }}</router-link>
        </li>
        <li><router-link to="/article">{{ lists.article }}</router-link>
        </li>
    </ul>
</template>

<style scoped>
    h3, li{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
        
    }
    
    a{
        color: rgb(255, 127, 127);
    }

    .flex-box{
        background-color: rgba(255, 176, 176, 0.18);
        border: 2px solid rgba(255, 252, 252, 0.701);
        width: 300px;
        height: fit-content;
        margin-left: 50px;
        margin-top: 50px;
    }

    img{
        width: 200px;
        height: 200px;
    }
</style>