<template>
  <div class="h-full">
    <page-header>
      <h1>YUPELRI delivers a full 24 hours of efficacy in a single nebulized<br> daily dose<sup class="font-light text-base">1</sup></h1>
    </page-header>

    <main class="flex bg-white border-b-[60px] border-brand-green pt-10 pb-28 lg:pr-[500px]">
      <div class="flex">
        <div class="pl-32 pr-8">
          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            YUPELRI was studied in two 12-week, randomized, double-blind, placebo-controlled, parallel-group confirmatory studies (Studies 1 and 2) to evaluate the efficacy of YUPELRI vs placebo in patients with moderate to very severe COPD
          </p>

          <header class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] font-semibold pl-6 py-6 text-xl text-white my-6">
            YUPELRI delivers consistent improvement in FEV₁ vs placebo over 24 hours on days 84/85<sup class="font-light text-xs">1,2</sup>
          </header>

          <div class="flex px-4">
            <div class="text-sm w-44 space-y-4 mr-4">
              <p class="mt-2">
                In studies 1 and 2, serial spirometry was performed on a substudy population. Pooled results are shown.
              </p>

              <p>
                Primary efficacy endpoint was change from baseline in trough (predose) FEV<sub>1</sub> at day 85 vs placebo.
              </p>
            </div>

            <div class="relative">
              <img @click="onGraphClick" @keydown="onGraphClick" src="../assets/images/graph1.svg" alt="graph1" class="w-[890px]" />
              <img src="../assets/images/zoom-icon.svg" alt="Zoom icon" class="absolute -top-3 -right-3 h-6 w-6 z-10">
            </div>
          </div>

          <div class="mt-6">
              <p>
                <span class="text-2xl text-brand-blue">&bull;</span>
                In Studies 1 and 2, a prespecified exploratory analysis was performed using serial spirometry on a substudy population over 24 hours on days 84/85.
                In Study 1, LS mean changes from baseline in FEV₁ ranged from 55.8 mL to 240.4 mL in the YUPELRI group, and from -113.6 mL to 59.6 mL in the placebo group.
                In Study 2, LS mean changes from baseline in FEV₁ ranged from 19.8 mL to 148.5 mL in the YUPELRI group, and from -176.4 mL to -13.0 mL in the placebo group²
              </p>
            </div>
        </div>

        <div class="flex bordered w-[800px]">
          <div class="flex flex-col px-10 space-y-10 mt-16">
            <img src="../assets/images/once-daily-dosing.svg" alt="Once-daily dosing" class="w-96">
            <img src="../assets/images/24-hour-duration.svg" alt="24-hour duration" class="w-96">
            <img src="../assets/images/response-in-30-minutes.svg" alt="Patients responded in as early as 30 minutes" class="w-96">

            <p class="text-xs text-gray-600">
              LS=least squares.<br>
              * An exploratory analysis of the time to achieve a 100 mL increase in FEV<sub class="font-light text-xs">1</sub> on day 1 showed that the median (95% CI)
              time to achieve an increase in FEV<sub class="font-light text-xs">1</sub> of 100 mL was 30 minutes in Study 1 (30 to 60 minutes) and Study 2 (30 to 90 minutes)²
            </p>
          </div>
        </div>
      </div>
    </main>

    <safety-information />
  </div>

  <side-nav>
    <router-link to="/">
      <li class="flex justify-center items-center bg-brand-green border-t border-r border-b border-white h-16 w-16 rounded-r">
        <img src="../assets/images/home-icon.svg" alt="Home icon" class="h-8">
      </li>
    </router-link>

    <li class="flex justify-center items-center bg-brand-green border-t border-r border-b border-white h-16 w-16 rounded-r">
      <img src="../assets/images/information-icon.svg" alt="Information icon" class="h-8">
    </li>
  </side-nav>

    <vue-easy-light-box
      :imgs="images"
      :index="0"
      :move-disabled="true"
      :pinch-disabled="true"
      :rotate-disabled="true"
      :visible="lightboxVisible"
      :zoom-disabled="true"
      @hide="onHide"
    />

</template>

<script>
import { defineComponent, ref } from 'vue';
import SafetyInformation from '@/components/SafetyInformation.vue';
import SideNav from '@/components/SideMenu.vue';
import PageHeader from '@/components/PageHeader.vue';
import VueEasyLightBox from 'vue-easy-lightbox';

export default defineComponent({
  components: {
    SafetyInformation,
    SideNav,
    PageHeader,
    VueEasyLightBox,
  },

  setup() {
    const lightboxVisible = ref(false);
    const images = ref([]);

    const onShow = () => {
      lightboxVisible.value = true;
    };

    const onHide = () => {
      lightboxVisible.value = false;
    };

    const onGraphClick = () => {
      images.value = 'graph1.png';
      onShow();
    };

    return {
      lightboxVisible,
      images,
      onGraphClick,
      onHide,
      onShow,
    };
  },
});
</script>

<style scoped>
.bordered:before {
  content: "";
  border: 1px dashed #d3d3d3;
  align-self: stretch;
}
</style>
