import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import ServiceApi from "../api/ServiceApi";
import { OverpassType } from "../data/Util";
import MarkerClusterGroup from "react-leaflet-cluster";

import { icon } from "../data/Icon";

type MapProps = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Map: React.FC<MapProps> = ({ filter }) => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  }>({
    lat: 21.0245,
    lon: 105.84117,
  });

  const [data, setData] = useState<OverpassType>();
  const fetch = async () => {
    try {
      if (filter === "") {
        setData(undefined);
        return;
      }
      if (!userLocation.lat && !userLocation.lon) {
        return;
      }
      if (userLocation.lat === 21.0245) return;
      if (filter === "cuisine") {
        const res = await ServiceApi.getRestaurants(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
      if (filter === "entertainment") {
        const res = await ServiceApi.getLeisureService(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
      if (filter === "shopping") {
        const res = await ServiceApi.getShop(
          userLocation.lat,
          userLocation.lon
        );
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [userLocation, filter]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lon]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png"
      />
      <Marker
        position={[userLocation.lat, userLocation.lon]}
        icon={icon.customIcon}
      >
        <Popup>Your location</Popup>
      </Marker>
      <MarkerClusterGroup>
        {data?.elements.map((ele, index) => {
          const lat = ele.lat!;
          const lon = ele.lon!;
          if (lat && lon) {
            switch (filter) {
              case "cuisine":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.restaurantIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
              case "entertainment":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.entertainmentIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
              case "shopping":
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={icon.shoppingIcon}
                  >
                    <Popup>{ele?.tags?.name}</Popup>
                  </Marker>
                );
            }
          }
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
