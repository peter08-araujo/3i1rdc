<!DOCTYPE html>
<html>
<head>
    <title>Terminal Git Interativo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        button {
            padding: 10px 15px;
            background-color: #0366d6;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin: 5px;
        }
        button:hover {
            background-color: #024ea2;
        }
        pre {
            background-color: #f6f8fa;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 15px;
            overflow: auto;
            max-height: 300px;
            margin-top: 20px;
        }
        h1 {
            color: #24292e;
        }
        .command-group {
            margin-bottom: 20px;
            border: 1px solid #eee;
            padding: 10px;
            border-radius: 5px;
        }
        h2 {
            color: #0366d6;
            font-size: 20px;
            margin-top: 5px;
        }
        .terminal {
            background-color: #2d333b;
            color: #e6edf3;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            margin-bottom: 15px;
            display: flex;
        }
        .terminal .prompt {
            color: #6bc46d;
            margin-right: 10px;
        }
        .terminal input {
            background: transparent;
            border: none;
            color: #e6edf3;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            width: 100%;
            outline: none;
        }
    </style>
</head>
<body>
    <h1>Terminal Git Interativo</h1>
    
    <div class="command-group">
        <h2>Terminal Git</h2>
        <div class="terminal">
            <span class="prompt">$</span>
            <input type="text" id="command-input" placeholder="Digite um comando git..." 
                   onkeydown="if(event.key==='Enter') executeCommand()">
        </div>
        <button onclick="clearOutput()">Limpar Terminal</button>
        <p>Comandos disponíveis: git init, git add, git commit, git branch, git checkout, git merge, git push, git pull, git status, git log</p>
    </div>
    
    <pre id="output"></pre>

    <script>
        // Estado do repositório
        let repoState = {
            initialized: false,
            branches: [],
            currentBranch: "",
            stagedFiles: [],
            commits: [],
            remotes: {}
        };
        
        // Substitua os console.log por adições ao elemento output
        console.log = function(message) {
            document.getElementById('output').innerHTML += message + '<br>';
        };
        
        // Função para executar o comando digitado
        function executeCommand() {
            const commandInput = document.getElementById('command-input');
            const command = commandInput.value.trim();
            
            if (command === "") return;
            
            document.getElementById('output').innerHTML += `<span style="color: #6bc46d">$ ${command}</span><br>`;
            
            // Parsing especial para comandos com aspas
            if (command.startsWith('git commit -m "') || command.startsWith('git commit --message "')) {
                // Extrai a mensagem entre aspas
                const quoteStartIndex = command.indexOf('"');
                const quoteEndIndex = command.lastIndexOf('"');
                
                if (quoteStartIndex !== -1 && quoteEndIndex !== -1 && quoteEndIndex > quoteStartIndex) {
                    const message = command.substring(quoteStartIndex + 1, quoteEndIndex);
                    
                    // Verifica se o comando começa com -m ou --message
                    const isShortOption = command.includes('-m "');
                    const args = isShortOption ? ['-m', message] : ['--message', message];
                    
                    commitChanges(args);
                    commandInput.value = "";
                    return;
                }
            }
            
            // Parsing normal para outros comandos
            const parts = command.split(' ');
            
            if (parts[0] !== 'git') {
                console.log(`Comando não reconhecido: '${parts[0]}'. Este é um simulador Git.`);
                commandInput.value = "";
                return;
            }
            
            const gitCommand = parts[1];
            const args = parts.slice(2);
            
            switch (gitCommand) {
                case 'init':
                    initRepo();
                    break;
                case 'add':
                    addFiles(args);
                    break;
                case 'commit':
                    commitChanges(args);
                    break;
                case 'branch':
                    handleBranch(args);
                    break;
                case 'checkout':
                    checkoutBranch(args);
                    break;
                case 'merge':
                    mergeBranch(args);
                    break;
                case 'status':
                    showStatus();
                    break;
                case 'push':
                    pushChanges(args);
                    break;
                case 'pull':
                    pullChanges(args);
                    break;
                case 'log':
                    showLog();
                    break;
                default:
                    console.log(`Comando git desconhecido: '${gitCommand}'`);
            }
            
            commandInput.value = "";
        }
        
        function initRepo() {
            if (repoState.initialized) {
                console.log("Repositório Git já inicializado!");
                return;
            }
            
            repoState.initialized = true;
            repoState.branches = ["main"];
            repoState.currentBranch = "main";
            
            console.log("Repositório Git inicializado com sucesso!");
            console.log("Branch padrão: main");
            console.log("Criando diretório .git/");
        }
        
        function addFiles(args) {
            if (!checkRepoInitialized()) return;
            
            let files;
            
            if (args.length === 0 || args[0] === '.') {
                files = ["index.html", "style.css", "app.js"];
                console.log("Adicionando todos os arquivos ao staging area");
            } else {
                files = args;
            }
            
            repoState.stagedFiles = [...new Set([...repoState.stagedFiles, ...files])];
            
            console.log(`Arquivos adicionados ao staging area: ${files.join(", ")}`);
            console.log("Alterações rastreadas pelo Git");
        }
        
        function commitChanges(args) {
            if (!checkRepoInitialized()) return;
            
            if (repoState.stagedFiles.length === 0) {
                console.log("Nada para commit. Use 'git add' primeiro para adicionar arquivos.");
                return;
            }
            
            let message = "Commit sem mensagem";
            
            // Parse dos argumentos de commit
            if (args.length >= 2 && (args[0] === '-m' || args[0] === '--message')) {
                message = args.slice(1).join(' ');
            }
            
            const commitId = generateCommitId();
            
            repoState.commits.push({
                id: commitId,
                message: message,
                files: [...repoState.stagedFiles],
                branch: repoState.currentBranch,
                timestamp: new Date().toISOString()
            });
            
            console.log(`[${repoState.currentBranch}] Commit ${commitId} criado`);
            console.log(`Mensagem: ${message}`);
            console.log(`Arquivos: ${repoState.stagedFiles.join(", ")}`);
            
            // Limpa o staging area após commit
            repoState.stagedFiles = [];
        }
        
        function handleBranch(args) {
            if (!checkRepoInitialized()) return;
            
            if (args.length === 0) {
                // Listar branches
                console.log("Branches:");
                repoState.branches.forEach(branch => {
                    const indicator = branch === repoState.currentBranch ? "* " : "  ";
                    console.log(`${indicator}${branch}`);
                });
                return;
            }
            
            // Criar nova branch
            const newBranch = args[0];
            if (repoState.branches.includes(newBranch)) {
                console.log(`Branch '${newBranch}' já existe.`);
                return;
            }
            
            repoState.branches.push(newBranch);
            console.log(`Branch '${newBranch}' criada com base em '${repoState.currentBranch}'`);
        }
        
        function checkoutBranch(args) {
            if (!checkRepoInitialized()) return;
            
            if (args.length === 0) {
                console.log("Uso: git checkout <branch-name>");
                return;
            }
            
            const targetBranch = args[0];
            
            if (!repoState.branches.includes(targetBranch)) {
                console.log(`Branch '${targetBranch}' não existe. Use 'git branch ${targetBranch}' para criar.`);
                return;
            }
            
            repoState.currentBranch = targetBranch;
            console.log(`Alternado para branch '${targetBranch}'`);
        }
        
        function mergeBranch(args) {
            if (!checkRepoInitialized()) return;
            
            if (args.length === 0) {
                console.log("Uso: git merge <branch-name>");
                return;
            }
            
            const sourceBranch = args[0];
            
            if (!repoState.branches.includes(sourceBranch)) {
                console.log(`Branch '${sourceBranch}' não existe.`);
                return;
            }
            
            console.log(`Mergeando '${sourceBranch}' em '${repoState.currentBranch}'`);
            
            // Simula diferentes resultados de merge
            const result = Math.floor(Math.random() * 3);
            
            if (result === 0) {
                console.log("CONFLITO: Resolva os conflitos antes de continuar");
                console.log("Conflito em: README.md (linhas 5-10)");
                console.log("Conflito em: index.js (linhas 25-30)");
            } else if (result === 1) {
                console.log("Merge realizado com estratégia Fast-forward!");
                console.log("Todas as alterações aplicadas sem conflitos");
            } else {
                const mergeCommitId = generateCommitId();
                console.log("Merge realizado com sucesso!");
                console.log(`Commit de merge criado: ${mergeCommitId}`);
                
                repoState.commits.push({
                    id: mergeCommitId,
                    message: `Merge branch '${sourceBranch}' into ${repoState.currentBranch}`,
                    branch: repoState.currentBranch,
                    isMerge: true,
                    timestamp: new Date().toISOString()
                });
            }
        }
        
        function showStatus() {
            if (!checkRepoInitialized()) return;
            
            console.log(`No branch: ${repoState.currentBranch}`);
            
            if (repoState.stagedFiles.length > 0) {
                console.log("\nMudanças a serem commitadas:");
                console.log("  (use \"git reset HEAD <file>...\" para unstage)");
                
                repoState.stagedFiles.forEach(file => {
                    console.log(`        new file:   ${file}`);
                });
            } else {
                console.log("\nNada para commit, working tree clean");
            }
        }
        
        function pushChanges(args) {
            if (!checkRepoInitialized()) return;
            
            if (repoState.commits.length === 0) {
                console.log("Nada para enviar. Faça commits primeiro.");
                return;
            }
            
            const remote = args.length > 0 ? args[0] : "origin";
            const branch = args.length > 1 ? args[1] : repoState.currentBranch;
            
            console.log(`Enviando para ${remote}/${branch}...`);
            console.log(`Contando objetos: ${Math.floor(Math.random() * 10) + 5}`);
            console.log(`Comprimindo objetos: 100%`);
            console.log(`Escrevendo objetos: 100%`);
            console.log(`Total: ${repoState.commits.length}, Delta: 0`);
            console.log(`\nPush completado com sucesso!`);
        }
        
        function pullChanges(args) {
            if (!checkRepoInitialized()) return;
            
            const remote = args.length > 0 ? args[0] : "origin";
            const branch = args.length > 1 ? args[1] : repoState.currentBranch;
            
            console.log(`Buscando atualizações de ${remote}/${branch}...`);
            
            // Simula diferentes resultados de pull
            const result = Math.floor(Math.random() * 3);
            
            if (result === 0) {
                console.log("Já está atualizado. Nada para fazer.");
            } else if (result === 1) {
                console.log("Atualizando files...");
                console.log("Fast-forward");
                console.log(" README.md | 5 ++---");
                console.log(" 1 file changed, 2 insertions(+), 3 deletions(-)");
            } else {
                console.log("Mergeando alterações remotas...");
                console.log("Auto-merging README.md");
                console.log("CONFLITO (conteúdo): Conflito de merge em README.md");
                console.log("Automatic merge failed; fix conflicts and then commit the result.");
            }   
        }
        
        function showLog() {
            if (!checkRepoInitialized()) return;
            
            if (repoState.commits.length === 0) {
                console.log("Nenhum commit encontrado.");
                return;
            }
            
            console.log("Histórico de commits:");
            
            // Mostra commits em ordem cronológica inversa
            [...repoState.commits].reverse().forEach(commit => {
                console.log(`commit ${commit.id}`);
                console.log(`Author: Usuario <usuario@example.com>`);
                console.log(`Data:   ${new Date(commit.timestamp).toLocaleString()}`);
                console.log(`\n    ${commit.message}\n`);
            });
        }
        
        function checkRepoInitialized() {
            if (!repoState.initialized) {
                console.log("Repositório Git não inicializado. Use 'git init' primeiro.");
                return false;
            }
            return true;
        }
        
        function generateCommitId() {
            return Math.random().toString(16).substring(2, 10);
        }
        
        function clearOutput() {
            document.getElementById('output').innerHTML = '';
        }
        
        // Foca o input quando a página carrega
        window.onload = function() {
            document.getElementById('command-input').focus();
        };
    </script>
</body>
</html>
