import {useQuery} from 'react-query';
import axios from 'axios';

export interface Tag {
    name: string;
    count: number;
}

const fetchTags = async ( page: number, pageSize: number, sortBy: string, sortOrder: string ) => {
    const response = await axios.get(`https://api.stackexchange.com/2.2/tags?order=${sortOrder}&sort=${sortBy}&site=stackoverflow&page=${page}&pagesize=${pageSize}`);
    return response.data;
}

export const useTags = (page: number, pageSize: number, sortBy: string = 'popular', sortOrder: string = 'desc') => {
    return useQuery(['tags', page, pageSize, sortBy, sortOrder], () => fetchTags(page, pageSize, sortBy, sortOrder), {
      keepPreviousData: true,
        staleTime: 5000,
    });
  };