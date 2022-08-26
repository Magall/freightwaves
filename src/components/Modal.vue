<script lang="ts" setup>
import { defineProps } from 'vue';
import { EVENTS } from '../enums'

defineProps({ title: String })
</script>

<template>
    <div id="modal-wrapper">
        <div id="background">
            <div id="modal">
                <div id="modal-header">
                    <span>{{title}}</span>
                    <span id="close-modal-btn" @click="$emit(EVENTS.CloseModal)">X</span>
                </div>
                <div id="modal-body">
                    <slot name="modalBody" />
                </div>
                <div id="modal-footer">
                    <slot name="modalFooter" />
                </div>
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

    #modal {
        position: fixed;
        top: 2vh;
        left: 30vw;
        width: 40vw;
        height: 45vh;
        background: #fff;
        z-index: 100;
        border-radius: 8px;
        padding: 0;
        border: 0;
        box-shadow: 6px 6px rgb(84, 84, 84);
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        #modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px;
            height: 48px;
            border-radius: 8px 8px 0px 0px;
            background-color: rebeccapurple;
            color: #fff;

            #close-modal-btn{
                cursor: pointer;
            }
        }

        #modal-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 16px;
            margin-bottom: 16px;
        }

        #modal-footer {
            border-top: 1px solid black;
            background: rebeccapurple;
            height: 32px;
            padding: 0;
            border-radius: 0px 0px 8px 8px;
            display: flex;
            justify-content: flex-end;
            padding: 8px;

        }
    }
}
</style>