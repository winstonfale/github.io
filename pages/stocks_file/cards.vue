<style scoped>
     .increased {
          color:green;
     }

     .decreased {
          color:red;
     }

     .tied {
          color:yellow;
     }
</style>

<template>

<div class="card ">
      <div class="card-header bg-info">
         <p><strong>{{ stocks.symbol }}</strong> <span class="pull-right"> {{ countdown }} </span></p>
     </div>
     
     <div class="card-body">
      <p><strong>Current: P{{ stocks.price.amount }}</strong></p>
      <p><strong>Change: <span :class="{'increased': stocks.percent_change > 0, 'decreased': stocks.percent_change < 0, 'tied': stocks.percent_change == 0 }"> {{ stocks.percent_change }}% </span> </strong></p>
      <!-- <p><strong>Market Value: <span :class="bought_market_value_class"> {{ current_market_value }}</span> </strong> -->
      <p><strong>Profit: <span :class="bought_market_value_class"> {{ profit }}</span> </strong>
     </p>
      <p>As of: {{ time }} </p>
      </div>
  </div>
</template>
<script>
const axios = require('axios').default;

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
});


export default {
     layout: '',
     props: ['code', 'avg', 'shares','url', 'delay'],
     data() {
          return{
               stocks: {
                    symbol: '',
                    price: {
                         amount: ''
                    },
                    percent_change: 0
               },
               interval: false,
               countdown: 0,
               last_update: false
          }
     },

     computed: {
          time() {
               if(!this.last_update) {
                    return 'N/A';
               }
               return new Date(this.last_update).toLocaleString()
          },

          bought_market_value_class() {

               let current = (this.stocks.price.amount * this.shares) - ( ((this.stocks.price.amount * this.shares) * 0.009));
               let bought = (this.avg * this.shares);

               if(current > bought) {
                    return 'increased'
               }

               if(current < bought) {
                    return 'decreased'
               }

               return 'tied';
          },

          current_market_value() {
               return formatter.format((this.stocks.price.amount * this.shares) - ( ((this.stocks.price.amount * this.shares) * 0.009)) )
          },

          profit(){
               let current = (this.stocks.price.amount * this.shares) - ( ((this.stocks.price.amount * this.shares) * 0.009));
               let bought = (this.avg * this.shares);
               return formatter.format(current - bought);
          }
     },

     mounted(){
          setTimeout(() => {
                this.goInterval();
          },this.delay);
     },

     methods: {
          goInterval() {
               setInterval(() => {
                    if( this.countdown > 0) {
                         this.countdown--;
                    }
                    if(this.countdown % 30 == 0) {
                         this.getRequest();
                    }
               },1000)
          },

          async getRequest(){

               const headers = {
                    'Content-Type': 'text/plain',
               };

               axios.get('http://phisix-api4.appspot.com/stocks/'+this.code+'.json', {} , headers)
                    .then( (response) => {
                         this.stocks = response.data.stock[0];
                         this.last_update = response.data.as_of
                         this.countdown = 30;
                    })
                    .catch( (error) => {
                    console.log(error);
                    })
                    .then( () => {
               });
          }
     },

     filters: {
          currency() {

          }
     }
}
</script>
