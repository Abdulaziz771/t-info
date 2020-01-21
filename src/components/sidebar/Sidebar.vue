<template>
    <div id="sidebar">
        <div class="menu-list cursor-pointer">
            <router-link :to="{ path: 'home' }">О НАС</router-link>
        </div>
        <div class="menu-list cursor-pointer">
            <router-link :to="{ path: 'home' }">реклама</router-link>
        </div>
        <div class="menu-list cursor-pointer">
            <router-link :to="{ path: 'home' }">добавить компанию</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
}
</script>

<style scoped lang="scss">
    #sidebar {
        background: #000000;
        height: 100vh;
        padding: 30px 50px;
        .menu-list {
            a {
                color:#c8c8c8;
            }
            font-size: 10px;
            color:#c8c8c8;
            text-transform: uppercase;
            padding: 10px 0px;
            border-bottom: 1px solid #4e4e4e;
            &:hover {
                color: white;
            }
        }
    }
</style>
