import { PathanamthittaElectionRecord } from "./types";

export const pathanamthittaElections: PathanamthittaElectionRecord[] = [
  {
    id: "election-assembly-udf-framework",
    year: "1982–Present",
    electionType: "assembly",
    constituency: "Pathanamthitta District Assembly Constituencies (Thiruvalla, Ranni, Aranmula, Konni, Adoor)",
    organization: "Indian Union Muslim League (United Democratic Front)",
    result: "Coalition Partner Participation",
    notes:
      "Under state-wide United Democratic Front (UDF) bilateral seat-sharing conventions, the five Legislative Assembly constituencies in Pathanamthitta district have historically been contested by coalition partners (primarily the Indian National Congress and Kerala Congress factions). The IUML district machinery functions as a core campaign constituent, organizing joint campaign committees, voter mobilization, and minority community coordination in accordance with alliance agreements.",
    sourceIds: [
      "eci-kerala-statistical-reports",
      "the-hindu-pathanamthitta-udf",
    ],
  },
  {
    id: "election-parliamentary-pathanamthitta",
    year: "2009–Present",
    electionType: "parliamentary",
    constituency: "Pathanamthitta Parliamentary Constituency (Lok Sabha)",
    organization: "Indian Union Muslim League (United Democratic Front)",
    result: "Alliance Campaign Engagement",
    notes:
      "Following the 2008 parliamentary delimitation that created the Pathanamthitta Lok Sabha seat, the IUML district committee has maintained active participation in parliamentary elections as a principal constituent of the UDF alliance, deploying district and mandalam workers across the constituency's seven assembly segments.",
    sourceIds: [
      "eci-kerala-statistical-reports",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "election-local-body-pathanamthitta-municipality",
    year: "2010–2020",
    electionType: "local-body",
    constituency: "Pathanamthitta Municipality (Select Wards)",
    organization: "Indian Union Muslim League (IUML)",
    result: "Direct Ward Representation & Municipal Administration",
    notes:
      "The IUML has directly nominated candidates in municipal ward elections in Pathanamthitta town under State Election Commission notifications. In multiple municipal governing councils, elected IUML councillors have participated in municipal administration and held constitutional executive responsibilities including the office of Municipal Vice-Chairperson.",
    sourceIds: [
      "sec-kerala-local-body",
      "the-hindu-pathanamthitta-udf",
    ],
  },
  {
    id: "election-local-body-panchayats",
    year: "Periodic (Local Self-Government Elections)",
    electionType: "local-body",
    constituency: "Grama Panchayats across Pathanamthitta District",
    organization: "Indian Union Muslim League (IUML)",
    result: "Ward Level Contests",
    notes:
      "In rural local self-government institutions where demographic representation warrants direct candidacies, the IUML fields ward candidates either independently or under localized UDF seat accords, representing local agrarian and community concerns.",
    sourceIds: [
      "sec-kerala-local-body",
    ],
  },
];

export function getPathanamthittaElections(): PathanamthittaElectionRecord[] {
  return pathanamthittaElections;
}
