<template>
  <div id="header">
      <b-container>
          <b-row>
              <b-col cols="6" class="text-left">
                  <div class="header-menu">
                      <span class="cursor-pointer">О НАС</span>
                      <span class="cursor-pointer">реклама</span>
                      <span class="cursor-pointer">добавить компанию</span>
                  </div>
              </b-col>
              <b-col cols="6" class="text-right">
                  <div class="header-admin-stuff">
                      <span class="login-text-icon cursor-pointer">
                          <LockIcon></LockIcon>
                          <span>Войти</span>
                      </span>
                      <b-dropdown id="dropdown-language" text="Ru" class="m-md-2">
                          <b-dropdown-item>En</b-dropdown-item>
                      </b-dropdown>
                  </div>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import {
    LockIcon
} from 'vue-feather-icons';
export default {
    name: 'head',
    data() {
        return {

        }
    },
    components: {
        LockIcon
    },
    computed: {

    }
}
</script>
