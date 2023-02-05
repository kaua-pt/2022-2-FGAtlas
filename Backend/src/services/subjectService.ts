// subject service
import HttpError from "http-errors";
import subjectRepository from "../repositories/subjectRepository";


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