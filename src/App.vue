<template>
  <div class="example">
    <div class="aa">
      <router-view />
    </div>
    <VueEditorMar
      :content="content"
      :config="{}"
    />
  </div>
</template>

<script>


export default {
  components: {
    // MarMenu
  },
  data() {
    return {
      content: 'Hello w2222orld!',
      config: {
        wordType: {
          keyword: ['keyworda', 'keywordb'],
          condition: ['if', 'else'],
          operator: ['>', '='],
          split: [';'],
          function: ['add'],
        },
      },
    };
  },
  beforeCreate() {
    // this.ruleDataController =
  },
};
</script>

<style lang="scss">
.example{
  margin: 50px auto;
  width: 80%;

}

</style>
