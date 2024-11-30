function verificarRespostas() {
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'b',
        q6: ['a', 'c'],
        q7: 'c',
        q8: ['a', 'b'],
        q9: ['a', 'b', 'c'],
        q10: ['a', 'b']
    };

    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let pontuacao = 0;

    for (const [pergunta, respostaCorreta] of Object.entries(respostasCorretas)) {
        const respostaUsuario = form.elements[pergunta]?.value || ""; // Handle skipped questions
        if (Array.isArray(respostaCorreta)) {
            if (respostaCorreta.includes(respostaUsuario)) {
                pontuacao++;
            }
        } else if (respostaUsuario === respostaCorreta) {
            pontuacao++;
        }
    }

    resultDiv.style.display = 'block';

    if (pontuacao === 10) {
        resultDiv.innerHTML = `Parabéns! Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas!`;
        resultDiv.style.color = "darkgreen";
    } else if (pontuacao === 9) {
        resultDiv.innerHTML = `Quase lá, não desista! Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Continue tentando!`;
        resultDiv.style.color = "green";
    } else if (pontuacao >= 6 && pontuacao <= 8) {
        resultDiv.innerHTML = `Você foi bem! Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Tente novamente, você pode melhorar!`;
        resultDiv.style.color = "orange";
    } else if (pontuacao === 5) {
        resultDiv.innerHTML = `Razoável... Estude um pouco mais, pois você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Volte quando souber mais um pouco!`;
        resultDiv.style.color = "yellow";
    } else if (pontuacao >= 1 && pontuacao <= 4) {
        resultDiv.innerHTML = `Você foi mal... Que pena. Recomendo fazer um curso na área de programação. Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Tem jeito!`;
        resultDiv.style.color = "red";
    } else if (pontuacao === 0) {
        resultDiv.innerHTML = `Nenhuma? É realmente uma pena. Se aprofunde mais e ganhe mais conhecimento. Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas. Você tem muito a melhorar!`;
        resultDiv.style.color = "darkred";
    }
}
