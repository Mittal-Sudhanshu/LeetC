import langMap from "@/constants/languages";
import { JUDGEURLS, JudgeHeaders } from "@/constants/urls";
import axios from "axios";
enum TestCaseType {
    Hidden = "Hidden",
    Example = "Example"
}

interface TestCase {
    id: string;
    questionId: number;
    input: string;
    output: string;
    type: TestCaseType; // Use the enum type here
    explanation: string;
    createdAt: string;
}


const encodeBase64 = (str: string) => {
    return btoa(str);
}

const decodeBase64 = (str: string) => {
    return atob(str);
}

const runCode = async (code: string, lang: string, testCases: TestCase[]) => {
    console.log(testCases)
    const languageId = langMap[lang];
    try {
        testCases.map(async (testCase) => {
            if (testCase.type === TestCaseType.Hidden) {
                return;
            }
            const input = encodeBase64(testCase.input);
            const output = encodeBase64(testCase.output);
            const codeEncoded = encodeBase64(code);
            const response = await axios.post(JUDGEURLS.createSubmission, {
                language_id: languageId,
                source_code: codeEncoded,
                stdin: input,
                expected_output: output
            }, {
                headers: JudgeHeaders,
                params: {
                    base64_encoded: 'true',
                    wait: 'true',
                    fields: '*'
                }
            })
            console.log(response.data);
        })
    } catch (err) {
        console.log(err);
    }
}
export default runCode;