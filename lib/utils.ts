import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const utcDateFormat = (timestamp: number) => new Date(timestamp * 1000).toUTCString().replace("GMT", "UTC");

export const Storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue?: T): T => {
    const value = localStorage.getItem(key);
    console.log("get value ", value);

    return (value ? value : defaultValue) as T;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export function shortenAddress(address: string, chars = 4) {
  try {
    const parsed = address;
    const addrlength = address.length;
    return `${parsed.substring(0, chars)}...${parsed.substring(Math.abs(addrlength - chars))}`;
  } catch (error) {
    console.log(error);
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
}

export const numberPrecision = (num: number | string): number | string => {
  const numString = num.toString();
  if (numString.includes("e")) {
    return Number(numString).toFixed(8);
  } else {
    const maxLength = 12;
    const [mantissa, exponent] = numString.split(".");
    const decimalTruncate = Math.min(maxLength - Number(mantissa.length), 10);
    const value = exponent ? `${mantissa}.${exponent?.substring(0, decimalTruncate)}` : mantissa;
    return value;
  }
};
