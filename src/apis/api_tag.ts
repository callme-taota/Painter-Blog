import type { AxiosResponse } from "axios";
import { AxiosGet, AxiosPost } from "./axios";

export const TagSuggest = async (data: any): Promise<AxiosResponse> => {
    const res = await AxiosGet({
        url:"/tag/suggest",
        data: data
    });
    return res
}

export const TagList = async (data: any): Promise<AxiosResponse> => {
    const res = await AxiosGet({
        url:"/tag/list",
        data: data
    });
    return res
}

export const CreateTag = async (data: any): Promise<AxiosResponse> => {
    const res = await AxiosPost({
        url:"/tag/create",
        data: data
    });
    return res
}

export const UpdateTagName = async (data: any): Promise<AxiosResponse> => {
    const res = await AxiosPost({
        url:"/tag/update/name",
        data: data
    });
    return res
}

export const UpdateTagDesc = async (data: any): Promise<AxiosResponse> => {
    const res = await AxiosPost({
        url:"/tag/update/desc",
        data: data
    });
    return res
}