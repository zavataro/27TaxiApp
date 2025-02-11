import { ReactNode } from 'react';
interface TimelineItem {
    id: number;
    colClass: string;
    color: string;
    date: string;
    header: string;
    paragraph: string;
    verticalLine1?: string;
    verticalLine2?: string;
}

export interface HorizontalTimelineType {
    id: number;
    mainClass: string;
    child: TimelineItem[];
}

export interface DefaultPaginationListProp {
    pageClass?: string;
    pageColor: string;
}
export interface SocialMediaProp {
    className?: string;
}

export interface ProfileHeadProps {
    month: string;
    time: string;
    activeTime: string
}

export interface UniqueToastContentProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export interface CommonToastProps {
    icon: ReactNode;
    smallClass?: string;
    strongText: string;
    smallText: string;
    bodyText: string;
}

export interface ToastPlacementContentProp {
    selectedPosition: string;
}
