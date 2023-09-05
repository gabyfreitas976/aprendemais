	
//calculadora
function calc(){
	vet=[];
	
	function num(){

	} function op(){

	}
	eval()
}
//anotações de bio
 const form = document.querySelector('form');
    const anotacoesContainer = document.getElementById('anotacoes-container');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const titulo = document.getElementById('titulo').value;
      const anotacao = document.getElementById('anotacao').value;
      const urgencia = document.getElementById('urgencia').value;

      const div = document.createElement('div');
      div.classList.add('anotacao', urgencia);
      div.innerHTML = `
        <h2>${titulo}</h2>
        <hr>
        <p>${anotacao}</p>
        <button onclick="excluirAnotacao(this)" class="btn">Excluir</button>
      `;

      anotacoesContainer.appendChild(div);

      document.getElementById('titulo').value = '';
      document.getElementById('anotacao').value = '';
    });

    function excluirAnotacao(button) {
      const anotacaoDiv = button.parentNode;
      anotacoesContainer.removeChild(anotacaoDiv);
    }

    function checkAnswers() {
    const name = document.getElementById("nome").value;
    const answers = {
      q1: "a",
      q2: "a",
      q3: "b",
      q4: "c",
      q5: "b",
      q6: "d",
      q7: "a",
      q8: "c",
      q9: "c",
      q10: "c"
    };
    let score = 0;

    for (let i = 1; i <= 10; i++) {
      const selectedOption = document.querySelector(`input[nome=q${i}]:checked`);

      if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === answers[`q${i}`]) {
          score++;
          selectedOption.parentNode.classList.add("correct");
        }
      }
    }

    const resultMessage = document.getElementById("result");
    resultMessage.innerHTML = "";

    if (score >= 6 && score <10) {
      resultMessage.innerHTML = `Parabéns, ${name}! Você acertou ${score} de 10 questões.`;
    }
    else if (score <= 5 && score >0) {
      resultMessage.innerHTML = `Ah! Que pena, ${name}. Você acertou apenas ${score} de 10 questões. Tente novamente.`;
    }
    else if (score === 10) {
      resultMessage.innerHTML = `INCRÍVEL, ${name}! Você acertou todas as 10 questões. ARRASOU!`;
    }
    else if (score === 0) {
      resultMessage.innerHTML = `Poxa, ${name}. Você não acertou nenhuma questão. Boa sorte na Proxima.`;
    }
  };