import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {getCloudflareContext} from "@opennextjs/cloudflare";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
