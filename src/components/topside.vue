<template>
    <div class="flex justify-around bg-red-500">
        <RouterLink to="/"> <img class="img-wrapper w-12" src="../assets/BahanImage/pikachu.png" alt=""></RouterLink>
            <input class="h-8 mt-2 text-center rounded" type="text" placeholder="search" v-model="search">
                <!-- Dropdown untuk hasil pencarian PokemonFiltered -->
    <select v-model="selectedPokemon" class="h-8 mt-2 text-center rounded w-60" style="cursor: pointer;">
        <option v-if="PokemonFiltered.length === 0" selected> Your Pokemon </option>
      <option v-for="(pokemon, index) in PokemonFiltered" :key="index" :value="pokemon.name">{{ pokemon.name }}</option>
    </select>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      SearchPokemon:[],
      PokemonFiltered:[],
      selectedPokemon: 'Your Pokemon'
    };
  },
  methods: {
    async getListPokemon() {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon");
      let data = await response.json();
      let result = data.results;
      this.SearchPokemon = result
    },
    performSearch() {
      if (this.search.trim() === '') {
        this.PokemonFiltered = this.SearchPokemon;
      } else {
        let PokemonFiltered = this.SearchPokemon.filter(item => {
          return item.name.includes(this.search);
        });
        this.PokemonFiltered = PokemonFiltered;
      }
    }
  },
  watch: {
    search() {
      this.performSearch();
    }
  },
  mounted(){
    this.getListPokemon()
  }
};
</script>
