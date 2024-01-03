import { z } from 'zod';

export const Status = z.enum(['active', 'inactive'])

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    status: Status.default('active')
});

export const UserCreateInput = userSchema.omit({ id: true });
export const UserUpdateInput = UserCreateInput.partial();
export const UserDeleteInput = userSchema.pick({ id: true });
export const UserByIdParamInput = z.object({ id: z.string() });

export type IUser = z.infer<typeof userSchema>;
export type IUserCreateInput = z.infer<typeof UserCreateInput>;
export type IUserUpdateInput = z.infer<typeof UserUpdateInput>;
export type IUserDeleteInput = z.infer<typeof UserDeleteInput>;
export type IUserByIdParamInput = z.infer<typeof UserByIdParamInput>;


