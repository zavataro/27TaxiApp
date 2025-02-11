import { Link } from 'react-router-dom'
import { Grid } from 'react-feather'
import { Image } from '../../AbstractElements'
import { dynamicImage } from '../../Utils'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../ReduxToolkit/Store'
import { setSideBarToggle } from '../../ReduxToolkit/Reducers/Layout/LayoutReducer'

export default function LogoWrapper() {
    const dispatch = useDispatch();
    const {sideBarToggle} = useSelector((state: RootState) => state.layout);
    const handleSidebarToggle = () => {
        dispatch(setSideBarToggle(!sideBarToggle));
    };
    return (
        <div className="logo-wrapper">
            <Link to={`${import.meta.env.PUBLIC_URL}/dashboard/default`}>
                <Image className="img-fluid" src={dynamicImage(`logo/logo_dark.png`)} alt="" />
            </Link>
            <div className="back-btn" onClick={handleSidebarToggle}>
                <i className="fa fa-angle-left"></i>
            </div>
            <div className="toggle-sidebar">
                <Grid className="status_toggle middle sidebar-toggle" onClick={handleSidebarToggle} />
            </div>
        </div>
    )
}
