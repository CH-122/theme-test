import useAppCongifStore from "@/store/appConfig.ts";

export const themeCode = ["default", "oppo"];

export function hasThemeCode(code: string) {
  return themeCode.includes(code);
}

export function hasComp(compName: string) {
  return useAppCongifStore().compNameList.includes(compName);
}

export function getCurrentComp(code: string, routeName: string) {
  let tempCode = hasThemeCode(code) ? code : "default";

  let tempComp =
    tempCode.charAt(0).toUpperCase() +
    tempCode.slice(1) +
    routeName.charAt(0).toUpperCase() +
    routeName.slice(1);

  let defaultComp =
    "Default" + routeName.charAt(0).toUpperCase() + routeName.slice(1);

  console.log(tempComp);

  console.log(hasComp(tempComp));

  return hasComp(tempComp)
    ? tempComp
    : hasComp(defaultComp)
    ? defaultComp
    : "404";
}
