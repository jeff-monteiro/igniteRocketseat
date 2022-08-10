import React from 'react';
import { useState, useEffect } from 'react';
import { RepoItem } from './RepoItem';

import '../styles/repositories.scss';

//https://api.github.com/users/jeff-monteiro/repos

const repositoryName = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepoList(){

    const [repositories, setRepositories] = useState([]);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepoItem repository ={repositoryName} />
                <RepoItem repository ={repositoryName} />
                <RepoItem repository ={repositoryName} />
                <RepoItem repository ={repositoryName} />
            </ul>
        </section>
    );
}