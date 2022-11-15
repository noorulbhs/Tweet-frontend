export class Users {
    userId!: String
    firstName!: String
    lastName!: String
    emailId!: String
    password!: String
    contactNumber!:String

    constructor(firstName: string, lastName: string, emailId: string, userId: string, password: string, contactNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.userId = userId;
        this.password = password;
        this.contactNumber = contactNumber;

    }
}
