/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  
  O componente abaixo apresentava um problema de sintaxe. Dentro do retorno do
  componente, eram retornados dois elementos "span" diretamente um após o outro,
  mas o JSX exige que aja um único elemento pai que englobe todos os outros
  elementos filhos, sendo esse um requisito do JSX para que o código seja compilado
  corretamente.

  A solução foi então envolver os elementos "span" em um único elemento pai, nesse 
  caso, envolvi com um Fragment. Assim, o problema de sintaxe foi resolvido e permitiu
  que o JSX fosse compilado corretamente.
*/

export const Desafio1 = () => {
  return (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  )
}
