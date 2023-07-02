interface RouterProps {
  path: string;
  name: string;
}

export const router: RouterProps[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/participants",
    name: "Participants",
  },
  {
    path: "/about",
    name: "About",
  },
];
