import React from 'react';
import { RepoFollower } from './RepoFollower';
import { RepoItem } from './RepoItem';

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
                <RepoFollower repository ={repositoryName}/>
                <RepoItem repository ={repositoryName}/>
            </ul>
        </section>
    );
}