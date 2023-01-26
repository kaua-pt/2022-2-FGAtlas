import puppeteer from "puppeteer";
import generatePrisma from "./generatePrisma";

/* eslint-disable*/
/* istanbul ignore next */
async function scrap() {
  const browser = await puppeteer.launch({ headless: true });
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

  var codigoNome: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  var turma: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td.turma",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  var nome: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td.nome",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  var local: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(8)",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  var horario: String[] = await page.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(4)",
    (el: any) => el.map((e: any) => e.innerText.trim())
  );
  var matrizRef: String[] = await page.$$eval("#turmasAbertas > table > tbody > tr", (el: any) =>
    el.map((e: any) => e.className)
  );

  //Primeiro, declarando variáveis com todos os dados (computação)
  const todosCodigoNome_cic: String[] = await page_cic.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todasTurmas_cic: String[] = await page_cic.$$eval(
    "#turmasAbertas > table > tbody > tr > td.turma",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosNomes_cic: String[] = await page_cic.$$eval(
    "#turmasAbertas > table > tbody > tr > td.nome",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosLocais_cic: String[] = await page_cic.$$eval(
    "#turmasAbertas > table> tbody > tr > td:nth-child(8)",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosHorarios_cic: String[] = await page_cic.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(4)",
    (el: any) => el.map((e: any) => e.innerText.trim())
  );
  const matrizRef_cic: String[] = await page.$$eval("#turmasAbertas > table > tbody > tr", (el: any) =>
    el.map((e: any) => e.className)
  );

  //Repetidor
  var q;
  var j;
  //Agora, declarando variáveis com os dados filtrados (computação)
  var codigoNomeFiltrado_cic: String[] = ["CIC0004 - ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "CIC0004 - ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES",
    "CIC0004 - ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "CIC0004 - ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES",
    "CIC0004 - ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES"];
  var turmasFiltradas_cic: String[] = [];
  var nomesFiltrados_cic: String[] = [];
  var locaisFiltrados_cic: String[] = [];
  var horariosFiltrados_cic: String[] = [];
  var matrizRefFiltrada_cic: String[] = ["agrupador", "linhaPar", "linhaImpar", "linhaPar",
    "linhaImpar", "linhaPar"];
  //Looping para filtrar os dados (computação)
  for (q = 0; q < todosLocais_cic.length; q++) {
    if (todosLocais_cic[q].split('/')[1] != undefined) {
      if (todosLocais_cic[q].split('/')[1].split(')')[0] == "FGA") {
        turmasFiltradas_cic.push(todasTurmas_cic[q]);
        nomesFiltrados_cic.push(todosNomes_cic[q]);
        locaisFiltrados_cic.push(todosLocais_cic[q]);
        horariosFiltrados_cic.push(todosHorarios_cic[q]);
      }
    }
  };
  var locais_cic: String[] = [];
  for (j = 0; j < locaisFiltrados_cic.length; j++) {
    locais_cic.push(locaisFiltrados_cic[j].replace(/-/g, ""))
  };

  //Primeiro, declarando variáveis com todos os dados (matemática)
  const todosCodigoNome_mat: String[] = await page_mat.$$eval(
    "#turmasAbertas > table > tbody > tr.agrupador > td > a > span",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todasTurmas_mat: String[] = await page_mat.$$eval(
    "#turmasAbertas > table > tbody > tr > td.turma",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosNomes_mat: String[] = await page_mat.$$eval(
    "#turmasAbertas > table > tbody > tr > td.nome",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosLocais_mat: String[] = await page_mat.$$eval(
    "#turmasAbertas > table> tbody > tr > td:nth-child(8)",
    (el: any) => el.map((e: any) => e.innerHTML)
  );
  const todosHorarios_mat: String[] = await page_mat.$$eval(
    "#turmasAbertas > table > tbody > tr > td:nth-child(4)",
    (el: any) => el.map((e: any) => e.innerText.trim())
  );
  const matrizRef_mat: String[] = await page.$$eval("#turmasAbertas > table > tbody > tr", (el: any) =>
    el.map((e: any) => e.className)
  );
  //Repetidor
  var i;
  //Agora, declarando variáveis com os dados filtrados (matemática)
  var codigoNomeFiltrado_mat: String[] = ["MAT0025 - CÁLCULO 1", "MAT0025 - CÁLCULO 1", "MAT0025 - CÁLCULO 1",
    "MAT0026 - CÁLCULO 2", "MAT0026 - CÁLCULO 2", "MAT0026 - CÁLCULO 2",
    "MAT0027 - CÁLCULO 3", "MAT0027 - CÁLCULO 3", "MAT0031 - INTRODUÇÃO A ALGEBRA LINEAR",
    "MAT0031 - INTRODUÇÃO A ALGEBRA LINEAR", "MAT0031 - INTRODUÇÃO A ALGEBRA LINEAR"];
  var turmasFiltradas_mat: String[] = [];
  var nomesFiltrados_mat: String[] = [];
  var locaisFiltrados_mat: String[] = [];
  var horariosFiltrados_mat: String[] = [];
  var matrizRefFiltrada_mat: String[] = ["agrupador", "linhaImpar", "linhaPar", "linhaImpar",
    "agrupador", "linhaImpar", "linhaPar", "linhaImpar",
    "agrupador", "linhaImpar", "linhaPar", "agrupador", "linhaImpar",
    "linhaPar", "linhaImpar"];
  //Looping para filtrar os dados (matemática)
  for (i = 0; i < todosLocais_mat.length; i++) {
    if (todosLocais_mat[i].split(' ')[1] == "FGA") {
      turmasFiltradas_mat.push(todasTurmas_mat[i]);
      nomesFiltrados_mat.push(todosNomes_mat[i]);
      locaisFiltrados_mat.push(todosLocais_mat[i]);
      horariosFiltrados_mat.push(todosHorarios_mat[i]);
    };
  };

  //Concatenando os novos arrays de materias com os antigos
  var codigoNomeGeral: String[] = [];
  var matrizRefGeral: String[] = [];
  var nomeGeral: String[] = [];
  var localGeral: String[] = [];
  var turmaGeral: String[] = [];
  var horarioGeral: String[] = [];

  codigoNomeGeral = codigoNome.concat(codigoNomeFiltrado_mat);
  matrizRefGeral = matrizRef.concat(matrizRefFiltrada_mat);
  nomeGeral = nome.concat(nomesFiltrados_mat);
  localGeral = local.concat(locaisFiltrados_mat);
  turmaGeral = turma.concat(turmasFiltradas_mat);
  horarioGeral = horario.concat(horariosFiltrados_mat);

  codigoNomeGeral = codigoNomeGeral.concat(codigoNomeFiltrado_cic);
  matrizRefGeral = matrizRefGeral.concat(matrizRefFiltrada_cic);
  nomeGeral = nomeGeral.concat(nomesFiltrados_cic);
  localGeral = localGeral.concat(locais_cic);
  localGeral = turmaGeral.concat(turmasFiltradas_cic);
  horarioGeral = horarioGeral.concat(horariosFiltrados_cic);

  try {
    await generatePrisma.generateBuildings();
    await generatePrisma.generateRooms();
    await generatePrisma.generateSubject(codigoNomeGeral);
    await generatePrisma.generateClass(codigoNomeGeral, matrizRefGeral, nomeGeral, localGeral, turmaGeral, horarioGeral);
  } catch (e) {
    /* eslint-disable*/
    console.log("Dados já cadastrados");
  }
  await browser.close();
}

/* eslint-disable*/
scrap()
  .then(() => console.log("Processo Finalizado!"))
  .catch(console.error);

export default scrap;
