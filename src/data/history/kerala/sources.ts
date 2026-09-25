import { HistorySource } from "./types";

export const keralaHistorySources: HistorySource[] = [
  // 1. Official Organizational Records
  {
    id: "iuml-kerala-official-portal",
    title: "Official Organizational History & Leadership Records",
    publisher: "Muslim League Kerala State Committee",
    url: "https://iumlkerala.org",
    sourceType: "official",
    notes: "Official party historical chronicle detailing organizational leadership, state conferences, and policy programs in Kerala.",
  },
  {
    id: "iuml-official-chronicle",
    title: "Official Organizational Records & Resolution Archives",
    publisher: "Indian Union Muslim League",
    sourceType: "official",
    notes: "Internal documentation, working committee minutes, and official commemorative records.",
  },

  // 2. Election Commission of India Records
  {
    id: "eci-kerala-1957",
    title: "Statistical Report on General Election, 1957 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official returns recording the IUML contesting 19 seats and winning 8 seats in the 1st Kerala Legislative Assembly elections.",
  },
  {
    id: "eci-kerala-1960",
    title: "Statistical Report on General Election, 1960 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Mid-term state election outcomes documenting the Triple Alliance and IUML winning 11 seats in the 2nd Kerala Legislative Assembly.",
  },
  {
    id: "eci-kerala-1967",
    title: "Statistical Report on General Election, 1967 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official returns documenting the United Front (Saptakakshi Munnani) election, in which IUML contested 15 seats and won 14 seats.",
  },
  {
    id: "eci-kerala-1970",
    title: "Statistical Report on General Election, 1970 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official election returns documenting the IUML winning 12 seats and entering the Achutha Menon coalition ministry.",
  },
  {
    id: "eci-kerala-2011",
    title: "Statistical Report on General Election, 2011 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official statistical returns recording IUML winning 20 seats out of 24 contested as a constituent of the United Democratic Front (UDF).",
  },
  {
    id: "eci-kerala-2016-2021",
    title: "Statistical Reports on General Elections, 2016 and 2021 to the Legislative Assembly of Kerala",
    publisher: "Election Commission of India",
    url: "https://eci.gov.in",
    sourceType: "government",
    notes: "Official election statistics documenting IUML legislative strength in the 14th (18 seats) and 15th (15 seats) Kerala Assemblies.",
  },

  // 3. Kerala Legislature / Government Records
  {
    id: "kerala-legislative-assembly-speaker-records",
    title: "Speakers of the Kerala Legislative Assembly: Official Roll & Proceedings",
    publisher: "Kerala Legislative Assembly Secretariat",
    url: "http://www.niyamasabha.org",
    sourceType: "parliamentary",
    notes: "Official legislative record documenting K. M. Seethi Sahib (Speaker, 22 February 1960 – 17 April 1961) and C. H. Mohammed Koya (Speaker, 9 June 1961 – 10 November 1961).",
  },
  {
    id: "kerala-legislative-assembly-cm-records",
    title: "Council of Ministers and Chief Ministers: Official Record of the C. H. Mohammed Koya Ministry",
    publisher: "Kerala Legislative Assembly Secretariat",
    url: "http://www.niyamasabha.org",
    sourceType: "parliamentary",
    notes: "Official parliamentary proceedings documenting the swearing-in of C. H. Mohammed Koya as Chief Minister on 12 October 1979 and tenure through 1 December 1979.",
  },
  {
    id: "kerala-gazetteer-malappuram",
    title: "Kerala District Gazetteers: Malappuram",
    publisher: "State Editor, Kerala Gazetteers, Government of Kerala",
    sourceType: "government",
    notes: "Official gazetteer documenting the administrative formation of Malappuram district on 16 June 1969 from taluks of Kozhikode and Palakkad districts following regional representations.",
  },

  // 4. Parliamentary Records (Centre)
  {
    id: "parliament-lok-sabha-records",
    title: "Biographical Sketches & Debates of Members of Parliament",
    publisher: "Lok Sabha Secretariat, Parliament of India",
    url: "https://loksabha.nic.in",
    sourceType: "parliamentary",
    notes: "Official parliamentary profiles and proceedings for Kerala MPs including B. Pocker Sahib, M. Muhammad Ismail, C. H. Mohammed Koya, and E. Ahamed.",
  },

  // 5. Independent Reporting & Archival Coverage
  {
    id: "the-hindu-1959-liberation",
    title: "Opposition Movement in Kerala: The Vimochana Samaram Agitation",
    publisher: "The Hindu (June–July 1959)",
    sourceType: "independent",
    notes: "Contemporary reporting on the opposition agitation against the first Communist ministry and subsequent presidential proclamation under Article 356.",
  },
  {
    id: "the-hindu-1967-cabinet",
    title: "United Front Ministry Formed in Kerala: Portfolios Allocated",
    publisher: "The Hindu (March 1967)",
    sourceType: "independent",
    notes: "Contemporary coverage of the induction of C. H. Mohammed Koya (Education) and K. Avukaderkutty Naha (Panchayats) into the Kerala cabinet.",
  },
  {
    id: "indian-express-1979",
    title: "New Ministry Sworn In: C.H. Mohammed Koya Assumes Chief Ministership",
    publisher: "The Indian Express (October 1979)",
    sourceType: "independent",
    notes: "Contemporary reportage on the formation, political alignments, and swearing-in of the C. H. Mohammed Koya coalition ministry in October 1979.",
  },
  {
    id: "the-hindu-1992-1994-reverberations",
    title: "Coalition Debates in Kerala and the Formation of the Indian National League",
    publisher: "The Hindu (December 1992 – April 1994)",
    sourceType: "independent",
    notes: "Contemporary press accounts documenting Sayyid Muhammad Ali Shihab Thangal's appeal for communal peace after December 1992, alliance discussions with Congress, and the April 1994 breakaway led by Ebrahim Sulaiman Sait.",
  },
  {
    id: "the-hindu-shihab-thangal-obituary",
    title: "A Life Dedicated to Social Harmony: Passing of Panakkad Sayyid Muhammad Ali Shihab Thangal",
    publisher: "The Hindu (2 August 2009)",
    sourceType: "independent",
    notes: "Comprehensive biographical reporting and state tributes following the passing of the long-standing Kerala State IUML President.",
  },
  {
    id: "the-hindu-hyderali-thangal-transition",
    title: "Hyderali Shihab Thangal Elected Kerala State Muslim League President",
    publisher: "The Hindu (August 2009)",
    sourceType: "independent",
    notes: "Reportage on the Kerala State Council's unanimous election of Sayed Hyderali Shihab Thangal as state president in 2009.",
  },
  {
    id: "the-hindu-sadikali-thangal-2022",
    title: "Sayyid Sadik Ali Shihab Thangal Appointed Kerala State President of IUML",
    publisher: "The Hindu (March 2022)",
    sourceType: "independent",
    notes: "Independent reporting on the organizational leadership transition following the demise of Sayed Hyderali Shihab Thangal in March 2022.",
  },

  // 6. Academic Research & University Publications
  {
    id: "miller-mappila-muslims-1976",
    title: "Mappila Muslims of Kerala: A Study in Islamic Trends",
    publisher: "Orient Longman (New Delhi, 1976)",
    sourceType: "academic",
    notes: "Authoritative academic study by Roland E. Miller detailing post-independence political development, leadership of Bafakhi Thangal and Seethi Sahib, and the administrative creation of Malappuram district.",
  },
  {
    id: "wright-muslim-league-south-india-1966",
    title: "The Muslim League in South India Since Independence: A Study in Minority Group Political Strategies",
    publisher: "The American Political Science Review, Vol. 60, No. 3, pp. 579–599 (1966)",
    sourceType: "academic",
    notes: "Academic analysis by Theodore P. Wright Jr. on the adaptation of Muslim politics in the Madras Presidency and Malabar into modern constitutional democratic participation.",
  },
  {
    id: "rammohan-kerala-politics-academic",
    title: "Coalition Politics and Development in Kerala",
    publisher: "Economic and Political Weekly / Oxford University Press",
    sourceType: "academic",
    notes: "Scholarly evaluation of Kerala's coalition dynamics, educational expansion in northern Kerala, and minority political representation.",
  },
];

export function getKeralaSources(): HistorySource[] {
  return keralaHistorySources;
}

export function getKeralaSourcesByIds(ids: string[]): HistorySource[] {
  const set = new Set(ids);
  return keralaHistorySources.filter((source) => set.has(source.id));
}
