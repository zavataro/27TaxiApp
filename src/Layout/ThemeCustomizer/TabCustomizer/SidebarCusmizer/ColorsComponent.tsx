import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import ConfigDB from '../../../../Config/ThemeConfig';
import { ColorsType } from '../../../../Types/Layout.type';
import { addColor } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Btn, H6, UL } from '../../../../AbstractElements';
import { ApplyButton, UnlimitedColorTitle } from '../../../../Utils/Constants';

export default function ColorsComponent() {
    const storedPrimaryColor = ConfigDB.color.primary_color;
    const storedSecondaryColor = ConfigDB.color.secondary_color;
    const [colors, setColors] = useState<ColorsType>({ colorBackground1: storedPrimaryColor, colorBackground2: storedSecondaryColor, });
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-default', colors.colorBackground1);
        document.documentElement.style.setProperty('--theme-secondary', colors.colorBackground2);
        ConfigDB.color.primary_color = colors.colorBackground1;
        ConfigDB.color.secondary_color = colors.colorBackground2;
    }, [colors]);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value,
        }));
    };
    const applyColors = () => {
        dispatch(addColor({ colorBackground1: colors.colorBackground1, colorBackground2: colors.colorBackground2 }));
        document.documentElement.style.setProperty('--theme-default', colors.colorBackground1);
        document.documentElement.style.setProperty('--theme-secondary', colors.colorBackground2);
    };
    return (
        <>
            <H6>{UnlimitedColorTitle}</H6>
            <UL className='simple-list flex-row layout-grid unlimited-color-layout'>
                <Input className='p-0' type='color' name='colorBackground1' value={colors.colorBackground1} onChange={handleColorChange} />
                <Input className='p-0' type='color' name='colorBackground2' value={colors.colorBackground2} onChange={handleColorChange} />
                <Btn color='primary' className='color-apply-btn' onClick={applyColors}>
                    {ApplyButton}
                </Btn>
            </UL>
        </>
    )
}
