<template>
    <div class="container" id="main-header">
        <div class="main-search-parent">
            <b-row class="main-search">
                <b-col cols="12" sm="2" class="logo-search">
                    <router-link :to="{ name: 'home' }">
                        <img src="./../../assets/t-info.png">
                    </router-link>
                    <router-link :to="{ name: 'category'}">
                        <span>
                            Котегории
                        </span>
                    </router-link>
                </b-col>
                <b-col cols="12" sm="8" class="search-input">
                    <form @submit.prevent="searchOrgs" >
                        <div class="d-flex">
                            <div class="search-title">Я ИЩУ</div>
                            <div>
                                <input type="search" placeholder="Я ищу..." class="w-100 info-input form-control outline-none">
                            </div>
                            <div class="search-button">
                                <div @click="searchOrgs">
                                    <SearchIcon></SearchIcon>
                                </div>
                            </div>
                        </div>
                    </form>
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
        },
        methods: {
            searchOrgs() {
                this.$router.push({ name: 'interface-orgs' })
            },
        },
        created() {
            if (JSON.parse(localStorage.getItem('auth'))) {
                this.$store.commit('setLocalStorageBooleanValue', true)
            } else  {
                this.$store.commit('setLocalStorageBooleanValue', false)
            }
        }
    }
</script>
