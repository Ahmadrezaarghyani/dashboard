import { faker } from '@faker-js/faker';

export const users = []

export function createRandomUser(){
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
  };
}

Array.from({ length: 3 }).forEach(() => {
  users.push(createRandomUser());
});

