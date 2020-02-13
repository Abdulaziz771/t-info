<template>
    <div class="container" id="main-header">
        <div class="main-search-parent">
            <b-row class="main-search">
                <b-col cols="12" sm="2" class="logo-search">
                    <img src="./../../assets/t-info.png">
                    <router-link :to="{ name: 'category'}">
                        <span>
                            Котегории
                        </span>
                    </router-link>
                </b-col>
                <b-col cols="12" sm="8" class="search-input">
                    <div class="d-flex">
                        <div class="search-title">Я ИЩУ</div>
                        <div>
                            <input type="search" placeholder="Я ищу..." class="w-100 info-input form-control outline-none">
                        </div>
                        <div class="search-button">
                            <div>
                                <SearchIcon></SearchIcon>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col sm="2" class="watch-categories">
                    <router-link :to="{ name: 'category'}">
                        <span>
                            Котегории
                        </span>
                    </router-link>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {
        SearchIcon
    } from 'vue-feather-icons'
    export default {
        name: 'main-header',
        components: {
            SearchIcon
        }
    }
</script>
