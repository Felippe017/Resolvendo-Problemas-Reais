import React from 'react';
import Item from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Problema: Re-renderizações e desempenho:
  Cada vez que "addItem" é chamado, um novo array com a distribuição do antigo mais um
  novo item é criado. Isso sempre causa uma nova referência para a lista, o que poderia
  renderizar novamente os componentes filhos com mais frequência do que o necessário.
  As funções "isPar" e "parOuImpar" são recriadas toda vez que o hook é executado. Se
  estes fossem passados para componentes filhos, causariam novas renderizações desnecessárias.

  Desempenho e qualidade do código:
  Não há nenhuma chave fornecida ao mapear o array da lista para renderizar os componentes do Item.
  Isto é problemático para o algoritmo de reconciliação do React.

  Solução:
  Usei useCallback para memorizar as funções e evitar novas renderizações desnecessárias.
  Adicionado uma key prop para cada item durante o mapeamento para melhorar o desempenho de renderização
  de lista do React. Tornou o componente Item puro usando React.memo. Isso significa que o Item só será
  renderizado novamente se seus props mudarem.
*/

export const Desafio5: React.FC = () => {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  return (
    <>
      <button onClick={addItem} data-testid="btn1">adiciona + 1 item na lista</button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item, index) => (
          <Item key={index} valor={item} parOuImpar={parOuImpar} />
        ))}
      </ul>
      <p>
        {numero} é  {parOuImpar(numero)}
      </p>
    </>
  );
}
