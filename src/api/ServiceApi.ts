import axiosService from "./axiosService";

class ServiceApi {
  public getRestaurantsAround1Km = async () => {
    const query = `[out:json];
                    (
                      node["amenity"~"restaurant|cafe|bar|fast_food"](around:1000, 21.0285, 105.8542);  
                      way["amenity"~"restaurant|cafe|bar|fast_food"](around:1000, 21.0285, 105.8542);
                      relation["amenity"~"restaurant|cafe|bar|fast_food"](around:1000, 21.0285, 105.8542);
                    );
                    out center;`
    return await axiosService.post("/", query, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  }
}

export default new ServiceApi()