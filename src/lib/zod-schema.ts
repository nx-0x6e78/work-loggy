import * as z from "zod/v4-mini";

export const emailSchema = z
	.email("Invalid email")
	.check(z.minLength(1, "Email is required"));

export const passwordSchema = z
	.string("Invalid password")
	.check(
		z.minLength(8, "Password must be at least 8 characters long"),
		z.maxLength(128, "Password must be at most 128 characters long")
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
		confirmationPassword: passwordSchema,
	})
	.check(
		z.refine((data) => data.password === data.confirmationPassword, {
			path: ["confirmationPassword"],
			message: "Passwords do not match",
		})
	);
