<script lang="ts" setup>
import { EVENTS } from '../enums'
</script>

<template>
    <div id="modal-wrapper">
        <div id="background">
            <div id="spinner">
                <img src="https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif">
                <span>Loading</span>
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
#modal-wrapper {
    position: relative;

    #background {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: 0.6);
        z-index: 99;
        width: 100vw;
        height: 100vh;
    }

    #spinner {
        position: fixed;
        display: flex;
        flex-direction: column;
        text-align: center;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        img{
            width: 80px;
        }
        
    }
}
</style>