<template>
    <Table no-data-text="Empty">
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
    data () {
        return {
            coins: []
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
