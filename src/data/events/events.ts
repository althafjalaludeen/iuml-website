import { Event } from "./types";

/**
 * Public Events & Proceedings Registry.
 *
 * Populated strictly upon receipt of verified, authenticated notifications of
 * upcoming conferences, working committee sessions, and official assemblies.
 *
 * Maintained as an empty repository until verified records are supplied.
 */
export const events: Event[] = [];
