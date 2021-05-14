import { v4 as uuid } from "uuid";

class User {

  id?: string;

  name: string;

  admin: boolean = false;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}

export { User };
