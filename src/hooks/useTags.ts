import {useQuery} from 'react-query';
import axios from 'axios';

export interface Tag {
    name: string;
    count: number;
}

const fetchTags = async ( page=1, pageSize=25 ) => {
    const { data } = await axios.get(`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow`);
    return data;
}

export const useTags = (page: number, pageSize: number) => {
    return useQuery(['tags', page, pageSize], () => fetchTags(page, pageSize), {
        keepPreviousData: true,
        staleTime: 5000,
    });
}