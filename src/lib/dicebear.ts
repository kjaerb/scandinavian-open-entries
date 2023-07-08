import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

interface AvatarOptions {
  seed: string;
}

export function getInitialsAvatar({ seed }: AvatarOptions): string {
  const avatar = createAvatar(initials, { seed });
  return avatar.toString();
}
