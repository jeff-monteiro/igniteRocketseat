export function RepoItem(props){
    return (
        <li>
            <strong>{props.repositoryName ?? 'Default'}</strong>
            <p>Forms in React</p>

            <a href="https://github.com/">
                Acessar Repositórios
            </a>
        </li>
    );
}