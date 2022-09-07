import { Role } from '@mechsoft/apigen';
import { getRulesFromFile } from '@mechsoft/enforcer';
import { join } from 'path';
import { MODERATOR } from './moderator';
import { ANONYMOUS, USER } from './roles';

export class ADMIN extends Role {
  constructor() {
    super();
    this.addParent(USER.name);
    this.addParent(MODERATOR.name);
    this.addParent(ANONYMOUS.name);
    const dir = join(process.cwd(), 'src/authorization/policy');

    this.rules = getRulesFromFile(
      join(dir, 'admin.policy.graphql'),
      ADMIN.name,
    );
  }
}
