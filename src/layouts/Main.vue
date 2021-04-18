<template>
  <div class="flex h-screen items-center">
    <div class="mx-auto sm:grid sm:grid-cols-2 gap-4 sm:flex items-center">
      <div class="">
        <img class="w-52 h-52 mx-auto" src="../assets/images/kiki.gif" />
      </div>
      <div class="">
        <h1
          class="text-5xl sm:text-6xl font-notosans font-semibold text-darkgrey"
        >
          나는 키키!
        </h1>
        <h3 class="mt-2 font-notosans text-darkgrey text-xl font-medium">
          웹개발자가 되고싶은 학생
        </h3>
        <div class="mt-2">
          <a href="mailto:devkiki7000@gmail.com">
            <font-awesome-icon
              class="text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200"
              :icon="['fas', 'envelope']"
            />
          </a>
          <a href="https://github.com/kiki7000">
            <font-awesome-icon
              class="ml-0.5 text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200"
              :icon="['fab', 'github']"
            />
          </a>
          <a href="https://discord.com/users/758244072573370380">
            <font-awesome-icon
              class="ml-0.5 text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200"
              :icon="['fab', 'discord']"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>