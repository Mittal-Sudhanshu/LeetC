import { z } from 'zod';

export const SubmissionInterface = z.object({
    questionId: z.number(),
    code: z.string(),
    language: z.string(),
    userId: z.string(),
    status: z.string(),

});