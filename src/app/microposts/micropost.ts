export class Micropost {
  public userName: string;
  public userId: string;
  public id: string;
  public content: string;
  public createdAt: Date;

  constructor(micropost: any) {
    this.userName = micropost.user_name;
    this.userId = micropost.user_id;
    this.id = micropost.id;
    this.content = micropost.content;
    this.createdAt = micropost.created_at;
  };
}
