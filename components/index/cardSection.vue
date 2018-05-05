<template>
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
         
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-6 mb-4">

            <!-- Main heading -->
            <h3 class="h3 mb-3">{{ contents.name }}</h3>
            <p> {{ contents.description }} </p>
              
            <hr>

            <p>{{ contents.tools }}</p>

            <!-- CTA -->
            <a v-if="contents.url" target="_blank" :href="contents.url" class="btn btn-grey btn-md">
              Visit site <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
            <button v-else class="btn btn-grey btn-md" disabled>
              Not Available
            </button>
            <!-- <a target="_blank" href="https://mdbootstrap.com/components/" class="btn btn-grey btn-md">Live demo
              <i class="fa fa-image ml-1"></i>
            </a> -->

          </div>
          <!--Grid column-->

           <div class="col-md-6 mb-4">

            <img :src="contents.imageUrl" class="img-fluid z-depth-1-half" alt="">

          </div>


        </div>

        <!--Grid row-->
</template>
<script>
export default {
  props: ['contents']
  
}
</script>

