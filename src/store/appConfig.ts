import { defineStore } from "pinia";

const useAppConfigStore = defineStore("appConfigStore", {
  state: () => {
    return {
      name: "lala",
    };
  },
  actions: {},
});

export default useAppConfigStore;
