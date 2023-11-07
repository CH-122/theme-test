import { defineStore } from "pinia";

const useAppConfigStore = defineStore("appConfigStore", {
  state: (): {
    name: string;
    code: string;
    compNameList: any[];
  } => {
    return {
      name: "lala",
      // code: "oppo",
      code: "default",
      compNameList: [],
    };
  },
  actions: {},
});

export default useAppConfigStore;
