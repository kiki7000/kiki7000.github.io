<template>
  <div class="flex h-screen items-center select-none">
    <div class="mx-auto w-4/5 h-4/5 grid sm:grid-cols-4 md:grid-cols-5">
      <h1 class="text-3xl font-semibold text-darkgrey mb-10 sm:mb-0">
        Projects
      </h1>
      <div class="md:col-span-4 sm:col-span-3">
        <div
          class="flex items-center h-24 border-l-4 border-grey-500 rounded-2xl mb-5"
          v-for="p in projects"
          v-bind:key="p"
        >
          <div class="">
            <h2 class="ml-4 text-xl font-semibold mb-0">{{ p.name }}</h2>
            <h4 class="ml-4 font-medium mt-0">{{ p.description }}</h4>
            <div class="ml-2">
              <a :href="`${p.github}`">
                <font-awesome-icon
                  class="ml-0.5 text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200"
                  :icon="['fab', 'github']"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Discord.py Components",
          description: "unofficial library for discord components",
          github: "https://github.com/kiki7000/discord.py-components",
        },
        {
          name: "Comcigan-py",
          description: "",
          github: "https://github.com/Team-IF/comcigan-py",
        },
        {
          name: "Discommu",
          description: "디스코드에서의 게시판",
          github: "https://github.com/Team-Kat/discommu-backend",
        },
        {
          name: "Dex.py",
          description: "discord.py extension",
          github: "https://github.com/Team-Kat/dex.py",
        },
      ],
    };
  },
};
</script>