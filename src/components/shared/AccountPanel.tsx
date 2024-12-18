import Image from "next/image";
import ProfileImage from "@/public/profile-image.png";
import { Home, LogOut, Settings } from "lucide-react";

export default function AccountPanel() {
  return (
    <div className="flex w-full justify-between bg-primary px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="overflow-hidden rounded-md">
          <Image
            src={ProfileImage}
            alt="profile image"
            width={44}
            height={44}
          />
        </div>
        <h2 className="max-w-24 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-text-muted">
          ` JustYassin.
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Home className="cursor-pointer text-text-muted transition hover:text-white" />
        <Settings className="cursor-pointer text-text-muted transition hover:text-white" />
        <LogOut className="cursor-pointer text-accent-red transition hover:text-red-500" />
      </div>
    </div>
  );
}
