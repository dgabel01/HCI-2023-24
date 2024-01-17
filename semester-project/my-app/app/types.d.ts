import { Document } from '@contentful/rich-text-types';

export type BlogItem = {
    fields: {
        //image:string(url)
        //author:string
        title: string;
        slug: string;
        date: Date;
        content: Document;
        //video:string(url)
        //code:string
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}