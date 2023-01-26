import { RequestHandler } from "express";
import roomService from "../services/roomService";


const readRoom: RequestHandler = async (req, res) => res.json(await roomService.getAllRooms());


const readOneRoom: RequestHandler = async (req, res) => {
  const { identification } = req.params;

  const room = await roomService.getOneRoom(identification);

  return res.json(room);
};

export default { readRoom, readOneRoom };
