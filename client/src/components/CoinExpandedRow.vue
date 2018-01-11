<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>

<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">ID: </span>
                <span class="expand-value">{{ row.id }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Last Updated: </span>
                <span class="expand-value">{{ row.last_updated }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">BTC Price: </span>
                <span class="expand-value">{{ row.price_btc }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Available Supply: </span>
                <span class="expand-value">{{ row.available_supply }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">24 Hour Volume USD: </span>
                <span class="expand-value">${{ row['24h_volume_usd'] }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Total Supply: </span>
                <span class="expand-value">{{ row.total_supply }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Max Supply: </span>
                <span class="expand-value">{{ row.max_supply }}</span>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        props: {
            row: Object
        }
    };
</script>
