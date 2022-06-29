<template>
  <swiper
    class="swiper d-flex"
    :modules="modules"
    :auto-height="true"
    :autoplay="true"
    :space-between="20"
    :navigation="false"
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      class="slide"
      v-for="item in slider_sertif_items"
      :key="`${item.id}_item`"
    >
      <img class="slide__img" :src="`/img/sertif/${item.url_img}`" alt="cer" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { defineComponent } from "vue";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default defineComponent({
  name: "swiper-example-auto-height",
  title: "Auto height",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slider_sertif_items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../root/css/src/vars/_vars.scss";
@import "../../../root/css/src/mixins/_mixins.scss";
@import "../../../root/css/src/style.scss";

.swiper {
  $height: auto;
}

.slide {
  height: 400px;
  line-height: 300px;
  object-fit: contain;
  // background-color: #4d333e;

  &__img {
    object-fit: contain;
    margin: 0 auto;
    height: -webkit-fill-available;
  }
}
</style>
