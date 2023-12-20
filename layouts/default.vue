<template>
  <main class="h-screen flex flex-row justify-start items-stretch">
    <Sidebar />
    <div class="grow bg-gray-50 p-6">
      <slot />
    </div>
  </main>
</template>
