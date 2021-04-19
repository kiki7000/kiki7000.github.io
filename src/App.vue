<template>
  <div className="overflow-x-hidden">
    <Main />
    <Skills />
  </div>
</template>

<script>
import Main from "./layouts/Main.vue";
import Skills from "./layouts/Skills.vue";

export default {
  components: {
    Main,
    Skills,
  },
};
</script>