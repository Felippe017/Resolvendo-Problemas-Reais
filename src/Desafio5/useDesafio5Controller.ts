import { useState, useCallback } from "react";

export const useDesafio5Controller = () => {
  const [list, setList] = useState<number[]>([]);

  const addItem = useCallback(() => {
    setList((prevList) => [...prevList, prevList.length]);
  }, []);

  const isPar = useCallback((valor: number) => valor % 2 === 0, []);

  const numero = list.length + 1;

  const parOuImpar = useCallback((valor: number) => 
    (isPar(valor) ? "Par" : "Impar")
  , [isPar]);

  return { list, addItem, numero, parOuImpar };
};