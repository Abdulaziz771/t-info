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
                                <input class="info-input form-control" v-model="name" :disabled="!isEditActive">
                                <input class="info-input form-control " v-model="shurename" :disabled="!isEditActive">
                                <input class="info-input form-control" v-model="mobile" :disabled="!isEditActive">
                                <input class="info-input form-control" v-model="email" :disabled="!isEditActive">
                            </form>
                        </b-col>
                    </b-row>
                    <div class="change-password-title" v-if="isEditActive">
                        <span>сменить пароль</span>
                        <b-row class="change-pasword">
                            <b-col xl="4" lg="6" cols="12">
                                <input type="password" class="info-input form-control" placeholder="Старый пароль">
                            </b-col>
                            <b-col xl="5" lg="6" cols="12">
                                <input type="password" class="info-input form-control" placeholder="Новый пароль">
                            </b-col>
                            <b-col cols="12" offset-lg="6" lg="6" offset-xl="4" xl="5">
                                <input type="password" class="info-input form-control" placeholder="Повторить новый пароль">
                            </b-col>
                        </b-row>
                    </div>
                    <div class="save pt-5 pb-5" v-if="isEditActive" @click="isEditActive = !isEditActive">
                        <b-button variant="outline-secondary">Сохранить</b-button>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'personal-area',
        data() {
            return {
                imgUrl: null,
                isEditActive: false,
                name: 'Мария',
                shurename: 'Гордиенко',
                mobile: '+998998315081',
                email: 'mariya@gmail.ru'
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
        }
    }
</script>