import { ThiruvallaElectionRecord } from "./types";

export const thiruvallaElections: ThiruvallaElectionRecord[] = [
  {
    id: "election-thiruvalla-assembly-udf",
    year: "1982–Present",
    electionType: "assembly",
    constituency: "Thiruvalla Legislative Assembly Constituency (AC 111)",
    organization: "Indian Union Muslim League (United Democratic Front)",
    result: "Coalition Partner Campaign Coordination",
    notes:
      "In the Kerala Legislative Assembly elections, the Thiruvalla constituency has historically been allocated to UDF alliance partners—primarily Kerala Congress factions (such as Kerala Congress (M) under E. J. Lukose and C. F. Thomas, or Kerala Congress (Joseph)) and the Indian National Congress. Under alliance agreements, the IUML Thiruvalla Mandalam does not field a separate candidate, but deploys party machinery, election workers, and booth committees in coordinated support of the official UDF candidate.",
    sourceIds: [
      "eci-thiruvalla-assembly",
      "the-hindu-thiruvalla-politics",
    ],
  },
  {
    id: "election-thiruvalla-municipality",
    year: "1995–2020",
    electionType: "local-body",
    constituency: "Thiruvalla Municipality (Select Wards)",
    organization: "Indian Union Muslim League (IUML)",
    result: "Direct Municipal Ward Contests & Council Representation",
    notes:
      "In periodic local body elections conducted by the State Election Commission of Kerala, the IUML directly fields candidates in municipal wards of Thiruvalla town. Elected IUML councillors have participated in municipal standing committees and contributed to civic administration in Thiruvalla.",
    sourceIds: [
      "sec-kerala-thiruvalla-municipality",
      "the-hindu-thiruvalla-politics",
    ],
  },
  {
    id: "election-thiruvalla-grama-panchayats",
    year: "Periodic",
    electionType: "local-body",
    constituency: "Grama Panchayats in Thiruvalla Taluk (Kadapra, Niranam, Peringara, Kuttoor)",
    organization: "Indian Union Muslim League (IUML)",
    result: "Local Ward Level Participation",
    notes:
      "In rural panchayats surrounding Thiruvalla town, IUML units engage in local self-government elections either as direct party candidates or within local UDF ward-sharing frameworks, addressing localized civic, agricultural, and community concerns.",
    sourceIds: [
      "sec-kerala-thiruvalla-municipality",
    ],
  },
];

export function getThiruvallaElections(): ThiruvallaElectionRecord[] {
  return thiruvallaElections;
}
