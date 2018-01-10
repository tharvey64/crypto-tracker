<template>
    <Table :columns="columns" :data="coins" no-data-text="Empty">
        <p slot="header">
            Coins
        </p>
        <p slot="footer">
            ;{
        </p>
    </Table>
</template>

<script>
export default {
    name: 'CoinCollection',
    props: {
        'coins': Array
    },
    data () {
        return {
            'columns': [
                {
                    'title': 'rank',
                    'key': 'rank'
                },
                {
                    'title': 'name',
                    'key': 'name'
                },
                {
                    'title': 'symbol',
                    'key': 'symbol'
                },
                {
                    'title': 'price_usd',
                    'key': 'price_usd'
                },
                {
                    'title': 'price_btc',
                    'key': 'price_btc'
                },
                {
                    'title': '24h_volume_usd',
                    'key': '24h_volume_usd'
                },
                {
                    'title': 'last_updated',
                    'key': 'last_updated'
                },
                {
                    'title': 'market_cap_usd',
                    'key': 'market_cap_usd'
                },
                {
                    'title': 'max_supply',
                    'key': 'max_supply'
                },
                {
                    'title': 'percent_change_1h',
                    'key': 'percent_change_1h'
                },
                {
                    'title': 'percent_change_24h',
                    'key': 'percent_change_24h'
                },
                {
                    'title': 'percent_change_7d',
                    'key': 'percent_change_7d'
                },
                {
                    'title': 'total_supply',
                    'key': 'total_supply'
                },
                {
                    'title': 'available_supply',
                    'key': 'available_supply'
                },
                {
                    'title': 'id',
                    'key': 'id'
                }
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
