<template>
    <main>      
        <h1 class="title">Characters</h1>
    </main>

    <div class="CharacterContainer">
        <li class="CharacterList" v-for="charaCard in charaCards">
            <CharacterCardContainer :imgLink="charaCard.imgLink" :altText="charaCard.altText" :charaText="charaCard.charaText"/>
        </li>
    </div>
</template>

<script setup>

import CharacterCardContainer from '../components/CharacterCardContainer.vue'

const charaCards = [{ imgLink: 'https://static.wikia.nocookie.net/projectsekai/images/1/11/Hoshino_Ichika_chibi.png', altText : 'Hoshino Ichika', charaText : 'Hoshino Ichika'}, { imgLink: 'https://static.wikia.nocookie.net/projectsekai/images/a/a2/Tenma_Saki_chibi.png', altText : 'Saki Tenma', charaText : 'Saki Tenma'}, { imgLink: 'https://static.wikia.nocookie.net/projectsekai/images/6/61/Mochizuki_Honami_chibi.png', altText: 'Mochizuki Honami', charaText: 'Mochizuki Honami' }, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/a/ac/Hinomori_Shiho_chibi.png', altText:'Hinomori Shiho', charaText:'Hinomori Shiho'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/b/b1/Hanasato_Minori_chibi.png', altText:'Hanasato Minori', charaText:'Hanasato Minori'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/e/e1/Kiritani_Haruka_chibi.png', altText:'Kiritani Haruka', charaText:'Kiritani Haruka'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/c/cd/Momoi_Airi_chibi.png', altText:'Momoi Airi', charaText:'Momoi Airi'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/8/8c/Hinomori_Shizuku_chibi.png', altText:'Hinomori Shizuku', charaText:'Hinomori Shizuku'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/b/b4/Azusawa_Kohane_chibi.png', altText:'Azusawa Kohane', charaText:'Azusawa Kohane'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/a/aa/Shiraishi_An_chibi.png', altText:'Shiraishi An', charaText:'Shiraishi An'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/d/df/Shinonome_Akito_chibi.png', altText:'Shinonome Akito', charaText:'Shinonome Akito'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/b/b1/Aoyagi_Toya_chibi.png', altText:'Aoyagi Toya', charaText:'Aoyagi Toya'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/7/75/Tenma_Tsukasa_chibi.png', altText:'Tenma Tsukasa', charaText:'Tenma Tsukasa'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/2/20/Otori_Emu_chibi.png', altText:'Otori Emu', charaText:'Otori Emu'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/4/4e/Kusanagi_Nene_chibi.png', altText:'Kusanagi Nene', charaText:'Kusanagi Nene'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/a/a4/Kamishiro_Rui_chibi.png', altText:'Kamishiro Rui', charaText:'Kamishiro Rui'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/b/bb/Yoisaki_Kanade_chibi.png', altText:'Yoisaki Kanade', charaText:'Yoisaki Kanade'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/a/aa/Asahina_Mafuyu_chibi.png', altText:'Asahina Mafuyu', charaText:'Asahina Mafuyu'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/2/2a/Shinonome_Ena_chibi.png', altText:'Shinonome Ena', charaText:'Shinonome Ena'}, {imgLink:'https://static.wikia.nocookie.net/projectsekai/images/a/ad/Akiyama_Mizuki_chibi.png', altText:'Akiyama Mizuki', charaText:'Akiyama Mizuki'},]

</script>

<style lang="scss" scoped>

.title {
    text-align: center;
}

.CharacterContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 5%;
    list-style-type: none;
}

.CharacterList {
    margin: 1% 0% 0% 0%;
}


</style>