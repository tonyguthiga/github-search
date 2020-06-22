export class User {
    constructor(
    public login: any,
    public avatar_url: string,
    public location: string,
    public followers: number,
    public following: number,
    public public_repos: number,
    public html_url: string,
    public completeDate: Date,
    ){}
}
