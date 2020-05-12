<template>
  <div></div>
</template>

<script>
const Vue = require('vue');

module.exports = Vue.extend({
  name: 'test',
});
</script>

<i18n>
{
  "en": {
    "some": {
      "translation": "here",
      "and_translation": "there"
    }
  },
  "de": {
    "some": {
      "translation": "hier",
      "and_translation": "dort"
    }
  }
}
</i18n>
