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
                        <form action="">
                            <input class="info-input form-control" placeholder="Имя">
                            <input class="info-input form-control" placeholder="Фамилия">
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
                        <div class="registr-button text-center">
                            <b-button class="info-button-dark-color">Зарегестрироваться</b-button>
                        </div>
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
    name: 'login',
}
</script>

