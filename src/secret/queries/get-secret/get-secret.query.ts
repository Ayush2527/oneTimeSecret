import { Secret } from 'secret/queries/get-secret/secret';
import { db } from 'database';

export class GetSecretQuery {
  async byId(id: string): Promise<Secret> {
    const result = await db('secrets').where({id}).first();
    return new Secret({
      id: result.id,
      body: result.body,
      password:result.password,
      expiresIn: result.expiresIn,
    });
  }
}
