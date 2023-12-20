<template>
  <div class="h-full flex flex-col justify-center items-center gap-1">
    <h1 class="text-3xl text-gray-700">Workers AI demo 🚧</h1>
    <p class="text-gray-500 text-center">
      Making a boilerplate for AI demos using
      <a
        href="https://developers.cloudflare.com/workers-ai/"
        target="_blank"
        class="underline text-primary-500"
        >Cloudflare Workers AI</a
      >
      <br />
      <strong>Work on progress</strong>
    </p>
    <div class="flex gap-2 mt-6">
      <UButton
        to="https://github.com/bansal/workers-ai"
        target="_blank"
        icon="i-tabler-brand-github"
        size="xl"
        color="black"
        label="Github"
      />
      <UButton to="/text-generation" size="xl" label="Start">
        <template #trailing>
          <UIcon name="i-tabler-send-2" class="text-xl" /> </template
      ></UButton>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Text Generation",
});
</script>
