- Extensão para agilizar o uso do SIGAA no Firefox e Chrome. Especificamente criei essa extensão para contornar duas dificuldades no uso da interface do SIGAA:
	- Automaticamente selecionar um dos vínculos. Não faz sentido ficar selecionando dentre uma única opção sempre.
	- Exibir itens de menu que uso frequentemente, uma vez que o menu do SIGAA é de difícil uso (principalmente quando precisa acessar um item que está em um nível profundo, basta um passo em falso com o mouse para sair de todo o menu)
- Tenho usado a versão no Firefox, então essa tem mais chances de estar atualizada do que a versão em Chrome.

# Funcionamento

- O arquivo menuvinculo.js faz com que, ao entrar na página de seleção de vínculo, o vínculo de identificador 5 seja automaticamente selecionado. Isso é útil se há um único vínculo e você não quer toda vida ficar selecionando a mesma opção.
- O arquivo menufrequente.js:
	- adiciona alguns itens de menu relevantes na página principal (os mais frequentes)
	- remove a seção de notícias
