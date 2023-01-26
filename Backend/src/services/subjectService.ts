// subject service
import subjectRepository from "../repositories/subjectRepository";
import HttpError from "http-errors";

const getOneSubject = async (codeId: string) => {
    const subject = await subjectRepository.getOneSubject(codeId);
    if (subject.length === 0) {
        throw new HttpError.NotFound();
    }

    return subject;
};
const getAllSubjects = async () => {
    const subjects = await subjectRepository.getAllSubjects();

    return subjects;
};

export default { getOneSubject, getAllSubjects };