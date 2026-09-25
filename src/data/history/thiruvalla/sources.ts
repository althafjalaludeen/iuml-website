import { ThiruvallaSource } from "./types";

export const thiruvallaSources: ThiruvallaSource[] = [
  {
    id: "sec-kerala-thiruvalla-municipality",
    title: "State Election Commission Kerala: Thiruvalla Municipality Ward Elections & Delimitation Gazette",
    publisher: "State Election Commission, Kerala",
    type: "election",
    url: "https://sec.kerala.gov.in",
    notes: "Official returns and ward notifications for local body elections across the 39 wards of Thiruvalla Municipality.",
  },
  {
    id: "eci-thiruvalla-assembly",
    title: "Statistical Reports on General Elections to the Kerala Legislative Assembly: Thiruvalla Constituency",
    publisher: "Election Commission of India",
    type: "election",
    url: "https://eci.gov.in",
    notes: "Constituency-level historical reports detailing candidate nominations, alliances, and voting shares for the Thiruvalla Assembly Constituency (AC 111).",
  },
  {
    id: "kerala-gazette-1982-alleppey-transfer",
    title: "Government of Kerala Gazette: Taluk Demarcation and District Allocation of Thiruvalla",
    publisher: "Government of Kerala Press, Thiruvananthapuram",
    year: "1982",
    type: "legislative",
    notes: "Official statutory record transferring Thiruvalla Taluk from Alappuzha (Alleppey) District to the newly created Pathanamthitta District on 1 November 1982.",
  },
  {
    id: "iuml-kerala-state-committee",
    title: "IUML Kerala State Committee Official Organizational Directory & Reports",
    publisher: "Indian Union Muslim League Kerala State Committee",
    type: "official",
    url: "https://iumlkerala.org",
    notes: "Official party records detailing constituency committees, state council representations, and affiliated wing affiliations in Central Travancore.",
  },
  {
    id: "chandrika-archives-thiruvalla",
    title: "Chandrika Daily News Archives: Central Travancore Mandalam Bulletins",
    publisher: "The Chandrika Daily",
    type: "journalism",
    notes: "Historical reports of party workers' conventions, leadership visits by Panakkad Sayyid family leaders, and municipal resolutions in Thiruvalla.",
  },
  {
    id: "the-hindu-thiruvalla-politics",
    title: "Central Travancore Civic & Political Coverage: Thiruvalla Taluk",
    publisher: "The Hindu (Kerala Bureau)",
    type: "journalism",
    notes: "Contemporary reporting on local body governance, coalition discussions within the UDF, and community representations in Thiruvalla.",
  },
  {
    id: "travancore-state-historical-records",
    title: "Central Travancore Community and Pre-Independence Political Movements",
    publisher: "Kerala State Archives Department / University of Kerala",
    type: "academic",
    notes: "Historical research documenting early minority social reform and pre-independence political organizations in Thiruvalla taluk.",
  },
];

export function getThiruvallaSources(): ThiruvallaSource[] {
  return thiruvallaSources;
}

export function getThiruvallaSourcesByIds(ids: string[]): ThiruvallaSource[] {
  const set = new Set(ids);
  return thiruvallaSources.filter((s) => set.has(s.id));
}
