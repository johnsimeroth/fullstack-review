import React from 'react';

const RepoListEntry = ({ repo }) => (
  <div>
    <h2><a href={repo.link}>Title: {repo.title}</a></h2>
    <h4>User: {repo.owner}</h4>
    <h5>Stars: {repo.stars}</h5>
  </div>
);

export default RepoListEntry;