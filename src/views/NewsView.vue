<template>
    <div class=" flex justify-center">
    <h1 class="text-center text-lg font-bold mt-5 bg-white p-3 w-2/6 rounded"> Gallery Pokemon </h1>
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

</style>