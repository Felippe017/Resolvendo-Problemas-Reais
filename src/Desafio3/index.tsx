import React, { useState } from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.

  Foi removido o uso de funções auto-invocadas desnecessárias para simplificar o
  código, a quantidade da lista foi simplificada adicionando o seu tamanho diretamente
  no elemento "span", utilizei underscore em "setList" indicar que é uma variável não
  utilizada, adicionei o atributo "key" ao elemento "li" dentro do loop map para melhorar
  o desempenho e a capacidade de identificação de elementos na lista e fiz o uso de uma
  interpolação de strings.

  Além disso, foi definido um tipo ListItem para os elementos da lista, que são números.
  Foi usado "React.FC" para definir o componente funcional e, em seguida, a variável "list"
  foi tipada como um array de ListItem para que o TypeScript saiba que essa variável contém
  números. A função de mapeamento (map) também é tipada para receber um ListItem.
*/
type ListItem = number;

export const Desafio3: React.FC = () => {  
  const [list, _setList] = useState<ListItem[]>([1, 2])

  return (
    <div>
      <span> quantidade: { list.length }</span>
      <ul>
        {list.map(
          (item: ListItem, key: number) => (<li key={ key }>item: { item }</li>
        ))}
      </ul>
    </div>
  )
}
