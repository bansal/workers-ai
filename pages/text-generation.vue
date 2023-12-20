<template>
  <div class="h-full flex flex-col">
    <WorkInProgress label="Text Generation" />
    <div class="grow overflow-y-scroll"></div>
    <div class="border-t pt-4">
      <div class="flex flex-row gap-4">
        <UTextarea v-model="prompt" class="w-full" />
        <UButton @click="submit" icon="i-tabler-send-2"></UButton>
      </div>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Text Generation",
});
const prompt = ref("");
const submit = () => {
  console.log(prompt.value);
};
</script>
