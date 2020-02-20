<template>
    <div id="add-org">
        <div class="container">
            <b-row>
                <b-col cols="2">
                    <div class="category-left personal-sidebar">
                        <div class="category-title personal-data cursor-pointer">
                                Компания
                        </div>
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'personal-area' }">
                                Счета
                            </router-link>
                        </div>
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'personal-area' }">
                                Списки сохраненных
                            </router-link>
                        </div>
                    </div>
                </b-col>
                <b-col sm="12" md="10" class="content">
                    <div class="toggle-button-filter">
                        <div>
                            <span>
                                <router-link :to="{ name: 'personal-area' }">
                                    Счета
                                </router-link>
                            </span>
                        </div>
                        <div>
                            <span>
                                <router-link :to="{ name: 'personal-area' }">
                                    Списки сохраненных
                                </router-link>
                            </span>
                        </div>
                        <div class="active">
                            <span>
                                Компания
                            </span>
                        </div>
                    </div>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text pr-3">
                                    Компания
                                </div>
                            </div>
                            <div class="edit-link mt-2">
                                <span v-if="isEditActive" @click="isEditActive = !isEditActive">
                                    Назад
                                </span>
                                <span v-else @click="isEditActive = !isEditActive">
                                    Редактировать
                                </span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row  class="avatar-data">
                        <b-col class="avatar-parent" :class="{ 'flex-column' : isEditActive }" md="12" xl="4" lg="5">
                            <div :class="{ 'd-flex justify-content-center' : isEditActive }">
                                <div class="avatar">
                                    <input style="display: none" type="file" id="imageUpload" ref="imageUpload" @change="onChangeUploadAvatar" accept=".png, .jpg, .jpeg">
                                    <img v-if="imgUrl" :src="this.$store.getters.valueavatarImg" class="rounded-circle w-100 h-100">
                                    <img v-else src="../assets/user.png" class="rounded-circle w-100 h-100">
                                </div>
                            </div>
                            <div :class="{ 'd-flex justify-content-center' : isEditActive }">
                                <div v-if="isEditActive" class="change-avatar cursor-pointer">
                                    <label for="imageUpload" class="cursor-pointer">заменить</label>
                                    <div class="text-danger" @click="onClickDeleteAvatar">удалить аватарку</div>
                                </div>
                            </div>
                        </b-col>
                        <b-col class="data-input" md="12" lg="7" xl="8">
                            <form>
                                <select class="info-select form-control" :disabled="!isEditActive">
                                    <option value="0">ЧП</option>
                                    <option value="1">ФЛ</option>
                                </select>
                                <input class="info-input form-control fixed-width" placeholder="Название компании"  :disabled="!isEditActive">
                                <textarea class="info-input form-control" placeholder="Описание" :disabled="!isEditActive"></textarea>
                            </form>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text pr-3">
                                    Относящиеся категории
                                </div>
                            </div>
                            <div class="edit-link mt-2">
                                <span v-if="isDevideToCategory" @click="isDevideToCategory = !isDevideToCategory">
                                    Назад
                                </span>
                                <span v-else @click="isDevideToCategory = !isDevideToCategory">
                                    Редактировать
                                </span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="choose-category">
                        <b-col lg="12" xl="6" class="mt-3">
                            <v-select v-model="selectedCategoriesTitle" :options="categoriesTitle" label="name" :multiple="true" :disabled="!isDevideToCategory" placeholder="Название категории"></v-select>
                        </b-col>
                        <b-col lg="12" xl="6" class="mt-3">
                            <v-select v-model="selectedCategoriesService" :options="categoriesService" label="name" :multiple="true" :disabled="!isDevideToCategory" placeholder="Услуги" ></v-select>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    Адрес
                                </div>
                            </div>
                            <div class="edit-link edit-link-child mt-2">
                                <span v-if="isLocationActive" @click="isLocationActive = !isLocationActive">
                                    Назад
                                </span>
                                <span v-else @click="isLocationActive = !isLocationActive">
                                    Редактировать
                                </span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="location-data">
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" placeholder="Город" :disabled="!isLocationActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" placeholder="Район"  :disabled="!isLocationActive">
                            <input class="info-input form-control fixed-width" placeholder="Улица"  :disabled="!isLocationActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <textarea class="info-input fixed-textarea form-control" placeholder="Ориентир" :disabled="!isLocationActive"></textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    контакты
                                </div>
                            </div>
                            <div class="edit-link edit-link-child mt-2">
                                <span v-if="isContactActive" @click="isContactActive = !isContactActive">
                                    Назад
                                </span>
                                <span v-else @click="isContactActive = !isContactActive">
                                    Редактировать
                                </span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="contacts-data">
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" placeholder="Телефон" :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="Телефон 2"  :disabled="!isContactActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" placeholder="Телефон 3"  :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="Факс"  :disabled="!isContactActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" placeholder="E-mail"  :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="вебсайт"  :disabled="!isContactActive">
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    режим работы
                                </div>
                            </div>
                            <div class="edit-link edit-link-child mt-2">
                                <span v-if="isTimetableActive" @click="isTimetableActive = !isTimetableActive">
                                    Назад
                                </span>
                                <span v-else @click="isTimetableActive = !isTimetableActive">
                                    Редактировать
                                </span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="timetable-data">
                        <b-col cols="12" class="d-flex">
                            <span class="timetable-title">
                                Режим работы:
                            </span>
                            <span class="d-flex weeks" v-if="isTimetableActive">
                                <div
                                        class="week-days cursor-pointer"
                                        :class="{ active : i.active }"
                                        @click="i.active = !i.active"
                                        v-for="i in weeks" v-bind:key="i.weeks"
                                >{{ i.title }}
                                </div>
                            </span>
                            <span class="d-flex weeks" v-else>
                                <div
                                        class="week-days"
                                        :class="{ active : i.active }"
                                        v-for="i in weeks" v-bind:key="i.weeks"
                                >{{ i.title }}
                                </div>
                            </span>
                        </b-col>
                        <b-col cols="12" class="d-flex">
                            <span class="timetable-title">
                                Время работы:
                            </span>
                            <span class="work-start-over">
                                <the-mask :disabled="!isTimetableActive" type="text" mask="##:##" class="info-input form-control" placeholder="00:00"/>
                                -
                                <the-mask :disabled="!isTimetableActive" type="text" mask="##:##" class="info-input form-control" placeholder="00:00"/>
                            </span>
                        </b-col>
                        <b-col cols="12" class="d-flex " >
                            <span class="timetable-title">
                                Обед:
                            </span>
                            <span class="work-start-over">
                                <the-mask :disabled="!isTimetableActive" type="text" mask="##:##" class="info-input form-control" placeholder="00:00"/>
                                -
                                <the-mask :disabled="!isTimetableActive" type="text" mask="##:##" class="info-input form-control" placeholder="00:00"/>
                            </span>
                        </b-col>
                    </b-row>
                    <b-row class="pb-3">
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    Фотографии
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="gallery d-flex">
                        <div v-for="(i, index) in orgPics" :key="i.orgPics" class="mr-1">
                            <input style="display: none" type="file" :id="'fileUploadComp_' + index" @change="onChangeUploadOrgPics(index, $event)"  accept=".png, .jpg, .jpeg">
                            <img v-if="i.img" :src="i.img" class="w-100 pr-2 h-100 cursor-pointer">
                            <label v-else :for="'fileUploadComp_' + index">
                                <img src="../assets/download.png" class="w-100 h-100 cursor-pointer">
                            </label>
                            <XIcon v-show="i.img" @click="onClickDeleteOrgPics(index)" class="cursor-pointer"></XIcon>
                        </div>
                    </div>
                    <b-row class="org-tool">
                        <b-col cols="12" class="text-right">
                            <b-button class="save">Сохранить</b-button>
                            <b-button class="publication ml-3">Опубликовать компанию</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import {
        XIcon
    } from 'vue-feather-icons'
    export default {
        name: 'add-org',
        data() {
            return {
                isEditActive: false,
                isLocationActive: false,
                isContactActive: false,
                isTimetableActive: false,
                isDevideToCategory: false,
                imgUrl: null,
                selectedCategoriesService: null,
                categoriesService: [
                    { name: 'Автозаправочные станции' },
                    { name: 'Акустические системы' },
                    { name: 'Автоинспекции' },
                    { name: 'Автомобили - автомагнитолы' },
                    { name: 'Автозапчасти для грузовых автомобилей' },
                    { name: 'Автозапчасти для легковых автомобилей' },
                    { name: 'Автомобили - жидкость тормозная' },
                    { name: 'Автомобили - комплексные пункты техобслуживания' },
                    { name: 'Автомобили - кондиционеры' },
                ],
                selectedCategoriesTitle: null,
                categoriesTitle: [
                    { name: 'Автомобили'},
                    { name: 'Иностранные компании'},
                    { name: 'Административные органы'},
                    { name: 'Банки и бизнес услуги'},
                    { name: 'Бытовая техника'},
                    { name: 'Бытовые услуги' },
                    { name: 'Гостиницы и туризм'},
                ],
                weeks: [
                    {
                        title: 'ПН',
                        active: true
                    },
                    {
                        title: 'ВТ',
                        active: true
                    },
                    {
                        title: 'СР',
                        active: true
                    },
                    {
                        title: 'ЧТ',
                        active: true
                    },
                    {
                        title: 'ПТ',
                        active: true
                    },
                    {
                        title: 'СБ',
                        active: false
                    },
                    {
                        title: 'ВС',
                        active: false
                    }
                ],
                orgPics: [
                    {
                        img: null
                    }
                ],
            }
        },
        components: {
            XIcon
        },
        methods: {
            onChangeUploadAvatar () {
                const file = this.$refs.imageUpload.files[0];
                this.imgUrl = URL.createObjectURL(file);
                this.$store.commit('chnageValueAvatarImage', this.imgUrl)
            },
            onClickDeleteAvatar () {
                this.imgUrl = null;
                this.$store.commit('chnageValueAvatarImage', this.imgUrl);
            },
            onChangeUploadOrgPics(index, event) {
                const file = event.target.files[0];
                this.orgPics[index].img = URL.createObjectURL(file);
                if (!(this.orgPics.length === 5)) {
                    this.orgPics.push({
                        img: null
                    })
                }
            },
            onClickDeleteOrgPics(index) {
                this.orgPics[index].img = null;
                this.$delete(this.orgPics, index)
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