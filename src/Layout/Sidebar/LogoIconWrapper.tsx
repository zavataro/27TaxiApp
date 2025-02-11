import { Link } from 'react-router-dom'
import { Image } from '../../AbstractElements'
import { dynamicImage } from '../../Utils'

export default function LogoIconWrapper() {
    return (
        <div className="logo-icon-wrapper">
            <Link to={`${import.meta.env.PUBLIC_URL}/dashboard/default`}>
                <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" />
            </Link>
        </div>
    )
}
