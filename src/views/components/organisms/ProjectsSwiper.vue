<template>
  <div class="projects-swiper">
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="true"
      :effect="'coverflow'"
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
    >
      <swiper-slide
        class="slide"
        v-for="(element, index) in projectItems"
        :key="index"
      >
        <div class="slide__title d-flex align-center">
          <span class="slide__id mr-5">{{ element.id }}</span>
          {{ element.name }}
        </div>
        <img class="slide__img" :src="`/img/projects/${index + 1}.jpg`" />
        <a class="slide__git-link btn" :href="element.gitLink" target="_blank"
          ><span class="btn__text">{{ t("git") }}</span></a
        >
        <a
          class="slide__git-link slide__git-link--show btn"
          :href="element.link"
          target="_blank"
          ><span class="btn__text">{{ t("show") }}</span></a
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default defineComponent({
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    projectItems: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      modules: [Pagination, EffectCoverflow],
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../root/css/src/style.scss";

.projects-swiper {
  background-color: #d06156;
  @include _320 {
    position: relative;
  }
}

.swiper {
  height: 100%;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 50px;

  &-slide {
    min-height: 500px;
  }

  .slide {
    position: relative;
    width: 300px;
    height: 300px;

    &__title {
      font-size: 18px;
      color: #fff;
      @extend%vegan-400;
    }

    &__id {
      font-size: 19px;
      color: #005f7f;
    }

    &__img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__git-link {
      position: absolute;
      top: 80px;
      left: 40%;
      width: 100px;
      height: 30px;
      opacity: 0;
      border-radius: 20px 0 0 20px;
      z-index: -1;
      transition: opacity 0.3s, left 0.5s, z-index 0.3s;
      &--show {
        top: 120px;
        transition: opacity 0.3s, left 0.8s, z-index 0.3s;
      }
    }

    // &__link {
    //   position: absolute;
    //   left: 50%;
    //   bottom: -10px;
    //   padding: 5px;
    //   border: 1px solid #005f7f;
    //   border-radius: 5px;
    //   background-color: #005f7f;
    //   color: #fff;
    //   text-transform: uppercase;
    //   transform: translateX(-50%);
    //   opacity: 0;
    //   z-index: -1;
    //   box-shadow: 0px 3px 6px #00000029;
    //   @extend%vegan-400;
    //   transition: bottom 0.3s, opacity 0.3s, z-index 0.3s, background-color 0.3s;

    //   &:hover {
    //     background-color: darken(#005f7f, 5%);
    //     transition: background-color 0.3s;
    //   }
    // }

    &:hover {
      .slide__git-link {
        left: -13px;
        opacity: 1;
        z-index: 100;
        transition: opacity 0.3s, left 0.5s, z-index 0.3s;

        &--show {
          transition: opacity 0.3s, left 0.8s, z-index 0.3s;
        }
      }
    }
  }
}
</style>
