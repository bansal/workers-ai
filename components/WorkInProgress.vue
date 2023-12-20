<template>
  <div>
    <UAlert
      icon="i-tabler-alert-triangle"
      color="orange"
      variant="subtle"
      title="Heads up!"
      description="I am still working on this page. This is just a placeholder."
    />
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
useSeoMeta({
  title: props.label,
});
</script>
