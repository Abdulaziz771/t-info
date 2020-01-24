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
                            <input class="mb-4 info-input form-control" placeholder="Телефон или E-mail">
                            <input class="mb-4 info-input form-control" type="password" placeholder="Пароль">
                        </form>
                        <div class="registr-button text-center">
                            <b-button class="info-button-dark-color">Войти</b-button>
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
        name: 'signin',
    }
</script>

