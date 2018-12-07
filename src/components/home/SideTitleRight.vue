<template>
    <div class="side-title-right">
        <nav-link-item />
        <nav-link-item />
        <nav-link-item />
        <nav-link-item />
    </div>
</template>

<script>
import NavLinkItem from './NavLinkItem'
export default {
  name: "SideTitleRight",
  components:{
      NavLinkItem
  }
};
</script>
<style scoped lang="scss">
.side-title-right{
    flex:1;
    width: 0%;
    flex-wrap: wrap;
    display: flex;
    
}
</style>
