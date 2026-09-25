import { ThiruvallaHistoricalFigure } from "./types";

export const thiruvallaFigures: ThiruvallaHistoricalFigure[] = [
  {
    id: "thiruvalla-mandalam-leadership",
    name: "Thiruvalla Mandalam Leadership Panel",
    period: "Historical–Contemporary",
    role: "Mandalam Committee Office-Bearers",
    committee: "IUML Thiruvalla Mandalam Committee",
    electionInvolvement: "UDF Alliance Campaign Coordination in Assembly Elections",
    documentedContext:
      "Office-bearers of the Thiruvalla Mandalam Committee have directed constituency-level organizational work, presided over biennial delegates' conventions, and coordinated alliance campaigning with UDF partner parties across Thiruvalla Assembly Constituency.",
    sourceIds: [
      "iuml-kerala-state-committee",
      "chandrika-archives-thiruvalla",
    ],
  },
  {
    id: "thiruvalla-municipal-councillors",
    name: "IUML Municipal Councillors & Ward Representatives",
    period: "1995–Present",
    role: "Elected Municipal Councillors & Ward Committee Leaders",
    committee: "IUML Thiruvalla Municipal Committee",
    electionInvolvement: "Thiruvalla Municipality Ward Elections (Direct Contests)",
    documentedContext:
      "Elected representatives of the IUML in Thiruvalla Municipality who have represented ward constituencies in the municipal council, serving on statutory standing committees and advocating for municipal civic amenities, sanitation, and minority educational infrastructure.",
    sourceIds: [
      "sec-kerala-thiruvalla-municipality",
      "the-hindu-thiruvalla-politics",
    ],
  },
  {
    id: "thiruvalla-myl-leadership",
    name: "Muslim Youth League (MYL) Thiruvalla Leadership",
    period: "2000s–Present",
    role: "Youth Wing Mandalam Office-Bearers",
    committee: "Muslim Youth League (MYL) Thiruvalla Mandalam",
    electionInvolvement: "Youth Booth Management & Local Civic Volunteerism",
    documentedContext:
      "Youth wing office-bearers in Thiruvalla responsible for mobilizing youth cadre, organizing relief squads during monsoon river flooding in Upper Kuttanad / Manimala basins, and conducting educational guidance seminars.",
    sourceIds: [
      "chandrika-archives-thiruvalla",
      "iuml-kerala-state-committee",
    ],
  },
];

export function getThiruvallaFigures(): ThiruvallaHistoricalFigure[] {
  return thiruvallaFigures;
}

export function getThiruvallaFigureById(id: string): ThiruvallaHistoricalFigure | undefined {
  return thiruvallaFigures.find((fig) => fig.id === id);
}
