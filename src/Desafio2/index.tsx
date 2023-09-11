import React, { useState } from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  O problema era que o atributo Key estava faltando no elemento "li" para que o react
  possa identificar em qual item do array foi feita alguma alteração. A solução foi
  adicionar ao método map o parâmetro "key", para poder utilizá-lo para identificar 
  corretamente cada item da renderização da lista.

*/

type ListItem = number;

export const Desafio2: React.FC = ()=> {
  const [list, _setList] = useState<ListItem[]>([1, 2]);

  return (
    <ul>
      {list.map(
        (item: ListItem, key: number) => <li key={ key }>item: { item }</li>
      )}
    </ul> 
  )
}

