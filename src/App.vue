<template>
  <div class="body">
    <Header @locale="getLang" />

    <div class="main">
      <!-- <div class="home__left">{{ t("ihor") }}</div> -->
      <div class="container"></div>

      <!-- <PreLoader
        v-if="$store.state.preLoader.isShow"
      /> -->

      <transition appear name="moveInUp" mode="in-out">
        <router-view />
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./views/components/organisms/Header.vue";
import Footer from "./views/components/organisms/Footer.vue";
import PreLoader from "./views/components/base/PreLoader.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    PreLoader,
  },
  data() {
    return {
      locale: "en",
    };
  },
  methods: {
    getLang(event) {
      this.locale = event;
    },
  },
};
</script>
