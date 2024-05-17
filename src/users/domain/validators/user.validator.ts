import {IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, IsEmail, maxLength} from 'class-validator'
import { UserProps } from '../entities/user.entity'
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'

export class UserRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    email: string

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    password: string

    @IsDate()
    @IsOptional()
    CreateAt: Date

    constructor({ email, name, password, createdAt: CreateAt}: UserProps){
        Object.assign(this, {email, name, password, CreateAt})
    }

}

export class UserValidator extends ClassValidatorFields<UserRules>{
    validate(data: UserProps): boolean {
        return super.validate(new UserRules(data?? ({} as UserProps)))
    }
}

export class UserValidatorFactory{
    static create(): UserValidator {
        return new UserValidator
    }
}