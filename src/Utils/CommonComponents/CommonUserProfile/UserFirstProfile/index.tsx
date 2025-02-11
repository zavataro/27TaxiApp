import React from 'react'
import { Card, Col } from 'reactstrap'
import ProfileDetail from './ProfileDetail'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../..'

export default function UserFirstProfile() {
    return (
        <Col sm={12}>
            <Card className='hovercard text-center' >
                <div className="cardheader" />
                <div className="user-image">
                    <div className="avatar">
                        <Image src={dynamicImage(`user/7.jpg`)} className='step1' alt='' />
                    </div>
                    <div className="icon-wrapper">
                        <i className="icofont icofont-pencil-alt-5 step2" />
                    </div>
                </div>
                <ProfileDetail />
            </Card>
        </Col>
    )
}
