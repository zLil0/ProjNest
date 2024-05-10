import {Test, TestingModule} from "@nestjs/testing";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

describe('UsersService', () => {
    let controller: UsersService

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).compile()

        controller = module.get<UsersController>(UsersController)
    })

    it('should be defined', ()=> {
        expect(controller).toBeDefined()
    })
})