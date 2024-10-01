import axiosService from "./axiosService";

class ServiceApi {
  public getRestaurants = async (lat?: number, lon?: number) => {
    const query = `[out:json];
                    (
                      node["amenity"~"restaurant|cafe|bar|fast_food"](around:5000, ${lat}, ${lon});  
                      way["amenity"~"restaurant|cafe|bar|fast_food"](around:5000, ${lat}, ${lon});
                      relation["amenity"~"restaurant|cafe|bar|fast_food"](around:5000, ${lat}, ${lon});
                    );
                    out center;`
    if (!lat || !lon) {
      throw Error("")
    }
    return await axiosService.post("/", query, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  }

  public getLeisureService = async (lat?: number, lon?: number) => {
    const query = `[out:json];
    (
      node["leisure"](around:5000, ${lat}, ${lon});
      way["leisure"](around:5000, ${lat}, ${lon});
      relation["leisure"](around:5000, ${lat}, ${lon});
    );
    out center;`
    if (!lat || !lon) {
      throw Error("")
    }
    return await axiosService.post("/", query, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  }

  public getShop = async (lat?: number, lon?: number) => {
    const query = `[out:json];
        (
          node["shop"](around:5000, ${lat}, ${lon});
          way["shop"](around:5000, ${lat}, ${lon});
          relation["shop"](around:5000, ${lat}, ${lon});
        );
        out center;
        `
    if (!lat || !lon) {
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