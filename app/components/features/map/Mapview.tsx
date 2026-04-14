"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { StyleFunction, Layer } from "leaflet";
import { Feature, FeatureCollection } from "geojson";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

const HIGHLIGHTED_COUNTRIES = new Set([
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
]);

interface MapViewProps {
  theme?: "light" | "dark";
  hideChrome?: boolean;
}

const THEME_COLORS = {
  light: {
    background: "#FFFFFF",
    stroke: "#d9d9d9",
    highlight: "#475569",
    base: "#F9F9F9",
  },
  dark: {
    background: "transparent",
    stroke: "rgba(255,255,255,0.08)",
    highlight: "#a78bfa",
    base: "#1f2937",
  },
} as const;

const MapView = ({ theme = "light", hideChrome = false }: MapViewProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mapData, setMapData] = useState<FeatureCollection | null>(null);
  const [zoomLevel, setZoomLevel] = useState(3);

  useEffect(() => {
    setIsMounted(true);
    import("./countries.json")
      .then((data) => {
        setMapData(data.default as FeatureCollection);
      })
      .catch((error) => {
        console.error("Failed to load map data:", error);
      });

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setZoomLevel(isMobile ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = THEME_COLORS[theme];

  const countryStyle: StyleFunction = (feature?: Feature) => {
    const countryName = feature?.properties?.ADMIN;
    return {
      color: colors.stroke,
      weight: 0.5,
      fillColor: HIGHLIGHTED_COUNTRIES.has(countryName) ? colors.highlight : colors.base,
      fillOpacity: 1,
    };
  };

  const mapStyle = {
    background: colors.background,
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
      <div className="flex h-[500px] items-center justify-center text-sm text-zinc-500">
        Loading map…
      </div>
    );
  }

  const map = (
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
  );

  if (hideChrome) {
    return map;
  }

  return (
    <section id="mapview" className="text-center mx-auto pt-24">
      <h3 className="font-semibold mb-4 text-lg md:text-xl">
        COUNTRIES VISITED: <span className="text-blue-500 font-bold">17</span>
      </h3>
      {map}
    </section>
  );
};

export default MapView;
