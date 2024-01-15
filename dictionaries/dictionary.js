const dictionaries = {
    en: () => import("./en.json").then(r => r.default),
    es: () => import("./es.json").then(r => r.default)
  }
  
  export const getDictionary = (lang) => {
    return dictionaries[lang]();
  }