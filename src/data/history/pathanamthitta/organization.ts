import { PathanamthittaOrganizationRecord } from "./types";

export const pathanamthittaOrganizations: PathanamthittaOrganizationRecord[] = [
  {
    id: "org-pathanamthitta-district-committee",
    organization: "Indian Union Muslim League",
    level: "district",
    name: "IUML Pathanamthitta District Committee",
    location: "League House, Pathanamthitta Town",
    establishedYear: "1982 (Reorganized post-district formation)",
    officeBearers: [
      "Samad Meppath (President, elected Sept 2024)",
      "Adv. P.A. Hansalah Muhammed (General Secretary, elected Sept 2024)",
      "M.M. Basheer Kutty (Treasurer, elected Sept 2024)",
    ],
    parentOrganization: "IUML Kerala State Committee",
    period: "1982–Present",
    notes:
      "Formally reconstituted following the administrative formation of Pathanamthitta District on 1 November 1982. Coordinates all mandalam, municipal, and panchayat tier activities within the district.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "madhyamam-pathanamthitta-2024",
      "kerala-gazette-pathanamthitta-1982",
    ],
  },
  {
    id: "org-thiruvalla-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Thiruvalla Mandalam Committee",
    location: "Thiruvalla",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "Historical–Present",
    notes:
      "Administered under Alleppey District prior to 1 November 1982; transferred to Pathanamthitta District jurisdiction upon revenue district creation. Oversees units in Thiruvalla Municipality and adjoining grama panchayats.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "kerala-gazette-pathanamthitta-1982",
    ],
  },
  {
    id: "org-aranmula-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Aranmula Mandalam Committee",
    location: "Kozhencherry / Pathanamthitta",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "1982–Present",
    notes:
      "Covers the Aranmula Assembly segment, including the administrative center of Pathanamthitta Municipality and surrounding rural local bodies.",
    sourceIds: [
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "org-ranni-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Ranni Mandalam Committee",
    location: "Ranni",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "1982–Present",
    notes:
      "Coordinates organizational presence across the highland taluk of Ranni, engaging in rural community welfare and agrarian representations.",
    sourceIds: [
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "org-konni-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Konni Mandalam Committee",
    location: "Konni",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "1982–Present",
    notes:
      "Supervises constituent branch units across the eastern forest and plantation belt of Konni.",
    sourceIds: [
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "org-adoor-mandalam-committee",
    organization: "Indian Union Muslim League",
    level: "mandalam",
    name: "IUML Adoor Mandalam Committee",
    location: "Adoor",
    parentOrganization: "IUML Pathanamthitta District Committee",
    period: "1982–Present",
    notes:
      "Formerly administered under Quilon District Committee until October 1982; transitioned into Pathanamthitta district committee jurisdiction.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "kerala-gazette-pathanamthitta-1982",
    ],
  },
  {
    id: "org-myl-pathanamthitta-district",
    organization: "Muslim Youth League (MYL)",
    level: "wing",
    name: "Muslim Youth League (MYL) Pathanamthitta District Committee",
    location: "League House, Pathanamthitta",
    parentOrganization: "Kerala State Muslim Youth League / IUML Pathanamthitta",
    period: "Documented from 1980s–Present",
    notes:
      "Affiliated youth wing of the party, organizing youth mobilization, civic volunteerism, flood relief operations, and public demonstrations on community rights.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "chandrika-archives-pathanamthitta",
    ],
  },
  {
    id: "org-msf-pathanamthitta-district",
    organization: "Muslim Students Federation (MSF)",
    level: "wing",
    name: "Muslim Students Federation (MSF) Pathanamthitta District Committee",
    location: "Pathanamthitta",
    parentOrganization: "Kerala State Muslim Students Federation / IUML Pathanamthitta",
    period: "Documented from 1980s–Present",
    notes:
      "Affiliated student wing representing student welfare, scholarship monitoring, campus democracy, and anti-drug public awareness campaigns across arts, science, and professional colleges in the district.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "chandrika-archives-pathanamthitta",
    ],
  },
];

export function getPathanamthittaOrganizations(): PathanamthittaOrganizationRecord[] {
  return pathanamthittaOrganizations;
}
