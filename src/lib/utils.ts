/*  se crea con la instalacion de shadcn nos sirve para unir y sobreescribir clases  */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
