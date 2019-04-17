<template>
    <div class="g-buttons">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluButtons',
       mounted () {
           for (let node of this.$el.children) {
               let name = node.nodeName.toLowerCase()
               if (name !== 'button') {
                   console.warn(`g-buttons 的子元素应该全部是 g-button，但你写的是 ${name}`)
               }
           }
       }
    }
</script>
<style lang="scss" scoped>
    .g-buttons{
        display: inline-flex;
        vertical-align: middle;
        justify-content: middle;
        > .g-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-chlid {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-chlid {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>