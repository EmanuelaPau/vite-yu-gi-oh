import { reactive } from 'vue';

const store = reactive({
    searchText: "",
    loading: true,
    cardsList: [],
});

export { store };