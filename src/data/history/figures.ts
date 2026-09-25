import { HistoricalFigure } from "./types";

export const historicalFigures: HistoricalFigure[] = [
  {
    id: "m-muhammad-ismail",
    name: "M. Muhammad Ismail",
    honorific: "Quaid-e-Millath",
    lifespan: "1896–1972",
    knownRole: "Founding President (1948–1972) & Member of Parliament",
    shortContext:
      "Presided over the 10 March 1948 founding convention in Madras and served as Member of the Constituent Assembly and Lok Sabha.",
    historicalContext:
      "A Madras-based political leader, M. Muhammad Ismail presided over the 10 March 1948 convention that established the Indian Union Muslim League. He served as a member of the Constituent Assembly of India and was later elected repeatedly to the Lok Sabha from Manjeri in Kerala. Known as 'Quaid-e-Millath' (Leader of the Nation), he emphasized peaceful, constitutional participation and minority rights within independent India.",
    sourceIds: [
      "parliament-lok-sabha-records",
      "indian-express-1948",
      "wright-study-1966",
    ],
  },
  {
    id: "km-seethi-sahib",
    name: "K. M. Seethi Sahib",
    lifespan: "1899–1961",
    knownRole: "Speaker of the Kerala Legislative Assembly & Foundational Leader",
    shortContext:
      "Legislator and constitutional lawyer who served as Speaker of the Kerala Legislative Assembly in 1960.",
    historicalContext:
      "A lawyer and legislator, K. M. Seethi Sahib participated in drafting organizational frameworks and advocating for legislative participation. In 1960, following state elections in Kerala, he was elected Speaker of the Kerala Legislative Assembly, becoming the first IUML leader to occupy that constitutional office.",
    sourceIds: [
      "the-hindu-archives",
      "miller-academic-1976",
      "iuml-official-chronicle",
    ],
  },
  {
    id: "sayyid-abdurahman-bafakhi-thangal",
    name: "Sayyid Abdurahman Bafakhi Thangal",
    lifespan: "1905–1973",
    knownRole: "National President & Kerala State President",
    shortContext:
      "National President and community leader who participated in establishing early coalition governance in Kerala.",
    historicalContext:
      "A merchant and community leader from Calicut, Bafakhi Thangal served as President of the Kerala State IUML and subsequently as National President of the party until his passing in 1973. His leadership established coalition alliances in southern India.",
    sourceIds: [
      "the-hindu-archives",
      "miller-academic-1976",
    ],
  },
  {
    id: "pmsa-pookoya-thangal",
    name: "P. M. S. A. Pookoya Thangal",
    lifespan: "1913–1975",
    knownRole: "Kerala State President (1973–1975)",
    shortContext:
      "Served as President of the Kerala State Muslim League from 1973 to 1975 and supported educational and charitable trusts.",
    historicalContext:
      "From the Panakkad Thangal family of Malappuram, P. M. S. A. Pookoya Thangal served as president of the Kerala State Muslim League from 1973 to 1975 following Bafakhi Thangal. He supported educational and charitable institutions in the region.",
    sourceIds: [
      "iuml-official-chronicle",
      "miller-academic-1976",
    ],
  },
  {
    id: "ch-mohammed-koya",
    name: "C. H. Mohammed Koya",
    lifespan: "1927–1983",
    knownRole: "Chief Minister of Kerala (1979), Education Minister & Parliamentarian",
    shortContext:
      "Served as Minister for Education across multiple cabinets and as Chief Minister of Kerala in 1979.",
    historicalContext:
      "A journalist, legislator, and administrator, C. H. Mohammed Koya served as Minister for Education in Kerala cabinets during the 1960s and 1970s, during which the University of Calicut was established. In October 1979, he was sworn in as the 8th Chief Minister of Kerala. He also served multiple terms as a Member of the Lok Sabha.",
    sourceIds: [
      "indian-express-1979",
      "parliament-lok-sabha-records",
      "the-hindu-archives",
    ],
  },
  {
    id: "sayyid-muhammad-ali-shihab-thangal",
    name: "Sayyid Muhammad Ali Shihab Thangal",
    lifespan: "1936–2009",
    knownRole: "Kerala State President (1975–2009)",
    shortContext:
      "Presided over the Kerala State Muslim League from 1975 to 2009, maintaining party participation in alliance governance.",
    historicalContext:
      "An Al-Azhar University graduate, Shihab Thangal served as President of the Kerala State Muslim League from 1975 until 2009. During the political events of December 1992, he issued public appeals for communal peace and maintained the party's participation in state alliance governance.",
    sourceIds: [
      "the-hindu-archives",
      "frontline-political-analysis",
      "iuml-official-chronicle",
    ],
  },
  {
    id: "e-ahamed",
    name: "E. Ahamed",
    lifespan: "1938–2017",
    knownRole: "Union Minister of State (Government of India) & National President",
    shortContext:
      "Multi-term Lok Sabha MP who served as Union Minister of State in the Government of India from 2004 to 2014.",
    historicalContext:
      "An advocate, state legislator, and multi-term Lok Sabha MP, E. Ahamed served as Kerala's Minister for Industries (1982–1987) and as Union Minister of State for External Affairs, Railways, and Human Resource Development in the Union Government (2004–2014). He represented India at the United Nations General Assembly and served as National President of the IUML.",
    sourceIds: [
      "parliament-lok-sabha-records",
      "the-hindu-archives",
    ],
  },
  {
    id: "sayed-hyderali-shihab-thangal",
    name: "Sayed Hyderali Shihab Thangal",
    lifespan: "1947–2022",
    knownRole: "Kerala State President (2009–2022)",
    shortContext:
      "Served as Kerala State President from 2009 to 2022 and headed the Samastha Kerala Jam'iyyathul Mu'allimeen.",
    historicalContext:
      "Serving as Kerala State President from 2009 to 2022, Hyderali Shihab Thangal also headed the Samastha Kerala Jam'iyyathul Mu'allimeen. He directed party administration through successive state assembly elections and alliance transitions until 2022.",
    sourceIds: [
      "the-hindu-archives",
      "iuml-official-chronicle",
    ],
  },
];

export function getHistoricalFigures(): HistoricalFigure[] {
  return historicalFigures;
}

export function getHistoricalFigureById(id: string): HistoricalFigure | undefined {
  return historicalFigures.find((figure) => figure.id === id);
}
