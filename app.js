const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;
    if(userText !== ''){
       github.getUser(userText)
        .then(data => {
            if(data.profile.message == 'Not Found'){
                ui.showalert('User not found', 'alert alert-danger');
            }   
            else{
                ui.showprofile(data.profile); 
                ui.showrepos(data.repos);
            }
        })
    }
    else{
        ui.clearprofile();
    }
});