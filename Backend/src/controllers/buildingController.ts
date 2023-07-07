import { RequestHandler } from "express";
import buildingService from "../services/buildingService";

const readBuildings: RequestHandler = async (req, res) =>
  res.json(await buildingService.getAllBuildings());

const readOneBuilding: RequestHandler = async (req, res) => {
  const { name } = req.params;
  const building = await buildingService.getOneBuilding(name);
  return res.json(building);
};

export default { readBuildings, readOneBuilding };
