<template>
<div class=" flex justify-center">
    <h1 class="text-center text-lg font-bold mt-5 bg-white p-3 w-2/6 rounded"> Pokemon News </h1>
    </div>
    


    <div class="gallery-wrapper flex justify-center">
    <div class="gallery1">
        <div class="news text-center" v-for="News in ListPokemon">
         <div class="title w-60"> Pokemon Generation 1 </div>
         <img :src="News.sprites.front_default" alt="">
         <p>{{News.species.name}}</p>
        </div>
    </div>

</div>
<div class=" flex justify-center">
    <h1 class="text-center text-lg font-bold mt-5 bg-red-600 text-white p-3 w-2/6 rounded">  News </h1>
</div>
    
<div class="gallery-wrapper flex justify-center">

    <!-- Manual karena tidak ada referensi Api -->
    <div class="gallery-2 flex flex-row gap-5 mt-5">
        <div class="banner-news" title="Go to Page">
            <img src="../assets/BahanImage/detective-pikachu-169.png" alt="">
            <a href="https://www.pokemon.com/us/pokemon-news/watch-detective-pikachu-solve-a-new-mystery-on-youtube" class="link-banner">Click Here</a>
        </div>
        <div class="banner-news">
            <img src="../assets/BahanImage/celebrate-169-en.png" alt="">
            <a href="https://www.pokemon.com/us/pokemon-news/celebrate-the-best-of-pokemon-the-series-on-pokemon-tv" class="link-banner">Click Here</a>
        </div>

        <div class="banner-news">
            <img src="../assets/BahanImage/pokemon-center-169.png" alt="">
            <a href="https://www.pokemon.com/us/pokemon-news/winter-holiday-hits-from-the-pokemon-center" class="link-banner">Click Here</a>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      ListPokemon: [],
    };
  },
  methods: {
    async getListPokemonGen1() {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?LIMIT=151");
        let data = await response.json();
        let results = data.results
        results.forEach(item => {
            this.getEachPokemon(item)
        });
    },
    async getEachPokemon(result){
          let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+result.name);
          let data = await response.json();
            this.ListPokemon.push(data);
        },
  },
  mounted(){
    this.getListPokemonGen1()
  },
};
</script>


<style>
.gallery1{
    width: 1000px;
    display: flex;
    gap: 20px;
    overflow: scroll;
    padding: 20px;
    margin-top:10px;
    scroll-behavior: smooth;
}

.news{
    width: 300px;
    height: 200px;

}

.link-banner{
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: rgba(255, 255, 255, 0.263);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.banner-news{
    position: relative;
}
</style>