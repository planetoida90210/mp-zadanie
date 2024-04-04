
import { useQuery } from 'react-query';
import axios from 'axios';

export interface Tag {
  name: string;
  count: number;
}


const fetchTags = async (page: number, pageSize: number, sortBy: string) => {
  const [sortCriteria, order] = sortBy.includes('_') ? sortBy.split('_') : [sortBy, 'desc']; // Domyślnie 'desc'
  const response = await axios.get(`https://api.stackexchange.com/2.2/tags`, {
    params: {
      page,
      pagesize: pageSize,
      sort: sortCriteria,
      order: order, 
      site: 'stackoverflow'
    }
  });
  return response.data;
};


export const useTags = (page: number, pageSize: number, sortBy: string = 'popular_desc') => {
  return useQuery(['tags', page, pageSize, sortBy], () => fetchTags(page, pageSize, sortBy), {
    keepPreviousData: true,
    staleTime: 5000,
  });
};
