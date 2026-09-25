export type MediaType = "Photo" | "Video" | "Document" | "Press Release";

export type MediaItem = {
  id: string;
  title: string;
  type: MediaType;
  date?: string;
  description?: string;
  url?: string;
  thumbnailUrl?: string;
  albumTitle?: string;
};

export type MediaAlbum = {
  id: string;
  title: string;
  date?: string;
  itemCount?: number;
  description?: string;
  items: MediaItem[];
};

/**
 * Photographic, audiovisual, and press archive.
 * Strictly populated with official media assets once authorized files are supplied.
 */
export const mediaAlbums: MediaAlbum[] = [];
export const mediaArchive: MediaItem[] = [];

export const mediaPlaceholders = {
  overviewNotice:
    "[Authorized photographic archives, official statements, and historical audiovisual records will be accessible here following verification.]",
  galleryNotice:
    "[High-resolution photo galleries and conference archives will be displayed here once official media is catalogued.]",
  pressNotice:
    "[Official press statements, bulletins, and formal publications will be archived in this repository.]",
};
