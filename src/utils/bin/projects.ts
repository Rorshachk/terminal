import { getProjects } from '../../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();

  return projects
    .filter((repo) => !repo.fork)
    .map(
      (repo) => {
        const repo_name =  `<p>${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}:</a></p>` 
        const description = `<p>Description: ${repo.description} </p>`
        const tags = `<p>Topic and Skill set: ${repo.topics.join(', ')} </p>`
        return `<br>` + repo_name + `<br>` + description + `<br>` + tags + `<br>`;
      }
    )
    .join('\n');
};
