export type UserData = {
  id: number,
  group: '1st' | '2nd' | 'gamers' | 'seeds' | 'voiz',
  name: string,
  mother: string,
  age: number,
  height: number,
  birthday: string,
  twitter: string,
}

interface User {
  user: UserData,
  getId(): number,
  getName(): string,
  toObject(): UserData,
}

export default class UserModel implements User {

  user: UserData

  constructor(userData: UserData) {
    this.user = {
      id: userData.id,
      group: userData.group,
      name: userData.name,
      mother: userData.mother,
      age: userData.age,
      height: userData.height,
      birthday: userData.birthday,
      twitter: userData.twitter,
    }
    return this
  }

  getId() {
    return this.user.id
  }

  getName() {
    return this.user.name
  }

  toObject() {
    return this.user
  }
}
