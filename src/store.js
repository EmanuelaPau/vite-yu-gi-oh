import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    isLoading: true,
    cardList: [],
});

export { store };