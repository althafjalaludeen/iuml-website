import { ThiruvallaOrganizationRecord } from "./types";

export const thiruvallaOrganizations: ThiruvallaOrganizationRecord[] = [
  {
    id: "org-thiruvalla-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Thiruvalla Mandalam Committee",
    location: "Thiruvalla",
    establishedYear: "Reorganized 1982 (Predecessor units active earlier)",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "1982–Present",
    notes:
      "Constituency-level administrative body coordinating all party branch units and local activities across the Thiruvalla Legislative Assembly constituency (Thiruvalla Municipality and surrounding grama panchayats). Reorganized from Alleppey district oversight to Pathanamthitta district upon district creation.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "kerala-gazette-1982-alleppey-transfer",
    ],
  },
  {
    id: "org-thiruvalla-municipal-committee",
    organization: "Indian Union Muslim League",
    level: "municipality",
    name: "IUML Thiruvalla Municipal Committee",
    location: "Thiruvalla Town",
    parentOrganization: "IUML Thiruvalla Mandalam Committee",
    period: "Documented from 1990s–Present",
    notes:
      "Urban coordination body managing party affairs, municipal ward election campaigns, and civic governance in Thiruvalla Municipality.",
    sourceIds: [
      "sec-kerala-thiruvalla-municipality",
      "the-hindu-thiruvalla-politics",
    ],
  },
  {
    id: "org-myl-thiruvalla-mandalam",
    organization: "Muslim Youth League (MYL)",
    level: "wing",
    name: "Muslim Youth League (MYL) Thiruvalla Mandalam Committee",
    location: "Thiruvalla",
    parentOrganization: "MYL Pathanamthitta District / IUML Thiruvalla Mandalam",
    period: "Documented from 1990s–Present",
    notes:
      "Affiliated youth wing organizing civic activism, blood donation drives, educational orientation programs, and flood rescue and relief volunteering in Thiruvalla taluk.",
    sourceIds: [
      "chandrika-archives-thiruvalla",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "org-msf-thiruvalla",
    organization: "Muslim Students Federation (MSF)",
    level: "wing",
    name: "Muslim Students Federation (MSF) Thiruvalla Mandalam Committee",
    location: "Thiruvalla",
    parentOrganization: "MSF Pathanamthitta District / IUML Thiruvalla Mandalam",
    period: "Documented from 2000s–Present",
    notes:
      "Student wing representing secondary and collegiate students, monitoring scholarship schemes, and conducting student guidance initiatives in Thiruvalla.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "chandrika-archives-thiruvalla",
    ],
  },
];

export function getThiruvallaOrganizations(): ThiruvallaOrganizationRecord[] {
  return thiruvallaOrganizations;
}
