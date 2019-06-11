import axios from 'axios';

export const RequestFavorites = () => axios.get('http://localhost:3001/favorites');

export const AddToFavorites = data => axios.post('http://localhost:3001/favorites', data)
    

export const RemoveFavorites = id => axios.delete('http://localhost:3001/favorites/' + id)
    