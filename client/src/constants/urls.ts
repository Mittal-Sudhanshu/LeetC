const BackendUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const URLS = {
    getAllQuestions: `${BackendUrl}/question/all/`,
    getQuestionById: `${BackendUrl}/question/`,
    getQuestionsByDifficulty: `${BackendUrl}/question/difficulty/`,
    getTags: `${BackendUrl}/tag/`,
    getDiffCount: `${BackendUrl}/question/`,
    getRandomQuestions: `${BackendUrl}/question/random/`,
    // getTestCases: `${BackendUrl}/testCases/`,

}
const JudgeMainUrl = process.env.NEXT_PUBLIC_JUDGE_API_URL;
export const JUDGEURLS = {
    createSubmission: `${JudgeMainUrl}/submissions/batch/`,
    getSubmission: `${JudgeMainUrl}/submissions/batch`,
    getLanguages: `${JudgeMainUrl}/languages`,

}
const apiKey = process.env.NEXT_PUBLIC_JUDGE_API_KEY;
export const JudgeHeaders = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_JUDGE_API_HOST,
}
export default URLS;