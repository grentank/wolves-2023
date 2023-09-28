export type APIResponseType = {
  info: never;
  results: APICharType[];
};

export type CharType = Omit<APICharType, 'episode' | 'created' | 'status'> & {
  isAlive: boolean;
};

export type APICharType = {
  id: number;
  name: string;
  status: Status;
  type: string;
  gender: Gender;
  origin: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type Gender = 'Female' | 'Male' | 'unknown';

export type Location = {
  name: string;
  url: string;
};

export type Status = 'Alive' | 'Dead' | 'unknown';
