<template>
    <main>
        <Header/>        
        <h1 class="title">Bands</h1>
    </main>

    <div class="CardContainer">
        <li class="CardList" v-for="bandCard in bandCards">
            <BandCardContainer :imgLink="bandCard.imgLink" :alttext="bandCard.altText" />
        </li>
    </div>
    <BandCardContainer/>
</template>

<script setup>

import Header from '../components/Header.vue'
import BandCardContainer from '../components/BandCardContainer.vue'

const bandCards = [{ imgLink: 'https://i.ibb.co/L8VQzMQ/leo-Need-Card.webp', altText : 'Leo/Need Card'}, { imgLink: 'https://i.ibb.co/5BngPkH/MORE-MORE-JUMP-SEKAI-ALBUM-Vol-1.webp', altText : 'MORE! MORE! JUMP! Card'}, { imgLink: 'https://i.ibb.co/G9VPktd/25-ji-Nightcord-de-SEKAI-ALBUM-Vol-1.webp', alttext: 'N25 Card'}, { imgLink: 'https://i.ibb.co/sy1QyKj/Vivid-BAD-SQUAD-SEKAI-ALBUM-Vol-1.webp', altText: 'Vivid BAD SQUAD Card'}, { imgLink: 'https://i.ibb.co/vBTFqzD/Wonderlandsx-Showtime-SEKAI-ALBUM-Vol-1.webp', altText: 'WxS Card'}]

</script>

<style scoped>

.title {
    text-align: center;
}

.CardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 5%;
    list-style-type: none;
}

.CardList {
    margin: 1% 0% 0% 0%;
}

.CardList:hover {
    opacity: 0.33;
}

</style>