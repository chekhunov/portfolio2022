<template>
  <div class="home">
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
            <img class="title-block__decor" src="../../root/assets/icons/circle.svg" alt="circle">
            
            <span class="title-block__text"> Start a project </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped></style>
