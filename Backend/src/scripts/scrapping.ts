import puppeteer from "puppeteer";
import generatePrisma from "./generatePrisma";

/* eslint-disable*/
/* istanbul ignore next */
async function scrap() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const page_mat = await browser.newPage();
  const page_cic = await browser.newPage();

  await page.goto("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf");
  await page.select('select[id="formTurma:inputDepto"]', "673");
  await page.$eval('input[id="formTurma:inputAno"]', (el: any) => (el.value = "2022"));
  await page.select('select[id="formTurma:inputPeriodo"]', "2");
  await page.click('input[name="formTurma:j_id_jsp_1370969402_11"]');

  await page.waitForSelector("#turmasAbertas > table > tbody > tr.agrupador > td > a > span");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.turma");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.nome");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td:nth-child(8)");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr.linhaPar > td:nth-child(4)");
  await page.waitForSelector("#turmasAbertas > table > tbody > tr");
  await page.waitForTimeout(4000);

  await page_mat.goto("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf");
  await page_mat.select('select[id="formTurma:inputDepto"]', "518");
  await page_mat.$eval('input[id="formTurma:inputAno"]', (el: any) => (el.value = "2022"));
  await page_mat.select('select[id="formTurma:inputPeriodo"]', "2");
  await page_mat.click('input[name="formTurma:j_id_jsp_1370969402_11"]');

  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr.agrupador > td > a > span");
  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.turma");
  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.nome");
  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td:nth-child(8)");
  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr.linhaPar > td:nth-child(4)");
  await page_mat.waitForSelector("#turmasAbertas > table > tbody > tr");
  await page_mat.waitForTimeout(4000);

  await page_cic.goto("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf");
  await page_cic.select('select[id="formTurma:inputDepto"]', "508");
  await page_cic.$eval('input[id="formTurma:inputAno"]', (el: any) => (el.value = "2022"));
  await page_cic.select('select[id="formTurma:inputPeriodo"]', "2");
  await page_cic.click('input[name="formTurma:j_id_jsp_1370969402_11"]');

  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr.agrupador > td > a > span");
  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.turma");
  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td.nome");
  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr.linhaImpar > td:nth-child(8)");
  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr.linhaPar > td:nth-child(4)");
  await page_cic.waitForSelector("#turmasAbertas > table > tbody > tr");
  await page_cic.waitForTimeout(4000);

  // const materias_mat: String[] = await page_mat.evaluate();

  const codigoNome: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const turma: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td.turma",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const nome: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td.nome",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const local: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(8)",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const horario: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(4)",
    (el: any) => el.map((e: any) => e.innerText.trim())
  );
  const matrizRef: String[] = await page.$$eval("#turmasAbertas > table > tbody > tr", (el: any) =>
    el.map((e: any) => e.className)
  );

  try {
    await generatePrisma.generateBuildings();
    await generatePrisma.generateRooms();
    await generatePrisma.generateSubject(codigoNome);
    await generatePrisma.generateClass(codigoNome, matrizRef, nome, local, turma, horario);
  } catch (e) {
    /* eslint-disable*/
    console.log("Dados já cadastrados");
  }
  //await browser.close();
}

/* eslint-disable*/
scrap()
  .then(() => console.log("Processo Finalizado!"))
  .catch(console.error);

export default scrap;
