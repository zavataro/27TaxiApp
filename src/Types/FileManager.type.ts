import { ChangeEvent } from "react";

export interface FileSearchBarProps {
    searchFile: string;
    setSearchFile: (value: string) => void;
}

export interface AddUploadMediaProps {
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFileUpload: () => void;
}

export interface FileDataType {
    id: number;
    name: string;
    size: string;
    modify: string;
    icon: string;
    folderClass: string;
    title: string;
    folderSize: string;
}

export interface FileManagerBodyProps {
    myFile: FileDataType[];
    fileList: React.ReactNode;
}

export interface FileFolderItemProp {
    item: FileDataType;
}