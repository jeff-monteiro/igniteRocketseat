import React from 'react';
import { RepoFollower } from './RepoFollower';
import { RepoItem } from './RepoItem';

//const repositoryName = 'unform'

export function RepoList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepoItem />
                <RepoFollower />
                <RepoItem />
            </ul>
        </section>
    );
}