import React from 'react';
import { RepoHolder, RepoTitle, RepoDescription, RepoLink } from './style';

const Repo = ({ name, description, svn_url }) => {
    return (
        <RepoHolder align="center">
            <RepoTitle>{name}</RepoTitle>
            <RepoDescription>{description}</RepoDescription>            
            <RepoLink href={svn_url} target="_blank">Ver mas</RepoLink>            
        </RepoHolder>
    )
}

export default Repo