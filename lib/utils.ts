import { Frequency } from "@/types/enums";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateAndTime(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = Intl.DateTimeFormat(["da-DK"], {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formatter.format(date);
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}