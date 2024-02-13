<template>
  <div class="item">
    <p>{{ user.firstName }} {{ user.lastName }} {{ user.maidenName }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>
<script>
export default {
  props: ['user']
}
</script>
<style scoped>
.item {
  width: 402px;
  min-height: 56px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
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
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
