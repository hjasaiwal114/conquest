"use client";

import { signOutUser } from "@/app/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  const userName = user?.name || "Guest User";
  const UserImg = user?.image || "image/user.png";

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="default"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menue=">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex-row"
            aria-label="username"
          >
            Signed in as {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/member/edit">
          Edit profile
        </DropdownItem>
        <DropdownItem color="danger" onClick={async () => await signOutUser()}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
