import React from "react";
import { ListItem, ListItemText} from "@material-ui/core";

const Repos = props => {
    return(
        <ul>
           {props.repos.map(repo => (
                <ListItem key={repo.id}>
                    <ListItemText primary={repo.name} secondary={repo.description}/>
                </ListItem>)
            )}
        </ul>       
    )
}

export default Repos;