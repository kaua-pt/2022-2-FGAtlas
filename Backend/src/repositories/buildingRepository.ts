import prisma from "../prismaClient";

const getOneBuilding = async (name: string) => {
  const building = await prisma.building.findMany({
    where: { name },
    select: { name: true, latitude: true, longitude: true, rooms: true },
  });
  return building;
};

const getAllBuildings = async () => {
  const buildings = await prisma.building.findMany({
    select: { name: true, latitude: true, longitude: true, rooms: true },
  });
  return buildings;
};

export default { getOneBuilding, getAllBuildings };
