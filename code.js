/**
 * Demonstrações Práticas - Tutorial GitHub
 * Este arquivo contém demonstrações e exemplos relacionados ao Git e GitHub
 * para auxiliar no aprendizado.
 * 
 * @author Guilherme Peterlini
 */

// ----- SIMULAÇÃO DE COMANDOS GIT ----- //

/**
 * Simula a inicialização de um repositório Git
 */
function gitInit() {
  console.log("Repositório Git inicializado com sucesso!");
  return {
    branches: ["main"],
    currentBranch: "main",
    commits: [],
    status: "initialized"
  };
}

/**
 * Simula a adição de arquivos ao staging area
 * @param {Array} files - Lista de arquivos para adicionar
 */
function gitAdd(files) {
  console.log(`Arquivos adicionados ao staging area: ${files.join(", ")}`);
  return {
    stagedFiles: files,
    message: "Arquivos prontos para commit"
  };
}

/**
 * Simula um commit no repositório
 * @param {string} message - Mensagem do commit
 * @param {Array} files - Arquivos incluídos no commit
 */
function gitCommit(message, files) {
  const commitId = generateCommitId();
  console.log(`Commit realizado: ${commitId}`);
  console.log(`Mensagem: ${message}`);
  console.log(`Arquivos: ${files.join(", ")}`);
  
  return {
    id: commitId,
    message: message,
    files: files,
    timestamp: new Date().toISOString()
  };
}

/**
 * Simula a criação de uma branch
 * @param {string} name - Nome da nova branch
 * @param {string} base - Branch base (opcional, padrão: current)
 */
function gitCreateBranch(name, base = "current") {
  console.log(`Branch '${name}' criada a partir de '${base}'`);
  return {
    name: name,
    base: base,
    created: new Date().toISOString()
  };
}

/**
 * Simula um merge entre branches
 * @param {string} source - Branch de origem
 * @param {string} target - Branch de destino
 */
function gitMerge(source, target) {
  console.log(`Mergeando '${source}' em '${target}'`);
  
  // Simulando um possível conflito
  const hasConflict = Math.random() > 0.7;
  
  if (hasConflict) {
    console.log("CONFLITO: Resolva os conflitos antes de continuar");
    return {
      status: "conflict",
      conflictFiles: ["README.md", "index.js"]
    };
  }
  
  console.log("Merge realizado com sucesso!");
  return {
    status: "success",
    mergeCommitId: generateCommitId()
  };
}

// ----- SIMULAÇÃO DE INTERAÇÕES COM GITHUB ----- //

/**
 * Simula a criação de um Pull Request no GitHub
 * @param {string} title - Título do PR
 * @param {string} sourceBranch - Branch de origem
 * @param {string} targetBranch - Branch de destino
 * @param {string} description - Descrição do PR
 */
function createPullRequest(title, sourceBranch, targetBranch, description) {
  const prNumber = Math.floor(Math.random() * 1000) + 1;
  
  console.log(`Pull Request #${prNumber} criado:`);
  console.log(`Título: ${title}`);
  console.log(`De: ${sourceBranch} → Para: ${targetBranch}`);
  console.log(`Descrição: ${description}`);
  
  return {
    number: prNumber,
    title: title,
    source: sourceBranch,
    target: targetBranch,
    description: description,
    status: "open",
    created: new Date().toISOString()
  };
}

/**
 * Simula o processo de review de um Pull Request
 * @param {number} prNumber - Número do PR
 * @param {string} reviewer - Nome do revisor
 * @param {string} status - Status do review (approve, comment, request_changes)
 * @param {string} comment - Comentário do review
 */
function reviewPullRequest(prNumber, reviewer, status, comment) {
  console.log(`Review no PR #${prNumber} por ${reviewer}:`);
  console.log(`Status: ${status}`);
  console.log(`Comentário: ${comment}`);
  
  return {
    pr: prNumber,
    reviewer: reviewer,
    status: status,
    comment: comment,
    timestamp: new Date().toISOString()
  };
}

// ----- FUNÇÕES AUXILIARES ----- //

/**
 * Gera um ID de commit simulado
 * @returns {string} ID do commit
 */
function generateCommitId() {
  return Math.random().toString(16).substring(2, 10);
}

/**
 * Exemplo de fluxo de trabalho Git completo
 */
function exemploDemonstracaoGitFlow() {
  // Inicializa o repositório
  const repo = gitInit();
  
  // Cria e adiciona arquivos
  const files = ["index.html", "style.css", "app.js"];
  gitAdd(files);
  
  // Realiza o primeiro commit
  const commit1 = gitCommit("Commit inicial", files);
  
  // Cria uma branch de feature
  const feature = gitCreateBranch("feature/nova-funcionalidade", "main");
  
  // Adiciona mais arquivos e realiza commit na feature
  const newFiles = ["feature.js", "feature.css"];
  gitAdd(newFiles);
  const commit2 = gitCommit("Adiciona nova funcionalidade", newFiles);
  
  // Cria um Pull Request
  const pr = createPullRequest(
    "Implementação da nova funcionalidade",
    "feature/nova-funcionalidade",
    "main",
    "Esta PR implementa a nova funcionalidade X, que será utilizada para Y."
  );
  
  // Simula uma review
  const review = reviewPullRequest(
    pr.number,
    "colega-programador",
    "approve",
    "Código bem escrito e bem testado. Aprovado!"
  );
  
  // Realiza o merge
  const mergeResult = gitMerge("feature/nova-funcionalidade", "main");
  
  console.log("\nFluxo de trabalho Git completo demonstrado com sucesso!");
}

// Exporta as funções para uso em outros scripts
module.exports = {
  gitInit,
  gitAdd,
  gitCommit,
  gitCreateBranch,
  gitMerge,
  createPullRequest,
  reviewPullRequest,
  exemploDemonstracaoGitFlow
};

// Para testar a demonstração, descomente a linha abaixo
// exemploDemonstracaoGitFlow();
