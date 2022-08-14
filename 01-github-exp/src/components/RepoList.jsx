import React from 'react';
import { useState, useEffect } from 'react';
import { RepoItem } from './RepoItem';

import '../styles/repositories.scss';

//https://api.github.com/users/jeff-monteiro/repos


export function RepoList(){

    const [repositories, setRepositories] = useState([]);

    // get two parameters: which function and when execute this function
    useEffect(() => {
        fetch('https://api.github.com/users/jeff-monteiro/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepoItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}