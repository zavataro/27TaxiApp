import React, { useState } from 'react'
import { CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { H2 } from '../../AbstractElements'
import SvgIcon from './CommonIcons/CommonSvgIcons';
import { Href } from '../Constants';
import { CommonHeaderWithDropdownProps } from '../../Types/CommonComponent.type';

export default function DropdownWithHeader({ heading, start, end, mainDivClass, headerIconClass, dropDownList, headerClass, span, span2, spanClass, span2Class, headingClass, dropDownTitle, caret, dropDownClass, dropDownIcon, }: CommonHeaderWithDropdownProps) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <CardHeader className={headerClass ? headerClass : ''}>
            <div className={`header-top ${mainDivClass ? mainDivClass : ''}`}>
                <H2 className={headingClass ? headingClass : ''}>{heading}
                    {span && (
                        <span className={spanClass}>
                            {span} {span2 && (<span className={span2Class} dangerouslySetInnerHTML={{ __html: span2 }} />)}
                        </span>
                    )}
                </H2>
                <div className={`card-header-right-icon ${headerIconClass ? headerIconClass : ''}`}>
                    <Dropdown isOpen={open} toggle={toggle} className={dropDownClass ? dropDownClass : ''}>
                        <DropdownToggle color='transparent' caret={caret ? true : false}>
                            {dropDownIcon ? <SvgIcon iconId='more-horizontal' /> : dropDownTitle}
                        </DropdownToggle>
                        <DropdownMenu start={start ? 'true' : 'false'} end={end ? true : false}>
                            {dropDownList.map((item, index) => (
                                <DropdownItem key={index} href={Href}>{item}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </CardHeader>
    )
}
