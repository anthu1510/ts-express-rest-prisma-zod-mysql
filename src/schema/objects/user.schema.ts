import z from "zod"
import { Prisma } from "@prisma/client";

export const baseUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    status: z.enum(['active', 'inactive']).optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable()
});

export const userSchema = baseUserSchema.extend({
    id: z.number()
});
export const userCreateInput = baseUserSchema;
export const userUpdateInput = baseUserSchema.partial();
export const userDeleteInput = userSchema.pick({id: true});

export type IUser = z.infer<typeof userSchema>;
export type IUsers = IUser[];
export type IUserCreateInput = z.infer<typeof userCreateInput>;
export type IUserUpdateInput = z.infer<typeof userUpdateInput>;

