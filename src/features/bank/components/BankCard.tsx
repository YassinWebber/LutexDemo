import * as LucideIcons from "lucide-react";

// import Image from "next/image";
import {
  BankImageComponent,
  // BankImage,
  BankImageFallback,
} from "@/src/features/bank/components/BankImage";
import { FC } from "react";
import clsx from "clsx";
import { BankTypes, IconObject } from "../types/bank.types";

export default function BankCard({
  name,
  description,
  // banner,
  // image,
  details,
  price,
}: BankTypes) {
  return (
    <div className="h-fit w-full overflow-hidden rounded-lg border border-primary-border bg-primary-card">
      <div className="relative flex flex-col">
        <div className="w-full">
          {/* Banner */}
          <div className="h-[200px] w-full bg-secondary-light" />
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <div className="-mt-16 w-fit rounded-full border-t border-primary-border bg-primary-card p-2 md:ml-8">
            {/* Image */}
            <BankImageComponent className="h-[128px] w-[128px]">
              <BankImageFallback className="bg-secondary-light text-3xl">
                {name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </BankImageFallback>
            </BankImageComponent>
          </div>
          <h2 className="text-2xl font-bold text-text md:text-3xl">{name}</h2>
        </div>
        <div className="px-2 py-4 md:px-4">
          <p className="text-center text-xs md:text-start">{description}</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-y-4 p-4">
        {details.map((detail, i) => {
          const isIconObject = (
            icon: string | object | undefined,
          ): icon is IconObject =>
            typeof icon === "object" &&
            icon !== null &&
            "up" in icon &&
            "down" in icon;

          let iconName: string | undefined;

          if (detail.label === "Stability" && isIconObject(detail.icon)) {
            iconName =
              detail.value === "Doing well"
                ? detail.icon.up
                : detail.value === "Stable"
                  ? detail.icon.stable
                  : detail.icon.down;
          } else if (typeof detail.icon === "string") {
            iconName = detail.icon;
          }

          const Icon = LucideIcons[
            iconName as keyof typeof LucideIcons
          ] as FC<LucideIcons.LucideProps>;

          return (
            <div
              className="flex w-full items-center justify-start gap-2 md:w-[48%]"
              key={i}
            >
              <span className="text-xs text-text-muted">
                {detail.label}: {``}
              </span>
              <div
                className={clsx(
                  "flex items-center gap-2 font-bold",
                  detail.label === "Stability"
                    ? {
                        "text-green-500": detail.value === "Doing well",
                        "text-text": detail.value === "Stable",
                        "text-red-500": detail.value === "Falling",
                      }
                    : "text-text",
                )}
              >
                {Icon && <Icon className="text-[]" />}
                <span className="text-sm">{detail.value}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto h-[.009rem] w-full rounded-3xl bg-secondary-light" />
      <div className="flex h-fit w-full flex-col px-12 py-8">
        <div className="flex h-full w-full justify-between">
          <div className="flex h-full items-center gap-2">
            <span className="text-4xl font-bold text-text">
              {price.subscription.value}
            </span>
            <span className="text-xs text-text-muted">to join</span>
          </div>
          <div className="mx-auto w-[.009rem] rounded-3xl bg-secondary-light" />
          <div className="flex h-full items-center gap-2">
            <span className="text-4xl font-bold text-text">
              {price.fees.value}
            </span>
            <span className="text-xs text-text-muted">/per month</span>
          </div>
        </div>
        <button className="mt-10 rounded-lg bg-white py-2 font-bold text-primary transition hover:bg-white/90">
          Subsribe
        </button>
      </div>
    </div>
  );
}
