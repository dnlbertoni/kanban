import { ListSchema } from './index';

export interface TeamSchema {
    id: string;
    name: string;
    lists: ListSchema[];
}