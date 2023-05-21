<template>
  <nav class="absolute inset-y-0 left-0 flex flex-col justify-center">
    <ol class="space-y-2">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'SideMenu',
};
</script>

<style>
ol a { margin: 1rem 0; }
</style>
