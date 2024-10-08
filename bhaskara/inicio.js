function Fibonacci(Valor){
      var Ant, Atual, NumAux, Cont, Valor

      Ant = 0;
      Atual = 1;
      Cont = 1;
      console.log(Ant);
      console.log(Atual);

      while (Cont < Valor) {
      NumAux = Ant + Atual;
      console.log(NumAux);
      Ant = Atual;
      Atual = NumAux;
      Cont = Cont + 1;
      }
}
Fibonacci(15)
