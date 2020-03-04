
<template>
    <div id="personal-area">
        <div class="container">
            <b-row>
                <b-col class="category-left personal-sidebar" cols="2">
                    <div class="category-title personal-data cursor-pointer">
                        Личный кабинет
                    </div>
                    <div class="category-title personal-data cursor-pointer">
                        <router-link :to="{ name: 'user-orgs' }">
                            Список компаний
                        </router-link>
                    </div>
                </b-col>
                <b-col class="content" cols="12" md="10">
                    <div class="toggle-button-filter">
                        <div class="active">
                            <span>
                                Личный кабинет
                            </span>
                        </div>
                        <div>
                            <span>
                                <router-link :to="{ name: 'user-orgs' }">
                                    Список компанией
                                </router-link>
                            </span>
                        </div>
                    </div>
                    <b-row>
                        <b-col cols="12">
                            <div class="tool-bar float-left">
                                <div class="searched-text pr-3">
                                    личный кабинет
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
                        <b-col class="data-input" xl="5" lg="7">
                            <form>
                                <input class="info-input form-control" v-model="name" @blur="$v.name.$touch()" :class="{ 'is-invalid': $v.name.$error }" :disabled="!isEditActive">
                                <input class="info-input form-control" v-model="shurename" @blur="$v.shurename.$touch()" :class="{ 'is-invalid': $v.shurename.$error }" :disabled="!isEditActive">
                                <div class="input-group">
                                    <input class="info-input form-control" v-model="phoneNumber" @blur="$v.phoneNumber.$touch()" :class="{ 'is-invalid': $v.phoneNumber.$error }" :disabled="!isEditActive">
                                    <div class="input-group-append" v-if="confirmRecentPhoneData">
                                        <button class="btn btn-secondary"  type="button" disabled>Подтвердить</button>
                                    </div>
                                    <div v-else class="input-group-append" >
                                        <button class="btn btn-secondary"  type="button" @click="sendCodeConfirm('phoneCode')">Подтвердить</button>
                                    </div>

                                </div>
                                <div class="input-group">
                                    <input class="info-input form-control" v-model="emailAddres" @blur="$v.emailAddres.$touch()" :class="{ 'is-invalid': $v.emailAddres.$error }" :disabled="!isEditActive">
                                    <div v-if="confirmRecentEmailData" class="input-group-append">
                                        <button class="btn btn-secondary" type="button" disabled>Подтвердить</button>
                                    </div>
                                    <div v-else class="input-group-append">
                                        <button class="btn btn-secondary" type="button"  @click="sendCodeConfirm('emailCode')">Подтвердить</button>
                                    </div>
                                </div>
                            </form>
                        </b-col>
                    </b-row>
                    <div class="change-password-title" v-if="isEditActive">
                        <span>сменить пароль</span>
                        <b-row class="change-pasword">
                            <b-col xl="4" lg="6" cols="12">
                                <input type="password" class="info-input form-control" v-model.trim.lazy="$v.currentPassword.$model"  :class="{ 'is-invalid': !$v.currentPassword.checkPassword && $v.currentPassword.required }" placeholder="Текущщий пароль">
                            </b-col>
                            <template v-if="$v.currentPassword.checkPassword">
                                <b-col xl="5" lg="6" cols="12">
                                    <input type="password" class="info-input form-control" v-model="password" @blur="$v.password.$touch()" :class="{ 'is-invalid': $v.password.$error }" placeholder="Новый пароль">
                                </b-col>
                                <b-col cols="12" offset-lg="6" lg="6" offset-xl="4" xl="5">
                                    <input type="password" class="info-input form-control" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()" :class="{ 'is-invalid': $v.passwordConfirm.$error }" placeholder="Повторить новый пароль">
                                </b-col>
                            </template>
                        </b-row>
                    </div>
                    <div class="save pt-5 pb-5" v-if="isEditActive" >
                        <b-button v-if="allowToSavePersonalArea" @click="isEditActive = !isEditActive" variant="outline-secondary">Сохранить</b-button>
                        <b-button v-else variant="outline-secondary" disabled>Сохранить</b-button>
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-modal style="z-index: 999" size="md" ref="phoneCode" class="enter" hide-footer title="Подтверждения телефон номер">
            <div class="body-part">
                <div class="codeConfirm text-center">Введите код подтверждение от правленный по этому адресу: <b>{{ this.phoneNumber }}</b></div>
                <input type="text" class="info-input form-control" placeholder="Введите код подтверждение">
            </div>
            <div class="footer-part">
                <b-row>
                    <b-col cols="12">
                        <b-button @click="sendCodeConfirm('phoneCode')" class="save">Назад</b-button>
                        <b-button @click="sendCodeConfirm('phoneCode')" class="publication ml-3">Принять</b-button>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
        <b-modal style="z-index: 999" size="md" ref="emailCode" class="enter" hide-footer title="Подтверждения Email аддреса">
            <div class="body-part">
                <div class="codeConfirm text-center">Введите код подтверждение от правленный по этому адресу:<b>{{ this.emailAddres }}</b></div>
                <input type="text" class="info-input form-control" placeholder="Введите код подтверждение">
            </div>
            <div class="footer-part">
                <b-row>
                    <b-col cols="12">
                        <b-button @click="sendCodeConfirm('emailCode')" class="save">Назад</b-button>
                        <b-button @click="sendCodeConfirm('emailCode')" class="publication ml-3">Принять</b-button>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {email, required, sameAs } from "vuelidate/lib/validators";
    import { phoneValidate } from "../validators/custom-validators";
    export default {
        name: 'personal-area',
        data() {
            return {
                imgUrl: null,
                isEditActive: false,
                name: 'Мария',
                shurename: 'Гордиенко',
                phoneNumber: '+998998315081',
                emailAddres: 'mariya@gmail.ru',
                currentPassword: null,
                password: null,
                passwordConfirm: null,
                testPassword: 11,
            }
        },
        computed: {
            allowToSavePersonalArea() {
                if (
                    !this.$v.name.$error &&
                    this.$v.name.required &&
                    !this.$v.shurename.$error &&
                    this.$v.shurename.required &&
                    !this.$v.phoneNumber.$error &&
                    this.$v.phoneNumber.required &&
                    !this.$v.emailAddres.$error &&
                    !(!this.$v.currentPassword.checkPassword && this.$v.currentPassword.required) &&
                    !this.$v.passwordConfirm.$error
                ) return true;
                else return false
            },
            confirmRecentPhoneData() {
               if (this.phoneNumber != +998998315081) {
                    if (!this.$v.phoneNumber.$error) {
                        return false
                    } else return true
               } else return true
            },
            confirmRecentEmailData() {
                if (this.emailAddres != 'mariya@gmail.ru') {
                    if (!this.$v.emailAddres.$error) {
                        return false
                    } else return true
                } else  {
                    return true
                }
            }
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
            sendCodeConfirm(text) {
                this.$refs[text].toggle('#enter')
            },
        },
        validations: {
            name: {
                required
            },
            shurename: {
                required
            },
            emailAddres: {
                email,
                required
            },
            phoneNumber: {
                phoneValidate,
                required
            },
            currentPassword: {
                checkPassword(val) {
                    if (val == this.testPassword) {
                        return true
                    } else return false
                },
                required
            },
            password: {
            },
            passwordConfirm: {
                sameAsPassword: sameAs('password')
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

<style scoped lang="scss">
    .codeConfirm {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .footer-part {
        padding-top: 25px;
        text-align: right;
        button:nth-child(1) {
            font-size: 11px;
            color: black;
            background: transparent;
            border-color: #b5b5b5;
            &:hover {
                background: #d8d8d8;
                border: 1px solid transparent;
            }
        }
        button:nth-child(2) {
            font-size: 12px;
            color: white;
            border: none;
            background:#00C8FF;
            &:hover {
                background: #56daff;
            }
        }
    }
</style>