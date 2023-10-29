
<template>
<div class="navbar-wrapper">
    <Navbar />
</div>
<div class="top-side">
    <TopSide />
</div>

    <RouterView />
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import TopSide from './components/topside.vue'
    // import Dashboard from './views/Dashboard.vue';
export default {
        components: {
        Navbar,TopSide
    },
}

</script>

<style>
body{
    margin: 0;
    background-image: url(./src/assets/BahanImage/Background.jpg);
}
</style>
<style scoped>

    .navbar-wrapper{
        background-color: orange;
        text-align: center;
        z-index: 2;
        height: 100%;
        position:absolute;
    }

    .top-side{
        line-height: 3;
    }

</style>