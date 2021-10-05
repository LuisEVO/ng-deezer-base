export interface Album {
  title: string;
  cover_medium: string;
}

export interface Artist {
  name: string;
  picture_medium: string;
}

export interface Playlist {
  title: string;
  picture_medium: string;
}

export interface Track {
  title: string;
  preview: string;
}

export interface ChartResponse {
  albums: {data: Album[], total: number};
  artists: {data: Artist[], total: number};
  playlists: {data: Playlist[], total: number};
  tracks: {data: Track[], total: number};
}
