class UserModel {
  constructor() {
    this.users = []
  }

  create(user) {
  }

  findOne(email) {
  }

  findById(id) {
  }

  checkPassword(id, password) {
  } // hint: make use of bcrypt to match password i.e: bcrypt.compare

  hashPassword(password) {
  } // hint: make use of bcrypt to hash password i.e: bcrypt.hash
}

export const Users = new UserModel()
