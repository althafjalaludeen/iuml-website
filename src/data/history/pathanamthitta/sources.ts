import { PathanamthittaSource } from "./types";

export const pathanamthittaSources: PathanamthittaSource[] = [
  {
    id: "eci-kerala-statistical-reports",
    title: "Statistical Reports on General Elections to the Legislative Assembly of Kerala & Lok Sabha",
    publisher: "Election Commission of India",
    type: "election",
    url: "https://eci.gov.in",
    notes: "Official electoral returns documenting constituency boundaries, candidates, and alliance voting statistics for Pathanamthitta district constituencies.",
  },
  {
    id: "sec-kerala-local-body",
    title: "State Election Commission Kerala: Local Self-Government Election Results",
    publisher: "State Election Commission, Kerala",
    type: "election",
    url: "https://sec.kerala.gov.in",
    notes: "Official returns of municipal council and panchayat ward elections across Pathanamthitta district.",
  },
  {
    id: "kerala-gazette-pathanamthitta-1982",
    title: "Government of Kerala Notification: Formation of Pathanamthitta District (G.O. (P) No. 1043/82/RD)",
    publisher: "Government of Kerala Revenue Department",
    year: "1982",
    type: "legislative",
    notes: "Official notification establishing the 13th revenue district of Kerala on 1 November 1982 by amalgamating taluks from Kollam and Alappuzha districts.",
  },
  {
    id: "iuml-kerala-state-committee",
    title: "IUML Kerala State Committee Official Organizational Directory & Reports",
    publisher: "Indian Union Muslim League Kerala State Committee",
    type: "official",
    url: "https://iumlkerala.org",
    notes: "Official records detailing organizational structure, district council approvals, and affiliated wing registrations.",
  },
  {
    id: "chandrika-archives-pathanamthitta",
    title: "Chandrika Daily News Archives: Southern District Organizational Chronicles",
    publisher: "The Chandrika Daily (Kozhikode/Thiruvananthapuram editions)",
    type: "journalism",
    notes: "Archival press reportage covering district committee sessions, state leadership visits to Pathanamthitta, and party council resolutions.",
  },
  {
    id: "madhyamam-pathanamthitta-2024",
    title: "Pathanamthitta District Muslim League Council Elects New Office-Bearers",
    publisher: "Madhyamam Daily",
    year: "2024",
    type: "journalism",
    notes: "Reportage on the internal election and office-bearer declaration for the Pathanamthitta district committee held at League House.",
  },
  {
    id: "the-hindu-pathanamthitta-udf",
    title: "United Democratic Front Alliance Politics and Local Administration in Pathanamthitta",
    publisher: "The Hindu (Kerala Bureau)",
    type: "journalism",
    notes: "Contemporary reporting on coalition agreements, local-body governance, and regional minority representation.",
  },
  {
    id: "pathanamthitta-district-gazetteer",
    title: "Kerala District Gazetteers: Pathanamthitta Handbooks & Economic Surveys",
    publisher: "Department of Cultural Publications, Government of Kerala",
    type: "academic",
    notes: "Administrative survey detailing municipal demarcation, taluk history, and demographic distribution in Central Travancore.",
  },
];

export function getPathanamthittaSources(): PathanamthittaSource[] {
  return pathanamthittaSources;
}

export function getPathanamthittaSourcesByIds(ids: string[]): PathanamthittaSource[] {
  const set = new Set(ids);
  return pathanamthittaSources.filter((s) => set.has(s.id));
}
