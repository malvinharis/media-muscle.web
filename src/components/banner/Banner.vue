<template>
  <SfHero v-if="!loading" class="top__banner-item">
    <a v-for="(item, i) in banners" :href="`https://` + item.destination">
      <SfHeroItem :key="i" :image="item.image_link"> </SfHeroItem>
    </a>
  </SfHero>
</template>

<script>
import { AxiosWeb } from "@/plugins/utils/services/axios.service";
import { SfHero } from "@storefront-ui/vue";
import _ from "lodash";
import API from "@/plugins/utils/constants/api.constant";
export default {
  components: {
    SfHero
  },
  data: () => ({
    loading: false,
    banners: []
    // heroes: [
    //   {
    //     name: "Colorful summer dresses are already in store",
    //     subtitle: "SUMMER COLLECTION 2019",
    //     buttonText: "Learn more",
    //     background: "#efebe9",
    //     image_link: "https://picsum.photos/800/600",
    //     className:
    //       "sf-hero-item--position-bg-top-left sf-hero-item--align-right"
    //   },
    //   {
    //     name: "Colorful summer dresses are already in store",
    //     subtitle: "SUMMER COLLECTION 2019",
    //     buttonText: "Learn more",
    //     background: "#49ABAC",
    //     image_link: "https://picsum.photos/200/300"
    //   }
    // ]
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        const { data } = await AxiosWeb.get(API.WEB.BANNER);

        if (data.status) {
          this.banners = data.data.rows;
          // this.banners = _.concat(this.banners, this.heroes);
        } else {
          // If hotel not found
          // alert(data.message);
          this.$notify.error({
            title: "Error",
            message: data.message
          });
        }
      } catch (error) {
        this.$notify.error({
          title: "Error",
          message: error
        });
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style></style>
