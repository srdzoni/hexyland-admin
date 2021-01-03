<template>
  <v-app>
    <CoreAppHeader/>
    <CoreAppDrawer/>
    <v-content>
      <v-fade-transition mode="out-in">
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-fade-transition>
    </v-content>
    <CoreAppFooter/>
  </v-app>

</template>

<script>
import CoreAppHeader from "@/components/core/CoreAppHeader";
import CoreAppFooter from "@/components/core/CoreAppFooter";
import CoreAppDrawer from "@/components/core/CoreAppDrawer";
export default {
  name: "Dashboard",
  components: { CoreAppDrawer, CoreAppFooter, CoreAppHeader }
};
</script>

<style scoped>

</style>
