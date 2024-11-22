  // Variável global para armazenar os valores
  let valores = [];

  // Função para pegar os números e adicionar ao array se forem válidos
  function pegarnumeros() {
      // Pega o valor do input
      let n = document.getElementById('num');
      let num = Number(n.value);

      // Verifica se o número está entre 1 e 100
      if (num >= 1 && num <= 100) {
          // Verifica se o array já tem 6 números
          if (valores.length < 6) {
              valores.push(num); // Adiciona o número ao array
            document.getElementById('res').innerHTML += `Número ${num} adicionado!<br>`;
          } else {
              alert('Já foram adicionados 6 números.');
          }
      } else {
          alert('Número inválido! Digite um número entre 1 e 100.');
      }

      // Limpa o campo de input
      n.value = '';
      n.focus(); // Foco no campo de input para facilitar a digitação
  }

  // Função para somar os valores
  function somavalores(valores) {
      return valores.reduce((acc, curr) => acc + curr, 0);
  }

  // Função para analisar os números e mostrar os resultados
  function analisarnumeros() {
      if (valores.length === 6) {
          let soma = somavalores(valores);
          let media = soma / valores.length;
          let numeromaximo = Math.max(...valores);
          let numerominimo = Math.min(...valores);

          // Mostra os resultados no elemento res
          let res = document.getElementById('res');
          res.innerHTML += `<br>A soma dos valores é: ${soma}<br>`;
          res.innerHTML += `A média dos valores é: ${media}<br>`;
          res.innerHTML += `O maior valor é: ${numeromaximo}<br>`;
          res.innerHTML += `O menor valor é: ${numerominimo}<br>`;

          // Limpa os valores para nova entrada
          valores = [];
      } else {
          alert('Adicione 6 números antes de realizar a análise.');
      }
  }