const github = new GitHub;
const ui = new UI;
//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e) => {
    //get input text
    const userText = e.target.value;
    if(userText != '')
    {
        //Make http call
        github.getUser(userText)
            .then(data => 
            {
                if(data.profile.message === 'Not Found')
                {
                    ui.showAlert('User Not Found','alert alert-danger');
                }
                else
                {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }   
            })     
    }
    else
    {
        //Clear Profile
        ui.clearProfile();
    }
});