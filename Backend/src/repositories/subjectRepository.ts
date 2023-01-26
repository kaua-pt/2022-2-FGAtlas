import prisma from "../prismaClient";

const getOneSubject = async (codeId:string) => {
    const subject = await prisma.subject.findMany({
        where: { codeId },
        select: { name: true, codeId: true, Class: true },
      });

    return subject;
};
const getAllSubjects = async () => {
    const subjects = await prisma.subject.findMany({
        select: { name: true, codeId: true, Class: true },
        orderBy: { name: "asc" },
      });

    return subjects;
};

export default { getOneSubject, getAllSubjects };
