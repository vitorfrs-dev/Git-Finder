import React from "react";
import { ListItem, ListItemText} from "@material-ui/core";
import RepoCard from './RepoCard'

const Repos = props => {
    return(
        <ul>
           {props.repos.map(repo => (
                // <ListItem key={repo.id}>
                //     <ListItemText primary={repo.name} secondary={repo.description}/>
                // </ListItem>

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
        </ul>       
    )
}

export default Repos;