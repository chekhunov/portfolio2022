<template>
  <div class="home-page">
    <section class="home">
      <div class="container">
        <div class="home__inner d-flex justify-center align-center">
          <div class="home__left">Igor Chekhunov</div>

          <div class="home__content">
            <img
              class="home__img"
              src="../../root/assets/img/home1.png"
              alt="photo"
            />

            <div class="home__img-decoration-l d-flex flex-column">
              <span v-for="(item, index) in 7" :key="`left_${index}`">
                front-end
              </span>
            </div>

            <div class="home__img-decoration-r d-flex flex-column">
              <span v-for="(item, index) in 7" :key="`right_${index}`">
                developer
              </span>
            </div>
          </div>

          <div class="home__right">
            <div class="title-block">
              <img
                class="title-block__decor"
                src="../../root/assets/icons/circle.svg"
                alt="circle"
              />

              <span class="title-block__text"> Start a project </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="description">
      <div class="container">
        <p class="description__headline">
          I’m a <b style="color: #d06156">front-end developer</b> from kharkiv,
          Ukraine
        </p>

        <div class="description__content">
          <div class="description__text-l">
            I build <b style="color: #d06156">creative</b>, eye-catching
            websites from scratch
          </div>
        </div>
      </div>
    </section>

    <section class="skills">
      <div class="container">
        <div class="skills__inner" style="background-color: white">
          <div class="title skills__title">Skills</div>

          <div class="skills__content d-flex justify-between">
            <ul
              class="skills__column column"
              v-for="(item, index) in column"
              :key="`column_${index}`"
            >
              <li class="column__title">{{ item.title }}</li>

              <li
                class="column__item"
                v-for="(el, key) in item.row"
                :key="`row_${key}`"
              >
                {{ el }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="about__inner d-flex justify-between">
          <img class="about__img" src="../../root/assets/img/my.jpg" alt="ic" />

          <div class="about__content">
            <div class="about__block d-flex justify-between align-center">
              <div class="title">About me</div>

              <div class="title-block">
                <img
                  class="title-block__decor"
                  src="../../root/assets/icons/circle.svg"
                  alt="circle"
                />

                <span class="title-block__text"> Start a project </span>
              </div>
            </div>

            <p class="about__text">Hey!</p>

            <p class="about__text">
                My name is Igor, I am 40 years old, I have been doing
                HTML-layout of sites for a year now. I have a completely
                cross-browser, responsive and valid layout. To ensure that the
                requirements for site layout are met in the process of working
                on a project, I use various project builders. At the end of the
                work, the layout display is checked in various browsers (Google,
                Safari, Opera, Firefox, Brave, etc.) on different devices
                (laptop, tablet, mobile phone), the code is checked by the
                validator for compliance with the standards and the identified
                errors are eliminated.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <div class="process__inner d-flex flex-column">
          <div class="title">The process</div>

          <div class="process__content d-flex justify-between">
            <div
              class="process__item d-flex flex-column align-center"
              v-for="(item, index) in process_items"
              :key="`process-item_${index}`"
            >
              <div 
                class="process__img"
              >
                <span v-if="index !== 5" class="line"></span>
                <img
                  class="title-block__decor"
                  
                  src="../../root/assets/icons/circle1.svg"
                  alt="circle"
                />

                <span class="process__num" :class="{ red: item.isActive }">{{
                  item.number
                }}</span>
              </div>

              <div class="process__description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      column: [
        {
          title: "Frontend:",
          row: [
            "JavaScript (ES5 +)",
            "ReactJS, Vue",
            "Redux, Vuex",
            "Material UI, Vuetify",
            "CSS Modules / Stylus / LESS",
            "SCSS / styled-components /",
            "Webpack / Gulp",
            "React Testing Library",
          ],
        },
        {
          title: "Other skills:",
          row: [
            "Git / GitHub / Bitbucket / GitLab",
            "BEM (CSS), SVG(sprite), Icomoon",
            "Email layout ie5",
            "MySQL / NoSQL",
            "JSON / JSON RPC",
            "Jira, Trello, Sonar",
          ],
        },
        {
          title: "Backend:",
          row: ["MongoDB / Mongoose", "JavaCore"],
        },
      ],
      process_items: [
        {
          number: "01",
          description: "Workin with the layout",
          isActive: false,
        },
        {
          number: "02",
          description: "Content layout",
          isActive: false,
        },
        {
          number: "03",
          description: "Website styling",
          isActive: true,
        },
        {
          number: "04",
          description: "Adaptive layout",
          isActive: false,
        },
        {
          number: "05",
          description: "Cross-browser compatibility and PixelPerfect",
          isActive: false,
        },
        {
          number: "06",
          description: "Eliminating errors",
          isActive: true,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
