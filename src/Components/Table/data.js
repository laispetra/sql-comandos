export const data = [
    {
        command: "CREATE database [nome_da_database]" , 
        description: "Cria um database no servidor SQL."
    }, 
    {
        command: "SHOW databases" , 
        description: "Lista todas as database do servidor SQL."
    }, 
    {
        command: "USE [nome_da_database]" , 
        description: "Muda e inicia uma database."
    }, 
    {
        command: "DROP database [nome_da_database]" , 
        description: "Deleta database."
    }, 
    {
        command: "SHOW tables" , 
        description: "Mostra as tabelas dentro de uma database."
    }, 
    {
        command: "DESCRIBE [nome_da_tabela]",
        description: "Mostra as os tipos dos campos da tabela específica."
    }
]