<template>
  <div class="body">
    <Header />

    <div class="main">
      <div class="container"></div>

      <!-- <PreLoader
        v-if="$store.state.preLoader.isShow"
      /> -->

      <transition name="moveInUp">
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
    return {};
  },
};
</script>
