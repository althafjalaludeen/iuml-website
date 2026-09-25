import { PathanamthittaHistoricalFigure } from "./types";

export const pathanamthittaFigures: PathanamthittaHistoricalFigure[] = [
  {
    id: "samad-meppath",
    name: "Samad Meppath",
    period: "2024–Present",
    designation: "District President",
    organization: "IUML Pathanamthitta District Committee",
    constituency: "Pathanamthitta District",
    biography:
      "A long-time party worker and organizational leader in Central Travancore, Samad Meppath was elected District President of the Indian Union Muslim League Pathanamthitta District Committee in September 2024 during the district council session held at League House, Pathanamthitta.",
    responsibilities: [
      "Presiding over the District Executive Committee and Council",
      "Coordination of mandalam-level organizational revitalizations",
      "Representing the district unit in the IUML Kerala State Council",
    ],
    sourceIds: [
      "madhyamam-pathanamthitta-2024",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "adv-pa-hansalah-muhammed",
    name: "Adv. P. A. Hansalah Muhammed",
    period: "2024–Present",
    designation: "District General Secretary",
    organization: "IUML Pathanamthitta District Committee",
    constituency: "Pathanamthitta District",
    biography:
      "Advocate by profession and senior organizational activist, Adv. P. A. Hansalah Muhammed was elected General Secretary of the Pathanamthitta District Committee in September 2024. He has been active in legal, civic, and constitutional advocacy on behalf of the party in the district.",
    responsibilities: [
      "Administrative direction of the district party secretariat",
      "Constitutional representations and coordination with alliance partners",
      "Oversight of district legal cell and local-body candidate scrutiny",
    ],
    sourceIds: [
      "madhyamam-pathanamthitta-2024",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "mm-basheer-kutty",
    name: "M. M. Basheer Kutty",
    period: "2024–Present",
    designation: "District Treasurer",
    organization: "IUML Pathanamthitta District Committee",
    constituency: "Pathanamthitta District",
    biography:
      "Veteran party functionary elected Treasurer of the Pathanamthitta District Committee in September 2024. He oversees party financial audits, property administration of League House, and funding allocations for district welfare programs.",
    responsibilities: [
      "Management of district committee accounts and institutional funds",
      "Maintenance of League House facilities and archival records",
    ],
    sourceIds: [
      "madhyamam-pathanamthitta-2024",
      "iuml-kerala-state-committee",
    ],
  },
];

export function getPathanamthittaFigures(): PathanamthittaHistoricalFigure[] {
  return pathanamthittaFigures;
}

export function getPathanamthittaFigureById(id: string): PathanamthittaHistoricalFigure | undefined {
  return pathanamthittaFigures.find((fig) => fig.id === id);
}
