import { Counter } from './components/counter';
import { RepoList } from './components/RepoList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepoList />
      <Counter />
    </> 
  ) 
}