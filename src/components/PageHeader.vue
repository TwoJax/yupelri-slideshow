<template>
  <header class="relative flex justify-between font-semibold h-32 pt-6 pl-32 text-3xl text-white mr-[480px] border-b-4 border-brand-green">
    <slot></slot>

    <div class="absolute right-0 bg-white border-l-4 border-t-4 border-brand-green rounded-tl-lg z-10">
      <img src="../assets/images/once-daily-logo.svg" alt="Yupelri logo" class="h-auto w-32" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>
