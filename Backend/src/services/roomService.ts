// room service
import HttpError from "http-errors";
import roomRepository from "../repositories/roomRepository";

const getOneRoom = async (identification: string) => {
    const room = await roomRepository.getOneRoom(identification);

    if (room.length === 0) {
        throw new HttpError.NotFound();
    }

    return room;
};
const getAllRooms = async () => {
    const room = await roomRepository.getAllRooms();



    return room;
};

export default { getOneRoom, getAllRooms };