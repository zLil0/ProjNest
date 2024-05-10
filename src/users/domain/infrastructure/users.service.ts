import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"

@Injectable()
export class UsersService {
    create(createUserDto: CreateUserDto){
        return 'adds a new user'
    }
    findAll(){
        return 'Returns all users'
    }
    findOne(id: string){
        return `Returns a #${id} user`
    }
    update(id: string, UpdateUserDto: UpdateUserDto) {
        return `Updates a #${id} user`
    }
    remove(id: string){
        return `Removes a #${id} user`
    }

}