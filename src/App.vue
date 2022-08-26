<script setup  lang="ts">
import { computed, ref, Ref } from "vue";
import Table from "./components/Table.vue";
import useNormalizeString from "./composables/useNormalizeString";
import { iUser } from "./interfaces";
import Modal from "./components/Modal.vue";
import { cloneDeep } from "lodash";
import { BASE_API_URL } from "./constants";
import Spinner from "./components/Spinner.vue"


let users: Ref<Array<iUser>> = ref([]);
const searchString: Ref<string> = ref("");
const userToUpdate = ref();
let isModalOpen: Ref<boolean> = ref(false);
let error: Ref<boolean> = ref(false);
let usersCache = new Array<iUser>;
const storage = window.sessionStorage;
let cacheJson = storage.getItem('localUsersUpdates');

if (cacheJson) {
  usersCache = JSON.parse(cacheJson);
  users.value = usersCache;
}
else {
  fetch(`${BASE_API_URL}/users`)
    .then((res) => res.json())
    .then((json) => (users.value = json))
    .catch((err) => (error.value = err))
}

const researchedData = computed(() => {
  return users.value.filter(searchLogic)
})

function searchLogic(user: iUser): iUser | undefined {
  const nomalizedSearchString = useNormalizeString(searchString.value);
  const normalizedName = useNormalizeString(user.name);
  const normalizedUsername = useNormalizeString(user.username);
  const normalizedEmail = useNormalizeString(user.email);

  if (normalizedName.includes(nomalizedSearchString)) {
    return user;
  }

  if (normalizedUsername.includes(nomalizedSearchString)) {
    return user;
  }

  if (normalizedEmail.includes(nomalizedSearchString)) {
    return user;
  }
}

function handleRowUpdate(user: iUser) {
  userToUpdate.value = cloneDeep(user);
  isModalOpen.value = true;
}

function saveUpdatedInfo() {
  const userCopy = cloneDeep(userToUpdate);
  const positionOfUserToUpdate = users.value.findIndex(
    (user: iUser) => userToUpdate.value.id === user.id
  );

  users.value[positionOfUserToUpdate] = cloneDeep(userCopy.value)
  storage.setItem('localUsersUpdates', JSON.stringify(users.value))
  isModalOpen.value = false
}
</script>

<template>
  <Modal @closeModal="isModalOpen = false" @updateRow="handleRowUpdate" v-if="isModalOpen" title="Update user">
    <template #modalBody>
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" placeholder="Name" name="name" v-model="userToUpdate.name" />
      </div>
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" placeholder="Username" name="username" v-model="userToUpdate.username" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" name="email" v-model="userToUpdate.email" />
      </div>
    </template>
    <template #modalFooter>
      <button @click="saveUpdatedInfo">Save</button>
    </template>
  </Modal>
  <span v-if="error">ERROR</span>
  <div v-else-if="users.length > 0">
    <input class="animated rotateIn" type="text" v-model="searchString" id="search-bar" placeholder="Search user..." />
    <Table :data="researchedData" @updateRow="handleRowUpdate" />
  </div>
  <Spinner v-else />
</template>

<style lang="scss" >
#app {
  font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  input[type="text"],
  input[type="email"] {
    padding: 10px;
    background: white;
    border-radius: 8px;
    border: 1px solid #777;
    font-weight: 500;
    font-size: 16px;
    width: 200px;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  #search-bar {
    margin-bottom: 24px;
  }
}
</style>
