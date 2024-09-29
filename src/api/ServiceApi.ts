import axiosService from "./axiosService";

class ServiceApi {
  public getRestaurantsAround1Km = async (lat?: number, lon?: number) => {
    const query = `[out:json];
                    (
                      node["amenity"~"restaurant|cafe|bar|fast_food"](around:2000, ${lat}, ${lon});  
                      way["amenity"~"restaurant|cafe|bar|fast_food"](around:2000, ${lat}, ${lon});
                      relation["amenity"~"restaurant|cafe|bar|fast_food"](around:2000, ${lat}, ${lon});
                    );
                    out center;`
    if(!lat || !lon) {
      throw Error("")
    }
    return await axiosService.post("/", query, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  }
}

export default new ServiceApi()