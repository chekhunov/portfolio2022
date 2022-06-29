<template>
  <div class="home-page">
    <div class="container">
      <div class="bredcrumbs">this is my page</div>

      <div class="player">
        <button
          class="player__btn"
          @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
        >
          <svg
            class="player__icon"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 496.159 496.159"
            style="enable-background: new 0 0 496.159 496.159"
            xml:space="preserve"
          >
            <path
              :style="audio.isPlaying ? 'fill: #e5aa17' : 'fill: #d06156'"
              d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085
	c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"
            />
            <g>
              <path
                style="fill: #ffffff"
                d="M266.494,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791H125.38
		c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79
		c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.218
		C272.028,134.338,269.904,130.768,266.494,128.917z"
              />
              <path
                v-if="audio.isPlaying"
                style="fill: #ffffff"
                d="M301.485,322.937c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.361
		c0-29.956-13.2-57.047-33.63-69.018c-3.534-2.072-8.08-0.883-10.153,2.652c-2.072,3.535-0.885,8.082,2.651,10.152
		c15.971,9.358,26.291,31.424,26.291,56.213c0,27.36-12.77,51.426-31.055,58.525c-3.82,1.482-5.715,5.783-4.231,9.604
		C295.707,321.139,298.513,322.937,301.485,322.937z"
              />
              <path
                v-if="audio.isPlaying"
                style="fill: #ffffff"
                d="M320.856,353.882c0.896,0,1.803-0.163,2.685-0.505c34.046-13.219,57.822-55.979,57.822-103.988
		c0-43.186-18.884-82.155-48.11-99.278c-3.533-2.073-8.081-0.884-10.152,2.652c-2.072,3.534-0.885,8.081,2.651,10.151
		c24.768,14.512,40.771,48.456,40.771,86.475c0,42.027-19.883,79.101-48.353,90.154c-3.82,1.482-5.715,5.782-4.231,9.604
		C315.079,352.084,317.884,353.882,320.856,353.882z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>

    <section class="home">
      <div class="container">
        <div class="home__inner d-flex justify-center align-center">
          <!-- <div class="home__left">{{ $t("ihor") }}</div> -->

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
            <TitleBlock />
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

              <TitleBlock />
            </div>

            <p class="about__text">Hey!</p>

            <p class="about__text">
              My name is Igor, I am 40 years old, I have been programming for 3
              years, of which 1 year I studied Java, 2 years I have been doing
              Frontend development in the field of marketplaces using React and
              Vue technologies, also developing layouts in Figma. In my free
              time, I study new technologies and new approaches in development,
              and also help beginners to form in the profession of a Frontend
              developer.
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
              <div class="process__img">
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

    <section class="projects">
      <div class="container">
        <div class="title d-flex">Projects</div>
      </div>

      <ProjectsSwiper :projectItems="project_items" />
    </section>

    <section class="experience">
      <div class="container">
        <div class="experience__inner" style="background-color: white">
          <div class="title skills__title">work experience</div>

          <div class="experience__content d-flex flex-column">
            <div
              class="experience__item d-flex flex-column"
              v-for="(item, index) in experience"
              :key="`experience_${index}`"
            >
              <div class="experience__company">
                {{ item.company }}
              </div>

              <div class="experience__block block d-flex">
                <div class="block__left">
                  {{ item.month }}
                </div>

                <div class="block__right">
                  {{ item.steck }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="achievement">
      <div class="container">
        <div class="achievement__inner">
          <div class="title achievement__title d-flex">
            Achievement
            <svg
              width="147"
              height="58"
              viewBox="0 0 147 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.87909 10.3465L19.1917 37.5267L19.9368 37.612L20.2654 36.3915C20.4939 35.495 20.7597 34.456 21.0627 33.2745C21.3706 32.0516 21.6601 30.8056 21.9312 29.5365C22.2485 28.2308 22.5191 27.1504 22.7428 26.2953L22.8281 25.5502C22.9217 25.0996 23.1431 24.2652 23.4923 23.047C23.8415 21.8288 24.2185 20.5509 24.6234 19.2133C25.0282 17.8757 25.4052 16.5978 25.7545 15.3796C26.1037 14.1614 26.3481 13.3087 26.4878 12.8215C26.618 12.417 26.8718 12.2154 27.2491 12.2167C27.6264 12.2179 27.9806 12.2375 28.3118 12.2755C28.7258 12.3229 29.0522 12.4022 29.2911 12.5134C29.53 12.6247 29.6997 12.7909 29.8001 13.0121C29.942 13.238 30.0585 13.503 30.1495 13.807C30.2405 14.111 30.3705 14.4404 30.5395 14.7953C31.4676 16.5792 32.3997 18.5103 33.336 20.5887C34.3184 22.6304 35.3191 24.6952 36.3381 26.783C37.3986 28.8756 38.4821 30.9499 39.5886 33.0058C40.7413 35.0251 41.9449 36.9663 43.1994 38.8295C43.2313 38.917 43.3023 39.03 43.4122 39.1684C43.5222 39.3068 43.6298 39.4659 43.735 39.6457C43.8816 39.8303 44.0099 39.9918 44.1199 40.1302C44.2712 40.2733 44.3653 40.368 44.4019 40.4141L45.3106 39.0713C45.5012 38.506 45.8077 37.6604 46.2302 36.5345C46.6942 35.4133 47.2161 34.152 47.796 32.7506C48.422 31.3125 49.0552 29.8123 49.6954 28.25C50.3405 26.6463 50.9529 25.1437 51.5328 23.7423C52.1541 22.3456 52.7174 21.089 53.2227 19.9726C53.7281 18.8562 54.0943 18.0384 54.3216 17.5192C54.5346 17.1242 54.9233 16.4767 55.4877 15.5767C56.0982 14.6401 56.7111 13.6828 57.3264 12.7048C57.9878 11.6902 58.6214 10.7352 59.2272 9.84001C59.833 8.9448 60.2815 8.32513 60.5725 7.98102C60.6695 7.86631 60.8931 7.74513 61.2432 7.61748C61.6348 7.49456 61.9133 7.44259 62.0789 7.46156C62.824 7.5469 63.2397 7.76227 63.326 8.10766C63.4584 8.41639 63.4938 8.83984 63.4321 9.37799C63.342 10.1645 62.9066 11.0373 62.1257 11.9963C61.3496 12.914 60.4628 13.8819 59.4655 14.9C58.5143 15.8815 57.5584 16.9043 56.5977 17.9686C55.6832 18.9962 55.0377 20.0546 54.6613 21.1439L46.1627 44.2645C46.0325 44.669 45.8201 44.8753 45.5256 44.8835C45.2311 44.8917 44.939 44.8792 44.6492 44.846C44.2352 44.7986 43.9478 44.7447 43.787 44.6844C43.6676 44.6288 43.5073 44.3798 43.3064 43.9373L28.387 16.5619L27.3489 17.3866C27.2614 17.4185 27.1224 17.7171 26.9318 18.2824C26.746 18.8064 26.5483 19.4338 26.3388 20.1647C26.1292 20.8956 25.8943 21.6655 25.6339 22.4745C25.4196 23.2468 25.2633 23.8789 25.165 24.3709C25.0301 24.8168 24.8667 25.5111 24.6748 26.4537C24.483 27.3963 24.2586 28.4401 24.0017 29.5849C23.7861 30.7345 23.5404 31.9646 23.2645 33.275C23.0347 34.5488 22.8097 35.7812 22.5894 36.9722C22.3691 38.1632 22.163 39.23 21.9712 40.1727C21.7841 41.0739 21.6645 41.7522 21.6123 42.2075C21.3213 42.5517 21.0119 42.8727 20.6842 43.1707C20.4026 43.432 20.0549 43.539 19.6409 43.4916C19.3511 43.4584 19.1489 43.3933 19.0342 43.2962C18.9242 43.1578 18.7847 42.9112 18.6157 42.5563L5.56051 17.03C5.08053 16.0943 4.65854 15.0184 4.29455 13.8024C3.93529 12.5451 3.81967 11.3575 3.94768 10.2398L4.87909 10.3465ZM58.509 30.3918C58.9104 28.7182 59.2934 27.0216 59.6581 25.302C60.069 23.5456 60.5165 21.8355 61.0006 20.1714C61.4895 18.466 62.0701 16.8759 62.7423 15.4011C63.4606 13.8897 64.3391 12.6273 65.3778 11.6139C66.4627 10.5639 67.7492 9.76759 69.2372 9.22506C70.7253 8.68253 72.5042 8.52979 74.574 8.76686C76.2713 8.96125 77.7189 9.5045 78.9168 10.3966C80.1609 11.2521 81.1695 12.3322 81.9427 13.637C82.7573 14.9465 83.3643 16.421 83.7637 18.0604C84.1678 19.6584 84.443 21.2836 84.5893 22.936C84.7769 24.5931 84.8611 26.2384 84.8418 27.8718C84.8224 29.5052 84.7369 30.9843 84.5852 32.3089C84.3339 34.5029 83.7308 36.6566 82.7757 38.77C81.8255 40.842 80.586 42.6921 79.0575 44.3205C77.5751 45.9121 75.8178 47.1577 73.7855 48.0573C71.7994 48.9203 69.6059 49.2142 67.2049 48.9393C65.1351 48.7022 63.4812 47.9466 62.2432 46.6724C61.0051 45.3983 60.0669 43.8859 59.4287 42.1352C58.7951 40.3431 58.4242 38.4553 58.3159 36.4718C58.2075 34.4882 58.2458 32.6892 58.4307 31.0748L58.509 30.3918ZM60.4941 31.1853C60.3281 32.6342 60.2905 34.2445 60.3811 36.0163C60.4765 37.7468 60.7931 39.3767 61.3309 40.9062C61.8687 42.4356 62.6809 43.7659 63.7676 44.8969C64.9004 45.9912 66.3983 46.6451 68.2611 46.8584C70.4551 47.1097 72.3819 46.7642 74.0416 45.8219C75.7426 44.8844 77.1847 43.6446 78.3679 42.1026C79.5972 40.5239 80.5533 38.7671 81.2362 36.8322C81.9192 34.8974 82.3602 33.0606 82.5593 31.322C82.7442 29.7076 82.8382 27.7891 82.8411 25.5667C82.8487 23.3028 82.5731 21.1324 82.0141 19.0553C81.4966 16.9829 80.5916 15.1808 79.2992 13.6487C78.0529 12.0801 76.3121 11.1677 74.0767 10.9117C72.5037 10.7315 71.0949 10.9476 69.8505 11.56C68.6061 12.1724 67.4988 13.0521 66.5286 14.1992C65.5632 15.3048 64.7213 16.6133 64.003 18.1248C63.3309 19.5995 62.7574 21.1275 62.2827 22.7088C61.8128 24.2486 61.428 25.7773 61.1284 27.2947C60.8335 28.7708 60.6221 30.0676 60.4941 31.1853ZM87.9609 19.8622L102.274 47.0424L103.019 47.1277L103.347 45.9072C103.576 45.0107 103.841 43.9717 104.145 42.7902C104.452 41.5673 104.742 40.3213 105.013 39.0522C105.33 37.7465 105.601 36.6661 105.825 35.811L105.91 35.0659C106.004 34.6153 106.225 33.7809 106.574 32.5627C106.923 31.3445 107.3 30.0666 107.705 28.729C108.11 27.3914 108.487 26.1135 108.836 24.8953C109.186 23.6771 109.43 22.8244 109.57 22.3372C109.7 21.9327 109.954 21.7311 110.331 21.7324C110.708 21.7336 111.062 21.7532 111.394 21.7912C111.808 21.8386 112.134 21.9179 112.373 22.0291C112.612 22.1404 112.782 22.3066 112.882 22.5278C113.024 22.7538 113.14 23.0187 113.231 23.3227C113.322 23.6267 113.452 23.9561 113.621 24.311C114.549 26.0949 115.482 28.026 116.418 30.1044C117.4 32.1461 118.401 34.2109 119.42 36.2987C120.48 38.3913 121.564 40.4656 122.67 42.5215C123.823 44.5408 125.027 46.482 126.281 48.3452C126.313 48.4327 126.384 48.5457 126.494 48.6841C126.604 48.8225 126.712 48.9816 126.817 49.1614C126.963 49.346 127.092 49.5075 127.202 49.6459C127.353 49.789 127.447 49.8837 127.484 49.9298L128.392 48.587C128.583 48.0217 128.89 47.1761 129.312 46.0502C129.776 44.929 130.298 43.6677 130.878 42.2663C131.504 40.8282 132.137 39.328 132.777 37.7657C133.422 36.162 134.035 34.6594 134.615 33.258C135.236 31.8613 135.799 30.6047 136.305 29.4883C136.81 28.3719 137.176 27.5541 137.403 27.0349C137.616 26.6399 138.005 25.9924 138.569 25.0924C139.18 24.1558 139.793 23.1985 140.408 22.2205C141.07 21.2059 141.703 20.2509 142.309 19.3557C142.915 18.4605 143.363 17.8408 143.654 17.4967C143.751 17.382 143.975 17.2608 144.325 17.1332C144.717 17.0103 144.995 16.9583 145.161 16.9773C145.906 17.0626 146.322 17.278 146.408 17.6234C146.54 17.9321 146.576 18.3555 146.514 18.8937C146.424 19.6802 145.988 20.553 145.208 21.512C144.431 22.4297 143.545 23.3976 142.547 24.4157C141.596 25.3972 140.64 26.42 139.68 27.4843C138.765 28.5119 138.12 29.5703 137.743 30.6596L129.245 53.7802C129.114 54.1847 128.902 54.391 128.607 54.3992C128.313 54.4074 128.021 54.3949 127.731 54.3617C127.317 54.3143 127.03 54.2605 126.869 54.2001C126.749 54.1445 126.589 53.8955 126.388 53.453L111.469 26.0776L110.431 26.9023C110.343 26.9342 110.204 27.2328 110.014 27.7981C109.828 28.3221 109.63 28.9495 109.421 29.6804C109.211 30.4113 108.976 31.1812 108.716 31.9902C108.501 32.7625 108.345 33.3946 108.247 33.8867C108.112 34.3325 107.949 35.0268 107.757 35.9694C107.565 36.912 107.34 37.9558 107.083 39.1006C106.868 40.2502 106.622 41.4803 106.346 42.7907C106.117 44.0645 105.892 45.2969 105.671 46.4879C105.451 47.6789 105.245 48.7457 105.053 49.6884C104.866 50.5896 104.746 51.2679 104.694 51.7232C104.403 52.0674 104.094 52.3884 103.766 52.6864C103.484 52.9477 103.137 53.0547 102.723 53.0073C102.433 52.9741 102.231 52.909 102.116 52.8119C102.006 52.6735 101.867 52.4269 101.697 52.072L88.6424 26.5457C88.1624 25.61 87.7404 24.5341 87.3764 23.3182C87.0171 22.0608 86.9015 20.8732 87.0295 19.7555L87.9609 19.8622Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <SertifSlider :slider_sertif_items="slider_sertif_items" />
    </section>

    <section class="contact">
      <div class="contact__inner">
        <div class="contact__img-decoration-r d-flex flex-column">
          <span
            v-for="(item, index) in 7"
            :key="`item_${index}`"
            :style="index === 0 ? '-webkit-text-fill-color: #D06156;' : ''"
          >
            Just say hello
          </span>
        </div>

        <div class="contact__content d-flex justify-between align-center">
          <div class="contact__left">
            <form class="contact__form form">
              <label for="" class="form__row d-flex flex-column mb-20">
                <span>How can i call you?</span>
                <input
                  type="name"
                  class="form__input"
                  placeholder="Your name"
                />
              </label>

              <label for="" class="form__row d-flex flex-column mb-20">
                <span>How can i contact you?</span>
                <input
                  type="mail"
                  class="form__input"
                  placeholder="Your e-mail"
                />
              </label>

              <label for="" class="form__row d-flex flex-column mb-20">
                <span>What’s the name of your company?</span>
                <input
                  type="text"
                  class="form__input"
                  placeholder="Your company name"
                />
              </label>

              <label for="" class="form__row d-flex flex-column">
                <span>How can i help you?</span>
                <textarea
                  type="text"
                  class="form__input"
                  placeholder="Tell me about your project "
                ></textarea>
              </label>
            </form>
          </div>

          <div class="contact__right d-flex justify-center">
            <TitleBlock />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBlock from "../components/base/TitleBlock.vue";
import ProjectsSwiper from "../components/organisms/ProjectsSwiper.vue";
import SertifSlider from "../components/organisms/SertifSlider.vue";

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
      projects: [
        {
          id: "01",
          name: "Digital marketing agency",
          imgUrl: "/public/img/projects/marketing.jpg",
          bgColor: "#4D333E",
          color: "#fff",
          link: "http://google.com",
          stroke: "white",
        },
        {
          id: "02",
          name: "WAWE - Surf school",
          imgUrl: "/public/img/projects/wawe.jpg",
          bgColor: "",
          color: "burlywood",
          link: "http://google.com",
          stroke: "white",
        },
        {
          id: "03",
          name: "Smart and trendy",
          imgUrl: "/public/img/projects/glee.jpg",
          bgColor: "#ffffff",
          color: "darkcyan",
          link: "http://google.com",
          stroke: "black",
        },
      ],
      experience: [
        {
          id: 0,
          company: "Agancy: Codica",
          month: "December 2021 - Present (7 months)",
          steck:
            "JavaScript · HTML · CSS · React · Redux · Adaptive layout · BEM · SCSS · LESS · Vue.js · Vuex · Vuetify · IcoMoon · Trello · Slack · Gitlab · Docker ",
        },
        {
          id: 1,
          company: "Agancy: Aimix",
          month: "March 2021 - December 2021 - Present (8 months)",
          steck:
            "JavaScript · HTML · CSS · React · Redux · Adaptive layout · BEM · SCSS · LESS · Vue.js · Vuex · SVG sprites · IcoMoon",
        },
        {
          id: 2,
          company: "Agancy: IT-Cluster",
          month: "March 2021 - June 2021 (4 months)",
          steck:
            "JavaScript · HTML · CSS · React · Adaptive layout · BEM · SCSS · SVG sprites",
        },
        {
          id: 3,
          company: "Agancy: Fairtech Marketing",
          month: "October 2020 - March 2021 (6 months)",
          steck:
            "JavaScript · HTML · CSS · Adaptive layout · JQuery · Gulp · OpenCart · WordPress · БЭМ · Sass · Cross-browser layout",
        },
      ],
      project_items: [
        {
          id: "01",
          name: "Digital marketing agency",
          img: "1",
          bgColor: "#4D333E",
          color: "#fff",
          link: "http://google.com",
          stroke: "white",
        },
        {
          id: "02",
          name: "WAWE - Surf school",
          img: "2",
          bgColor: "",
          color: "burlywood",
          link: "http://google.com",
          stroke: "white",
        },
        {
          id: "03",
          name: "Smart and trendy",
          img: "3",
          bgColor: "#ffffff",
          color: "darkcyan",
          link: "http://google.com",
          stroke: "black",
        },
        {
          id: "04",
          name: "a",
          img: "4",
          bgColor: "#ffffff",
          color: "darkcyan",
          link: "http://google.com",
          stroke: "black",
        },
        {
          id: "05",
          name: "a",
          img: "5",
          bgColor: "#ffffff",
          color: "darkcyan",
          link: "http://google.com",
          stroke: "black",
        },
        {
          id: "06",
          name: "a",
          img: "6",
          bgColor: "#ffffff",
          color: "darkcyan",
          link: "http://google.com",
          stroke: "black",
        },
      ],
      audio: {
        id: "muscle-car",
        name: "Muscle Car",
        file: new Audio("/sounds/1.mp3"),
        isPlaying: false,
      },
      curentSliderIndex: 0,
      slider_sertif_items: [
        {
          id: 0,
          name: "IT Claster",
          url_img: "claster.jpg",
        },
        {
          id: 1,
          name: "From0to1",
          url_img: "fromto1.png",
        },
        {
          id: 2,
          name: "Hillel",
          url_img: "hillel.png",
        },
        {
          id: 3,
          name: "RS-School",
          url_img: "rs.jpg",
        },
        {
          id: 4,
          name: "Nure IT Academy",
          url_img: "cer.jpg",
        },
      ],
      interval: 3000,
    };
  },
  components: { TitleBlock, ProjectsSwiper, SertifSlider },
  methods: {
    play(audio) {
      audio.isPlaying = true;
      audio.file.play();
    },
    pause(audio) {
      audio.isPlaying = false;
      audio.file.pause();
    },
    prevSlide() {
      if (this.curentSliderIndex > 0) {
        this.curentSliderIndex--;
      }
    },
    nextSlide() {
      if (this.curentSliderIndex >= this.slider_sertif_items.length - 1) {
        this.curentSliderIndex = 0;
      } else {
        this.curentSliderIndex++;
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="scss" scoped></style>
