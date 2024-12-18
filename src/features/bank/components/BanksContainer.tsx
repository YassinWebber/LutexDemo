"use client";

import { useSearchParams } from "next/navigation";
import { BankTypes } from "../types/bank.types";
import BankCard from "@/src/features/bank/components/BankCard";

const banks: Array<BankTypes> = [
  {
    banner: "",
    image: "",
    name: "Lunabot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/12", icon: "History" },
      { label: "Tax", value: "6.2%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Stable",
        icon: {
          up: "TrendingUp",
          stable: "ArrowRight",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "2M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
  {
    banner: "",
    image: "",
    name: "LunaBot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/19", icon: "History" },
      { label: "Tax", value: "5.8%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Doing well",
        icon: {
          up: "TrendingUp",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "1.4M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
  {
    banner: "",
    image: "",
    name: "LunaBot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/19", icon: "History" },
      { label: "Tax", value: "5.8%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Falling",
        icon: {
          up: "TrendingUp",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "1.4M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
  {
    banner: "",
    image: "",
    name: "LunaBot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/19", icon: "History" },
      { label: "Tax", value: "5.8%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Doing well",
        icon: {
          up: "TrendingUp",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "1.4M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
  {
    banner: "",
    image: "",
    name: "LunaBot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/19", icon: "History" },
      { label: "Tax", value: "5.8%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Doing well",
        icon: {
          up: "TrendingUp",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "1.4M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
  {
    banner: "",
    image: "",
    name: "LunaBot Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium mollitia aliquid facere qui dolorem quisquam veniam eius, eaque beatae et cumque, velit harum officiis tenetur reiciendis molestias porro optio dolor ea eos. Rem et rerum libero nihil suscipit debitis!",
    details: [
      { label: "Created at", value: "2024/12/19", icon: "History" },
      { label: "Tax", value: "5.8%", icon: "Wallet" },
      {
        label: "Stability",
        value: "Doing well",
        icon: {
          up: "TrendingUp",
          down: "TrendingDown",
        },
      },
      { label: "Subscribers", value: "1.4M", icon: "User" },
    ],
    price: {
      subscription: { label: "To join", value: "100$" },
      fees: { label: "/month", value: "70$" },
    },
  },
];

export default function BanksContainer() {
  const searchParams = useSearchParams();
  const search_query = searchParams.get("search_query");

  const filteredBanks =
    search_query !== null
      ? banks.filter((bank) =>
          bank.name.toLowerCase().includes(search_query.toLowerCase()),
        )
      : banks;

  return (
    <div className="bankpage_grid grid w-full flex-grow gap-4 overflow-auto p-4 sm:gap-8 sm:p-6">
      {filteredBanks.length > 0 ? (
        filteredBanks.map((bank, index) => <BankCard key={index} {...bank} />)
      ) : (
        <div className="flex h-full w-full">
          <p className="text-4xl font-bold text-text">No banks found.</p>
        </div>
      )}
    </div>
  );
}
