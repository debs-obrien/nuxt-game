<template>
  <div class="modal">
    <Logo class="logo" />
    <h1 id="header">Nuxt: Server v Static</h1>
    <p>
      Do you know the difference between server and static and when to use one
      over the other? Let's test your knowledge.
    </p>

    <slot></slot>
  </div>
</template>
<style>
#header,
p {
  margin: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
}
</style>
