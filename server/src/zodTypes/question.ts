import { z } from 'zod';


const Question = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    user: z.string(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
});

export { Question };