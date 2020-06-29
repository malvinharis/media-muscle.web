<template>
  <div v-if="!loading" class="sidebar" :data="data">
    <SfAccordion :first-open="true" :show-chevron="true">
      <SfAccordionItem header="Category">
        <template>
          <SfList>
            <SfListItem :class="activeCategory === 0 ? 'active' : ''">
              <div @click="handleCategory()">
                <SfMenuItem label="ALL" />
              </div>
            </SfListItem>
            <SfListItem
              v-for="(category, i) in data"
              :key="i"
              :class="activeCategory === category.id ? 'active' : ''"
            >
              <div @click="handleCategory(category.id)">
                <SfMenuItem :label="category.name" :count="category.count" />
              </div>
            </SfListItem>
          </SfList>
        </template>
      </SfAccordionItem>
    </SfAccordion>
  </div>
</template>

<script>
import { SfAccordion, SfList, SfMenuItem } from "@storefront-ui/vue";
import { AxiosWeb } from "@/plugins/utils/services/axios.service";
import API from "@/plugins/utils/constants/api.constant";
export default {
  components: {
    SfAccordion,
    SfList,
    SfMenuItem
  },
  props: {
    data: Array
  },
  data() {
    return {
      data: [],
      activeCategory: null,
      sidebarAccordion: [
        {
          header: "Clothing",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" }
          ]
        },
        {
          header: "Accesorries",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" }
          ]
        },
        {
          header: "Shoes",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleCategory(evt) {
      if (evt) {
        this.activeCategory = evt;
      } else {
        this.activeCategory = 0;
      }
      this.$emit("click", evt);
    }
  }
};
</script>

<style></style>
