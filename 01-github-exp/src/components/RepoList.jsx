import React from 'react';
import { RepoItem } from './RepoItem';

import '../styles/repositories.scss';

const repositoryName = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepoList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepoItem repository ={repositoryName} />
                <RepoItem />
            </ul>
        </section>
    );
}