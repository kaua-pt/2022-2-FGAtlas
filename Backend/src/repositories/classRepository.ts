import prisma from "../prismaClient";

const getOneClass = async (id: number) => {
  const classOne = await prisma.class.findMany({
    where: { id },
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });

  return classOne;
};

const getAllClasses = async () => {
  const classes = await prisma.class.findMany({
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });
  return classes;
};

const getClassBySubject = async (subjectCodeId: string) => {
  const classes = await prisma.class.findMany({
    where: { subjectCodeId },
    select: {
      id: true,
      idClass: true,
      subjectCodeId: true,
      teacher: true,
      room: true,
      timeAndDay: true,
    },
  });
  return classes;
};

export default { getOneClass, getAllClasses, getClassBySubject };
