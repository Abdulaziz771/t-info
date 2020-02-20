<template>
    <div id="category">
        <div class="container category">
            <b-row>
                <b-col class="category-left" md="3" lg="2">
                    <div class="category-title">
                        Уточнить поиск
                    </div>
                    <div class="category-filter">
                        <span v-b-toggle.collapse-1 class="m-1">Категория</span>
                        <b-collapse visible  id="collapse-1">
                            <b-card>
                                <div class="category-elements"> <b-form-checkbox>Автомобили (356)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Бытовые услуги (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Инструменты  и приборы (10)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Культура (356)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Недвижимость,  бизнес-центры (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Общественные  организации (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Пищевая прод. (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Связь (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Сми (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Строительные  материалы (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Товары народного  потребления (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Тяжелая  промышленность (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Химическая  промышленность (128)</b-form-checkbox></div>
                                <div class="category-elements"><b-form-checkbox>Электротехническое  оборудование,  изделия (128)</b-form-checkbox></div>
                            </b-card>
                        </b-collapse>
                    </div>
                </b-col>
                <b-col class="content" md="9" lg="10">
                    <div class="tool-bar">
                        <div class="searched-text">
                            Категории
                        </div>
                        <div class="matches">
                            Нашли 245 категории
                        </div>
                    </div>
                    <div class="category-list">
                        <b-row class="beauty-scroll">
                            <b-col md="6" lg="4" class="org org-list" v-for="(org, index) in sortByRate" :key="org.index">
                                    <router-link :to="{ name: 'interface-orgs', params: { id: index } }">
                                        <div class="d-flex">
                                            <div class="catalog-icon">
                                                <img :src="require('./../assets/icons/' + org.icon)">
                                            </div>
                                            <div class="catalog-description">
                                                <div class="d-flex">
                                                    <div class="catalog-heading">{{  org.heading  }}</div>
                                                </div>
                                                <div class="category-child">
                                                    <span class="catalog-body cursor-pointer" v-for="(desc, index) in org.bodying.slice(0, 5)" :key="index">{{ desc.name }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import org from '../../public/data/org'
    export default {
        name: 'category',
        data() {
            return {
                orgs: org
            }
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