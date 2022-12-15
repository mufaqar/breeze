import Setting from '../../../public/assets/svg/_setting.svg'
import Gellery from '../../../public/assets/svg/gallery.svg'
import SettingsIcon from '@mui/icons-material/Settings';
import WallpaperIcon from '@mui/icons-material/Wallpaper';


export const settingModuleData = {
    panelTitle: "Setting",
    panelList: [
        {
            icon: <SettingsIcon/>,
            title: "General",
            value: 1
        },
        {
            icon: <WallpaperIcon/>,
            title: "Background",
            value: 2
        },

    ]

}