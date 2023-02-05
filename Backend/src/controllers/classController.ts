import { RequestHandler } from "express";
import classService from "../services/classService";

const readOneClass: RequestHandler = async (req, res) => {
  const { idClass } = req.params;
  const id = parseInt(idClass, 10);
  return res.json(await classService.getOneClass(id));
};

const readClasses: RequestHandler = async (req, res) =>
  res.json(await classService.getAllClasses());

const readBySubject: RequestHandler = async (req, res) => {
  const { subjectCodeId } = req.params;
  return res.json(await classService.getClassBySubject(subjectCodeId));
};

export default { readOneClass, readClasses, readBySubject };
