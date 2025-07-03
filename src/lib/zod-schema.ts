import * as z from "zod/v4-mini";
import { VALID_SYMBOLS } from "./constants";

export const emailSchema = z
	.email("Invalid email")
	.check(z.minLength(1, "Email is required"));

export const passwordSchema = z.string("Invalid password").check(
	z.minLength(8, "Password must be at least 8 characters long"),
	z.maxLength(128, "Password must be at most 128 characters long"),
	z.refine((password) => /[A-Z]/.test(password), {
		error: "Password must contain an upper case letter.",
	}),
	z.refine((password) => /[a-z]/.test(password), {
		error: "Password must contain a lower case letter.",
	}),
	z.refine((password) => /[0-9]/.test(password), {
		error: "Password must contain a number.",
	}),
	z.regex(new RegExp(`[${VALID_SYMBOLS}]`), {
		error: `Password must contain a symbmol, allowed symbols:\n${VALID_SYMBOLS}`,
	})
);

export const logInUserSchema = z.object({
	email: emailSchema,
	password: z.string().check(z.minLength(1, "Invalid password")),
});

export const signUpUserSchema = z
	.object({
		name: z.string().check(z.trim(), z.minLength(1, "Name is required")),
		surname: z.optional(z.string().check(z.trim())),
		email: emailSchema,
		password: passwordSchema,
		confirmationPassword: z.string(),
	})
	.check(
		z.refine((data) => data.password === data.confirmationPassword, {
			path: ["confirmationPassword"],
			message: "Passwords do not match",
		})
	);
