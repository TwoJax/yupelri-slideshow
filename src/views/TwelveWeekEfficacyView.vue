<template>
  <div class="h-full">
    <page-header>
      <h1 class="pt-6">YUPELRI delivers consistent control* over 12 weeks</h1>
    </page-header>

    <main class="flex bg-white border-b-[60px] border-brand-green pt-10 pb-[64px] lg:pr-[500px]">
      <div class="flex">
        <div class="pl-32 pr-8">
          <header class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] font-semibold pl-6 py-6 text-xl text-white my-6">
            Consistent improvements† in trough FEV₁ over the 12-week study period<sup class="font-light text-xs">1,2</sup>
          </header>

          <div class="flex px-4">
            <div class="text-sm w-44 space-y-1 mr-4">
              <p class="mt-2">Pooled data from Studies 1 and 2.</p>
              <p>Primary efficacy endpoint: change from baseline in trough (predose) FEV₁ at day 85 vs placebo.</p>
              <p>A secondary endpoint, overall treatment effect (OTE), showed trough FEV₁  across the 12-week study.</p>
            </div>

            <div class="relative">
              <img @click="onGraphClick" @keydown="onGraphClick" src="../assets/images/graph2.svg" alt="graph1" class="w-[890px]" />
              <img src="../assets/images/zoom-icon.svg" alt="Zoom icon" class="absolute -top-3 -right-3 h-6 w-6 z-10">
            </div>
          </div>

          <div class="mt-6 px-4">
            <p class="text-sm text-gray-700">
              * See below for Studies 1 and 2: Primary endpoints.<br>
              †The first measurement was taken at 2 weeks.²<br>
              ‡LS mean difference from placebo (SE) is 148.1 mL (16.8), pooled estimate adjusts the LS mean for placebo as well.²
            </p>
          </div>

          <div>
            <h3 class="text-brand-blue font-semibold border-b-2 border-brand-blue pb-2 my-3 px-4">Studies 1 and 2 patient characteristics¹</h3>

            <p>
              <span class="text-2xl text-brand-blue">&bull;</span>
              In Study 1, LS mean change from baseline in trough FEV₁ on day 85 was 127 mL (YUPELRI, n=189) and -19 mL (placebo, n=191), with a statistically significant difference vs placebo of 146 mL (P&lt;0.0001)
            </p>

            <p>
              <span class="text-2xl text-brand-blue">&bull;</span>
              In Study 2, LS mean change from baseline in trough FEV₁ on day 85 was 103 mL (YUPELRI, n=181) and -45 mL (placebo, n=187), with a statistically significant difference vs placebo of 147 mL (P&lt;0.0001)
            </p>
          </div>
        </div>

        <div class="flex w-[440px]">
          <div class="flex flex-col px-4 space-y-10 mt-16">
            <div class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] px-2.5 py-2">
              <div class="bg-white p-2">
                <h3 class="text-brand-blue font-semibold border-b-2 border-brand-blue pb-2 mb-2">Studies 1 and 2 patient characteristics¹</h3>
                <ul class="list-disc list-inside px-2 space-y-4">
                  <li class="">Me an age of 64 years (range, 41-88 years); mean smoking history of 53 pack-years (48% current smokers); moderate to very severe COPD (mean post-bronchodilator % predicted FEV₁ of 55%)</li>
                  <li class="text-brand-green">37% of patients studied were on concomitant LABA or ICS/LABA therapy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/24-hour-efficacy-data">
        <svg class="absolute left-[70px] top-[507px] text-[#cde3f1] h-[66px] w-auto z-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
        </svg>
      </router-link>

      <router-link to="/concomitant-use">
        <svg class="absolute right-[465px] top-[507px] text-[#cde3f1] h-[66px] w-auto z-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
        </svg>
      </router-link>
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
      images.value = 'graph2.png';
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
