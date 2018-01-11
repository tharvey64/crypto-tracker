<template>
    <div class="layout">
        <Layout>
            <Header>
                <h1>Crypto Coins</h1>
                <div class="layout-logo">
                    <img src="@/assets/logo.png">
                </div>
            </Header>
            <Content>
                <CoinCollection :coins="coins"></CoinCollection>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </div>
</template>

<script>
import CoinCollection from '@/components/CoinCollection';
import { mapGetters } from 'vuex';

export default {
    name: 'MainPage',
    components: { CoinCollection },
    beforeRouteEnter ( to, from, next ) {

        next( ( vm ) => {

            vm.$store.dispatch( 'loadCoins' );

        } );

    },
    beforeRouteUpdate ( to, from, next ) {

        this.$store.dispatch( 'loadCoins' ).catch( next ).then( next );

    },
    computed: {

        ...mapGetters( {
            'coins': 'getCoins'
        } )

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
};
</style>