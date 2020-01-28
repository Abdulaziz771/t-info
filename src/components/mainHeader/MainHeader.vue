<template>
    <div class="container" id="main-header">
        <div class="main-search-parent">
            <b-row class="main-search">
                <b-col cols="2" class="logo-search">
                    <img src="./../../assets/t-info.png">
                </b-col>
                <b-col cols="8">
                    <div class="d-flex">
                        <div class="search-title">Я ИЩУ</div>
                        <div>
                            <input type="search" class="w-100 info-input form-control outline-none">
                        </div>
                        <div class="search-button">
                            <div>
                                <SearchIcon></SearchIcon>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="2" class="watch-categories">
                    <span>
                        Котегории
                    </span>
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
