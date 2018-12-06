<template>
  <div class="body">
    <image></image>
    <index></index>
    <complaint></complaint>
    <policy></policy>
    <government></government>
    <industry></industry>
    <details1></details1>
  </div>
</template>

<script>
  import image from "../image/image";
  import index from "../index/index";
  import complaint from "../complaint/complaint";
  import policy from "../policy/policy";
  import government from "../government/government";
  import industry from "../industry/industry";
  import details1 from "./details1/details1";
  export default {
    name: "policyParent",
    components: {
      Details1,
      image,
      index,
      complaint,
      policy,
      government,
      industry,
      details1
    }
  }
</script>

<style scope>

</style>
