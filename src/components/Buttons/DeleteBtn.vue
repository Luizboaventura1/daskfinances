<template>
  <div
    class="delete-btn d-flex justify-center align-center rounded-lg pa-2"
    @click="$emit('deleteClick')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g><path fill-rule="evenodd" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.783 0 9.75 0h4.5C15.217 0 16 .784 16 1.75zm-6.5 0a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25V3h-5z" clip-rule="evenodd" data-original="#000000"></path><path d="M4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92A1.75 1.75 0 0 0 6.658 22.5h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.493-.144L17.59 20.774a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226z" data-original="#000000"></path><path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793zM15.499 8.294A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088z" data-original="#000000"></path></g></g></svg>
  </div>
</template>

<style lang="scss" scoped>
  .delete-btn {
    background-color: rgb(224, 224, 224);
    cursor: pointer;
    transition: .3s;
    &:hover {
      background-color: red;
      svg {fill: white;}
    }

    svg {
      width: 20px;
      height: 20px;
      fill: rgb(0, 0, 0);
      transition: .3s;
    }
  }
</style>