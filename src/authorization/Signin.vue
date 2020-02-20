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
                            <router-link :to="{ name: 'login' }">
                                <b-button class="info-button-color">Пройти регестрацию</b-button>
                            </router-link>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="login-component">
                        <div class="pb-3 block-title text-center font-weight-bold brand-color">Войти в систему</div>
                        <form action="">
                            <input type="text" v-model="emailORphone" @blur="$v.emailORphone.$touch()" :class="{ 'is-invalid': $v.emailORphone.$error }" class="mb-4 info-input form-control" placeholder="Телефон номер или E-mail">
                            <input type="password" v-model="password" @blur="$v.password.$touch()" :class="{ 'is-invalid': $v.password.$error }" class="mb-4 info-input form-control"  placeholder="Пароль">
                        </form>
                        <router-link :to="{ name: 'home' }">
                            <div class="registr-button text-center">
                                <router-link v-if="!$v.emailORphone.$error && !$v.password.$error && $v.emailORphone.required && $v.password.required" :to="{ name: 'home' }">
                                    <b-button @click="setToLocalStorage" class="info-button-dark-color">Войти</b-button>
                                </router-link>
                                <b-button v-else class="info-button-dark-color" disabled>Войти</b-button>
                            </div>
                        </router-link>
                        <div class="have-accaunt text-center pt-3">
                            Вы еще не зарегестрированы?
                            <router-link :to="{ path: 'login' }">
                                <span class="brand-color cursor-pointer">Регестрация</span>
                            </router-link>
                        </div>
                        <div class="empty-inputs danger" v-show="$v.emailORphone.$error || $v.password.$error">
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
    import { required } from 'vuelidate/lib/validators'
    import { addresORphoneNumber } from '../validators/custom-validators'
    export default {
        name: 'signin',
        data() {
            return {
                emailORphone: null,
                password: null,
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
            emailORphone: {
                required,
                addresORphoneNumber
            },
            password: {
                required
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem('auth'))) {
                this.$store.commit('setLocalStorageBooleanValue', true)
            } else {
                this.$store.commit('setLocalStorageBooleanValue', false)
            }
        }
    }
</script>

