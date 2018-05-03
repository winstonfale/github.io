<style>

</style>

<template>
  <div>

    <navigation></navigation>

    <section class="">
        <nuxt />
    </section>

  </div>
</template>
<script>

import navigation from '~/components/layouts/navigation'
//  new WOW().init();

export default {
    components: {navigation}
  
}
</script>

