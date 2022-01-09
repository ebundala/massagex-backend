import { join } from "path";
import { getRulesFromFile } from '@mechsoft/enforcer';
import { USER } from "./user";
import { Role } from "@mechsoft/apigen";

export class MODERATOR extends Role {

    constructor() {
        super();
        //inherit provider
        this.addParent(USER.name)
        const dir = join(process.cwd(), 'src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'moderator.policy.graphql'), MODERATOR.name)


    }

}

// const manager = new MODERATOR()