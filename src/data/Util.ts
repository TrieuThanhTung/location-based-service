export interface OverpassType {
  version: number;
  generator: string;
  osm3s: {
    timestamp_osm_base: string;
    copyright: string;
  };
  elements: OverpassElement[];   

}

export interface OverpassElement {
  type: "node"; // Note: Currently only "node" type is shown, but adjust if needed
  id: number;
  lat: number;
  lon: number;
  tags?: { [key: string]: string }; // Optional tags with string values
}