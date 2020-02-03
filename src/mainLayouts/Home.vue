<template>
    <div>
        <div class="container" id="home">
            <div class="briefly-info">
                <b-row>
                    <b-col class="text-white">
                        <img src="./../assets/t-info.png" class="home-logo" alt="t-info">
                        <span class="tel-mobile">
                            <span>
                                120 20 20
                            </span>
                            <span>
                                СПРАВОЧНИК УБЕКСИТАНА
                            </span>
                        </span>
                    </b-col>
                    <b-col class="slogan text-right text-white">
                        <span class="position-absolute">
                            У нас найдется все
                        </span>
                        <router-link :to="{ name: 'home' }">
                            <img src="../assets/line.png" alt="slogan">
                        </router-link>
                    </b-col>
                </b-row>
            </div>
            <div class="search-component">
                <b-tabs class="text-white">
                    <b-tab title="Поиск" active>
                        <div class="search-panel">
                            <div class="font-weight-bold">
                                Я ИЩУ
                            </div>
                            <div>
                                <input placeholder="Я ищу..." class="outline-none form-control info-input" type="search">
                            </div>
                            <div @click="searchOrgs">
                                <span>
                                    <SearchIcon></SearchIcon>
                                </span>
                                <span>
                                    Искать
                                </span>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Котегория от А до Я" >
                        <b-row>
                            <b-col class="popular-button" cols="2">
                                <div>
                                    <span>Популярное</span>
                                </div>
                            </b-col>
                            <b-col class="alphabet p-0" cols="8">
                                <span class="letters cursor-pointer" v-for="letter in alphabet" :key="letter.letter">{{ letter.letter }}</span>
                            </b-col>
                            <b-col class="view-all" cols="2">
                                <span class="cursor-pointer"><i>Смотреть все</i></span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="popular-points">
                                <ul class="mb-0 pt-3 ">
                                    <li v-for="i in items" :key="i.id" class="cursor-pointer" >{{ i.name }}</li>
                                </ul>
                            </b-col>
                        </b-row>
                    </b-tab>
                </b-tabs>
            </div>
            <div class="home-footer">
                <div class="container">
                    <b-row class="orgs-tab">
                        <b-col cols="10">
                            <b-tabs>
                                <b-tab title="Все организации">
                                    <b-row class="new-orgs">
                                        <b-col lg='4' md="6" class="org cursor-pointer d-flex" v-for="(org, index) in newOrgs" :key="index">
                                            <div class="org-image">
                                                <img :src="org.icon">
                                            </div>
                                            <div class="name-category-parent">
                                                <div class="org-name pb-1">{{ org.heading }}</div>
                                                <span class="org-category" v-for="desc in org.bodying.slice(0, 5)" :key="desc.name">{{ desc.name }}</span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-tab>
                                <b-tab title="Новое в справочнике">
                                    <b-row class="new-orgs">
                                        <b-col lg='4' md="6" class="org cursor-pointer d-flex" v-for="(org) in newOrgs.slice(0, 5)" :key="org.id">
                                            <div class="org-image">
                                                <img :src="org.icon">
                                            </div>
                                            <div class="name-category-parent">
                                                <div class="org-name pb-1">{{ org.heading }}</div>
                                                <span class="org-category" v-for="desc in org.bodying.slice(0, 5)" :key="desc.id">{{ desc.name }}</span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-tab>
                            </b-tabs>
                        </b-col>
                        <b-col cols="2">
                            <div class="adds">
                                <img src="./../assets/add/adds2.png" class="w-100 mb-3" alt="add">
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="container">
                    <b-row class="add-org">
                        <b-col cols="10" class="content-padding">
                            <div class="title-add-new-org">
                                Добавить компанию
                            </div>
                            <div class="add-new-org">
                                <b-row>
                                    <b-col class="user-type" cols="3">
                                        <div class="select-label">Форма собственности</div>
                                        <select class="info-select input-label w-100 form-control">
                                            <option value="0">ЧП</option>
                                            <option value="1">ФЛ</option>
                                        </select>
                                    </b-col>
                                    <b-col class="org-name" cols="7">
                                        <div class="input-label">Название организации</div>
                                        <input class="info-input form-control" placeholder="Название компании">
                                    </b-col>
                                    <b-col cols="2" class="contnie-button-parent p-0">
                                        <div class="contnie-button">
                                            <span>Продолжить</span>
                                            <ArrowRightIcon></ArrowRightIcon>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        <b-col cols="2" class="adds-padding adds">
                            <img src="./../assets/add/adds1.png" class="w-100" alt="add">
                        </b-col>
                    </b-row>
                </div>
                <div class="container mobile-catalog">
                    <div class="mobile-section">
                        <b-row>
                            <b-col cols="12" sm="4" @click="tab1active" :class="{ active : tab1 }" class="catalog-button">
                                <span>каталог</span>
                            </b-col >
                            <b-col cols="12" sm="4" @click="tab2active" :class="{ active : tab2 }" class="new-orgs-button">
                                <span>новое в справочнике</span>
                            </b-col>
                            <b-col cols="12" sm="4" class="emergancy-orgs-button ">
                                <router-link :to="{ name: 'login-company' }">
                                    <span>Добавить команию</span>
                                </router-link>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="catalog-parent">
                        <div v-show="tab1" class="catalog-list" v-for="item in catalog" :key="item.id">
                            <div class="catalog-icon">
                                <img :src="item.icon">
                            </div>
                            <div class="catalog-description">
                                <div class="catalog-heading">{{  item.heading  }}</div>
                                <div>
                                    <span class="catalog-body cursor-pointer" v-for="desc in item.bodying.slice(0, 5)" :key="desc.name">{{ desc.name }},</span>
                                </div>
                            </div>
                        </div>
                        <div v-show="tab2" class="catalog-list" v-for="item in newOrgs" :key="item.id">
                            <div class="catalog-icon">
                                <img :src="item.icon">
                            </div>
                            <div class="catalog-description">
                                <div class="catalog-heading">{{  item.heading  }}</div>
                                <div>
                                    <span class="catalog-body cursor-pointer" v-for="desc in item.bodying.slice(0, 5)" :key="desc.name">{{ desc.name }},</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ArrowRightIcon,
    SearchIcon
} from 'vue-feather-icons'
export default {
    name: 'home',
    data() {
        return {
            items: [
                { name: 'Достопромечательности', id: 0 },
                { name: 'Исторические', id: 1 },
                { name: 'Стройка инструментоа', id: 2 },
                { name: 'Индустрия', id: 3 },
                { name: 'Отчистка земли', id: 4 },
                { name: 'Телефоны', id: 5 },
                { name: 'Достопромечательност', id: 6 },
                { name: 'Исторические', id: 7},
                { name: 'Стройка инструментоа', id: 8 },
                { name: 'Индустрия', id: 9 },
                { name: 'Отчистка земли', id: 10 },
                { name: 'Телефоны', id: 11 },
                { name: 'Индустрия', id: 12 },
                { name: 'Отчистка земли', id: 13 },
                { name: 'Телефоны', id: 14 },
                { name: 'Достопромечательнос', id: 15 },
                { name: 'Исторические', id: 16 },
                { name: 'Стройка инструментоа', id: 17 },
                { name: 'Индустрия', id: 18 },
                { name: 'Отчистка земли', id: 19 },
                { name: 'Телефоны', id: 20 },
                { name: 'Индустрия', id: 21 },
                { name: 'Отчистка земли', id: 22 },
                { name: 'Телефоны', id: 23 },
                { name: 'Достопромечательно', id: 25 },
                { name: 'Исторические', id: 26 },
                { name: 'Стройка инструментоа', id: 27 },
                { name: 'Индустрия', id: 28 },
                { name: 'Отчистка земли', id: 29 },
                { name: 'Телефоны', id: 30 },
                { name: 'Исторические', id: 31 },
                { name: 'Стройка инструментоа', id: 32 },
                { name: 'Телефоны', id: 33 },
                { name: 'Достопромечательн', id: 34 },
                { name: 'Исторические', id: 35 },
            ],
            alphabet: [
                { letter: 'A' },
                { letter: 'Б' },
                { letter: 'В' },
                { letter: 'Г' },
                { letter: 'Д' },
                { letter: 'Е' },
                { letter: 'Ё' },
                { letter: 'Ж' },
                { letter: 'З' },
                { letter: 'И' },
                { letter: 'Й' },
                { letter: 'К' },
                { letter: 'Л' },
                { letter: 'М' },
                { letter: 'Н' },
                { letter: 'О' },
                { letter: 'П' },
                { letter: 'Р' },
                { letter: 'С' },
                { letter: 'Т' },
                { letter: 'У' },
                { letter: 'Ф' },
                { letter: 'Х' },
                { letter: 'Ч' },
                { letter: 'Ш' },
                { letter: 'Щ' },
                { letter: 'Ь' },
                { letter: 'Ъ' },
                { letter: 'Э' },
                { letter: 'Ю' },
                { letter: 'Я' },
            ],
            newOrgs: [
                {
                    id : 1,
                    heading: 'Рестораны и кафе',
                    bodying: [
                        { name: 'Банкетные залы'},
                        { name: 'Здоровое питание - кафе'},
                        { name: 'Кафе'},
                        { name: 'Бары'},
                        { name: 'Кейтеринг - кофе-брейки'},
                        { name: 'фуршеты'},
                        { name: 'обеды'},
                        { name: 'Общественное питание'},
                        { name: 'Рестораны'},
                        { name: 'Фитобары'},
                        { name: 'Чайханы'}
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/17.png'),
                    rate: 2
                },
                {
                    id : 2,
                    heading: 'Пищевое производство',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/24.png'),
                    rate: 3
                },
                {
                    id : 3,
                    heading: 'Нефтегазовая отрасль',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/22.png'),
                    rate: 5
                },
                {
                    id : 4,
                    heading: 'Компьютеры и оргтехника',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/11.png'),
                    rate: 5
                },
                {
                    id : 5,
                    heading: 'Рестораны и кафе',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/4.png'),
                    rate: 1
                },
                {
                    id : 6,
                    heading: 'Автомобили',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/8.png'),
                    rate: 0
                },
                {
                    id : 7,
                    heading: 'Медицина',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/10.png'),
                    rate: 1
                },
                {
                    id : 8,
                    heading: 'Сельское хозяйство',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/23.png'),
                    rate: 4
                },
                {
                    id : 9,
                    heading: 'Автомобили',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/8.png'),
                    rate: 5
                },
                {
                    id : 10,
                    heading: 'Медицина',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/10.png'),
                    rate: 1
                },
                {
                    id : 11,
                    heading: 'Сельское хозяйство',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/23.png'),
                    rate: 0
                }
            ],
            catalog: [
                {
                    id : 1,
                    heading: 'Рестораны и кафе',
                    bodying: [
                        { name: 'Банкетные залы'},
                        { name: 'Здоровое питание - кафе'},
                        { name: 'Кафе'},
                        { name: 'Бары'},
                        { name: 'Кейтеринг - кофе-брейки'},
                        { name: 'фуршеты'},
                        { name: 'обеды'},
                        { name: 'Общественное питание'},
                        { name: 'Рестораны'},
                        { name: 'Фитобары'},
                        { name: 'Чайханы'}
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/17.png')
                },
                {
                    id : 2,
                    heading: 'Пищевое производство',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/24.png')
                },
                {
                    id : 3,
                    heading: 'Нефтегазовая отрасль',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/22.png')
                },
                {
                    id : 4,
                    heading: 'Компьютеры и оргтехника',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/11.png')
                },
                {
                    id : 5,
                    heading: 'Рестораны и кафе',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/4.png')
                },
                {
                    id : 6,
                    heading: 'Автомобили',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/8.png')
                },
                {
                    id : 7,
                    heading: 'Медицина',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/10.png')
                },
                {
                    id : 8,
                    heading: 'Сельское хозяйство',
                    bodying: [
                        { name: 'Банкетные залы' },
                        { name: 'Здоровое питание - кафе' },
                        { name: 'Кафе' },
                        { name: 'Бары' },
                    ],
                    location: { town: 'Ташкент', district: 'Юнусабад', street: 'Улица Амира Темура' },
                    icon: require('./../assets/icons/23.png')
                }
            ],
            tab1: true,
            tab2: false,
            tab3: false,
        }
    },
    components: {
        SearchIcon,
        ArrowRightIcon
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
        searchOrgs() {
            this.$router.push({ name: 'interface-orgs' })
        }
    }
}
</script>

<style>

    ul>li:before{
        content: "";
        color: #595959;
        display: list-item;
        position: absolute;
    }
</style>

