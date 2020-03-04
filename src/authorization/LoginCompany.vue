<template>
    <div>
        <div class="container" id="login">
            <div class="mobile-logo text-center">
                <router-link :to="{ name: 'home' }">
                    <img src="../assets/t-info.png" alt="t-info">
                </router-link>
            </div>
            <b-row>
                <b-col class="briefly-org-info">
                    <div class="briefly-info text-white">
                        <div class="logo-t-info">
                            <img src="../assets/t-info.png" alt="t-info">
                        </div>
                        <div class="tel-mobile">
                            <div class="font-weight-bold">120 20 20 </div>
                            <div>СПРАВОЧНИК УЗБЕКИСТАНА</div>
                        </div>
                        <div class="text-clue">
                            Зарегестрировавшись вы получите <br> возможность быть ближе к вашим клиентам, предостовлять актуальную информацию<br> о вашей деятельности,<br> местонаождении
                        </div>
                        <div class="login-button">
                            <router-link :to="{ name: 'signin' }">
                                <b-button class="info-button-color">Войти в личный кабинет</b-button>
                            </router-link>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="login-component">
                        <div class="block-title font-weight-bold brand-color">Регистрация пользователя</div>
                        <div class="text-center login-company pb-4">
                            или<br>
                            <router-link class="text-uppercase brand-color cursor-pointer" :to="{ name: 'login-company' }">
                                нажмите сюда для регестрации пользователя
                            </router-link>
                        </div>
                        <div class="registr-decription">
                            Информация о вашей компании будет доступна после оплаты. Способы оплаты будут предоставлены после регестрации
                        </div>
                        <form action="">
                            <select class="info-select form-control">
                                <option value="0">ЧП</option>
                                <option value="1">ФЛ</option>
                            </select>
                            <input class="info-input form-control" v-model="orgName" @blur="$v.orgName.$touch()" :class="{ 'is-invalid': $v.orgName.$error }" placeholder="Название компании">
                            <div class="contact-person">КОНТАКТНОЕ ЛИЦО</div>
                            <input type="text" class="info-input form-control" v-model="name" @blur="$v.name.$touch()" :class="{ 'is-invalid': $v.name.$error }" placeholder="Имя" required>
                            <input type="text" class="info-input form-control" v-model="surename" @blur="$v.surename.$touch()" :class="{ 'is-invalid': $v.surename.$error }" placeholder="Фамилия" required>
                            <input class="info-input form-control" v-model.trim.lazy="$v.phoneNumber.$model" @blur="$v.phoneNumber.$touch()" :class="{ 'is-invalid': $v.phoneNumber.$error }" placeholder="Телефон" required>
                            <input type="email" class="info-input form-control" v-model="emailAddres" @blur="$v.emailAddres.$touch()" :class="{ 'is-invalid': $v.emailAddres.$error }" placeholder="E-mail">
                            <input type="password" class="info-input form-control" v-model="password"  @blur="$v.password.$touch()" :class="{ 'is-invalid': $v.password.$error }" placeholder="Пароль">
                            <input type="password" class="info-input form-control" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()" :class="{ 'is-invalid': $v.passwordConfirm.$error }" placeholder="Повторите пароль">
                        </form>
                        <div class="registr-decription">
                            Нажимая «Зарегистрироваться»,
                            вы подтверждаете, что ознакомлены и полностью согласны
                            с <span class="brand-color cursor-pointer">условиями использования сайта</span>.
                        </div>
                        <router-link :to="{ name: 'home' }" v-if="
                                !$v.name.$error &&
                                !$v.phoneNumber.$error &&
                                !$v.surename.$error &&
                                !$v.passwordConfirm.$error &&
                                !$v.emailAddres.$error &&
                                 $v.passwordConfirm.sameAsPassword &&
                                 $v.surename.required &&
                                 $v.phoneNumber.required &&
                                 $v.name.required &&
                                 $v.password.required &&
                                 $v.orgName.required">
                                <div class="registr-button text-center">
                                    <b-button @click="setToLocalStorage" class="info-button-dark-color">Зарегестрироваться</b-button>
                                </div>
                        </router-link>
                        <div v-else class="registr-button text-center">
                            <b-button class="info-button-dark-color" disabled>Зарегестрироваться</b-button>
                        </div>
                        <div class="have-accaunt text-center pt-3">
                            Вы уже зарегестрированы?
                            <router-link :to="{ path: 'signin' }">
                                <span class="brand-color cursor-pointer">Вход</span>
                            </router-link>
                        </div>
                        <div class="empty-inputs danger" v-if="$v.name.$error ||
                                $v.phoneNumber.$error ||
                                $v.surename.$error ||
                                $v.passwordConfirm.$error ||
                                $v.emailAddres.$error ||
                                $v.orgName.$error"
                                >
                            Все поля необходимы для заполнения
                        </div>
                    </div>
                </b-col>
                <b-col class="line-with-slogan">
                    <div class="slogan text-right">
                    <span class="text-center">
                        У нас найдется все
                    </span>
                    <img src="../assets/line.png" alt="slogan">
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {email, required, sameAs} from "vuelidate/lib/validators";
    import { phoneValidate } from "../validators/custom-validators";

    export default {
    name: 'LoginCompany',
    data() {
        return {
            orgName: null,
            name: null,
            surename: null,
            phoneNumber: null,
            emailAddres: null,
            password: null,
            passwordConfirm: null,
            authData: {
                access_token:"AO85txwkw9NSjnuyjjMGtJzj60JnEldu-beOf6_XLXoytcbYB68BjGY0gy2JBeb812RsV1ausJGc29XZzxq9Mji2YOtYCm7h2d_paHkCFWHxXtPnK47Lb_h1FKPBXTFC16S0VIAfx9NrhsbTMZedluOYRl3G7Wgcp4Hk3Wvlp6LInG4Ykf83k_v9GGk5l4FW2E_r-_h2CrbUPtP45XtgF3oLPKESFwUDoxWDDFdWvg6EMB0FWIxbopMpwtWt_1P2",
                expires_in: 604799,
                token_type:"bearer",
                gotat: "2020-01-15T12:19:08.266Z"
            }
        }
    },
    methods: {
        setToLocalStorage() {
            this.$store.commit('setToLocalStorage', this.authData)
        }
    },
    validations: {
            orgName: {
                required
            },
            name: {
                required
            },
            surename: {
                required
            },
            phoneNumber: {
                phoneValidate,
                required
            },
            emailAddres: {
                email
            },
            password: {
                required
            },
            passwordConfirm: {
                required,
                sameAsPassword: sameAs('password')
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

