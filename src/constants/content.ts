export const links = ["home", "destinations", "about", "partner"];

export enum Buttons {
  login = "Login",
  register = "Register",
  explore = "Explore",
  "learn-more" = "Learn more",
  download = "Download",
}

export const footer = {
  destinations: ["Africa", "Antarctica", "Asia", "Europe", "America"],
  shop: [
    "Destination Guides",
    "Pictorial & Gifts",
    "Special Offers",
    "Delivery Times",
    "FAQs",
  ],
  interests: [
    "Adventure Travel",
    "Art And Culture",
    "Wildlife And Nature",
    "Family Holidays",
    "Food And Drink",
  ],
};

export const linesToArray = (lines: string) =>
  lines
    .trim()
    .split("\n")
    .map((line) => `"${line}"`)
    .join(",");
