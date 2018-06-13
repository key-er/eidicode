import React from 'react';

function TopReposList (props) {
  const repo = props.repo
  return (
    <li>
      <a href={repo.html_url}> {repo.full_name} </a>
       starred_count:{repo.stargazers_count} forks_count:{repo.forks}
    </li>
  )
}

export default TopReposList;
