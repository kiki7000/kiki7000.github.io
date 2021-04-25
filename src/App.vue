<template>
  <div className="overflow-x-hidden">
    <Main />
    <Skills />
    <Projects />
  </div>
</template>

<script>
import Main from "./layouts/Main.vue";
import Skills from "./layouts/Skills.vue";
import Projects from "./layouts/Projects.vue";

export default {
  components: {
    Main,
    Skills,
    Projects,
  },
};
</script>