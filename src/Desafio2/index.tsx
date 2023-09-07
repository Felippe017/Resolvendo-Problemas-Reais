import React, { useState } from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  
  O problema no código é que a variável item não estava sendo interpolada corretamente
  na string que estava sendo gerada. Para exibir o valor de item, item deve colocado
  dentro de chaves {} para que ele seja interpretado como uma expressão JavaScript. 
  Além disso, foi adicionado tipagem ao componente para um código mais limpo e legível.
*/

type ListItem = number;

export const Desafio2: React.FC = ()=> {
  const [list, _setList] = useState<ListItem[]>([1, 2]);

  return (
    <div>
      <ul>
        {list.map(
          (item: ListItem) => <li key={item}>{`item: ${item}`}</li>
        )}
      </ul> 
    </div>
  )
}
