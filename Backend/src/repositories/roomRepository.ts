import prisma from "../prismaClient";

const getOneRoom = async (identification: string) => {
    const room = await prisma.room.findMany({
        where: { identification },
        select: {
            buildingName: true,
            latitude: true,
            longitude: true,
            class: true,
            level: true,
            identification: true,
        },
    });

    return room;
};
const getAllRooms = async () => {
    const room = await prisma.room.findMany({
        select: {
            buildingName: true,
            latitude: true,
            longitude: true,
            class: true,
            level: true,
            identification: true,
        },
    });

    return room;
};

export default { getOneRoom, getAllRooms };
