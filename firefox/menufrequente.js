function createSubmenu(imageUrl, headingText, idSubmenu) {
	let parentDiv = document.createElement('div');
	parentDiv.setAttribute('id', idSubmenu);
	parentDiv.setAttribute('class', 'simple-panel');
	let heading = document.createElement('h4');
	let img = document.createElement('img');
	img.setAttribute('src', imageUrl);
	let headingTextNode = document.createTextNode(headingText);
	heading.appendChild(img);
	heading.appendChild(headingTextNode);
	parentDiv.appendChild(heading);
	return parentDiv;
}

function criarNo(s, s2, urlOpt = '') {
	let menu = document.createElement('a');
	menu.setAttribute('id', s);
	menu.setAttribute('href', '#');
	if(urlOpt == '') {
		menu.setAttribute('onclick', 'if(typeof jsfcljs == \'function\'){jsfcljs(document.getElementById(\'menu:form-menu_docente\'),{\'' + s + '\':\'' + s + '\'},\'\');}return false');
	} else {
		menu.setAttribute('onclick', 'if(typeof jsfcljs == \'function\'){jsfcljs(document.getElementById(\'menu:form-menu_docente\'),{\'' + s + '\':\'' + s + '\',\'url\':\'' + urlOpt + '\'},\'\');}return false');
	}
	let item1 = document.createElement('h5');
	item1.setAttribute('style','margin-bottom: 0px;');
	item1.textContent = s2;
	menu.appendChild(item1);
	return menu;
}

let e0 = document.createElement('div');
e0.setAttribute('id', 'conteudoMenu');
document.getElementById("main-docente").insertBefore(e0, document.getElementById("noticias-portal"));

document.getElementById("main-docente").insertBefore(createSubmenu('/sigaa/img/icones/ensino_menu.gif', 'Ensino', 'submenuEnsino'), document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(createSubmenu('/sigaa/img/icones/pesquisa_menu.gif', 'Pesquisa', 'submenuPesquisa'), document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(createSubmenu('/sigaa/img/icones/extensao_menu.gif', 'Extensão', 'submenuExtensao'), document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(createSubmenu('/sigaa/img/icones/producao_menu.gif', 'Produção', 'submenuProducao'), document.getElementById("noticias-portal"));
document.getElementById("submenuEnsino").appendChild(criarNo('menu:ensCons_Turmas', 'Consultar turmas'));
document.getElementById("submenuEnsino").appendChild(criarNo('menu:ensTur_CadastrarNotas', 'Cadastrar notas'));
document.getElementById("submenuEnsino").appendChild(criarNo('menu:ensConsGrad_Disciplinas', 'Consultar componente curricular'));
document.getElementById("submenuEnsino").appendChild(criarNo('menu:bib_PesqMaterialAcervo', 'Pesquisar na biblioteca'));
document.getElementById("submenuEnsino").appendChild(criarNo('menu:ensCons_Calendario', 'Calendário Acadêmico'));
document.getElementById("submenuPesquisa").appendChild(criarNo('menu:list_projPesGru_SubmeterProp', 'Consultar Grupo de Pesquisa'));
document.getElementById("submenuPesquisa").appendChild(criarNo('menu:projPesPro_MeusProjetos', 'Listar meus projetos de Pesquisa','/pesquisa/projetoPesquisa/criarProjetoPesquisa.do?dispatch=listByMembro'));
document.getElementById("submenuExtensao").appendChild(criarNo('menu:projExtAcoes_Consultar', 'Consultar Ações de Extensão'));
document.getElementById("submenuExtensao").appendChild(criarNo('menu:projExtAcoes_MinhasAcoes', 'Listar Minhas Ações de Extensão'));
document.getElementById("submenuProducao").appendChild(criarNo('menu:prodIntRelDoc_Individual', 'RID (Antigo) Relatório Individual Docente'));
document.getElementById("submenuProducao").appendChild(criarNo('menu:prodInt_ProgPromoDocente_Rid', 'RID (Novo) Relatório Individual Docente'));
document.getElementById("submenuProducao").appendChild(criarNo('menu:prodIntRelDep_SituacAtual', 'Dept: Situação docente atual'));
document.getElementById("noticias-portal").remove();

const url = browser.extension.getURL("a.html");
fetch(url)
	.then(response => response.text())
	.then(content => {
		document.getElementById("conteudoMenu").innerHTML = content;
	})
	.catch(error => {
		console.error("Erro ao carregar a página:", error);
	});

//remove o banner que consta na página inicial
//há vários simple-panel, porém só o do banner não contém id
const elementsToRemove = document.querySelectorAll(".simple-panel");
elementsToRemove.forEach((element) => {
	if(!element.id) {
	  element.remove();
	}
});

//document.getElementById("menusigab").insertBefore(m5, document.getElementById("itensEnsino"));
