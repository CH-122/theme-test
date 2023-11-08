import { App, Component, defineAsyncComponent } from "vue";
import useAppConfigStore from "@/store/appConfig";

export default function registerAllComp(app: App<Element>) {
  const files: Record<string, () => Promise<Component>> = import.meta.glob(
    "/src/pages/**/*.vue"
  );
  console.log(files);

  // const reg;

  for (const item in files) {
    const names = item.replace("/src/pages/", "").split("/");
    let name = "";

    console.log("names", names);

    names.forEach((nameItem) => {
      name += (nameItem.charAt(0).toUpperCase() + nameItem.slice(1)).replace(
        ".vue",
        ""
      );
    });
    useAppConfigStore().compNameList.push(name);

    console.log(useAppConfigStore().compNameList.push(name));

    app.component(name, defineAsyncComponent(files[item]));
  }

  console.log(useAppConfigStore().compNameList);
}
