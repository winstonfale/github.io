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
        <strong style="font-size:25px">PH:{{ stocks.symbol }} <span class="pull-right" style="font-size:12px">  {{ countdown }} </span></strong> 
     </div>
     
     <div class="card-body">
      <p><strong>Current: P{{ stocks.price.amount }}</strong></p>
      <p><strong>Change: <span :class="{'increased': stocks.percent_change > 0, 'decreased': stocks.percent_change < 0, 'tied': stocks.percent_change == 0 }"> {{ stocks.percent_change }}% </span> </strong></p>
      <p style="font-size:25px"><strong><span :class="_bought_market_value_class">  {{ _profit }}  <br /> <i :class="{'fa fa-arrow-up': stocks.percent_change > 0, 'fa fa-arrow-down': stocks.percent_change < 0, 'fa fa-equal': stocks.percent_change == 0 }"></i>  ({{ _bought_change }}%) </span></strong>
     </p>
      <p> <small>Last update: {{ _time }} </small> </p>
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
          _time() {
               if(!this.last_update) {
                    return 'N/A';
               }
               return new Date(this.last_update).toLocaleString()
          },

          _bought_market_value_class() {

               let current = this._current_price
               let bought = this._bought_price

               if(current > bought) {
                    return 'increased'
               }

               if(current < bought) {
                    return 'decreased'
               }

               return 'tied';
          },

          _current_price(){
               return  (this.stocks.price.amount * this.shares) - ( ((this.stocks.price.amount * this.shares) * 0.009));
          },

          _bought_price(){
               return (this.avg * this.shares);
          },

          _current_market_value() {
               return formatter.format((this.stocks.price.amount * this.shares) - ( ((this.stocks.price.amount * this.shares) * 0.009)) )
          },

          _profit(){
               let current = this._current_price
               let bought = this._bought_price
               
               return formatter.format(current - bought);
          },

          _bought_change() {
               return (((this._current_price / this._bought_price) * 100) - 100 ).toFixed(2);
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
