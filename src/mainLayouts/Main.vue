<template>
    <div>
        <MainHeader></MainHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from "../components/mainHeader/MainHeader";
export default {
    name: 'main',
    components: {
        MainHeader
    },
}
</script>
