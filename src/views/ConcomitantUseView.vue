<template>
  <div class="h-full">
    <page-header>
      <h1 class="pt-1">YUPELRI improved lung function over 12 weeks in concomitant use<br> with LABA or ICS/LABA and as monotherapy²</h1>
    </page-header>

    <main class="flex bg-white border-b-[60px] border-brand-green pt-10 pb-[194px] lg:pr-[500px]">
      <div class="flex">
        <div class="pl-32 pr-8">
          <p class="text-brand-blue">Studies 1 and 2: Pooled subgroup analysis</p>
          <header class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] font-semibold pl-6 py-6 text-xl text-white mt-3 mb-6">
            LS mean difference in trough FEV₁, over 12 weeks: Concomitant use data
          </header>

          <div class="flex px-4">
            <div class="text-sm w-44 space-y-1 mr-4">
              <p class="mt-2">
                These pooled analyses are adequately powered and robust (derived from appropriate statistical tests, pre-specified in the statistical analysis plan, with type 1 error controlled using a hierarchical testing strategy),
                allowing for conclusions to be drawn about the OTE of YUPELRI in patients with or without concomitant LABA-containing therapy (i.e., LABA or LABA/ICS).
              </p>
            </div>

            <div class="relative">
              <img @click="onGraphClick" @keydown="onGraphClick" src="graph3.png" alt="graph1" class="w-[890px]" />
              <img src="../assets/images/zoom-icon.svg" alt="Zoom icon" class="absolute -top-3 -right-3 h-6 w-6 z-10">

              <p class="text-sm text-gray-700 my-6">
                <strong>Note:</strong> The safety and efficacy of mixing therapies with YUPELRI in a nebulizer is not established.
              </p>
            </div>
          </div>
        </div>

        <div class="flex w-[500px]">
          <div class="flex flex-col px-4 space-y-10 mt-10">
            <div class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] px-2.5 py-2">
              <div class="bg-white p-2">
                <h3 class="text-brand-blue font-semibold border-b-2 border-brand-blue pb-2 mb-2">Studies 1 and 2: Pooled subgroup analysis of primary endpoint</h3>
                <p class="font-bold text-brand-green">YUPELRI with concomitant LABA or ICS/LABA vs placebo with concomitant LABA or ICS/LABA:</p>

                <ul class="list-disc list-inside px-2 space-y-2">
                  <li>LS mean change from baseline in trough FEV on day 85 was 111.82 mL (YUPELRI, n=118) and -27.37 mL (placebo, n=89), with a statistically significant difference vs placebo  (P&lt;0.0001)</li>
                  <li>LS mean difference from placebo was 139.19 mL (95% CI, 82.87-195.51)</li>
                </ul>

                <p class="font-bold text-brand-green">YUPELRI only vs placebo only (data not shown on graph):</p>

                <ul class="list-disc list-inside px-2 space-y-2">
                  <li>LS mean change from baseline in trough FEV₁ on day 85 was 117.66 mL (YUPELRI, n=192) and -33.27 mL (placebo, n=207), with a statistically significant difference vs placebo (P&lt;0.0001)</li>
                  <li>LS mean difference from placebo was 150.93 mL (95% CI, 110.26-191.61)</li>
                </ul>
              </div>
            </div>
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
      images.value = 'graph3.png';
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
