import getMistakesInExel from "./utils/getMistakesInExel";
import { IAnalyzeExelRequest } from "../../controller/analyzeExelController/types";

const checkData = (data: IAnalyzeExelRequest[]) => {
  const mistakesInExel = getMistakesInExel(data);
  console.log("mistakesInExel", mistakesInExel);

  //   выдать массив тех которые можно поправить // и новые данные их
  //   выдать массив тех которые поправить невозможно

  return { fixedData: [], nonFixedData: [] };
};

export default checkData;
