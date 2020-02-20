<template>
    <div class="bg-white" id="interface">
        <div class="interface container">
            <b-row>
                <b-col class="category-left" md="3" lg="2" cols="">
                    <div class="category-title">
                        Уточнить поиск
                    </div>
                    <div class="category-filter">
                        <span v-b-toggle.collapse-1 class="m-1">Категория</span>
                        <b-collapse visible  id="collapse-1">
                            <b-card>
                                <div class="category-elements"> <b-form-checkbox>Автосалоны (5)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Кафе (2)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Клиники (10)</b-form-checkbox></div>
                            </b-card>
                        </b-collapse>
                    </div>
                    <div class="location-filter">
                        <span v-b-toggle.collapse-2 class="m-1">Местоположение</span>
                        <b-collapse visible  id="collapse-2">
                            <b-card>
                                <div class="category-elements"><b-form-checkbox>Автосалоны (5)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Кафе (2)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Клиники (10)</b-form-checkbox></div>
                            </b-card>
                        </b-collapse>
                    </div>
                    <div class="district-filter">
                        <span v-b-toggle.collapse-3 class="m-1">Район</span>
                        <b-collapse visible  id="collapse-3">
                            <b-card>
                                <div class="category-elements"><b-form-checkbox>Шайхонторский</b-form-checkbox></div>
                            </b-card>
                        </b-collapse>
                    </div>
                </b-col>
                <b-col class="content-center" sm="12" md="9" lg="8" cols="">
                    <div class="tool-bar">
                        <div class="searched-text">
                            XUMO
                        </div>
                        <div class="matches">
                            Мы нашли 245 совпадений
                        </div>
                        <div class="toggle-button-filter">
                            <div @click="tab1active" :class="{ active : tab1 }"><span>По близости</span></div>
                            <div @click="tab2active" :class="{ active : tab2 }"><span>А-Я</span></div>
                            <div @click="tab3active" :class="{ active : tab3 }"><span>По рейтингу</span></div>
                        </div>
                    </div>
                    <div class="searched beauty-scroll">
                        <div class="org" v-for="(org, index) in sortByRate" :key="org.index">
                                <router-link :to="{ name: 'details-org', params: { id: index } }">
                                    <div class="d-flex">
                                    <div class="catalog-icon">
                                        <img :src="require('./../assets/icons/' + org.icon)">
                                    </div>
                                    <div class="catalog-description">
                                        <div class="d-flex">
                                            <div class="catalog-heading"><span class="mr-2 org-index">{{ index + 1  }}</span>    {{  org.heading  }}</div>
                                            <div class="stars-rate">
                                                <star-rating :show-rating="false" :rating="org.rate" :read-only="true" ></star-rating>
                                            </div>
                                        </div>
                                        <div class="location">
                                            <MapPinIcon></MapPinIcon>
                                            <span>{{ org.location.town }},</span>
                                            <span>{{ org.location.district }},</span>
                                            <span>{{ org.location.street }}</span>
                                        </div>
                                        <div class="category-child">
                                            <span class="catalog-body cursor-pointer" v-for="(desc, index) in org.bodying.slice(0, 5)" :key="index">{{ desc.name }}</span>
                                        </div>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                    </div>
                    <div class="pagination">

                    </div>
                </b-col>
                <b-col class="adds-right" cols="2">
                    <div class="adds">
                        <img src="./../assets/add/adds2.png" class="w-100 mb-3" alt="add">
                    </div>
                    <div class="adds">
                        <img src="./../assets/add/adds1.png" class="w-100 mb-3" alt="add">
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import org from './../../public/data/org';
import StarRating from 'vue-star-rating';
import {
    MapPinIcon
} from 'vue-feather-icons'
export default {
    name: 'interface-orgs',
    components: {
        StarRating,
        MapPinIcon,
    },
    data() {
        return {
            orgs: org ,
            tab1: true,
            tab2: false,
            tab3: false,
        }
    },
    methods: {
        tab2active() {
            this.tab1 = this.tab3 = false;
            this.tab2 = true
        },
        tab1active() {
            this.tab2 = this.tab3 = false;
            this.tab1 = true
        },
        tab3active() {
            this.tab2 = this.tab1 = false;
            this.tab3 = true
        },
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
