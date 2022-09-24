<template>
    <div id="nav">
        <router-view/>
    </div>
  </template>
  
<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}

ul {
      list-style-type: none;
}

@media only screen and (max-width: 806px) {
    .container{
      max-width: 100% !important;
    }
    #FirstTab{
      display: none;
    }    
}

</style>