<template lang="pug">
  .page.notes
    .note-form
      NoteForm

    .notes-section
      .notes
        .note(v-for="(note, i) in notes" :key="i")
          Note(:note="note" :id="i")
</template>

<script>
import { mapState } from 'vuex'
import NoteForm from '@/components/NoteForm.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'NotesPage',
  components: {
    NoteForm,
    Note
  },
  computed: {
    ...mapState({
      notes: state => state.notes
    })
  }
}
</script>

<style lang="scss" scoped>
  .page.notes {
    .note-form {
      padding-top: 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
    }

    .notes-section {
      margin: 20px;

      .notes {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;

        .note {
          padding: 0 8px;
          width: calc(100% / 12 * 3);
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
