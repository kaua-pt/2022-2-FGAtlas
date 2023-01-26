import utils from "../Utils";
import generatePrisma from "../../src/scripts/generatePrisma";
import prisma from "../../src/prismaClient";

describe("Scrapper Sub-Functions", () => {
  beforeAll(async () => {
    await utils.resetDatabase();
  });
  it("Should generate a subject", async () => {
    await generatePrisma.generateSubject(["FGA0074 - PED"]);
    const result = await prisma.subject.findFirst({ where: { codeId: "FGA0074" } });
    expect(result).toBeDefined();
  });
  it("Should seed the building table", async () => {
    await generatePrisma.generateBuildings();
    const result = await prisma.building.count();
    expect(result).toBeGreaterThan(0);
  });
  it("Should seed the rooms table", async () => {
    await generatePrisma.generateRooms();
    const result = await prisma.room.count();
    expect(result).toBeGreaterThan(0);
  });
  it("Should generate a class", async () => {
    await generatePrisma.generateClass(
      ["FGA0074 PED", "FGA0075 TED"],
      ["motoca", "renato"],
      ["agrupador", "linhaPar", "agrupador", "linhaImpar"],
      ["S1", "LAB NEI 2"],
      ["1", "2"],
      ["2M12", "34N34"]
    );

    expect(await prisma.class.count()).toBeGreaterThan(0);

    const classe = await prisma.class.findFirst({ where: { subjectCodeId: "FGA0074" } });

    expect(classe).toBeDefined();
  });
});
