<template>
  <base-layout>
    <page-spinner v-if="fetching" />
    <table-list v-else :title="pageTitle" :data="result" />
  </base-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  asyncData({ params, redirect }) {
    const slug = params.slug
    if (!slug) {
      redirect('/')
    }
    const pageTitle = `Search result for « ${slug} »`
    return { input: slug, pageTitle }
  },
  data() {
    return {
      pageTitle: '',
    }
  },
  computed: {
    ...mapState({
      result: (state) => state.search.result,
      fetching: (state) => state.search.fetching,
    }),
  },
  mounted() {
    this.getSearch(this.input)
  },
  methods: {
    ...mapActions({
      getSearch: 'search/getSearch',
    }),
  },
  head() {
    return {
      title: `${this.pageTitle} | Jamz`,
    }
  },
}
</script>
