import React from 'react';
import Header from './components/Header';
import OwnerRepoInput from './components/OwnerRepoInput';
import RestRepo from './components/repo/RestRepo';
import GraphQLRepo from './components/repo/GraphQLRepo';

function App() {
  const [owner, setOwner] = React.useState('ni3t');
  const [repo, setRepo] = React.useState('graphhub');

  return (
    <div className="container pt-4">
      <div className="box">
        <div className="flex flex-row justify-between">
          <Header />
          <OwnerRepoInput
            owner={owner}
            setOwner={setOwner}
            repo={repo}
            setRepo={setRepo}
          ></OwnerRepoInput>
        </div>
      </div>
      <div class="columns">
        <RestRepo></RestRepo>
        <GraphQLRepo></GraphQLRepo>
      </div>
    </div>
  );
}

export default App;
