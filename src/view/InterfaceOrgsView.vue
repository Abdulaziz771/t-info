<template>
    <div class="bg-white" id="interface">
        <div class="interface container">
            <b-row>
                <b-col class="category-left" cols="2">
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
                <b-col class="content-center" cols="8">
                    <div class="tool-bar">
                        <div class="searched-text">
                            XUMO
                        </div>
                        <div class="matches">
                            Мы нашли 245 совпадений
                        </div>
                        <div class="toggle-button-filter">
                            <div class="active"><span>Популярное</span></div>
                            <div><span>А-Я</span></div>
                            <div><span>По рейтингу</span></div>
                        </div>
                    </div>
                    <div class="searched">
                        <div class="org" id="org" v-for="(org, index) in orgs" :key="org.id">
                            <div class="d-flex">
                                <div class="catalog-icon">
                                    <img :src="org.icon">
                                </div>
                                <div class="catalog-description">
                                    <div class="d-flex">
                                        <div class="catalog-heading"><span class="mr-2">{{ index +1  }}</span>    {{  org.heading  }}</div>
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
                                    <div>
                                        <span class="catalog-body cursor-pointer" v-for="desc in org.bodying.slice(0, 5)" :key="desc.name">{{ desc.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">

                    </div>
                </b-col>
                <b-col class="adds-right" cols="2"></b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
import {
    MapPinIcon
} from 'vue-feather-icons'
export default {
    name: 'interface-orgs',
    components: {
        StarRating,
        MapPinIcon
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            orgs: [
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
        }
    }
}
</script>
