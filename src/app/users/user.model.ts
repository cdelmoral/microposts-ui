export class UserModel {
  public name: string;
  public id: string;
  public micropostsCount: number;
  
  constructor(user: any) {
    this.name = user.name;
    this.id = user.id;
    this.micropostsCount = user.microposts_count;
  };
}