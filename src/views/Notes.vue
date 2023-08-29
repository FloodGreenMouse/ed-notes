<template lang="pug">
  .page.notes
    .note-form
      NoteForm
    .notes-section
      .notes
        .note(v-for="note in 10")
          Note
</template>

<script>
import NoteForm from '@/components/NoteForm.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'NotesPage',
  components: {
    NoteForm,
    Note
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
