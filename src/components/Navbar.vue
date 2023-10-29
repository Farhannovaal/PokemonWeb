<template>

  <div class="Menu-wrapper flex- flex-col h-20 bg-yellow" @click="ToggleNavbar" title="Menu List">
      <h3 class="head-nav justify-center pt-3 w-40 text-lg font-bold"> Pokemon  </h3>
        <p class="h-12 text-sm text-white text-opacity-80"> Menu List </p>
    </div>

    <div class="side-bar w-40 h-full bg-red-600 text-center" v-show="sideBar">
        <ul class="flex flex-col" >
            <li><RouterLink to="/" name="Home" title="Home"> Home</RouterLink></li>
            <li><RouterLink to="/dashboard" name="Dashboard" title="Dashboard"> Dashboard</RouterLink></li>
            <li><RouterLink to="/news" name="News" title="News"> News </RouterLink></li>
            <li><RouterLink to="/about" name="About" title=" About">About</RouterLink></li>
        </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      sideBar: false
    };
  },
  methods: {
    ToggleNavbar() {
        this.sideBar = !this.sideBar
    }
  }
};
</script>


<style scoped>

    .Menu-wrapper{
        cursor: pointer;
        border-bottom: 2px solid rgba(0, 0, 0, 0.353);

    }
    li{
        border-bottom: 2px solid black;
        height: 60px;
        padding-top: 20px;
    }
    li:hover{
        background-color: wheat;
        cursor: pointer;
    }
    a {
        color: white;
        text-decoration: none;
    }
    a:hover{
        color: black;
    }
</style>
