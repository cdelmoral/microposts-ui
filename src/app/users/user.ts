export class User {
    public id: string;
    public name: string;
    public gravatarId: string;
    public micropostsCount: number;
    public followersCount: number;
    public followingCount: number;

    constructor(user: any) {
        this.name = user.name;
        this.id = user.id;
        this.micropostsCount = user.microposts_count;
        this.gravatarId = user.gravatar_id;
        this.followersCount = user.followers_count;
        this.followingCount = user.following_count;
    };

    public async isFollowing(user: User): Promise<boolean> {
        return null;
    }
}
