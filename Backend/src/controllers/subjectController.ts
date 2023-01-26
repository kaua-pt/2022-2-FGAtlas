import { RequestHandler } from "express";
import subjectService from "../services/subjectService";

const readSubjects: RequestHandler = async (req, res) => res.json(await subjectService.getAllSubjects());


const readOneSubject: RequestHandler = async (req, res) => {
  const { codeId } = req.params;
  const subject = await subjectService.getOneSubject(codeId);

  return res.json(subject);
};

export default { readSubjects, readOneSubject };
