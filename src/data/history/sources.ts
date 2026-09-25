import { HistorySource } from "./types";

export const historySources: HistorySource[] = [
  {
    id: "eci-party-registration",
    title: "Registration of Political Parties under Section 29A of the Representation of the People Act, 1951",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official notification and recognition status of the Indian Union Muslim League.",
  },
  {
    id: "eci-election-records-1952",
    title: "Statistical Report on the First General Elections to the Legislative Assembly of Madras and Lok Sabha, 1951–52",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in/statistical-reports",
    sourceType: "government",
    notes: "Electoral outcomes documenting initial legislative participation in post-independence India.",
  },
  {
    id: "parliament-lok-sabha-records",
    title: "Biographical Sketches & Debates of Members of Parliament (1st to 17th Lok Sabha)",
    publisher: "Lok Sabha Secretariat, Parliament of India",
    url: "https://loksabha.nic.in",
    sourceType: "parliamentary",
    notes: "Official parliamentary records for M. Muhammad Ismail, B. Pocker Sahib, C. H. Mohammed Koya, G. M. Banatwalla, Ebrahim Sulaiman Sait, and E. Ahamed.",
  },
  {
    id: "parliament-rajya-sabha-records",
    title: "Rajya Sabha Official Debates and Member Records",
    publisher: "Rajya Sabha Secretariat, Parliament of India",
    url: "https://rajyasabha.nic.in",
    sourceType: "parliamentary",
    notes: "Official records documenting legislative deliberations and committee proceedings.",
  },
  {
    id: "iuml-constitution-document",
    title: "Constitution and Rules of the Indian Union Muslim League (As amended and submitted to the ECI)",
    publisher: "Indian Union Muslim League Central Committee",
    sourceType: "official",
    notes: "Foundational organizational charter affirming allegiance to the Constitution of India and parliamentary democracy.",
  },
  {
    id: "iuml-official-chronicle",
    title: "Official Organizational Records & Resolution Archives",
    publisher: "Indian Union Muslim League",
    sourceType: "official",
    notes: "Internal documentation, working committee minutes, and official commemorative records.",
  },
  {
    id: "indian-express-1948",
    title: "Convention of Indian Muslims in Madras: Decision to Form Independent National Body",
    publisher: "The Indian Express (Madras Edition, March 1948)",
    sourceType: "independent",
    notes: "Contemporary press reporting on the 10 March 1948 convention at Rajaji Hall in Madras.",
  },
  {
    id: "indian-express-1979",
    title: "New Ministry Sworn In: C.H. Mohammed Koya Assumes Chief Ministership",
    publisher: "The Indian Express (October 1979)",
    sourceType: "independent",
    notes: "Independent reporting on the formation of the October 1979 coalition government in Kerala.",
  },
  {
    id: "the-hindu-archives",
    title: "The Hindu Archival Records (1948–2024)",
    publisher: "The Hindu Group",
    url: "https://thehindu.com",
    sourceType: "independent",
    notes: "Reporting on national political conferences, coalition governance, the 1994 party division, and parliamentary participation.",
  },
  {
    id: "frontline-political-analysis",
    title: "Minority Politics and Coalition Dynamics in South India",
    publisher: "Frontline Magazine (The Hindu Group)",
    url: "https://frontline.thehindu.com",
    sourceType: "independent",
    notes: "Documentary analyses covering post-1992 political developments and the formation of the Indian National League.",
  },
  {
    id: "wright-study-1966",
    title: "The Muslim League in South India Since Independence: A Study in Minority Group Political Strategies",
    publisher: "The American Political Science Review, Vol. 60, No. 3, pp. 579–599",
    citationDate: "1966",
    sourceType: "academic",
    notes: "Peer-reviewed scholarly study on the reorganization and democratic adaptation of the IUML after 1947.",
  },
  {
    id: "miller-academic-1976",
    title: "Mappila Muslims of Kerala: A Study in Islamic Trends",
    publisher: "Orient Longman",
    citationDate: "1976",
    sourceType: "academic",
    notes: "Monograph examining the social, constitutional, and electoral development of political organization in southern India.",
  },
  {
    id: "pti-delhi-centre-2025",
    title: "National Headquarters Initiative: Quaid-e-Millath Centre in New Delhi",
    publisher: "Press Trust of India / National Press Reports",
    citationDate: "2024–2025",
    sourceType: "independent",
    notes: "Independent news reportage documenting the development of the national administrative centre in New Delhi.",
  },
];

export function getHistorySourceById(id: string): HistorySource | undefined {
  return historySources.find((s) => s.id === id);
}

export function getSourcesByIds(ids: string[]): HistorySource[] {
  return ids
    .map((id) => historySources.find((s) => s.id === id))
    .filter((s): s is HistorySource => s !== undefined);
}
