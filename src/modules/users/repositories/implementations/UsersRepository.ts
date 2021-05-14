import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User()
    const userAlreadyExists = this.users.find(user => user.email === email)
   
    // if (userAlreadyExists) {
    //   throw new Error("Mensagem do erro")
    // }

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(user)
    return user
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id)

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    return user
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => user.email === email)

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    return user
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find(user => user.id === receivedUser.id)

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    user.admin = true
    return user
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
