import { ThiruvallaTimelineEntry } from "./types";

export const thiruvallaTimeline: ThiruvallaTimelineEntry[] = [
  {
    id: "pre-1982-alleppey-jurisdiction",
    year: "Pre-1982",
    title: "Pre-1982 Administrative Affiliation with Alleppey District",
    summary:
      "Prior to November 1982, Thiruvalla Taluk was part of Alappuzha (Alleppey) district; early IUML workers and branch units in Thiruvalla operated under the organizational oversight of the Alleppey District Muslim League.",
    description: [
      "Historically, Thiruvalla was a major revenue and commercial taluk within the Alappuzha (Alleppey) district until the creation of Pathanamthitta district on 1 November 1982.",
      "During the post-independence decades following 1956, early local committees and party sympathizers in Thiruvalla town, Kuttoor, and surrounding areas were organizationally affiliated with the Alleppey District Muslim League Committee.",
      "Historiographical note on early foundation: Available sources do not establish a single verified founding date for the initial town unit in Thiruvalla. Early activity was decentralized and focused on educational access, community representation, and civic coordination.",
    ],
    type: "organization",
    organization: "IUML Alleppey District Committee (Thiruvalla Unit)",
    location: "Thiruvalla Taluk",
    sourceIds: [
      "kerala-gazette-1982-alleppey-transfer",
      "travancore-state-historical-records",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "district-transfer-reorganization-1982",
    year: "1982",
    date: "1 November 1982",
    title: "Reorganization into the Pathanamthitta District Committee Jurisdiction",
    summary:
      "With the statutory transfer of Thiruvalla Taluk to the newly created Pathanamthitta District on 1 November 1982, the Thiruvalla Mandalam committee was reconstituted under the Pathanamthitta District Committee.",
    description: [
      "On 1 November 1982, the Government of Kerala formally transferred Thiruvalla Taluk from Alappuzha District to become one of the constituent taluks of the newly established Pathanamthitta District.",
      "In accordance with this statutory redistribution, the IUML Kerala State Committee transferred the organizational jurisdiction of the Thiruvalla Mandalam from the Alleppey District Committee to the newly formed Pathanamthitta District Committee.",
      "The mandalam organizational framework was restructured to oversee party units across Thiruvalla Municipality and the surrounding rural panchayats comprising the Thiruvalla Legislative Assembly constituency.",
    ],
    type: "restructuring",
    organization: "IUML Thiruvalla Mandalam Committee",
    location: "Thiruvalla",
    sourceIds: [
      "kerala-gazette-1982-alleppey-transfer",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "udf-coalition-coordination",
    year: "1980s–Present",
    title: "Alliance Coordination in Thiruvalla Assembly Constituency",
    summary:
      "Within the United Democratic Front (UDF) alliance framework, the IUML Thiruvalla Mandalam has served as an active coalition partner, mobilizing voter participation and managing joint election committees.",
    description: [
      "Under state and district coalition arrangements, the Thiruvalla Legislative Assembly constituency (AC 111) has historically been assigned to UDF alliance partners, notably the Kerala Congress factions (such as Kerala Congress (M) and Kerala Congress (Joseph)) and the Indian National Congress.",
      "While not nominating direct assembly candidates under coalition agreements, the IUML Thiruvalla Mandalam has functioned as a vital campaign partner, deploying party workers, operating election convention booths, and coordinating minority community participation.",
      "Official ECI statistical records demonstrate consistent coalition vote mobilization in urban and peri-urban wards of Thiruvalla during general elections.",
    ],
    type: "political-participation",
    organization: "IUML Thiruvalla Mandalam Committee & UDF Alliance",
    location: "Thiruvalla Legislative Assembly Constituency",
    sourceIds: [
      "eci-thiruvalla-assembly",
      "the-hindu-thiruvalla-politics",
      "chandrika-archives-thiruvalla",
    ],
  },
  {
    id: "municipal-representation-thiruvalla",
    year: "1990s–2020s",
    title: "Direct Electoral Participation in Thiruvalla Municipality",
    summary:
      "The IUML has maintained direct electoral participation in Thiruvalla Municipality, contesting municipal wards and representing local community concerns in the civic council.",
    description: [
      "In local self-government elections conducted by the State Election Commission of Kerala, the IUML has directly fielded candidates in municipal wards of Thiruvalla town where demographic concentration warrants dedicated representation.",
      "Party candidates and elected councillors have actively engaged in municipal governance, contributing to standing committees on public works, health, poverty alleviation, and civic sanitation.",
      "Local body election returns corroborate that the IUML has provided an institutional conduit for addressing civic infrastructure and educational requirements for municipal residents.",
    ],
    type: "election",
    organization: "IUML Thiruvalla Municipal Committee",
    location: "Thiruvalla Municipality",
    sourceIds: [
      "sec-kerala-thiruvalla-municipality",
      "the-hindu-thiruvalla-politics",
    ],
  },
  {
    id: "myl-msf-thiruvalla-mandalam",
    year: "2000s–Present",
    title: "Youth and Student Wing Initiatives (MYL & MSF) in Thiruvalla",
    summary:
      "The Muslim Youth League (MYL) and Muslim Students Federation (MSF) established mandalam-level committees in Thiruvalla, conducting community service programs, student career orientation, and blood donation drives.",
    description: [
      "To engage the youth and student population in democratic civic activity, the party formally established the Thiruvalla Mandalam Muslim Youth League (MYL) and campus units of the Muslim Students Federation (MSF).",
      "These youth units have conducted regular community welfare activities, including youth leadership camps, medical check-up camps, career counseling for higher secondary students, and emergency volunteer mobilization.",
      "During seasonal flooding of the Manimala and Pamba rivers affecting lower-altitude regions of Thiruvalla and Upper Kuttanad, MYL volunteer squads engaged in localized rescue assistance and relief supply distribution in coordination with local authorities.",
    ],
    type: "affiliated-wing",
    organization: "Muslim Youth League (MYL) & MSF Thiruvalla",
    location: "Thiruvalla Mandalam",
    sourceIds: [
      "chandrika-archives-thiruvalla",
      "iuml-kerala-state-committee",
    ],
  },
  {
    id: "mandalam-conferences-leadership-visits",
    year: "2010s–Present",
    title: "Mandalam Delegates Conferences & State Leadership Visits",
    summary:
      "The Thiruvalla Mandalam Committee holds periodic delegate conferences and public meetings, hosting state-level leaders and Panakkad Thangal family representatives to deliberate on regional development.",
    description: [
      "Periodic mandalam delegate conventions and public seminars have been documented in Chandrika reports, convening branch representatives from across Thiruvalla's urban and rural panchayat areas.",
      "State leaders, including past and present state presidents and parliamentarians, have addressed delegate meetings in Thiruvalla, emphasizing communal harmony, minority rights within the constitutional framework, and educational empowerment.",
      "The mandalam committee maintains its active coordination office in Thiruvalla, serving as the immediate administrative tier connecting local units to the Pathanamthitta District Committee.",
    ],
    type: "conference",
    organization: "IUML Thiruvalla Mandalam Committee",
    location: "Thiruvalla Town",
    sourceIds: [
      "chandrika-archives-thiruvalla",
      "iuml-kerala-state-committee",
    ],
  },
];

export function getThiruvallaTimeline(): ThiruvallaTimelineEntry[] {
  return thiruvallaTimeline;
}

export function getThiruvallaTimelineById(id: string): ThiruvallaTimelineEntry | undefined {
  return thiruvallaTimeline.find((entry) => entry.id === id);
}
