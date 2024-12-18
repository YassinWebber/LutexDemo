export const sidebarMenu = [
  {
    items: [
      {
        id: 1,
        name: "Server Configurations",
        icon: "Settings",
        href: "/server-config",
      },
      {
        id: 2,
        name: "Server Commands",
        icon: "Command",
        href: "/server-commands",
      },
      {
        id: 3,
        name: "Dashboard Permissions",
        icon: "ShieldCheck",
        href: "/dashboard-permissions",
      },
      {
        id: 4,
        name: "Subscriptions",
        icon: "Wallet",
        href: "/subscriptions",
      },
    ],
    id: "server-management",
  },
  {
    sectionName: "Global Features",
    items: [{ id: 5, name: "Banks", icon: "Landmark", href: "/banks" }],
    id: "global-features",
  },
];
