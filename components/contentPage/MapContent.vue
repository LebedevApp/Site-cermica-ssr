<template>
  <section class="map_content">
    <v-img class="img" :src="content.img">
      <v-container class='relative'>
        <v-row align="center">
          <v-col cols="12" lg="6" md="6" sm="12">
            <div class="mt-6 mt-md-0 mb-n4 mb-md-0 circle d-flex justify-center align-center">
              <div class="circle_content text-h3">LOGO</div>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" style="height:600px">
            
              <v-row align="center" style="height:600px">
                  <v-col>
                      <v-card color="rgba(255,255,255,0.9)" class="pa-5 mb-10 mb-md-0 mt-n10 mt-md-0 card">
                <v-list-item-title
                  class=" text-md-left text-body-1 text-md-h5 font-weight-light"
                  >{{ content.title }}</v-list-item-title
                >
                <v-list-item-content>
                  <v-list-item-action-text
                    class=" text-md-left body-2 text-md-body-2 font-weight-light px-1"
                    >{{ content.text }}</v-list-item-action-text
                  >
                </v-list-item-content>
              </v-card>
                  </v-col>
              </v-row>
            
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: {
        img: "img/map-forest.jpg",
        title: "Основные направления производства",
        text:
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
  width: 100%;
  height: 100%;
}
.position {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.map_content {
  width: 100%;
  height: 730px;
}
.img {
  object-fit: cover;
  height: 100%;
}
.circle {
  margin: 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
}
.circle_content {
  margin: 0 auto;
}
</style>