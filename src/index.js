function readAndValidateInput(params) {
    let expectedParams = ["startNum", "endNum", "factor1", "factor2", "classification1", "classification2", "combinedClassification"];
    expectedParams.forEach(
         (item) => {
            if(!Object.keys(params).includes(item)){
                throw new Error(item + " is not defined");
            }
        }
    );
        if(params !== null) {
            let startNum = params.startNum;
            let endNum = params.endNum;
            let factor1 = params.factor1;
            let factor2 = params.factor2;
            if(factor1 !== 0 && factor2 !== 0) {
                let classification1 = params.classification1;
                let classification2 = params.classification2;
                let combinedClassification = params.combinedClassification;
                return {startNum, endNum, factor1, factor2, classification1, classification2, combinedClassification};
            }else{
                throw new Error("Factors cant be zero as the operation can result in a division by zero");
            }
        }
}
function createOutcomeWithSpaces(input, suffix){
    return input + " " + suffix;
}
function printToConsole(callback){
    console.log(callback);
}
function runMainClassifier(params){
    printToConsole(numericalClassifier(params));
}

/**
 * The following function classifies the numbers into items that are factors of factor1 or factor2 or both.
 * @param params
 * @returns {string}
 */
function numericalClassifier(params){
        /* The following function call could be confused with code smell but is made from within here since the validation in this case is very specific to the use case and not generic */
        let {startNum, endNum, factor1, factor2, classification1, classification2, combinedClassification} = readAndValidateInput(params);
        let finalOutcome = "";
        for (let i = startNum; i <= endNum; i++) {
            if ((i % (factor1 * factor2)) === 0) {
                finalOutcome = createOutcomeWithSpaces(finalOutcome,combinedClassification);
            } else if ((i % factor1) === 0) {
                finalOutcome = createOutcomeWithSpaces(finalOutcome,classification1);
            } else if ((i % factor2) === 0) {
                finalOutcome = createOutcomeWithSpaces(finalOutcome,classification2);
            } else {
                finalOutcome = createOutcomeWithSpaces(finalOutcome, i);
            }
        }
        return finalOutcome.trim();
};

module.exports = {runMainClassifier, numericalClassifier, readAndValidateInput};