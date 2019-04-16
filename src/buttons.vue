<template>
    <div class="g-buttons">
        <slot></slot>
    </div>
</template>
<script></script>
<style lang="scss">
    .g-buttons{
        display: inline-flex;
        vertical-align: middle;
        justify-content: middle;
        > .g-button {
            border-radius: 0;
            margin-left: -1px;
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