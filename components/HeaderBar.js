import Link from "next/link";
import { AiOutlineOrderedList } from "react-icons/ai";
import { RiRestaurant2Line } from "react-icons/ri";
import { GiThreeFriends } from "react-icons/gi";
import Logo from '../public/SocialEatLogo.svg';

function HeaderBar() {
  return (
    <div>
      <div className="flex justify-between h-14 align-middle bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md  text-white px-5">
        <div className="flex flex-row w-fit cursor-pointer ">
          <Link href="/" passHref>
            <div>
                <Logo alt="Social Eat Logo"/>
            </div>
          </Link>
        </div>
        <div className="inline-flex items-center space-x-5">
          <Link href="/My_Restaurants" passHref>
            <div className="flex items-center w-fit justify-between cursor-pointer hover:text-blue-900 hover:drop-shadow-md">
              <AiOutlineOrderedList />
              <div className="hidden md:inline-flex px-2 ">My List</div>
            </div>
          </Link>
          <Link href="/Search_Restaurants" passHref>
            <div className="flex items-center w-fit justify-between cursor-pointer hover:text-blue-900 hover:drop-shadow-md">
              <RiRestaurant2Line />
              <div className="hidden md:inline-flex px-2">
                Search Restaurants
              </div>
            </div>
          </Link>
          <Link href="/Friends_Restaurants" passHref>
            <div className="flex items-center w-fit justify-between cursor-pointer hover:text-blue-900 hover:drop-shadow-md">
              <GiThreeFriends />
              <div className="hidden md:inline-flex px-2">
                Friends Restaurants
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
