import z from "zod"

export const UserSelectorEnum = z.enum(['name', 'email', 'password', 'status', 'createdAt', 'updatedAt']); 