import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
            <HeaderItem title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem title="USER" Icon={UserIcon}/>
        </div>
        {/* lazy loadings */}
        <Image 
            className='object-contain'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nintendo_Game_Boy_Logo.svg/1280px-Nintendo_Game_Boy_Logo.svg.png" 
            width={200} 
            height={100}
        />
    </header>
  )
}

export default Header