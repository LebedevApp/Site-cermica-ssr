<template>
  <section>
    <AppPartners v-for="card in content" :key="card.name" :content='card' />
  </section>
</template>
    
  

<script>
import AppPartners from "@/components/contentPage/partners/AppParnersInfo";
export default {
  components: { AppPartners },
  data() {
    return {
      content: [
        {
          name: "Gasprom",
          img: "img/partners/Fotoram.io (6).jpg",
          icon: "",
          title: "Газпром",
          subtitle:
            "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text:
            "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
        {
          name: "mvd",
          img: "img/partners/Fotoram.io (7).jpg",
          title: "МВД РФ",
          subtitle: "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text: "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
        {
          name: "Other",
          img: "img/partners/Fotoram.io (8).jpg",
          title: "Еще что-то",
          subtitle: "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text: "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
      ],
    };
  },
};
</script>