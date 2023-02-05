<template>
    <section>
        <v-container>
            <h1 class="text-center my-3">Менеджер файлов</h1>

            <v-btn v-if="!showDownloadInput" outlined color="green" @click="showDownloadInput = true"
              ><v-icon class="mr-3">mdi-plus</v-icon>Добавить</v-btn
            >
            <div class="control mx-5" v-if="showDownloadInput">
                <v-file-input
                    v-model="loadFile"
                    class="input"
                    show-size
                    dense
                    label="Выберите файл"
                ></v-file-input>
                <v-btn v-if='loadFile' outlined color="green" @click="addFile"
                  >Загрузить</v-btn
                >
            </div>

            <v-alert
                v-if='alert'
                class="my-3"
                :color="alert.color"
                dense
                type="success"
            >{{ alert.text }}</v-alert>

            <v-divider class="my-5"></v-divider>

            <div class="loader" v-if="isLoading && files">
                <v-progress-circular
                    class="my-3"
                    :size="100"
                    color="primary"
                    indeterminate
                ></v-progress-circular>
            </div>

            <v-row v-else-if="!isLoading && files" class="mx-5">
                <v-col cols="12" md="4" v-for="(file, i) in files" :key="i">
                    <v-card>
                        <v-container>
                            <h4 class="my-2">{{ file.name }}</h4>
                            <v-divider class="my-2"></v-divider>
                            <v-card-actions>
                                <v-btn
                                    outlined
                                    color="red"
                                    small
                                    @click="removeFile(file.name)"
                                    >Удалить</v-btn
                                >
                                <v-spacer></v-spacer>
                                <v-btn outlined color="blue" small @click="openFile(file.name)"
                                  >Посмотреть</v-btn
                                >
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            
            <h2 class="text-center my-3" v-else>Нет данных</h2>
        </v-container>
    </section>
</template>

<script>
import firebase from "firebase/app"

export default {
    name: "ManagerFiles",

    layout: "customCRM",

    data() {
        return {
            storageRef: null,
            files: null,

            showDownloadInput: false,
            loadFile: null,

            isLoading: false,

            alert: null
        }
    },

    async created() {
        this.isLoading = true
        await this.getFiles()
        this.isLoading = false
    },

    watch: {
        alert(val) {
            if (val) {
                setTimeout(() => {
                    this.alert = null
                }, 2000)
            }
        }
    },

    methods: {
        async getFiles() {
            this.storageRef = firebase.app().storage("gs://site-caramica-ssr.appspot.com").ref()

            if (this.storageRef) {
                let res = null

                try {
                    res = await this.storageRef.list({ maxResults: 100})

                    this.files = res.items
                } catch (e) {
                    console.error('error')
                }
            }
        },

        async addFile() {
            if (!this.loadFile) {
                return
            }
            this.isLoading = true

            const file = new File([this.loadFile], this.loadFile.name)

            try {
                const pathStorage = await firebase.app().storage("gs://site-caramica-ssr.appspot.com").ref(this.loadFile.name)
                await pathStorage.put(file, {contentType: this.getFileType(this.loadFile.name) })

                await this.getFiles()

                this.alert = {
                    text: "Файл успешно добавлен",
                    type: "success"
                }

                this.loadFile = null
            } catch (e) {
                console.error(e)
                this.alert = {
                    text: "Файл не получилось добавить",
                    type: "error"
                }
            }

            this.isLoading = false
        },

        getFileType(name) {
            const lowerStr = name.toLowerCase()
            switch (true) {
                case lowerStr.includes('jpeg'): return 'image/jpeg'
                case lowerStr.includes('jpg'): return 'image/jpg'
                case lowerStr.includes('png'): return 'image/png'
                case lowerStr.includes('pdf'): return 'application/pdf'
                case lowerStr.includes('doc'): return 'application/doc'
                default: return null
            }
        },

        async removeFile(name) {
            this.isLoading = true
            try {
                const desertRef = await firebase.app().storage("gs://site-caramica-ssr.appspot.com").ref(name)

                await desertRef.delete()
                await this.getFiles()

                this.alert = {
                    text: "Файл успешно удален",
                    type: "success"
                }
            } catch (e) {
                console.error(e)
                this.alert = {
                    text: "Файл не получилось удалить",
                    type: "error"
                }
            }
            this.isLoading = false
        },

        openFile(name) {
            this.storageRef.child(name).getDownloadURL().then((url) => {
                window.open(url)
            }).catch((e) => {
                console.error(e)
            })
        },

        getAlert(text, type) {
            this.alert = {
                text,
                type
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list-files {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.control {
    display: flex;
    gap: 2rem;
    justify-content: space-around;
}

.loader {
    display: flex;
    justify-content: center;
}
</style>