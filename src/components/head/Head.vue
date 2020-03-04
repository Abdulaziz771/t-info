<template>
  <div id="header">
      <b-container>
          <b-row>
              <b-col cols="6" class="text-left">
                  <div class="header-menu">
                      <XIcon v-if="showSidebar" @click="toggleSidebar" class="x-icon cursor-pointer"></XIcon>
                      <MenuIcon @click="toggleSidebar" class="menu-icon-svg" v-else ></MenuIcon>
                      <span class="menu-icon cursor-pointer">
                          <router-link :to="{ name: 'home' }">О НАС</router-link>
                      </span>
                      <span class="menu-icon cursor-pointer">
                          <router-link :to="{ name: 'home' }">реклама</router-link>
                      </span>
                      <span class="menu-icon cursor-pointer">
                          <router-link :to="{ name: 'add-org' }">добавить компанию</router-link>
                      </span>
                  </div>
              </b-col>
              <b-col cols="6" class="text-right">
                  <div class="header-admin-stuff">
                      <span v-if="this.$store.getters.valueLocalStorageBoolean" class="login-text-icon cursor-pointer user-date">
                        <span>
                            <router-link :to="{ name: 'personal-area' }">
                                <span class="avatar">
                                    <img v-if="this.$store.getters.valueavatarImg" :src="this.$store.getters.valueavatarImg" class="rounded-circle mr-2">
                                    <img v-else src="../../assets/user.png" class="mr-2">
                                </span>
                                <span>Мария</span>
                            </router-link>
                        </span>
                      </span>
                      <template v-else>
                          <span class="login-text-icon cursor-pointer">
                              <LockIcon></LockIcon>
                                <span @click="enterAccount" id="enter">
                                    Войти
                                </span>
                            </span>
                      </template>
                      <b-dropdown id="dropdown-language" text="Ru" class="m-md-2">
                          <b-dropdown-item>Uz</b-dropdown-item>
                          <b-dropdown-item>En</b-dropdown-item>
                      </b-dropdown>
                  </div>
              </b-col>
          </b-row>
      </b-container>
      <transition name="slide-fade">
          <Sidebar v-show="showSidebar"></Sidebar>
      </transition>
      <b-modal style="z-index: 999" size="md" ref="enter" class="enter" hide-footer title="ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ">
          <div class="body-part">
              <input type="email"  v-model="emailORphone" @blur="$v.emailORphone.$touch()" :class="{ 'is-invalid': $v.emailORphone.$error }" class="info-input form-control" placeholder="Email">
              <input type="password" v-model="password" @blur="$v.password.$touch()" :class="{ 'is-invalid': $v.password.$error }" class="info-input form-control mt-3" placeholder="Пароль">
              <div class="d-flex mt-2">
                  <div class="w-50 float-left">
                      <b-form-checkbox value="accepted" unchecked-value="not_accepted">
                        Запомнить
                      </b-form-checkbox>
                  </div>
                  <div class="w-50 text-right float-left remind-password cursor-pointer brand-color">
                     Напомнить пароль
                  </div>
              </div>
              <div></div>
              <div class="mt-4 w-100 enter-button text-center">
                  <router-link v-if="!$v.emailORphone.$error && !$v.password.$error && $v.emailORphone.required && $v.password.required" :to="{ name: 'personal-area' }">
                    <b-button @click="enterAccount" variant="dark">Войти</b-button>
                  </router-link>
                  <b-button v-else variant="dark" disabled>Войти</b-button>
              </div>
              <div class="text-center mt-3">
                Регистрация:
              </div>
              <b-row class="register mt-3">
                  <b-col class="text-center" cols="6">
                      <router-link :to="{ name: 'login' }">
                          <b-button @click="enterAccount"  class="w-100" variant="light">Пользователя</b-button>
                      </router-link>
                  </b-col>
                  <b-col class="text-center" cols="6">
                      <router-link :to="{ name: 'login-company' }">
                        <b-button @click="enterAccount" class="w-100" variant="light">Компании</b-button>
                      </router-link>
                  </b-col>
              </b-row>
          </div>
          <div class="footer-part">

          </div>
      </b-modal>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { addresORphoneNumber } from '../../validators/custom-validators'
import { bus } from "../../main";
import {
    XIcon,
    LockIcon,
    MenuIcon
} from 'vue-feather-icons';
import Sidebar from './../sidebar/Sidebar'

export default {
    name: 'head',
    data() {
        return {
            showSidebar: false,
            checkAcc: !!JSON.parse(localStorage.getItem('auth')),
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
    validations: {
        emailORphone: {
            required,
            addresORphoneNumber
        },
        password: {
            required
        }
    },
    components: {
        LockIcon,
        XIcon,
        MenuIcon,
        Sidebar
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        enterAccount() {
            this.$refs['enter'].toggle('#enter');
            if ( !this.$v.emailORphone.$error && !this.$v.password.$error && this.$v.emailORphone.required && this.$v.password.required ) {
                this.$store.commit('setToLocalStorage', this.authData);
                this.$router.push({ name: 'personal-area' })
            }
        },
    },
    created() {
        bus.$on('offSidebar', (data => {
            this.showSidebar = data
        }));

        if (JSON.parse(localStorage.getItem('auth'))) {
            this.$store.commit('setLocalStorageBooleanValue', true)
        } else  {
            this.$store.commit('setLocalStorageBooleanValue', false)
        }
    }
}
</script>

<style lang="scss">
    .modal-content {
        padding: 10px;
        .modal-header {
            border: none !important;
            h5 {
                color: #00c8ff;
            }
        }
        .enter-button {
            button {
                width: 160px;
            }
        }
        .register {
            button {
                border: 1px solid #c7c7c7;
                background: transparent;
            }
        }

    }
</style>

<style scoped lang="scss">

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to/* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateY(-100vh);
        opacity: 0;
    }
    .menu-icon-svg {
        display: none;
    }

    .avatar {
        line-height: 40px;
        img {
            width: 20px;
            height: 20px;
        }
    }

</style>
