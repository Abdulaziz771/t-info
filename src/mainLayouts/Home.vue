<template>
    <div>
        <div class="container" id="home">
            <div class="briefly-info">
                <b-row>
                    <b-col class="text-white">
                        <img src="./../assets/t-info.png" class="home-logo float-left" alt="t-info">
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
                        <img src="../assets/line.png" alt="slogan">
                    </b-col>
                </b-row>
            </div>
            <div class="main-search-component">
                <b-tabs class="text-white">
                    <b-tab title="Поиск">
                        <div class="search-panel">
                            <div class="font-weight-bold">
                                Я ИЩУ
                            </div>
                            <div>
                                <input class="outline-none form-control info-input" type="search">
                            </div>
                            <div>
                                <span>
                                    <SearchIcon></SearchIcon>
                                </span>
                                <span>
                                    Искать
                                </span>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Котегория от А до Я" active>
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
                                    <li v-for="i in items" :key="i.name" class="cursor-pointer" >{{ i.name }}</li>
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
                              <b-tab title="Новое в справочнике">
                                  <b-row class="new-orgs">
                                    <b-col cols='4' class="org cursor-pointer" v-for="org in newOrgs" :key="org.name">
                                        <div class="org-name pb-1">{{ org.name }}</div>
                                        <div class="org-category">{{ org.category }}</div>
                                    </b-col>
                                  </b-row>
                              </b-tab>
                              <b-tab title="Экстренные службы">ausdhausdhuiasdhauisdh<br>asdasd</b-tab>
                          </b-tabs>
                      </b-col>
                      <b-col cols="2"></b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    SearchIcon
} from 'vue-feather-icons'
export default {
    name: 'home',
    data() {
        return {
            items: [
                { name: 'Достопромечательности' },
                { name: 'Исторические' },
                { name: 'Стройка инструментоа' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Достопромечательности' },
                { name: 'Исторические' },
                { name: 'Стройка инструментоа' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Достопромечательности' },
                { name: 'Исторические' },
                { name: 'Стройка инструментоа' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Достопромечательности' },
                { name: 'Исторические' },
                { name: 'Стройка инструментоа' },
                { name: 'Индустрия' },
                { name: 'Отчистка земли' },
                { name: 'Телефоны' },
                { name: 'Исторические' },
                { name: 'Стройка инструментоа' },
                { name: 'Телефоны' },
                { name: 'Достопромечательности' },
                { name: 'Исторические' },
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
                { name: 'Puremilky', category: 'Продукты питания   Молочные продукты' },
                { name: 'аэрофлот', category: 'Авиакассы   Авиакомпании' },
                { name: 'Nestle', category: 'Продукты питания' },
                { name: 'DOCTOR D', category: 'Медицина   Клиники' },
                { name: 'Посольство россии', category: 'Представительства   Посольства' },
                { name: 'Sarkor telecom', category: 'Интернет   Провайдеры' },
                { name: 'agromir', category: 'Продукты питания   Молочные продукты' },
                { name: 'tuskish airways', category: 'Авиакассы   Авиакомпании' },
                { name: 'гламурпродукт', category: 'Молочные продукты' }
            ]
        }
    },
    components: {
        SearchIcon
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
    /*.test:nth-child(6n+1) {*/
    /*    clear: both;*/
    /*}*/
</style>

