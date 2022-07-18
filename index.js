const checkbox = document.querySelector('#repo-links');
const repos = document.querySelectorAll('.repo');

const updateLinks = () => {
    if (checkbox.checked) 
        for(repo of repos)
            repo.style.display = 'block';
       else 
            for(repo of repos)
                repo.style.display = 'none';
}

updateLinks();

checkbox.addEventListener('change', updateLinks);
