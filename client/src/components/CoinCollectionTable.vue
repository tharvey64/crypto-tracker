<!-- https://www.iviewui.com/components/table-en#API -->
<template>
    <Table :columns="columns" :data="coins" :size="size" :no-data-text="noDateText">
        <p slot="header">
            Coins
        </p>
        <p slot="footer">
            ;{
        </p>
    </Table>
</template>

<script>
import CoinExpandedRow from '@/components/CoinExpandedRow';

export default {
    'name': 'CoinCollectionTable',
    'props': {
        'coins': Array
    },
    data () {

        return {
            'size': 'small',
            'noDateText': 'Empty',
            'columns': [
                {
                    'type': 'expand',
                    'width': 50,
                    'render': ( h, params ) => {

                        return h( CoinExpandedRow, {
                            'props': {
                                'row': params.row
                            }
                        } );

                    }
                },
                {
                    'title': 'Rank',
                    'key': 'rank',
                    'width': 80
                },
                {
                    'title': 'Symbol',
                    'key': 'symbol',
                    'width': 100
                },
                {
                    'title': 'Name',
                    'key': 'name',
                    'width': 200
                },
                {
                    'title': 'Price USD',
                    'key': 'price_usd',
                    'width': 150
                },
                {
                    'title': 'Market Cap USD',
                    'key': 'market_cap_usd',
                    'width': 150
                },
                {
                    'title': '% Change 1 Hour',
                    'key': 'percent_change_1h',
                    'width': 180
                    // 'sortable': true,
                    // 'sortMethod': ( a, b, type ) => {

                    //     return type === 'asc' ? parseFloat( a ) > parseFloat( b ) : parseFloat( a ) < parseFloat( b );

                    // }
                },
                {
                    'title': '% Change 24 Hour',
                    'key': 'percent_change_24h',
                    'width': 180
                    // 'sortable': true,
                    // 'sortMethod': ( a, b, type ) => {

                    //     return type === 'asc' ? parseFloat( a ) > parseFloat( b ) : parseFloat( a ) < parseFloat( b );

                    // }
                },
                {
                    'title': '% Change 7 Day',
                    'key': 'percent_change_7d',
                    'width': 180
                    // 'sortable': true,
                    // 'sortMethod': ( a, b, type ) => {

                    //     return type === 'asc' ? parseFloat( a ) > parseFloat( b ) : parseFloat( a ) < parseFloat( b );

                    // }
                }
            ]
        };

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
