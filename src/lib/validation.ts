import {
	emailSchema,
	passwordSchema,
	logInUserSchema,
	signUpUserSchema,
} from "./zod-schema";

export function checkEmail(email: string) {
	return emailSchema.safeParseAsync(email);
}

export function checkPassword(password: string) {
	return passwordSchema.safeParseAsync(password);
}

export function checkUserLogin(user: typeof logInUserSchema._zod.input) {
	return logInUserSchema.safeParseAsync(user);
}

export function checkUserSignup(user: typeof signUpUserSchema._zod.input) {
	return signUpUserSchema.safeParseAsync(user);
}
