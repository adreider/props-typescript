import React from 'react';

export interface RepositoryItemProps {
  repository: {
    name: string;
  }
}

export function ItemRepositories(props: RepositoryItemProps){
  return (
    <li>
      <strong>{props.repository.name}</strong>
    </li>
  );
}