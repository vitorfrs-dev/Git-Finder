import React from "react";
import { Grid} from "@material-ui/core";
import RepoCard from './RepoCard'

const Repos = props => {
    return(
        <Grid container spacing={2}>
           {props.repos.map(repo => (
               
                <RepoCard
                    data={repo} 
                    key={repo.id}
                    id={repo.id}
                    name={repo.name} 
                    stars={repo.stargazers_count}
                    forks={repo.forks}
                    desc={repo.description}
                />
                
                )
            )}
        </Grid>       
    )
}

export default Repos;