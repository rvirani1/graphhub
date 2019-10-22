import React from 'react';
import { getRepo } from '../services/githubRestClient';

export default ({ owner, setOwner, repo, setRepo }) => {
  const refreshOwnerRepo = () => {
    getRepo({ owner, repo });
  };
  return (
    <div className="flex flex-row justify-between items-end">
      <div className="field mr-2">
        <label className="label" htmlFor="owner">
          Owner
        </label>
        <input
          name="owner"
          value={owner}
          onChange={({ target: { value } }) => setOwner(value)}
          className="input"
        ></input>
      </div>
      <div className="field mr-2">
        <label className="label" htmlFor="repo">
          Repository
        </label>
        <input
          value={repo}
          onChange={({ target: { value } }) => setRepo(value)}
          className="input"
        ></input>
      </div>
      <button onClick={refreshOwnerRepo} className="button mb-3">
        Refresh
      </button>
    </div>
  );
};
