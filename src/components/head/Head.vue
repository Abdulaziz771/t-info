<template>
  <div id="header">
      <b-container>
          <b-row>
              <b-col cols="3" sm="6" class="text-left">
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
              <b-col cols="9" sm="6" class="text-right">
                  <div class="header-admin-stuff">
                      <span v-if="this.$store.getters.valueAccountExist" class="login-text-icon cursor-pointer user-date">
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
                                <span>
                                    <router-link :to="{ name: 'login' }">
                                        Регистрация
                                    </router-link>
                                </span>
                            </span>
                          <span class="login-text-icon cursor-pointer">
                          <LockIcon></LockIcon>
                            <span>
                                <router-link :to="{ name: 'signin' }">
                                    Войти
                                </router-link>
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
  </div>
</template>

<script>
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
            showSidebar: false
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
        }
    },
    created() {
        bus.$on('offSidebar', (data => {
            this.showSidebar = data
        }))
    }
}
</script>

<style scoped lang="scss">

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateY(-100vh);
        opacity: 0;
    }

    .menu-icon-svg {
        display: none;
    }

    .user-date {

    }

    .avatar {
        line-height: 40px;
        img {
            width: 20px;
            height: 20px;
        }
    }

</style>
