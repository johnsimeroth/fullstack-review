import React from 'react';

const RepoListEntry = ({ repo }) => (
  <div>
    <h2><a href={repo.html_url}>Title: {repo.name}</a></h2>
    <h4>User: {repo.username}</h4>
    <h5>Stars: {repo.stargazers_count}</h5>
  </div>
);

export default RepoListEntry;