class GitHub{
    constructor(){
        this.client_id = '63750ab28272ba36b1f4';
        this.client_secret = '4ae1b19e6898f7887ff96321063112ea363d0468';
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