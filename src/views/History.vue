<template>
    <HistoryPage :id="$route.params.id"/>
</template>

<script>
// @ is an alias to /src
import HistoryPage from '@/components/HistoryPage.vue'

export default {
  name: 'history',
  props: ['id'],
  components: {
    HistoryPage
  }
}
</script>
