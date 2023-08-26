import { JSXElementConstructor, ReactElement } from 'react'

export interface PostMetaData{
    id:string;
    title:string;
    date:string;
    tags:string[];
    description:string;
}

export interface BlogpPost{
    meta:PostMetaData;
    content:ReactElement<any, string|JSXElementConstructor<any>>
}
