import { join } from 'path';
import { getRulesFromFile } from '@mechsoft/enforcer';
import { Role } from '@mechsoft/apigen';

export class USER extends Role {
  constructor() {
    super();
    const dir = join(process.cwd(), 'src/authorization/policy');
    this.rules = getRulesFromFile(join(dir, 'user.policy.graphql'), USER.name);
  }
}
