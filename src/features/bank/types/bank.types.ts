import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BankTypes = {
  banner: string | StaticImport;
  image: string | StaticImport;
  name: string;
  description: string;
  details: BankDetail[];
  price: PricingTypes;
};

export type IconObject = {
  up: string;
  stable: string;
  down: string;
};

export type BankDetail = {
  label: string;
  value: string;
  icon?: string | object;
};

export type PricingTypes = {
  subscription: {
    label: string;
    value: string | number;
  };
  fees: {
    label: string;
    value: string | number;
  };
};
