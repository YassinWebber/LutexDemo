import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";

export default function ServerDetailsCard({
  serverDetails,
}: {
  serverDetails: {
    name: string;
    membersCount: number | string;
  };
}) {
  return (
    <div className="border- flex h-fit w-full items-center rounded-lg border border-primary-border bg-primary p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={`/`} alt="New Lutex icon" width={24} height={24} />
          <div className="flex flex-col">
            <h4 className="font-semibold text-text">{serverDetails.name}</h4>
            <p className="text-sm text-text-muted">
              {serverDetails.membersCount} Members
            </p>
          </div>
        </div>
        <ChevronsUpDown className="size-5 text-text-muted" />
      </div>
    </div>
  );
}
