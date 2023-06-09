<template>
  <div class="h-full">
    <page-header>
      <h1 class="pt-6">Health-related quality of life (HRQoL) with once-daily YUPELRI</h1>
    </page-header>

    <main class="flex bg-white border-b-[60px] border-brand-green pt-10 pb-[120px]">
      <div class="flex-col">
        <div class="pl-32 pr-8 w-[1100px]">
          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            The St. George's Respiratory Questionnaire (SGRQ) is a validated, patient-reported, disease-specific instrument designed to measure symptom improvement, activities of daily living, and social interaction for a total score³
          </p>

          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            A change of 4 units' improvement in the SGRQ is considered a minimum clinically important difference³
          </p>
        </div>

        <div class="my-16 mx-64">
          <img src="../assets/images/quality-of-life-icons.svg" alt="Quality of life icons" class="h-72">
        </div>

        <div class="pl-32 pr-8 w-[1100px]">
          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            In Study 1, the SGRQ responder rate for the YUPELRI treatment arm on day 85 was 49% compared to 34% for placebo (odds ratio=2.11; 95% CI, 1.14-3.92)<sup class="text-xs">1*</sup>
          </p>

          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            In Study 2, the SGRQ responder rate for the YUPELRI treatment arm was 45% compared to 39% for placebo (odds ratio=1.31; 95% CI, 0.72-2.38)¹
          </p>

          <p>
            <span class="text-2xl text-brand-blue">&bull;</span>
            The clinical relevance of this data is unknown
          </p>
        </div>

        <span class="block pl-32 my-8 text-sm text-gray-500">* The SGRQ responder rate was defined as an improvement in score of 4 or more as threshold.</span>
      </div>

      <router-link to="/concomitant-use">
        <svg class="absolute left-[60px] top-[507px] text-[#cde3f1] h-[66px] w-auto z-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
        </svg>
      </router-link>

      <router-link to="/safety-profile">
        <svg class="absolute right-[465px] top-[507px] text-[#cde3f1] h-[66px] w-auto z-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
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
