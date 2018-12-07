<template>
    <div class="side-title">
        <side-title-left />
        <side-title-right />
    </div>
</template>

<script>
    import SideTitleLeft from './SideTitleLeft'
    import SideTitleRight from './SideTitleRight'
    export default {
        name: 'SideTitle',
        components:{
            SideTitleLeft,
            SideTitleRight
        }
    }
</script>

<style scoped lang="scss">
    .side-title{
        max-width: 900px;
        position: absolute;
        left: 50%;
        top:50%;
        margin: 0 auto;
        display: flex;
        transform: translate(-50%,-50%)
    }
</style>