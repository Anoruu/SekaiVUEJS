<template>
    <header>
        <div class="LogoTitle">
        <a href="/#/"><img class="logo" src="https://media.vgm.io/releases/15/13951/13951-1633165472.png" alt="Website logo"></a>
        
        <p>PJS Viewer</p>
        </div>
        <ul>
            <li><a href="/#/Cards">Cards</a></li>
            <li><a href="/#/Bands">Bands</a></li>
            <li><a href="/#/Songs">Songs</a></li>
            <li><a href="/#/Characters">Characters</a></li>
            <li><a href="/#/login"><font-awesome-icon :icon="['fas', 'right-to-bracket']" /></a></li>
        </ul>
    </header>
    <hr>
</template>

<script setup>



</script>

<style scoped>

    header {
        justify-content: space-between;
        display: flex;
        height: 6vh !important; 
    }
    

    a:hover {
        text-decoration: underline;
    }
    .LogoTitle{
        display: flex;
    }

    .LogoTitle p{
        margin-left: 1vw;
    }

    ul {
        display: flex;
        list-style-type: none;
        justify-content: right;
        vertical-align: middle;
    }

    li {
        margin: 0 5px 0 5px
    }
    .logo{
        width: 60px;
        height: 60px;
    }
</style>