const BackendUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const URLS = {
    getAllQuestions: `${BackendUrl}/question/all/`,
    getQuestionById: `${BackendUrl}/question/`,
    getQuestionsByDifficulty: `${BackendUrl}/question/difficulty/`,
    getTags: `${BackendUrl}/tag/`,
    getDiffCount: `${BackendUrl}/question/`,
    getRandomQuestions: `${BackendUrl}/question/random/`,
    singup: `${BackendUrl}/user/signup/`,
    login: `${BackendUrl}/user/login/`,
    // getTestCases: `${BackendUrl}/testCases/`,

}
export const BackendHeaders = {
    'content-type': 'application/json',
    
}
const JudgeMainUrl = process.env.NEXT_PUBLIC_JUDGE_API_URL;
export const JUDGEURLS = {
    createSubmission: `${JudgeMainUrl}submissions`,
    getSubmission: `${JudgeMainUrl}submissions/batch`,
    getLanguages: `${JudgeMainUrl}languages`,

}
const apiKey = process.env.NEXT_PUBLIC_JUDGE_API_KEY;
export const JudgeHeaders = {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': apiKey!,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_JUDGE_API_HOST!,
}
export default URLS;