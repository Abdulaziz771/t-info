<template>
    <div id="add-org">
        <div class="container">
            <b-row>
                <b-col cols="2">
                    <div class="category-left personal-sidebar">
                        <div class="category-title personal-data cursor-pointer">
                            Создать организацию
                        </div>
<!--                        <div class="category-title personal-data cursor-pointer">-->
<!--                            <router-link>-->
<!--                                Счета-->
<!--                            </router-link>-->
<!--                        </div>-->
                        <div class="category-title personal-data cursor-pointer">
                            <router-link :to="{ name: 'saved-orgs' }">
                                Списки сохраненных
                            </router-link>
                        </div>
                    </div>
                </b-col>
                <b-col sm="12" md="10" class="content">
                    <div class="toggle-button-filter">
<!--                        <div>-->
<!--                            <span>-->
<!--                                <router-link :to="{ name: 'personal-area' }">-->
<!--                                    Счета-->
<!--                                </router-link>-->
<!--                            </span>-->
<!--                        </div>-->
                        <div>
                            <span>
                                <router-link :to="{ name: 'saved-orgs' }">
                                    Списки сохраненных
                                </router-link>
                            </span>
                        </div>
                        <div class="active">
                            <span>
                                Довление оргонизации
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
                                    <img v-if="newOrg.imgUrl" :src="this.$store.getters.valueavatarImg" class="rounded-circle w-100 h-100">
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
                                <input  class="info-input form-control fixed-width" v-model="newOrg.orgName" @blur="$v.newOrg.orgName.$touch()" :class="{ 'is-invalid': $v.newOrg.orgName.$error }" placeholder="Название компании" :disabled="!isEditActive">
                                <textarea class="info-input form-control" v-model="newOrg.orgDescription" @blur="$v.newOrg.orgDescription.$touch()" :class="{ 'is-invalid': $v.newOrg.orgDescription.$error }" placeholder="Описание" :disabled="!isEditActive"></textarea>
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
                        </b-col>
                    </b-row>
                    <b-row class="choose-category">
                        <b-col lg="12" xl="6" class="mt-3">
                            <v-select v-model="newOrg.selectedCategoriesTitle"  :options="categoriesTitle" label="name" :multiple="true" :disabled="!isEditActive" placeholder="Название категории"></v-select>
                        </b-col>
                        <b-col lg="12" xl="6" class="mt-3">
                            <v-select v-model="newOrg.selectedCategoriesService" :options="categoriesService" label="name" :multiple="true" :disabled="!isEditActive" placeholder="Услуги" ></v-select>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    Адрес
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="location-data">
                        <b-col md="12" lg="4">
                            <b-form-select class="info-input form-control fixed-width" :options="towns" v-model="newOrg.town" @blur="$v.newOrg.town.$touch()" :class="{ 'is-invalid': $v.newOrg.town.$error }" placeholder="Город" :disabled="!isEditActive"></b-form-select>
                        </b-col>
                        <b-col md="12" lg="4">
                            <b-form-select class="info-input form-control fixed-width" :options="districts" v-model="newOrg.district" @blur="$v.newOrg.district.$touch()" :class="{ 'is-invalid': $v.newOrg.district.$error }" placeholder="Район"  :disabled="!isEditActive"></b-form-select>
                            <input class="info-input form-control fixed-width" v-model="newOrg.street" @blur="$v.newOrg.street.$touch()" :class="{ 'is-invalid': $v.newOrg.street.$error }" placeholder="Улица"  :disabled="!isEditActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <textarea class="info-input fixed-textarea form-control" v-model="newOrg.referencePoint" @blur="$v.newOrg.referencePoint.$touch()" :class="{ 'is-invalid': $v.newOrg.referencePoint.$error }" placeholder="Ориентир" :disabled="!isEditActive"></textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    контакты
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="contacts-data">
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" v-model="newOrg.phoneNumber"  @blur="$v.newOrg.phoneNumber.$touch()" :class="{ 'is-invalid': $v.newOrg.phoneNumber.$error }" placeholder="Телефон" :disabled="!isEditActive">
                            <input class="info-input form-control fixed-width"  v-model.trim.lazy="$v.newOrg.phoneNumber2.$model" :class="{ 'is-invalid': !$v.newOrg.phoneNumber2.phoneValidateNotimportant }" placeholder="Телефон 2"  :disabled="!isEditActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" v-model.trim.lazy="$v.newOrg.phoneNumber3.$model" :class="{ 'is-invalid': !$v.newOrg.phoneNumber3.phoneValidateNotimportant }" placeholder="Телефон 3"  :disabled="!isEditActive">
                            <input class="info-input form-control fixed-width" v-model="newOrg.fax" placeholder="Факс"  :disabled="!isEditActive">
                        </b-col>
                        <b-col md="12" lg="4">
                            <input class="info-input form-control fixed-width" v-model="newOrg.email" @blur="$v.newOrg.email.$touch()" :class="{ 'is-invalid': $v.newOrg.email.$error }" placeholder="E-mail"  :disabled="!isEditActive">
                            <input class="info-input form-control fixed-width" v-model="newOrg.webSite" placeholder="вебсайт"  :disabled="!isEditActive">
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text tool-bar-child pr-3">
                                    режим работы
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="timetable-data">
                        <b-col cols="12" class="d-flex">
                            <span class="timetable-title">
                                Режим работы:
                            </span>
                            <span class="d-flex weeks" v-if="isEditActive">
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
                        <b-row v-if="weeksLogic" class="pb-0 pl-3">
                            <b-col cols="12" class="pb-0">
                                <div class="text-danger font-weight-bold">Вы должны отметить хотябы один рабочий день</div>
                            </b-col>
                        </b-row>
                        <b-col cols="12" class="d-flex">
                            <span class="timetable-title">
                                Время работы:
                            </span>
                            <span class="work-start-over">
                                <the-mask :disabled="!isEditActive" type="text" mask="##:##" v-model="day.beginWork" @blur.native="$v.day.beginWork.$touch()" :class="{ 'is-invalid': $v.day.beginWork.$error }" class="info-input form-control" placeholder="00:00"/>
                                -
                                <the-mask :disabled="!isEditActive" type="text" mask="##:##" v-model="day.endWork" @blur.native="$v.day.endWork.$touch()" :class="{ 'is-invalid': $v.day.endWork.$error }" class="info-input form-control" placeholder="00:00"/>
                            </span>
                        </b-col>
                        <b-col cols="12" class="d-flex " >
                            <span class="timetable-title">
                                Обед:
                            </span>
                            <span class="work-start-over">
                                <the-mask :disabled="!isEditActive" type="text" mask="##:##" v-model="day.beginLunch" @blur.native="$v.day.beginLunch.$touch()" :class="{ 'is-invalid': $v.day.beginLunch.$error }" class="info-input form-control" placeholder="00:00"/>
                                -
                                <the-mask :disabled="!isEditActive" type="text" mask="##:##" v-model="day.endLunch" @blur.native="$v.day.endLunch.$touch()" :class="{ 'is-invalid': $v.day.endLunch.$error }" class="info-input form-control" placeholder="00:00"/>
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
                            <b-button @click="goBackRouter" class="btn-danger mr-3">Отменить</b-button>
                            <b-button v-if="allowTosave" class="save">
                                Сохранить
                            </b-button>
                            <b-button v-else class="save" disabled>
                                Сохранить
                            </b-button>
                            <b-button v-if="allowTosave" class="publication ml-3">
                                Опубликовать компанию
                            </b-button>
                            <b-button v-else class="publication ml-3" disabled>
                                Опубликовать компанию
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css'
    import { phoneValidate, phoneValidateNotimportant } from '../validators/custom-validators'
    import { required, email } from 'vuelidate/lib/validators'
    import {
        XIcon
    } from 'vue-feather-icons'
    import router from "../routes/router";
    export default {
        name: 'add-org',
        data() {
            return {
                isEditActive: true,
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
                categoriesTitle: [
                    { name: 'Автомобили'},
                    { name: 'Иностранные компании'},
                    { name: 'Административные органы'},
                    { name: 'Банки и бизнес услуги'},
                    { name: 'Бытовая техника'},
                    { name: 'Бытовые услуги' },
                    { name: 'Гостиницы и туризм'},
                ],
                towns: [
                    { text: 'Выберите город', disabled: true },
                    { text: 'Ташкент'},
                    { text: 'Ташкентская область'},
                    { text: 'Андижанская область'},
                    { text: 'Бухарская область'},
                    { text: 'Джизакская область'},
                    { text: 'Кашкадарьинская область'},
                    { text: 'Навоийская область'},
                    { text: 'Самаркандская область'},
                    { text: 'Сурхандарьинская область'},
                    { text: 'Сырдарьинская область'},
                    { text: 'Ферганская область'},
                    { text: 'Хорезмская область'},
                    { text: 'Республика Каракалпакстан'}
                ],
                districts: [
                    { text: 'Выберите район', disabled: true },
                    { text: 'Сергелийский район'},
                    { text: 'Мирзо-Улугбекский район'},
                    { text: 'Мирабадский район'},
                    { text: 'Бектемирский район'},
                    { text: 'Алмазарский (ранее Сабир-Рахимовский)'},
                    { text: 'Яшнободский (ранее Хамзинский)'},
                    { text: 'Юнусабадский район'},
                    { text: 'Учтепинский район'},
                    { text: 'Шайхантахурский район'},
                    { text: 'Чиланзарский район'},
                    { text: 'Яккасарайский район'}
                ],
                day: {
                    beginWork: null,
                    endWork: null,
                    beginLunch: null,
                    endLunch: null,
                },
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
                newOrg: {
                    imgUrl: null,
                    selectedCategoriesService: null,
                    orgName: null,
                    orgDescription: null,
                    selectedCategoriesTitle: null,
                    town: 'Выберите город',
                    district: 'Выберите район',
                    street: null,
                    referencePoint: null,
                    phoneNumber: null,
                    phoneNumber2: null,
                    phoneNumber3: null,
                    fax: null,
                    email: null,
                    webSite: null
                }
            }
        },
        components: {
            XIcon
        },
        methods: {
            onChangeUploadAvatar () {
                const file = this.$refs.imageUpload.files[0];
                this.newOrg.imgUrl = URL.createObjectURL(file);
                this.$store.commit('chnageValueAvatarImage', this.newOrg.imgUrl)
            },
            onClickDeleteAvatar () {
                this.newOrg.imgUrl = null;
                this.$store.commit('chnageValueAvatarImage', this.newOrg.imgUrl);
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
            goBackRouter() {
                router.back()
            }
        },
        computed: {
            weeksLogic() {
                let filteredWeeksArray = this.weeks.filter(day => day.active == false);
                if (filteredWeeksArray.length == 7) return true; else return false
            },
            allowTosave() {
                if (
                    this.$v.newOrg.orgName.required &&
                    this.$v.newOrg.orgDescription.required &&
                    this.newOrg.selectedCategoriesService &&
                    this.newOrg.selectedCategoriesTitle &&
                    this.$v.newOrg.referencePoint.required &&
                    !this.$v.newOrg.town.townFunc &&
                    !this.$v.newOrg.town.districtFunc &&
                    this.$v.newOrg.street.required &&
                    !this.$v.newOrg.phoneNumber.$error &&
                    this.$v.newOrg.phoneNumber2.phoneValidateNotimportant &&
                    this.$v.day.beginWork.required &&
                    this.$v.day.endWork.required &&
                    this.$v.day.beginLunch.required &&
                    this.$v.day.endLunch.required &&
                    !this.weeksLogic
                ) return true; else return false
            }
        },
        validations: {
            newOrg: {
                orgName: {
                    required
                },
                orgDescription: {
                    required
                },
                town: {
                    required,
                    townFunc: function (val) {
                        if (val === "Выберите город") return true; else return false
                    }
                },
                district: {
                    required,
                    districtFunc: function (val) {
                        if (val === "Выберите район") return true; else return false
                    }
                },
                street: {
                    required
                },
                referencePoint: {
                    required
                },
                phoneNumber: {
                    phoneValidate
                },
                phoneNumber2: {
                    phoneValidate,
                    phoneValidateNotimportant,
                },
                phoneNumber3: {
                    phoneValidate,
                    phoneValidateNotimportant
                },
                email: {
                    email
                }
            },
            day: {
                beginWork: {
                    required
                },
                endWork: {
                    required
                },
                beginLunch: {
                    required
                },
                endLunch: {
                    required
                },
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

<style>
    .btn-danger {
        color: #fff !important;
        background-color: #dc3545 !important;
        border-color: #dc3545 !important;
    }
</style>