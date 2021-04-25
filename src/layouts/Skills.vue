<template>
  <div class="flex h-screen items-center select-none">
    <div class="flex flex-col mx-auto w-4/5 h-4/5">
      <h1 class="text-3xl font-semibold text-darkgrey">Skills</h1>
      <div class="pl-4 mt-2 font-semibold">
        <h3 class="text-lg">Languages</h3>
        <div class="pl-2 mt-2">
          <button
            class="text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50"
            :class="`bg-${l.color}`"
            v-for="l in lang"
            v-bind:key="l"
          >
            <font-awesome-icon
              :icon="['fab', l.icon]"
              class="fill-current"
              style="color: white"
            />
          </button>
        </div>
      </div>
      <div class="pl-4 mt-2 font-semibold">
        <h3 class="text-lg">Frameworks</h3>
        <div class="pl-2 mt-2">
          <button
            class="text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50"
            :class="`bg-${f.color}`"
            v-for="f in frameworks"
            v-bind:key="f"
          >
            <font-awesome-icon
              :icon="['fab', f.icon]"
              class="fill-current"
              style="color: white"
            />
          </button>
        </div>
      </div>
      <div class="pl-4 mt-2 font-semibold">
        <h3 class="text-lg">Tools</h3>
        <div class="pl-2 mt-2">
          <button
            class="text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50"
            :class="`bg-${t.color}`"
            v-for="t in tools"
            v-bind:key="t"
          >
            <font-awesome-icon
              :icon="['fab', t.icon]"
              class="fill-current"
              style="color: white"
            />
          </button>
        </div>
      </div>
      <div class="flex-grow" />
      <div class="ml-4">
        <a
          href="https://github.com/kiki7000"
          class="group cursor-pointer font-bold text-lg"
          >더 보기
          <font-awesome-icon
            class="ml-1 fill-current cursor-pointer transition duration-200 ease-in-out transform group-hover:translate-x-2"
            :icon="['fas', 'arrow-right']"
            style="color: #1b00b5"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      lang: [
        { icon: "python", color: "blue-500" },
        { icon: "node-js", color: "green-600" },
      ],
      frameworks: [
        { icon: "react", color: "blue-300" },
        { icon: "vuejs", color: "green-300" },
        { icon: "bootstrap", color: "purple-500" },
      ],
      tools: [
        { icon: "git-alt", color: "black" },
        { icon: "docker", color: "blue-600" },
      ],
    };
  },
};
</script>