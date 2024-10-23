export interface OverpassType {
  version: number;
  generator: string;
  osm3s: {
    timestamp_osm_base: string;
    copyright: string;
  };
  elements: OverpassElement[];
}

export interface LocationType {
  lat: number,
  lon: number
}

export interface OverpassElement {
  type: "node"; // Note: Currently only "node" type is shown, but adjust if needed
  id: number;
  lat: number;
  lon: number;
  tags?: { [key: string]: string }; // Optional tags with string values
}

export interface PlaceType {
  place_id: number;
  licence: string;
  osm_type: "node";
  osm_id: number;
  lat: number; // Can be a number representation of a number
  lon: number; // Can be a number representation of a number
  class: "place";
  type: "quarter";
  place_rank: number;
  importance: number;
  addresstype: "quarter";
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string]; // Array of strings representing coordinates
}