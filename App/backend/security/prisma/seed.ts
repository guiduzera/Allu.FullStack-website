import prisma from "./client";

async function main() {
  await prisma.user.upsert({
    where: { email: "guidu.dev@gmail.com" },
    update: {},
    create: {
      email: "guidu.dev@gmail.com",
      name: "Guilherme Carvalho",
      password: "$2y$10$gIa7Wv7mfdo7pz2vMaWyw./RqMI7kJDNR90CyHKGm.ttqA381345q",
    },
  });
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
