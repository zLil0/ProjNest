export type UserProps = {
    name: String
    email: String
    password: String
    CreateAt?: Date
}

export class UserEntity{
    constructor(public readonly props: UserProps){
        this.props.CreateAt = this.props.CreateAt ?? new Date()
    }

    get name(): String {
        return this.props.name
    }

    get email(): String {
        return this.props.email
    }

    get password(): String {
        return this.props.password
    }

    get CreateAt(): Date {
        return this.props.CreateAt
    }

}