<template>
<div class="container md:mx-auto ">
  <div class="container flex  justify-center p-2" style="min-height: 100vh;">
      <div class="grid grid-cols-4 gap-5 text-center" v-if="!ViewAsDetail">
          <div class="card w-60 h-60 rounded bg-slate-300 bg-opacity-30" v-for="card in ListPokemon">
            <img :src="card.sprites.front_default" alt="">
            <h3 class="text-blue-600 font-bold">{{ card.species.name }}</h3>
            <p class="text-red-600"> {{ card.types[0].type.name }}</p>
            <button @click="viewDetailPokemon(card.name)" class="text-black p-1 bg-white rounded mt-5"> Detail Pokemon</button>
          </div>
      </div>


    <div class="view-detail text-center text-black bg-slate-400 bg-opacity-50 w-3/4 h-1/4  gap-2 p-5" v-else>
            <h2 class="text-blue-600 uppercase font-bold text-lg"> Name : {{ PokemonSelected.name }}</h2>
            <p class="text-white"> Weight : {{ PokemonSelected.weight }}</p>

              <img :src="PokemonSelected.sprites.front_default" class="w-full h-30">
          <div class="statistic bg-red-600 flex flex-col flex-wrap p-5 gap-5 text-align">

            <div class="tipe flex flex-row gap-3">
                Tipe : <p class="text-white text-center" v-for =" i in PokemonSelected.types"> {{ i.type.name }} || </p> 
             </div>
                <div class="stats flex flex-row gap-3">
                Stats : <p class="text-white text-center" v-for =" s in PokemonSelected.stats"> {{ s.stat.name }} || </p> 
              </div>  

          </div>

              <div>
                <button @click="ViewAsDetail=false" class="bg-black text-white p-1 rounded mt-5"> Close </button>
              </div>
        </div>
  </div>
</div>


</template>

<script>
export default {
  data() {
    return {
      ListPokemon: [],
      ViewAsDetail:false,
      PokemonSelected:''
    };
  },
  methods: {
    async getListPokemon() {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon");
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
       async viewDetailPokemon(getPokemon){
          let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+getPokemon);
          let data = await response.json();
          this.PokemonSelected = data
          this.ViewAsDetail = true
        }
  },
  mounted(){
    this.getListPokemon()
  },
};
</script>
