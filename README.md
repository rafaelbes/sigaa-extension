- Extensão para agilizar o uso do SIGAA no Firefox e Chrome. Especificamente criei essa extensão para contornar duas dificuldades no uso da interface do SIGAA:
	- Automaticamente selecionar um dos vínculos. Não faz sentido ficar selecionando dentre uma única opção sempre.
	- Exibir itens de menu que uso frequentemente, uma vez que o menu do SIGAA é de difícil uso (principalmente quando precisa acessar um item que está em um nível profundo, basta um passo em falso com o mouse para sair de todo o menu)
- Tenho usado a versão no Firefox, então essa tem mais chances de estar atualizada do que a versão em Chrome.
- A instalação é via extensão temporária. Sugiro conhecer o funcionamento dessa extensão antes de usar. Se não funcionar, basta remover a extensão temporária.
- Nada aqui é customizável via interface. É necessário editar os códigos para fazer mudanças relevantes (vide seção modificações).

# Funcionamento

- O arquivo menuvinculo.js faz com que, ao entrar na página de seleção de vínculo, o vínculo de identificador 5 (meu caso, seu caso pode ser outro) seja automaticamente selecionado. Isso é útil se há um único vínculo e você não quer toda vida ficar selecionando a mesma opção.
- O arquivo menufrequente.js:
	- adiciona alguns itens de menu relevantes na página principal (os mais frequentes)
	- remove a seção de notícias

# Instalação

## Firefox

1. Acessar 'Extensões e temas'
2. No ícone de engrenagem, logo no topo à direita, clicar em 'Depurar extensões'
3. Clicar em 'Carregar extensão temporária...' e selecionar o arquivo .json

# Modificações

Modificações precisam ser seguidas de recarregamento da extensão. No mesmo menu de depuração de extensões, clique em recarregar após as mudanças.
