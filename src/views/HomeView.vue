<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-24">
    <div class="flex flex-col items-center bg-white bg-[url('../assets/images/home-menu-background.svg')] bg-cover bg-no-repeat border-4 border-brand-green rounded-[65px] mt-40 py-10">
      <div class="flex justify-center items-center">
        <img src="../assets/images/yupelri-logo.svg" alt="Yupelri logo" class="h-auto w-96" />
      </div>

      <div class="flex items-center my-12">
        <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-12" />
        <p class="ml-2 font-bold text-5xl text-brand-blue">Touch Screen to view Clinical Data</p>
      </div>

      <div class="flex flex-col px-36 w-full">
        <div class="flex justify-center space-x-20">
          <a class="flex items-center justify-between bg-brand-green rounded-full py-6 px-8 font-light text-2xl text-white w-[600px] shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)]">
            YUPELRI 24-hour efficacy data
            <img src="../assets/images/click-icon-white.svg" alt="Click icon" class="h-8" />
          </a>

          <a class="flex items-center justify-between bg-brand-green rounded-full py-6 px-8 font-light text-2xl text-white w-[600px] shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)]">
            YUPELRI 12-week efficacy data
            <img src="../assets/images/click-icon-white.svg" alt="Click icon" class="h-8" />
          </a>
        </div>

        <div class="flex justify-center space-x-20 mt-5 mb-10">
          <a class="flex items-center justify-between bg-brand-green rounded-full py-1.5 px-8 font-light text-2xl text-white w-[600px] shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)] leading-7">
            YUPELRI efficacy data in concomitant<br> use with other treatments
            <img src="../assets/images/click-icon-white.svg" alt="Click icon" class="h-8" />
          </a>

          <a class="flex items-center justify-between bg-brand-green rounded-full py-1.5 px-8 font-light text-2xl text-white w-[600px] shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)] leading-7">
            Health-related quality of life<br> (HRQoL) with YUPELRI
            <img src="../assets/images/click-icon-white.svg" alt="Click icon" class="h-8" />
          </a>
        </div>

        <div class="flex justify-center">
          <a class="flex items-center justify-center bg-brand-green rounded-full py-1.5 px-8 font-light text-2xl text-white w-[600px] shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)] relative">
            The safety profile of YUPELRI<br> in 3 clinical studies
            <img src="../assets/images/click-icon-white.svg" alt="Click icon" class="h-8 absolute top-6 right-8" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>