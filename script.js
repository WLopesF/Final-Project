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
                const respostaUsuario = form.elements[pergunta].value;
                if (respostaUsuario === respostaCorreta) {
                    pontuacao++;
                }
            }

            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas!`;
        }

