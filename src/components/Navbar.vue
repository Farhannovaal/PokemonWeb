<template>

  <div class="Menu-wrapper flex- flex-col h-20 bg-white" @click="ToggleNavbar" title="Menu List">
      <h3 class="head-nav justify-center pt-3 w-40 text-lg font-bold"> Pokemon  </h3>
        <p class="h-12 text-sm text-zinc-500 text-opacity-80"> Menu List </p>
    </div>

    <div class="side-bar w-40 h-full bg-red-600 text-center" v-show="sideBar">
        <ul class="flex flex-col" >
            <li><RouterLink to="/" name="Home" title="Home"> Home</RouterLink></li>
            <li><RouterLink to="/dashboard" name="Dashboard" title="Dashboard"> Dashboard</RouterLink></li>
            <li><RouterLink to="/news" name="News" title="News"> Gallery </RouterLink></li>
            <li><RouterLink to="/favorite" name="Favorite" title=" Favorite"> Favorite</RouterLink></li>
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
