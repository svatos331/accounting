import { IAnalyzeExelRequest } from "../../../controller/analyzeExelController/types";

const compareNumbers = (a: any, b: any, coef: any) => {
  // если оба пустые → true
  if ((a === "" || a == null) && (b === "" || b == null)) {
    return true;
  }

  // если одно из чисел пустое → true
  if (a === "" || a == null || b === "" || b == null) {
    return true;
  }

  // приводим к числу
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  // если NaN → считаем пустым → true
  if (isNaN(numA) || isNaN(numB)) {
    return true;
  }

  // если равны → true
  if (numA === numB) {
    return true;
  }

  // если разница ≤ coef → true
  if (Math.abs(numA - numB) <= coef) {
    return true;
  }

  // иначе → false
  return false;
};

const getMistakesInExel = (
  data: IAnalyzeExelRequest[],
): { success: IAnalyzeExelRequest[]; mistakes: IAnalyzeExelRequest[] } => {
  const mistakes: IAnalyzeExelRequest[] = [];
  const success: IAnalyzeExelRequest[] = [];

  for (const i in data) {
    const el = data[i];

    const line1 = compareNumbers(el.hot_water, el.hot_water_new, 10);
    const line2 = compareNumbers(
      el.hot_water_kitchen,
      el.hot_water_kitchen_new,
      10,
    );
    const line3 = compareNumbers(el.cold_water, el.cold_water_new, 10);
    const line4 = compareNumbers(
      el.cold_water_kitchen,
      el.cold_water_kitchen_new,
      10,
    );
    const line5 = compareNumbers(el.electricity, el.electricity_new, 500);

    const everyMistake = [line1, line2, line3, line4, line5].every((e) => e);

    if (everyMistake) {
      success.push(el);
    } else {
      mistakes.push(el);
    }
  }

  return { success, mistakes };
};

export default getMistakesInExel;
