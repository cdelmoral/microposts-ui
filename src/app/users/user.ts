export class User {
  public id: string;
  public name: string;
  public gravatarId: string;
  public micropostsCount: number;

  constructor(user: any) {
    this.name = user.name;
    this.id = user.id;
    this.micropostsCount = user.microposts_count;
    this.gravatarId = user.gravatar_id;
  };
}
