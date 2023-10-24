import { App, Component, defineAsyncComponent } from "vue";

export default function registerAllComp(app: App<Element>) {
  const files: Record<string, () => Promise<Component>> = import.meta.glob(
    "/src/pages/**/*.vue"
  );
  console.log(files);

  // const reg;

  for (const item in files) {
    const names = item.replace("/src/pages/", "").split("/");
    let name = "";
    names.forEach((nameItem) => {
      name += (nameItem.charAt(0).toUpperCase() + nameItem.slice(1)).replace(
        ".vue",
        ""
      );
    });

    console.log(name);

    app.component(name, defineAsyncComponent(files[item]));
  }

  console.log(files);
}
