<template lang="pug">
  .note-form-component
    .form-title
      input(
        v-model="form.title"
        @focus="showEditor = true"
        placeholder="Заголовок")
    .form-text(v-if="showEditor")
      textarea(
        v-model="form.content"
        placeholder="Текст заметки"
        rows="10")
    .form-button-group(v-if="showEditor")
      button(@click="submit") Создать
</template>

<script>
export default {
  name: 'NoteForm',
  data () {
    return {
      showEditor: false,
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit () {
      this.form.title = ''
      this.form.content = ''
      this.showEditor = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-form-component {
    max-width: 500px;
    width: 100%;
    box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset;
    border-radius: 8px;

    input,
    textarea,
    button {
      border: none;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 15px;
      outline: none;
    }

    input,
    textarea {
      width: 100%;
      background-color: transparent;
      padding: 8px;
    }

    textarea {
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
    }

    .form-title {
      padding: 10px;
    }
    .form-text {
      padding: 0 10px;
    }
    .form-button-group {
      padding: 10px;
      text-align: right;

      button {
        background-color: white;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all ease 0.2s;

        &:hover {
          box-shadow: 0 0 10px 10px rgba(#333333, 0.05);
        }
      }
    }
  }
</style>
