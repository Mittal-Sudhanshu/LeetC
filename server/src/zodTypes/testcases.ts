import { z } from 'zod';

const TestCaseInterface = z.object({
    input: z.string(),
    output: z.string(),
    questionId: z.number(),
    type: z.enum(['Example', 'Hidden']),
    explanation: z.string().optional()
});


const UpdateTestCaseInterface = z.object({
    input: z.string().optional(),
    output: z.string().optional(),
    questionId: z.number().optional(),
    type: z.enum(['Example', 'Hidden']).optional(),
    explanation: z.string().optional()
});
export { TestCaseInterface,UpdateTestCaseInterface };