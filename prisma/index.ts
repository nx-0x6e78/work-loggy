import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
	// queries
    // example of how settings should be done
    const userId = ""
    // const result = await prisma.settings.create({
    //     data: {
    //         userId: 
    //     }
    // })
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
