<template>
    <div id="detailes">
        <div>
            <b-row>
                <b-col offset="0" offset-xl="2" xl="4" class="detailes">
                    <div class="description">
                        <div class="description-title font-weight-bold">
                            {{ org.heading }}
                            <div>
                                {{ org.bodying[0].name }}
                            </div>
                        </div>
                        <div class="rate d-flex">
                            <star-rating :show-rating="false"  :rating="org.rate" :read-only="true" ></star-rating>
                            <span class="feedback-lenght">Отзывов: 5</span>
                        </div>
                        <div class="description-description">
                            Продажа автомобилей производства GM Uzbekistan.
                            В салоне продаются автомобили марок:
                            Malibu, Captiva, Lacetti, Cobalt, Spark, Nexia, Matiz, Damas
                        </div>
                    </div>
                    <div class="company-timetable">
                        <div class="location">
                            <MapPinIcon></MapPinIcon>
                            <span>{{ org.location.town }}, {{ org.location.district }}, {{ org.location.street }}</span>
                        </div>
                        <div class="timetable">
                            <b-row>
                                <b-col lg="6" xl="3" class="timetable-condition">Режим работы:</b-col>
                                <b-col lg="6" class="text-left timetable-info">ПН   ВТ   СР   ЧТ   ПТ</b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" xl="3" class="timetable-condition">Время работы:</b-col>
                                <b-col lg="6" class="text-left timetable-info">09:00 – 18:00</b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" xl="3" class="timetable-condition">Обед:</b-col>
                                <b-col lg="6" class="text-left timetable-info">13:00 – 14:00</b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" xl="3" class="timetable-condition">Выходной:</b-col>
                                <b-col lg="6" class="text-left timetable-info">СБ   ВС</b-col>
                            </b-row>
                        </div>
                        <div class="call-phone">
                            <PhoneIcon></PhoneIcon>
                            <span>+998 <b>71 224 03 99</b></span>
                        </div>
                        <div class="email">
                            <MailIcon></MailIcon>
                            <span class="cursor-pointer"><i>humo@humoavtosalon.uz</i></span>
                        </div>
                    </div>
                    <div class="galerry d-flex">
                        <div>
                            <img src="./../assets/organization-imgae-format.png" class="pr-2 w-100" alt="organization-imgae">
                        </div>
                        <div>
                            <img src="./../assets/organization-imgae-format.png" class="pr-2 w-100" alt="organization-imgae">
                        </div>
                        <div>
                            <img src="./../assets/organization-imgae-format.png" class="pr-2 w-100" alt="organization-imgae">
                        </div>
                    </div>
                </b-col>
                <b-col cols="6" class="detailes-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1732.0203546351786!2d69.2583783810492!3d41.281579145522095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1580732126146!5m2!1sru!2s" class="w-100" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
import org from '../../public/data/org'
import {
    MapPinIcon,
    PhoneIcon,
    MailIcon
} from 'vue-feather-icons'
export default {
    name: 'details-org',
    data() {
        return {
            orgs: org,
            org: null
        }
    },
    components: {
        MapPinIcon,
        StarRating,
        PhoneIcon,
        MailIcon
    },
    created() {
        var orgId = this.$route.params.id;
        this.org = this.orgs[orgId]
    }
}
</script>