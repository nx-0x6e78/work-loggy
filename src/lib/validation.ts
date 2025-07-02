import { emailSchema, passwordSchema, userSchema } from "./zod-schema";

export function checkEmail(email: string) {
	return emailSchema.safeParseAsync(email);
}

export function checkPassword(password: string) {
	return passwordSchema.safeParseAsync(password);
}

export function checkUser(user: typeof userSchema._zod.input) {
    return userSchema.safeParseAsync(user);
}