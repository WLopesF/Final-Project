
function verificarRespostas() {
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'b'
    };

    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let pontuacao = 0;

    for (const [pergunta, respostaCorreta] of Object.entries(respostasCorretas)) {
        const respostaUsuario = form.elements[pergunta]?.value || ""; // Handle skipped questions
        if (respostaUsuario === respostaCorreta) {
            pontuacao++;
        }
    }

    resultDiv.style.display = 'block';
    if (pontuacao === 5) {
        resultDiv.innerHTML = `Parabéns! Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas!`;
        resultDiv.style.color = "green";
    } else if (pontuacao === 4) {
        resultDiv.innerHTML = `Quase lá, não desista! Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Tente novamente!`;
        resultDiv.style.color = "orange";
    }
}
