<template lang="pug">
  .note-component(@mouseleave="showButtonGroup = false")
    .note-wrap(@mouseenter="showButtonGroup = true")
      router-link(:to="`/${id}`")

      .note-title
        span {{ note.title }}

      .note-content
        span {{ note.content }}

    transition(name="fade" :duration="100")
      .button-group(v-if="showButtonGroup")
        button.button-delete(@click="deleteNote") Удалить
</template>

<script>
export default {
  name: 'vNote',
  props: {
    id: {
      type: Number,
      default: null
    },
    note: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      showButtonGroup: false
    }
  },
  methods: {
    deleteNote () {
      this.$store.dispatch('removeNote', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-component {
    position: relative;
    box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset;
    padding: 10px;
    border-radius: 4px;
    transition: all ease 0.2s;

    &:hover {
      box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset, 0 0 10px 10px rgba(#333333, 0.05);
    }

    .note-wrap {
      position: relative;
      cursor: pointer;

      a {
        position: absolute;
        left: -10px;
        top: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
      }
    }

    .note-title {
      margin-bottom: 4px;
    }

    .button-group {
      position: absolute;
      width: 100%;
      bottom: -35px;
      left: 0;
      text-align: right;
      z-index: 1;

      button {
        border: none;
        background-color: white;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all ease 0.2s;
        box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset;

        &:hover {
          box-shadow: 0 0 0 1px rgba(#333333, 0.2) inset, 0 0 10px 10px rgba(#333333, 0.05);
        }
      }
    }
  }
</style>
