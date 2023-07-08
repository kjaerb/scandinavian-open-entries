"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { AvatarImg } from "@/components/Avatar/Avatar";
import { SignOut } from "@/components/Auth/SignOut";
import userInfoStore from "@/stores/userInfoStore";

interface AvatarDropDownProps {}

export function AvatarDropDown({}: AvatarDropDownProps) {
  const { user: userInfo } = userInfoStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarImg />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <p>{userInfo?.name}</p>
            <span className="text-sm text-gray-600 font-normal">
              {userInfo?.contactEmail}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut className="w-full" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
