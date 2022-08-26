<script setup lang="ts" >
import { iUser } from './../interfaces'
import { EVENTS } from '../enums'
defineProps({ data: Array<iUser> })
</script>

<template>
    <div class="table">
        <div class="tr th" id="header">
            <span class="td">Name</span>
            <span class="td">Username</span>
            <span class="td">Email</span>
        </div>

        <div class="tr" v-for="user in data" :key="user.id" @click="$emit(EVENTS.UpdateRow, user)">
            <span class="td">{{ user.name }}</span>
            <span class="td">{{ user.username }}</span>
            <span class="td">{{ user.email }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.table {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background: #eef;
    box-shadow: 4px 4px rgb(52, 52, 52);
    min-height: 500px;
}

.tr {
    display: flex;
    justify-content: space-around;
    flex: 1;
    max-height: 32px;
    cursor: pointer;

    .td {
        width: 33%;
        text-align: center;
        padding: 8px;
    }
}

 .table  .th.tr {
    cursor: auto;
    font-weight: 600;
    margin-bottom: 8px;
    padding: 8px;
    background-color: rebeccapurple;
    color:white;
    border-radius: 8px;
    border: 1px solid #333;
    max-height: 32px;

}
</style>
