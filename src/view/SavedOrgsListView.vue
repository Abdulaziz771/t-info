<template>
    <div id="personal-area">
        <div class="container">
            <b-row>
                <b-col class="category-left personal-sidebar" cols="2">
                    <div class="category-title personal-data cursor-pointer">
                        <router-link :to="{ name: 'add-org' }">
                            Создать организацию
                        </router-link>
                    </div>
<!--                    <div class="category-title personal-data cursor-pointer">-->
<!--                        <router-link>-->
<!--                            Счета-->
<!--                        </router-link>-->
<!--                    </div>-->
                    <div class="category-title personal-data cursor-pointer">
                        Списки сохраненных
                    </div>
                </b-col>
                <b-col class="content" md="10" cols="12">
                    <div class="toggle-button-filter">
                        <div class="active">
                            <span>
                                Список сохраненных
                            </span>
                        </div>
                        <div>
                            <span>
                                <router-link :to="{ name: 'add-org' }">
                                    Довление оргонизации
                                </router-link>
                            </span>
                        </div>
                    </div>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text pr-3 pl-4">
                                    Ваш список компаний
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="user-orgs">
                        <b-col cols="12">
                            <div class="org" v-for="(org, index) in sortByRate.slice(0, 4)" :key="org.index">
                                <router-link :to="{ name: 'details-org', params: { id: index } }">
                                    <div class="d-flex">
                                        <div class="catalog-icon">
                                            <img :src="require('./../assets/icons/' + org.icon)">
                                        </div>
                                        <div class="catalog-description">
                                            <div class="d-flex">
                                                <div class="catalog-heading"><span class="mr-2 org-index">{{ index + 1  }}</span>    {{  org.heading  }}</div>
                                            </div>
                                            <div class="location">
                                                <MapPinIcon></MapPinIcon>
                                                <span>{{ org.location.town }},</span>
                                                <span>{{ org.location.district }},</span>
                                                <span>{{ org.location.street }}</span>
                                            </div>
                                            <div class="category-child">
                                                <span class="catalog-body cursor-pointer" v-for="(desc, index) in org.bodying.slice(0, 5)" :key="index">{{ desc.name }}</span>
                                                <span class="delete-link">
                                                    <i>Удалить из списка</i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import org from './../../public/data/org';
    // import StarRating from 'vue-star-rating';
    import {
        MapPinIcon
    } from 'vue-feather-icons'
    export default {
        name: 'saved-orgs',
        data() {
            return {
                orgs: org ,
            }
        },
        components: {
            MapPinIcon,
        },
        computed: {
            sortByRate() {
                var curr = this;
                function compare(a, b) {
                    if (a.rate < b.rate)
                        return -1;
                    if (a.rate > b.rate)
                        return 1;
                    return 0;
                }

                return curr.orgs.sort(compare).reverse();
            }
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