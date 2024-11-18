// Execução assíncrona em JavaScript com Promises e async/await
function tarefa() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tarefa em segundo plano em JavaScript!");
        }, 1000); // Simula uma demora de 1 segundo
    });
}

async function executarTarefa() {
    const resultado = await tarefa(); // Aguarda a conclusão da tarefa
    console.log(resultado); // Mostra o resultado
}

executarTarefa(); // Inicia o processo assíncrono
