import getMistakesInExel from "./utils/getMistakesInExel";
import { IAnalyzeExelRequest } from "../../controller/analyzeExelController/types";
import tryToFix from "./utils/tryToFix";

const checkData = (data: IAnalyzeExelRequest[]) => {
  const { mistakes } = getMistakesInExel(data);

  const fixedMistakesInExel = mistakes?.map((el) => tryToFix(el));

  const { success: fixedData, mistakes: nonFixedData } =
    getMistakesInExel(fixedMistakesInExel);

  return { fixedData, nonFixedData };
};

export default checkData;
