<template>
    <main>      
        <h1 class="title">Bands</h1>
    </main>

    <div class="CardContainer">
        <li class="CardList" v-for="bandCard in bandCards">
            <BandCardContainer :imgLink="bandCard.imgLink" :altText="bandCard.altText" :bandText="bandCard.bandText"/>
        </li>
    </div>
</template>

<script setup>

import BandCardContainer from '../components/BandCardContainer.vue'

const bandCards = [{ imgLink: 'https://i.ibb.co/L8VQzMQ/leo-Need-Card.webp', altText : 'Leo/Need Card', bandText : 'A band formed by a group of childhood friends who have learned to overcome their differences.'}, { imgLink: 'https://i.ibb.co/5BngPkH/MORE-MORE-JUMP-SEKAI-ALBUM-Vol-1.webp', altText : 'MORE! MORE! JUMP! Card', bandText : 'A unique idol group formed by one girl with a dream, and three other girls who had given up on theirs.'}, { imgLink: 'https://i.ibb.co/G9VPktd/25-ji-Nightcord-de-SEKAI-ALBUM-Vol-1.webp', alttext: 'N25 Card', bandText : 'A mysterious music circle that operates at 1:00 AM (25:00), and whose identities are shrouded in mystery.'}, { imgLink: 'https://i.ibb.co/sy1QyKj/Vivid-BAD-SQUAD-SEKAI-ALBUM-Vol-1.webp', altText: 'Vivid BAD SQUAD Card', bandText : 'A talented group of street artists who teamed up to surpass a legend.'}, { imgLink: 'https://i.ibb.co/vBTFqzD/Wonderlandsx-Showtime-SEKAI-ALBUM-Vol-1.webp', altText: 'WxS Card', bandText : 'An eccentric musical show unit, proclaiming each day wonderful and rushing out to meet it head on.'}]

</script>

<style lang="scss" scoped>

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


</style>