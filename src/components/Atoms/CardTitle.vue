<template>
  <h3>
    <slot/>
  </h3>
  <span></span>
</template>

<style scoped>
h3 {
  font-weight: 300;
  font-size: 1.75rem;
}

span {
  display: block;
  width: 30px;
  height: 1px;
  background-color: var(--bs-primary);
}
</style>