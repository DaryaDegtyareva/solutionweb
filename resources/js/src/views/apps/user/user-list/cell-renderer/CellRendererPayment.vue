<template>
    <feather-icon icon="CircleIcon" :svgClasses="['fill-current h-4 w-4', textColor]" />
</template>

<script>
export default {
  name: 'CellRendererPayment',
  computed: {
    textColor () {
      return this.params.value ? 'text-success' : 'text-danger'
    }
  }
}
</script>
