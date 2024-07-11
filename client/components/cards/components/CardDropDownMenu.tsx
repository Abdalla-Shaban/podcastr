import {
  Mail,
  MessageSquare,
  PlusCircle,
  User,
  UserPlus,
  Heart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dotsIcon from "../../../public/icons/dots.svg";
import Image from "next/image";
function CardDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={dotsIcon}
          alt="dots icon"
          className="cursor-pointer select-none"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-dark-2 text-light-2 border-light-4">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-light-4" />
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Follow</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-light-4" />
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            <span>Favourite</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CardDropDownMenu;
