<template>
  <form id="add-anticipation">
    <input type="text" :placeholder="placeholderText" />
    <button>speichern</button>
  </form>
  <ul>
    <li>
      <form>
        <label :for="singleNote">
          <input :id="singleNote" type="checkbox" :name="singleNote" />
          <span>{{ exampleCheckboxText }}</span>
          <button>teilen</button>
        </label>
      </form>
    </li>
  </ul>
</template>

<!-- hier mit props die Texte erwarten lassen. -->
<script>
export default {
  props: {
    exampleCheckboxText: {
      type: String,
      required: true
    },
    singleNote: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
