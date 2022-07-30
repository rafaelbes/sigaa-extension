function criarNo(s, s2) {
	let menu = document.createElement('a');
	menu.setAttribute('id', s);
	menu.setAttribute('href', '#');
	menu.setAttribute('onclick', 'if(typeof jsfcljs == \'function\'){jsfcljs(document.getElementById(\'menu:form-menu_docente\'),{\'' + s + '\':\'' + s + '\'},\'\');}return false');
//	menu.setAttribute('class', 'js-item-menu_nivel-3');
	let item1 = document.createElement('h2');
	item1.setAttribute('style','margin-bottom: 0px;');
	item1.textContent = s2;
	menu.appendChild(item1);
	return menu;
}

let m1 = criarNo('menu:ensCons_Turmas', 'Consultar turmas');
let m2 = criarNo('menu:ensTur_CadastrarNotas', 'Cadastrar notas');
let m3 = criarNo('menu:ensConsGrad_Disciplinas', 'Consultar componente curricular');
let m4 = criarNo('menu:bib_PesqMaterialAcervo', 'Pesquisar na biblioteca');
let m5 = criarNo('menu:ensCons_Calendario', 'Calendário Acadêmico');
document.getElementById("main-docente").insertBefore(m1, document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(m2, document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(m3, document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(m4, document.getElementById("noticias-portal"));
document.getElementById("main-docente").insertBefore(m5, document.getElementById("noticias-portal"));
