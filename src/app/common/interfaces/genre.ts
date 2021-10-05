export interface Genre {
  id: number;
  name: string;
  picture_medium: string;
}

export interface GenresResponse {
  data: Genre[];
}
