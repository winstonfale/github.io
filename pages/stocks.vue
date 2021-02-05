<template>
<div class="row" style="padding: 10px" v-if="passed">
  <div class="col-md-2" v-for="(list,index) in lists" :key="index">
    <cards :delay="index" :code="list.code" :avg="list.avg" :shares="list.shares"> </cards>
  </div>
</div>
</template>
<script>
import Cards from './stocks_file/cards'

export default {
    components: { Cards },
    layout: '',
    data(){
      return {
        password: 'ZEc5dWVnPT0=',
        passed: false,
        lists: [
          { code: 'DITO', avg: 11.5532, shares: 7200 },
          { code: 'ACEN', avg: 6.4590, shares: 3100 },
          { code: 'APL', avg: 0.2149, shares: 190000 },
          { code: 'NOW', avg: 4.2826, shares: 5000 },
          // { code: 'DITO', avg: 11.5532, shares: 7200 },
          // { code: 'DITO', avg: 11.5532, shares: 7200 },
        ]
      }
    },

    mounted(){
      var password = prompt("Acess code");
      if(window.btoa(window.btoa(password)) === this.password) {
        this.passed = true;
      }
    }
}
</script>
