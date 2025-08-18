const tryToFix = (data: any) => {
  // 1) Копируем все значения без "_новые"
  const result: any = {};
  for (const [key, value] of Object.entries(data)) {
    if (!key.includes("_new")) result[key] = value;
  }

  // 2) Старые (кроме "apartment") и новые значения
  const oldItems = Object.entries(data).filter(
    ([k]) => !k.includes("_new") && k !== "apartment",
  ); // [ [key, value], ... ]
  const newValues = Object.entries(data)
    .filter(([k]) => k.includes("_new"))
    .map(([, v]) => v);

  if (oldItems.length !== newValues.length) {
    throw new Error("Количество старых и новых значений не совпадает.");
  }

  // 3) Сортируем старые и новые по возрастанию значений
  const oldSorted = [...oldItems].sort((a: any, b: any) => a[1] - b[1]); // [[key,val],...]
  const newSorted = [...newValues].sort((a: any, b: any) => a - b); // [val,...]

  // 4) Сопоставляем по порядку — это даёт минимальную суммарную разницу
  const mapping: any = {};
  for (let i = 0; i < oldSorted.length; i++) {
    const oldKey = oldSorted[i][0];
    mapping[oldKey + "_new"] = newSorted[i];
  }

  // 5) Возвращаем объект с теми же ключами + переставленные "_new"
  for (const [key] of oldItems) {
    result[key + "_new"] = mapping[key + "_new"];
  }

  return result;
};

export default tryToFix;
