"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { StyleFunction, Layer } from "leaflet";
import { Feature, FeatureCollection } from "geojson";

// Dynamically import the Leaflet components with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

const MapView = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mapData, setMapData] = useState<FeatureCollection | null>(null);
  const [zoomLevel, setZoomLevel] = useState(3);

  useEffect(() => {
    setIsMounted(true);
    // Fetch the GeoJSON data
    import("../data/countries.json")
      .then((data) => {
        setMapData(data.default as FeatureCollection);
      })
      .catch((error) => {
        console.error("Failed to load map data:", error);
      });

    // Set initial zoom level based on screen width
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Common breakpoint for mobile
      setZoomLevel(isMobile ? 2 : 3);
    };

    // Set initial zoom
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addCountryColor = (countryName: string): string => {
    const highlightedCountries = [
      "South Korea",
      "Japan",
      "China",
      "United States of America",
      "Canada",
      "Mexico",
      "United Kingdom",
      "France",
      "Italy",
      "Netherlands",
      "Czech Republic",
      "Cambodia",
      "Thailand",
      "Laos",
      "Malaysia",
      "Vietnam",
      "Philippines",
    ];

    return highlightedCountries.includes(countryName) ? "#475569" : "#F9F9F9";
  };

  const countryStyle: StyleFunction = (feature?: Feature) => {
    return {
      color: "#d9d9d9",
      weight: 0.5,
      fillColor: addCountryColor(feature?.properties?.ADMIN),
      fillOpacity: 1,
    };
  };

  const mapStyle = {
    background: "#FFFFFF",
    height: "500px",
    width: "100%",
    position: "relative" as const,
    zIndex: 0,
  };

  const countryNamePopup = (country: Feature, layer: Layer) => {
    const countryName = country?.properties?.ADMIN;
    layer.bindPopup(countryName);
  };

  if (!isMounted || !mapData) {
    return (
      <div className="h-96 flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <section id="mapview" className="text-center mx-auto pt-24">
      <h3 className="font-semibold mb-4 text-lg md:text-xl">
        COUNTRIES VISITED: <span className="text-blue-500 font-bold">17</span>
      </h3>
      <div id="map" className="h-[500px] mx-auto">
        <MapContainer
          className="leaflet-container"
          center={[40.505, -0.09]}
          zoom={zoomLevel}
          minZoom={1}
          scrollWheelZoom={false}
          maxBounds={[
            [180, -180],
            [-180, 180],
          ]}
          style={mapStyle}
        >
          {mapData && (
            <GeoJSON
              data={mapData}
              style={countryStyle}
              onEachFeature={countryNamePopup}
            />
          )}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapView;
