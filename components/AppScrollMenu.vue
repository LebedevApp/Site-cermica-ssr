<template>
    <section class="scroll-menu">
        <v-btn
              class="mx-2"
              fab
              dark
              color="blue"
              @click.stop="dialog = true"
            >
              <v-icon dark size="36"> mdi-phone </v-icon>
            </v-btn>

            <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline text-body-1">
                  Заказать обратный звонок
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="mt-5 mb-n5">
                  <v-text-field
                    label="Введите имя"
                    placeholder="Ваше имя?"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    label="Введите телефон"
                    placeholder="Ваш номер телефона?"
                    outlined
                    dense
                  ></v-text-field>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn
                    color="red darken-1"
                    outlined
                    text
                    @click="dialog = false"
                  >
                    Назад
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    outlined
                    text
                    @click="dialog = false"
                  >
                    Заказать
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dialog:false
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-menu {
    position: fixed;
    top: 5%;
    right: 1%;
    z-index: 25;
}
</style>