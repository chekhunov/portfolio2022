<template>
  <div class="header" style="font-size: 18px">
    <div class="container">
      <div class="header__inner d-flex justify-between align-center">
        <div class="header__logo">
          <router-link to="/">
            <span class="logo">
              <span class="logo__left">{{ t("I") }}</span>
              <span class="logo__right">{{ t("C") }}</span>
            </span>
          </router-link>
        </div>

        <div class="main__top d-flex justify-between align-center">
          <div id="nav" class="nav menu" :class="{ active: burgerMenu }">
            <router-link
              :to="link.route"
              v-for="(link, index) in links"
              :key="`link_${index}`"
              class="menu__item"
              :class="{ active: link.isActive }"
              @click="activate(index)"
            >
              {{ t(`${link.name}`) }}
            </router-link>
          </div>
        </div>

        <nav class="d-flex align-center">
          <div class="lang mr-20">
            <span
              id="en"
              class="lang__item en"
              :class="{ active: lang === 'en' }"
              @click="setLocale('en')"
              ><flag iso="us"></flag> {{ t("en") }} &nbsp;</span
            >
            <span
              id="ru"
              class="lang__item ru"
              :class="{ active: lang === 'ru' }"
              @click="setLocale('ru')"
              ><flag iso="ru"></flag> {{ t("ru") }}</span
            >
          </div>

          <button
            class="header__popup-btn"
            :class="{ active: burgerMenu }"
            @click="() => (burgerMenu = !burgerMenu)"
          >
            <span></span>
          </button>
          <span class="menu__bg"></span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Header",
  props: {
    value: {
      type: String,
      default: "en",
    },
  },
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      burgerMenu: false,
      links: [
        {
          id: 0,
          route: "/",
          name: "home",
          isActive: true,
        },
        {
          id: 1,
          route: "/services",
          name: "services",
          isActive: false,
        },
        {
          id: 2,
          route: "/portfolio",
          name: "portfolio",
          isActive: false,
        },
        {
          id: 3,
          route: "/contacts",
          name: "contacts",
          isActive: false,
        },
      ],
      lang: lang,
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    activate(idx) {
      this.links.map((item, index) =>
        index === idx ? (item.isActive = true) : (item.isActive = false)
      );
    },
    setLocale(lang) {
      if (lang) {
        localStorage.setItem("lang", lang);
        window.location.reload();
        this.lang = lang;
        this.$emit("locale", lang);
      }
    },
  },
};
</script>

<style></style>
