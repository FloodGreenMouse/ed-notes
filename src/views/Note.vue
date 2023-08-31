<template lang="pug">
  .page.note
    .note-wrapper
      .note-content(v-if="note" )
        p {{ note.title }}
        p {{ note.content }}
    router-link(to="/") Назад
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NotePage',
  data () {
    return {
      note: null
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notes
    })
  },
  mounted () {
    const id = this.$router.currentRoute.params.id
    if (id !== undefined && !isNaN(Number(id))) {
      this.note = this.notes[id]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.note {
    text-align: center;

    .note-wrapper {
      display: flex;
      margin-bottom: 20px;
    }

    .note-content {
      padding: 10px 16px;
      min-width: 200px;
      max-width: 500px;
      margin: 20px auto auto;
      box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset;
      border-radius: 4px;

      p {
        margin: 0;
        line-height: 24px;
      }
    }
  }
</style>
