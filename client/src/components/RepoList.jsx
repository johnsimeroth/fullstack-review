import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({ repos }) => (
  <div>
    {repos.map(repo => <RepoListEntry repo={repo} key={repo._id} />)}
  </div>
)

export default RepoList;