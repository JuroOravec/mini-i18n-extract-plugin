<template>
  <div></div>
</template>

<script>
const Vue = require('vue');

module.exports = Vue.extend({
  name: 'test',
});
</script>

<i18n lang="yaml">
en:
  some:
    stuff: which is not in another
    and_translation: which we overwrote here
de:
  some:
    stuff: das ist nicht in einem anderen
    and_translation: was wir hier überschrieben haben
</i18n>
