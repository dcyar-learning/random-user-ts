import './style.css';
import getRandomUser, { User, printUser } from './random';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Random User with TypeScript</h1>
    <div class="card">
      <div id="data"></div>
      <button id="random" type="button">Random</button>
    </div>
  </div>
`;

const loadAndRenderUser = async () => {
    const user: User = await getRandomUser();

    printUser(user);
};

window.addEventListener('load', loadAndRenderUser);

const randomBtn: HTMLElement | null = document.getElementById('random');
randomBtn!.addEventListener('click', loadAndRenderUser);
