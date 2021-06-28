<template>
    <v-img class="img" :src="content.img">
        <div class="gradient"></div>
    </v-img>
</template>

<script>
export default {
    name: 'article-first-img',
    
    props: {
        content: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    
}
.gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
}
</style>