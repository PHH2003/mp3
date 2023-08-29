
import icons from "./icons"

const {MdOutlineLibraryMusic, RiCompassDiscoverLine, MdMultilineChart, MdOutlineFeed} = icons

export const sidebarMenu= [
    {
        path:'mymusic',
        text:'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path:'',
        text:'Khám phá',
        end: true,
        icons: <RiCompassDiscoverLine size={24}/>
    },    {
        path:'zing-chart',
        text:'#zingchart',
        icons: <MdMultilineChart size={24}/>
    },    {
        path:'follow',
        text:'Theo dõi',
        icons: <MdOutlineFeed size={24}/>
    },
]