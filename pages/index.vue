<template>
  <section>

  <video-div></video-div>
    <div class="container">
      <section class="mt-5 wow fadeIn">
        <Portfolio></Portfolio>
      </section>

      <hr class="my-5">

      <section class="mt-5 wow fadeIn">
        <h2 class="my-5 h3 text-center">Projects</h2>
        <card-section v-for="(website,index) in websites" :contents="website" :key="index"></card-section>
      </section>

      <hr class="my-5">

      <section class="mt-5 wow fadeIn">
        <Footer></Footer>
      </section>

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import VideoDiv from '~/components/index/video'
import CardSection from '~/components/index/cardSection'
import Portfolio from '~/components/index/portfolio'
import Footer from '~/components/index/footer'

export default {
  layout: 'master',
  components: {
    AppLogo,
    VideoDiv,
    CardSection,
    Portfolio,
    Footer
  },
  data(){
    return{
      websites: [
         {
          name: 'PixInPics',
          url: 'https://www.pixin.pics/',
          urlProxy: '',
          description: 'Websites monitoring system. Will send alert notificaion via email, slack or telegram is something wrong with your registered website',
          imageUrl: 'https://i.ibb.co/RH8dQ6p/pixinpics.png',
          tools: 'Laravel 5.5+  VueJs2 + Bootstrap 3 + Mysql + Node Express + WhoIsApi + Google 2fa + Stripe + API endpoints'
        },
        {
          name: 'FeedbackExpert',
          url: 'https://feedbackexpert.pro/',
          urlProxy: '',
          description: 'Enable clients to give feedbacks to your Customer Representatives to fixing their problem, also site provides statistics for CSR`s performance ',
          imageUrl: 'https://i.ibb.co/xGGJmV9/f8.png',
          tools: 'Laravel 5.3+  VueJs 2 + Bootstrap 3 +Jquery + Jquery Graph'
        },
        {
          name: 'The Honest Survey (US only)',
          url: 'http://www.thehonestsurvey.com',
          urlProxy: '',
          description: 'A survey platform for gathering leads in US',
          imageUrl: 'https://image.ibb.co/c2uOjS/ths.png',
          tools: 'Laravel 5.3+  VueJs 1 + Bootstrap 3 +Jquery + Mysql + Google Api + Interspire + Cake + CINT'
        },
        {
          name: 'Highpaying Cash Surveys (US only)',
          url: 'http://www.highpayingcashsurveys.com',
          urlProxy: '',
          description: 'A survey platform for gathering leads in US',
          imageUrl: 'https://image.ibb.co/mPF7B7/hpcs.png',
          tools: 'Laravel 5.3+  VueJs 1 + Bootstrap 3 +Jquery + Mysql + Google Api'
        },
         {
          name: 'EIQ Leadscoring Validation',
          url: 'https://image.ibb.co/fL3G4S/leadscroing.png',
          urlProxy: '',
          description: 'A Dashboard of incoming leads in realtime',
          imageUrl: 'https://image.ibb.co/fL3G4S/leadscroing.png',
          tools: 'Laravel 5.5 +  VueJs 2 + Bootstrap 4 + Jquery + Mysql'
        },
        {
          name: 'EIQ Realtime Monitoring Dashboard',
          url: null,
          urlProxy: '',
          description: 'A Centralized dashboard of events from user geolocations, traffic count, feedbacks, advertisement status and etc',
          imageUrl: 'https://image.ibb.co/bJCt17/noimage.png',
          tools: 'Laravel 5.2 +  VueJs 1 + Bootstrap 3 + Jquery + Mysql + Google Api'
        },
        {
          name: 'Pushpyns',
          url: 'http://http://pushpyns.com',
          urlProxy: '',
          description: ' Saving a location of via google map (with time sechedule and task) and also ability to share your location information via major social media platforms',
          imageUrl: 'https://image.ibb.co/mGqUPS/pp.png',
          tools: 'Laravel 5.2 +  VueJs 1 + Bootstrap 3 + Jquery + Mysql + Google Api'
        },
        {
          name: 'Norfolk Trailers',
          url: 'http://www.norfolktrailers.co.uk/',
          urlProxy: '',
          description: 'Sole Distributors for Ifor Williams Trailers in Norfolk',
          imageUrl: 'https://image.ibb.co/m9HR4S/norflok.png',
          tools: 'Laravel 5.2 + Bootstrap 3 + Jquery + Mysql + Google Analytics'
        },
        {
          name: 'Axis Claims Insurance',
          url: null,
          urlProxy: '',
          description: 'Internal website for insurance companies and also portal for users that will claim their car insurance',
          imageUrl: 'https://image.ibb.co/bJCt17/noimage.png',
          tools: 'Laravel 5.0 + Bootstrap 3 + Jquery + Mysql'
        },
      ]
    }
  }

}
</script>

<style>

</style>
