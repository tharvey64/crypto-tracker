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
import { CoinMarketCapAPI } from '@/api/coinmarketcap';

export default {
    name: 'MainPage',
    data () {
        return {
            'coins': []
        };
    },
    components: { CoinCollection },
    beforeRouteEnter ( to, from, next ) {
        var api = new CoinMarketCapAPI();
        api.getTickers().then( ( { data } ) => {
            next( ( vm ) => {
                vm.coins = data;
            } );
        } );
    },
    beforeRouteUpdate ( to, from, next ) {
        var api = new CoinMarketCapAPI();
        api.getTickers().then( ( { data } ) => {
            this.coins = data;
        } );
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