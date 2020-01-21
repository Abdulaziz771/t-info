<template>
    <div class="container" id="login">
        <b-row>
            <b-col>
                <div class="briefly-info text-white">
                    <div class="logo-t-info">
                        <img src="../assets/t-info.png" alt="t-info">
                    </div>
                    <div class="tel-mobile">
                        <div class="font-weight-bold">120 20 20</div>
                        <div>СПРАВОЧНИК УЗБЕКИСТАНА</div>
                    </div>
                    <div class="text-clue">
                        Зарегестрировавшись вы будете в курсе <br> изменений в отслеживаемых <br> вами компанией
                    </div>
                    <div class="login-button">
                        <b-button class="info-button-color">Войти в личный кабинет</b-button>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="login-component ">
                    <div class="block-title font-weight-bold brand-color">Регистрация пользователя</div>
                    <div class="registr-decription">
                        Зарегестрировавшись на нашем сайте вы получаете возможность
                        создовать актуальный список компаний которые вас интересуют,
                        получать на почту уведомления об изменениях в контактных данных
                        компаний из вашего списка.
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
                    <div class="empty-inputs danger">
                        Все поля необходимы для заполнения
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="slogan text-right">
                        <span class="text-center">
                            У нас найдется все
                        </span>
                        <img src="../assets/line.png" alt="slogan">
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

