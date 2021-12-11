import React, { useEffect, useState } from 'react';
import { ItemRepositories } from '../ItemRepositories';

interface Repository { 
 name: string;
}

export function ListRepositories(){

  const [repo, setRepo] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/adreider/repos')
    .then(response => response.json())
    .then(data => setRepo(data))
  }, []);

  return (
  <ul>
    {repo.map(repository => {
      return (
        <ItemRepositories key={repository.name} repository={repository} />
      )
    })}
  </ul>
  );
}