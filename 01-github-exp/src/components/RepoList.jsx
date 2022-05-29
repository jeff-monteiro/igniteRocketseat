import React from 'react';

const repositoryName = 'unform'

export function RepoList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="https://github.com/">
                        Acessar Repositórios
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="https://github.com/">
                        Acessar Repositórios
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="https://github.com/">
                        Acessar Repositórios
                    </a>
                </li>
            </ul>
        </section>
    );
}