async function filterRepositories(repositories){
    const createdRepos = repositories.filter(repo => repo.fork === false)
    let reposLanguages = {};

    for(let repoIndex=0; repoIndex < createdRepos.length; repoIndex++){
        const repo = createdRepos[repoIndex]
        const repolanguagesResponse = await fetch(repo.languages_url)
        reposLanguages[repo.id] = await repolanguagesResponse.json()
    }

    return createdRepos.map(repo => {
        return {
            id: repo.id,
            name: repo.name.replaceAll('-',' ').replaceAll('_',' ').split(" ").map(word => {
                return word.charAt(0).toUpperCase()+word.slice(1)
            }).join(" "),
            description: repo.description,
            homepage: repo.homepage,
            repoUrl: repo.html_url,
            languages: Object.keys(reposLanguages[repo.id]),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
        }
    })
}

export async function fetchRepositories({username}){
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=20&page=1&type=owner&sort=updated`);
    const repositories = await response.json()
    return filterRepositories(repositories)
}


export function validateContactForm(values){
    const errors = {};
    if(!values.name || values.name.length > 60){
        errors.name = "Name is required and must be less than 60 characters!"
    }

    if (!values.email){
        errors.email = "Email address is required!";
    } if(values.email.length > 100) {
        errors.email = "Email address length must be less than 100 characters!";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){
        errors.email = "Invalid email address";
    }

    if(!values.subject || values.subject.length > 200){
        errors.subject = "Subject is required and must be less than 200 characters!"
    }

    if(!values.message || values.message.length > 800){
        errors.message = "Message is required and must be less than 800 characters!"
    }

    return errors
}