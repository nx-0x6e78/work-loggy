import { PrismaClient } from "@/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { toast } from "sonner";

const prisma = new PrismaClient();
export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		// requireEmailVerification: true,
		revokeSessionsOnPasswordReset: true,
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID! as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 31,
	},
	advanced: {
		useSecureCookies: true,
		defaultCookieAttributes: {
			httpOnly: true,
			secure: true,
		},
	},
	user: {
		additionalFields: {
			surname: { type: "string" },
		},
	},
	appName: "work-loggy",
});
