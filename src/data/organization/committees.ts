import { Committee } from "./types";

export const committees: Committee[] = [
  // IUML Committees
  {
    id: "iuml-district",
    organizationId: "iuml",
    name: "District Committee",
    level: "district",
    location: "Pathanamthitta District",
    order: 1,
    description:
      "District-level leadership and administrative committee for Pathanamthitta District.",
  },
  {
    id: "iuml-mandalam",
    organizationId: "iuml",
    name: "Mandalam Committee",
    level: "mandalam",
    location: "Mandalam",
    parentId: "iuml-district",
    order: 2,
    description:
      "Constituency-level administrative and organizational committee.",
  },
  {
    id: "iuml-unit",
    organizationId: "iuml",
    name: "Unit Committee",
    level: "unit",
    location: "Unit",
    parentId: "iuml-mandalam",
    order: 3,
    description:
      "Local unit-level organizational committee.",
  },

  // Muslim Youth League (MYL) Committees
  {
    id: "myl-mandalam",
    organizationId: "myl",
    name: "Mandalam Committee",
    level: "mandalam",
    location: "Mandalam",
    order: 1,
    description:
      "Constituency-level committee for the Muslim Youth League.",
  },

  // Muslim Students Federation (MSF) Committees
  {
    id: "msf-district",
    organizationId: "msf",
    name: "District Committee",
    level: "district",
    location: "Pathanamthitta District",
    order: 1,
    description:
      "District-level committee for the Muslim Students Federation.",
  },
  {
    id: "msf-mandalam",
    organizationId: "msf",
    name: "Mandalam Committee",
    level: "mandalam",
    location: "Mandalam",
    parentId: "msf-district",
    order: 2,
    description:
      "Constituency-level committee for the Muslim Students Federation.",
  },
];
