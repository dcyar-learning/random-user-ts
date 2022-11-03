type Location = {
    street: {
        number: number;
        name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    timezone: {
        offset: string;
        description: string;
    };
};

type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    shal: string;
    sha256: string;
};

export type User = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: Location;
    email: string;
    login: Login;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
};

const getRandomUser = async () => {
    const response: Response = await fetch('https://randomuser.me/api/');
    const data: { results: User[] } = await response.json();

    return data.results[0];
};

export const printUser = (user: User): void => {
    const dataElement: HTMLElement | null = document.getElementById('data');

    dataElement!.innerHTML = `
      <img src='${user.picture.large}' alt='${user.name.first} ${user.name.last}' />
      <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
      <small>${user.email}</small>
    `;
};

export default getRandomUser;
