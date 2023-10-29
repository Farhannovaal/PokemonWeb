<template>

<div class="welcome-wrapper">
        
        <div class="img-right float-right w-3/6 h-full">
            <img src="../assets/BahanImage/bahan2.jpeg" alt="">
        </div>

    <div class="greeting ">
        <h1>Hello, Welcome to Pokemon Website,
            Find your favorite poke
        </h1>

    </div>

</div>
</template>

<style scoped>

.greeting{
    position: absolute; 
    left: 20%;
    top: 30%;
    padding: 10px;
    border-radius: 5px;
    width: 250px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 2px black;
    float: left;
}

.button-direct{
    position: absolute; 
    left: 35%;
    top: 40%;
    font-size: 20px;
    float: right;
}

.button-direct:hover{
    background-color: dimgrey;
    color: grey;
}
.greeting h1{
    font-size: 30px;
}
.img-right img{
    height: 100%;
}
</style>