<template>
  <div class="header" style="font-size: 18px">
    <div class="container">
      <div class="header__inner d-flex justify-between align-center">
        <div class="header__logo">
          <router-link to="/">
            <span class="logo">
              <span class="logo__left">I</span>
              <span class="logo__right">C</span>
            </span>
          </router-link>
        </div>

        <div class="main__top d-flex justify-between align-center">
          <div id="nav" class="nav menu">
            <router-link
              :to="link.route"
              v-for="(link, index) in links"
              :key="`link_${index}`"
              class="menu__item"
              :class="{ active: link.isActive }"
              @click="activate(index)"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          id: 0,
          route: "/",
          name: "Home",
          isActive: true,
        },
        {
          id: 1,
          route: "/services",
          name: "Services",
          isActive: false,
        },
        {
          id: 2,
          route: "/portfolio",
          name: "Portfolio",
          isActive: false,
        },
        {
          id: 3,
          route: "/contacts",
          name: "Contacts",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    activate(idx) {
      this.links.map((item, index) =>
        index === idx ? (item.isActive = true) : (item.isActive = false)
      );
    },
  },
};
</script>

<style></style>
