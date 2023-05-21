<template>
  <div class="h-full">
    <page-header>
      <h1 class="pt-6">The safety profile of YUPELRI has been demonstrated in 3 clinical studies¹</h1>
    </page-header>

    <main class="flex bg-white border-b-[60px] border-brand-green pt-10 pb-[195px]">
      <div class="flex">
        <div class="pl-32 pr-8 w-[800px]">
          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            Safety database included 2,285 patients with COPD in two 12-week efficacy studies and one 52-week long-term safety
          </p>

          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            A total of 730 patients received YUPELRI 175 mcg once daily
          </p>

          <h3 class="mt-8 text-2xl text-brand-blue font-bold">Adverse reactions from two 12-week placebo-controlled efficacy trials (N=813)</h3>

          <header class="bg-gradient-to-r from-brand-blue from-80% to-[#c1a0cb] font-semibold pl-6 py-6 text-xl text-white my-6">
            Adverse reactions ≥2% incidence and higher than placebo
          </header>

          <img src="../assets/images/adverse-reactions.svg" alt="Adverse reactions table">

          <h3 class="mt-8 text-2xl text-brand-green font-bold">Fewer patients discontinued treatment with YUPELRI (13%) than with placebo (19%)</h3>
        </div>

        <div class="flex bordered w-[600px]">
          <div class="flex flex-col px-4 space-y-10 mt-10">
              <div class="bg-white p-2">
                <h3 class="text-2xl text-brand-blue font-semibold border-b-2 border-brand-blue pb-6 mb-2">Safety results from a 52-week, long-term trial vs tiotropium (N=1055)</h3>

                <ul class="list-disc list-inside px-2 space-y-2">
                  <li>YUPELRI was studied in a 52-week, open-label, active-control safety study in patients with COPD (YUPELRI 175 mcg/day, n=335; tiotropium 18 mcg/day, n=356)</li>
                  <li>The adverse reactions reported in the long-term safety trial were consistent with those observed in the 12-week placebo-controlled studies</li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      <router-link to="/quality-of-life">
        <svg class="absolute left-[60px] top-[507px] text-[#cde3f1] h-[66px] w-auto z-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
        </svg>
      </router-link>
    </main>

    <safety-information />
  </div>

  <side-nav>
    <li @click="onMenuClick" @keydown="onMenuClick" class="flex justify-center items-center bg-brand-green border-t border-r border-b border-white h-16 w-16 rounded-r">
      <img src="../assets/images/list-icon.svg" alt="List icon" class="h-8">
    </li>

    <router-link to="/">
      <li class="flex justify-center items-center bg-brand-green border-t border-r border-b border-white h-16 w-16 rounded-r my-3">
        <img src="../assets/images/home-icon.svg" alt="Home icon" class="h-8">
      </li>
    </router-link>

    <li @click="onReferencesClick" @keydown="onReferencesClick" class="flex justify-center items-center bg-brand-green border-t border-r border-b border-white h-16 w-16 rounded-r">
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

    <div
    v-show="menuVisible"
    class="absolute left-[75px] top-[107px] bg-gradient-to-tr from-[#b897c1] to-white to-60% pl-16"
  >
    <ol class="">
      <li class="pr-16 py-4 text-brand-blue text-lg border-b border-white w-96 relative">
        <router-link to="/24-hour-efficacy-data">
          YUPELRI 24-hour efficacy data
          <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-8 absolute right-[15px] top-[12px]" />
        </router-link>
      </li>

      <li class="pr-16 py-4 text-brand-blue text-lg border-b border-white w-96 relative">
        <router-link to="/12-week-efficacy-data">
          YUPELRI 12-week efficacy data
          <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-8 absolute right-[15px] top-[12px]" />
        </router-link>
      </li>

      <li class="pr-16 py-4 text-brand-blue text-lg border-b border-white w-96 relative">
        <router-link to="/concomitant-use">
          YUPELRI efficacy data in concomitant use with other treatments
          <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-8 absolute right-[15px] top-[28px]" />
        </router-link>
      </li>

      <li class="pr-16 py-4 text-brand-blue text-lg border-b border-white w-96 relative">
        <router-link to="/quality-of-life">
          Health-related quality of life (HRQoL) with YUPELRI
          <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-8 absolute right-[15px] top-[28px]" />
        </router-link>
      </li>

      <li class="pr-16 py-4 text-brand-blue text-lg w-96 relative">
        <router-link to="/safety-profile">
          The safety profile of YUPELRI in 3 clinical studies
          <img src="../assets/images/click-icon.svg" alt="Click icon" class="h-8 absolute right-[15px] top-[28px]" />
        </router-link>
      </li>
    </ol>
  </div>
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
    const menuVisible = ref(false);
    const images = ref([]);

    const onShow = () => {
      lightboxVisible.value = true;
    };

    const onHide = () => {
      lightboxVisible.value = false;
    };

    const onMenuClick = () => {
      menuVisible.value = !menuVisible.value;
    };

    const onReferencesClick = () => {
      images.value = 'references.png';
      onShow();
    };

    return {
      images,
      lightboxVisible,
      menuVisible,
      onHide,
      onMenuClick,
      onReferencesClick,
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
