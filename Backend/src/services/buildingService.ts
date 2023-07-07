import HttpError from "http-errors";
import buildingRepository from "../repositories/buildingRepository";

const getOneBuilding = async (name: string) => {
  const building = await buildingRepository.getOneBuilding(name);
  if (building.length === 0) {
    throw new HttpError.NotFound();
  }
  return building;
};
const getAllBuildings = async () => {
  const buildings = await buildingRepository.getAllBuildings();
  return buildings;
};

export default { getAllBuildings, getOneBuilding };
