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
                            <input class="info-input form-control" placeholder="Название компании">
                            <div class="contact-person">КОНТАКТНОЕ ЛИЦО</div>
                            <input class="info-input form-control" v-model="name" placeholder="Имя">
                            <input class="info-input form-control"  placeholder="Фамилия">
                            <input class="info-input form-control" placeholder="Телефон">
                            <input type="email" class="info-input form-control" placeholder="E-mail">
                            <input type="password" class="info-input form-control" placeholder="Пароль">
                            <input type="password" class="info-input form-control" placeholder="Повторите пароль">
                        </form>
                        <div class="registr-decription">
                            Нажимая «Зарегистрироваться»,
                            вы подтверждаете, что ознакомлены и полностью согласны
                            с <span class="brand-color cursor-pointer">условиями использования сайта</span>.
                        </div>
                        <router-link :to="{ name: 'home' }">
                            <div class="registr-button text-center">
                                <b-button class="info-button-dark-color">Зарегестрироваться</b-button>
                            </div>
                        </router-link>
                        <div class="have-accaunt text-center pt-3">
                            Вы уже зарегестрированы?
                            <router-link :to="{ path: 'signin' }">
                                <span class="brand-color cursor-pointer">Вход</span>
                            </router-link>
                        </div>
                        <div class="empty-inputs danger">
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
export default {
    name: 'LoginCompany',
    created() {
        if (JSON.parse(localStorage.getItem('auth'))) {
            this.$store.commit('setLocalStorageBooleanValue', true)
        } else  {
            this.$store.commit('setLocalStorageBooleanValue', false)
        }
    }
}
</script>

