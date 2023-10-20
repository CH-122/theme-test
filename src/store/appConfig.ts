import { defineStore } from "pinia";

const useAppConfigStore = defineStore("appConfigStore", {
  state: () => {
    return {
      name: "lala",
      code: "oppo",
      // code: "default",
    };
  },
  actions: {},
});

export default useAppConfigStore;
