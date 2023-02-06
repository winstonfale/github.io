<template>
     <div class="col-4">
          <!--Grid row-->
        <div class="row" style="height:400px; border: 1px solid black">
          <!--Grid column-->
         
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-12 mb-4">
            <!-- Main heading -->
            <h4 class="h5">{{ contents.name }}</h4>
            <small class=" mb-3">{{ contents.description }}</small>
            <img :src="contents.imageUrl" class="img-fluid z-depth-1-half mt-5" style="width:100%" alt="">
          </div>
          <!--Grid column-->
        </div>

        <!--Grid row-->
     </div>
</template>
<script>
export default {
  props: ['contents']
  
}
</script>

