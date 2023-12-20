<template>
  <div class="w-[250px] h-full p-4 border-r">
    <UVerticalNavigation :links="links" :ui="ui" />
  </div>
</template>
<script setup>
const links = [
  { label: "Home", to: "/" },
  { label: "Text Generation", to: "/text-generation" },
  { label: "Speech Recognition", to: "/speech-recognition" },
  { label: "Translation", to: "/translation" },
  { label: "Text Classification", to: "/text-classification" },
  { label: "Image Classification", to: "/image-classification" },
  { label: "Text to Image", to: "/text-to-image" },
  { label: "Text Embedding", to: "/text-embedding" },
];
const ui = {
  active: "text-gray-100 before:bg-gray-800",
};
</script>
