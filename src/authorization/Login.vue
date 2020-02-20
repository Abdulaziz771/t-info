<template>
    <div>
        <div class="container" id="login">
            <div class="mobile-logo text-center">
                <img src="../assets/t-info.png" alt="t-info">
            </div>
            <b-row>
                <b-col class="briefly-org-info">
                    <div class="briefly-info text-white">
                        <div class="logo-t-info">
                            <router-link :to="{ name: 'home' }">
                                <img src="../assets/t-info.png" alt="t-info">
                            </router-link>
                        </div>
                        <div class="tel-mobile">
                            <div class="font-weight-bold">120 20 20</div>
                            <div>СПРАВОЧНИК УЗБЕКИСТАНА</div>
                        </div>
                        <div class="text-clue">
                            Зарегестрировавшись вы будете в курсе <br> изменений в отслеживаемых <br> вами компанией
                        </div>
                        <div class="login-button">
                            <router-link :to="{ name: 'signin' }">
                                <b-button class="info-button-color">Войти в личный кабинет</b-button>
                            </router-link>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <form action="">
                    <div class="login-component">
                        <div class="block-title font-weight-bold brand-color">Регистрация пользователя</div>
                        <div class="text-center login-company pb-4">
                            или<br>
                            <router-link class="text-uppercase brand-color cursor-pointer" :to="{ name: 'login-company' }">
                                нажмите сюда для регестрации компании
                            </router-link>
                        </div>
                        <div class="registr-decription">
                            Зарегестрировавшись на нашем сайте вы получаете возможность
                            создовать актуальный список компаний.<br>
                            Чтобы зарегестрировать компанию нажмите
                            <router-link class="brand-color cursor-pointer" :to="{ path: 'login-company' }">сюда</router-link>
                        </div>
                        <input type="text" class="info-input form-control" v-model="name" @blur="$v.name.$touch()" :class="{ 'is-invalid': $v.name.$error }" placeholder="Имя" required>
                        <input type="text" class="info-input form-control" v-model="surename" @blur="$v.surename.$touch()" :class="{ 'is-invalid': $v.surename.$error }" placeholder="Фамилия" required>
                        <input class="info-input form-control" v-model.trim.lazy="$v.phoneNumber.$model" @blur="$v.phoneNumber.$touch()" :class="{ 'is-invalid': $v.phoneNumber.$error }" placeholder="Телефон" required>
                        <input type="email" class="info-input form-control" v-model="emailAddres" @blur="$v.emailAddres.$touch()" :class="{ 'is-invalid': $v.emailAddres.$error }" placeholder="E-mail">
                        <input type="password" class="info-input form-control" v-model="password"  @blur="$v.password.$touch()" :class="{ 'is-invalid': $v.password.$error }" placeholder="Пароль">
                        <input type="password" class="info-input form-control" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()" :class="{ 'is-invalid': $v.passwordConfirm.$error }" placeholder="Повторите пароль">
                        <div class="registr-decription">
                        Нажимая «Зарегистрироваться»,
                        вы подтверждаете, что ознакомлены и полностью согласны
                        с <span class="brand-color cursor-pointer">условиями использования сайта</span>.
                    </div>
                        <router-link
                                v-if="
                                !$v.name.$error &&
                                !$v.phoneNumber.$error &&
                                !$v.surename.$error &&
                                !$v.passwordConfirm.$error &&
                                !$v.emailAddres.$error &&
                                 $v.passwordConfirm.sameAsPassword &&
                                 $v.surename.required &&
                                 $v.phoneNumber.required &&
                                 $v.name.required &&
                                 $v.password.required
                                " :to="{ name: 'home' }">
                            <div class="registr-button text-center">
                                <b-button class="info-button-dark-color" type="submit" @click="setToLocalStorage">Зарегестрироваться</b-button>
                            </div>
                        </router-link>
                        <div v-else class="registr-button text-center">
                            <b-button class="info-button-dark-color" disabled >Зарегестрироваться</b-button>
                        </div>
                        <div class="have-accaunt text-center pt-3">
                            Вы уже зарегестрированы?
                            <router-link :to="{ path: 'signin' }">
                                <span class="brand-color cursor-pointer">Вход</span>
                            </router-link>
                        </div>
                        <div v-if="
                                $v.name.$error ||
                                $v.phoneNumber.$error ||
                                $v.surename.$error ||
                                $v.passwordConfirm.$error ||
                                $v.emailAddres.$error
                                 " class="empty-inputs danger">
                            Заполните обязательные поля
                        </div>
                    </div>
                    </form>
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
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { phoneValidate } from '../validators/custom-validators'
export default {
    name: 'login',
    data() {
        return {
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

