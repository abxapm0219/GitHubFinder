class GitHub{
    constructor(){
        this.client_id = 'aae09367928f835c0939';
        this.client_secret = 'a644220f0100c85937d1d6ca1d8246a38dcb19a1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


    async getUser(user){
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=
            ${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=
            ${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return{
            profile,
            repos
        }
    } 
}
