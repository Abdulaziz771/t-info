<template>
    <div id="add-org">
        <div class="container">
            <b-row>
                <b-col cols="2">
                    <div class="category-left personal-sidebar">
                        <div class="category-title personal-data  cursor-pointer">
                            Контактное лицо
                        </div>
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'personal-area' }">
                                Компания
                            </router-link>
                        </div>
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'personal-area' }">
                                Филиалы
                            </router-link>
                        </div>
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'personal-area' }">
                                Счета
                            </router-link>
                        </div>

                    </div>
                </b-col>
                <b-col cols="10" class="content">
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
                        <b-col class="avatar-parent" :class="{ 'flex-column' : isEditActive }" xl="4" lg="5">
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
                        <b-col class="data-input" xl="8" lg="7">
                            <form>
                                <select class="info-select form-control" :disabled="!isEditActive">
                                    <option value="0">ЧП</option>
                                    <option value="1">ФЛ</option>
                                </select>
                                <input class="info-input form-control fixed-width" placeholder="Название компании" v-model="shurename" :disabled="!isEditActive">
                                <textarea class="info-input form-control" v-model="mobile" placeholder="Описание" :disabled="!isEditActive"></textarea>
                            </form>
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
                        <b-col cols="4">
                            <input class="info-input form-control fixed-width" placeholder="Город" v-model="shurename" :disabled="!isLocationActive">
                        </b-col>
                        <b-col cols="4">
                            <input class="info-input form-control fixed-width" placeholder="Район" v-model="shurename" :disabled="!isLocationActive">
                            <input class="info-input form-control fixed-width" placeholder="Улица" v-model="shurename" :disabled="!isLocationActive">
                        </b-col>
                        <b-col cols="4">
                            <textarea class="info-input fixed-textarea form-control" v-model="mobile" placeholder="Ориентир" :disabled="!isLocationActive"></textarea>
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
                        <b-col cols="4">
                            <input class="info-input form-control fixed-width" placeholder="Телефон" v-model="shurename" :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="Телефон 2" v-model="shurename" :disabled="!isContactActive">
                        </b-col>
                        <b-col cols="4">
                            <input class="info-input form-control fixed-width" placeholder="Телефон 3" v-model="shurename" :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="Факс" v-model="shurename" :disabled="!isContactActive">
                        </b-col>
                        <b-col cols="4">
                            <input class="info-input form-control fixed-width" placeholder="E-mail" v-model="shurename" :disabled="!isContactActive">
                            <input class="info-input form-control fixed-width" placeholder="вебсайт" v-model="shurename" :disabled="!isContactActive">
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
                        <div v-for="(i, index) in orgPics" :key="i.orgPics" class="mr-4">
                            <input type="file" id="imageUploadOrg" ref="imageUploadOrg" @change="onChangeUploadOrgPics(index)" style="display: none" accept=".png, .jpg, .jpeg">
                            <img v-if="i.img" :src="i.img" class="w-100 h-100 cursor-pointer">
                            <label v-else for="imageUploadOrg">
                                <img src="../assets/download.png" class="w-100 h-100 cursor-pointer">
                            </label>
                            <XIcon v-show="i.img" @click="onClickDeleteOrgPics(index)" class="cursor-pointer"></XIcon>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {
        TheMask
    } from 'vue-the-mask'
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
                imgUrl: null,
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
                    },
                    {
                        img: null
                    },
                    {
                        img: null
                    },
                    {
                        img: null
                    },
                    {
                        img: null
                    },
                ]
            }
        },
        components: {
            TheMask,
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
            onChangeUploadOrgPics(index) {
                const file = this.$refs.imageUploadOrg.files[0];
                this.orgPics[index].img = URL.createObjectURL(file)
            },
            onClickDeleteOrgPics(index) {
                this.orgPics[index].img = null;
            },
        }
    }
</script>