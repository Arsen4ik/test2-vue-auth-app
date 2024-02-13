<template>
  <div class="item">
    <p>{{ item }}</p>
  </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style scoped>
.item {
  width: min-content;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  gap: 10px;
  align-items: center;
  box-shadow:
    0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);

  p {
    text-wrap: wrap;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p:last-child {
    font-size: 14px;
  }
}
</style>
