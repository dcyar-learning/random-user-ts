import './style.css';
import getRandomUser from './random';
import { User } from './interfaces';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Random User with TypeScript</h1>
    <div class="card">
      <div id="data"></div>
      <button id="random" type="button">Random</button>
    </div>
  </div>
`;

export const printUser = (user: User): void => {
    const dataElement: HTMLElement | null = document.getElementById('data');

    dataElement!.innerHTML = `
    <img src='${user.picture.large}' alt='${user.name.first} ${user.name.last}' />
    <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
    <small>${user.email}</small>
  `;
};

const loadAndRenderUser = async (): Promise<void> => {
    const user = await getRandomUser();

    printUser(user);
};

window.addEventListener('load', loadAndRenderUser);

const randomBtn: HTMLElement | null = document.getElementById('random');
randomBtn!.addEventListener('click', loadAndRenderUser);
