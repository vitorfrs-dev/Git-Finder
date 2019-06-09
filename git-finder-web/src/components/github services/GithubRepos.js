import axios from 'axios';

export const fetchRepos = userOrg => axios.get('https://api.github.com/users/' + userOrg +'/repos')


