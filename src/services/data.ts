interface Concert {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
    venue: string;
    dates: string[];
    // songs: string[];
    id: string;
}
export const concertDates: Concert[] = [
    { latitude: 33.5276, longitude: -112.2626, city: "Glendale", country: "United States", venue: "State Farm Stadium", dates: ["2023-03-17", "2023-03-18"], id: "glendale-2023" },
    { latitude: 36.1024, longitude: -115.1703, city: "Las Vegas", country: "United States", venue: "Allegiant Stadium", dates: ["2023-03-24", "2023-03-25"], id: "las-vegas-2023" },
    { latitude: 32.7483, longitude: -97.0928, city: "Arlington", country: "United States", venue: "AT&T Stadium", dates: ["2023-03-31", "2023-04-01", "2023-04-02"], id: "arlington-2023" },
    { latitude: 27.9759, longitude: -82.5033, city: "Tampa", country: "United States", venue: "Raymond James Stadium", dates: ["2023-04-13", "2023-04-14", "2023-04-15"], id: "tampa-2023" },
    { latitude: 29.6847, longitude: -95.4107, city: "Houston", country: "United States", venue: "NRG Stadium", dates: ["2023-04-21", "2023-04-22", "2023-04-23"], id: "houston-2023" },
    { latitude: 33.755, longitude: -84.4009, city: "Atlanta", country: "United States", venue: "Mercedes-Benz Stadium", dates: ["2023-04-28", "2023-04-29", "2023-04-30"], id: "atlanta-2023" },
    { latitude: 36.1661, longitude: -86.7711, city: "Nashville", country: "United States", venue: "Nissan Stadium", dates: ["2023-05-05", "2023-05-06", "2023-05-07"], id: "nashville-2023" },
    { latitude: 39.9008, longitude: -75.1675, city: "Philadelphia", country: "United States", venue: "Lincoln Financial Field", dates: ["2023-05-12", "2023-05-13", "2023-05-14"], id: "philadelphia-2023" },
    { latitude: 41.8625, longitude: -87.6167, city: "Chicago", country: "United States", venue: "Soldier Field", dates: ["2023-06-02", "2023-06-03", "2023-06-04"], id: "chicago-2023" },
    { latitude: 19.4042, longitude: -99.0920, city: "Mexico City", country: "Mexico", venue: "Foro Sol", dates: ["2023-08-24", "2023-08-25", "2023-08-26", "2023-08-27"], id: "mexico-city-2023" },
    { latitude: -34.5455, longitude: -58.4493, city: "Buenos Aires", country: "Argentina", venue: "Estadio River Plate", dates: ["2023-11-09", "2023-11-10", "2023-11-11"], id: "buenos-aires-2023" },
    { latitude: -22.9121, longitude: -43.2302, city: "Rio de Janeiro", country: "Brazil", venue: "Estadio Olímpico Nilton Santos", dates: ["2023-11-17", "2023-11-19"], id: "rio-de-janeiro-2023" },
    { latitude: -23.5475, longitude: -46.6361, city: "São Paulo", country: "Brazil", venue: "Allianz Parque", dates: ["2023-11-24", "2023-11-25", "2023-11-26"], id: "sao-paulo-2023" },
    { latitude: 35.6839, longitude: 139.7531, city: "Tokyo", country: "Japan", venue: "Tokyo Dome", dates: ["2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10"], id: "tokyo-2024" },
    { latitude: -37.8136, longitude: 144.9631, city: "Melbourne", country: "Australia", venue: "Melbourne Cricket Ground", dates: ["2024-02-16", "2024-02-17", "2024-02-18"], id: "melbourne-2024" },
    { latitude: -33.8688, longitude: 151.2093, city: "Sydney", country: "Australia", venue: "Accor Stadium", dates: ["2024-02-23", "2024-02-24", "2024-02-25"], id: "sydney-2024" },
    { latitude: 1.3521, longitude: 103.8198, city: "Singapore", country: "Singapore", venue: "National Stadium", dates: ["2024-03-02", "2024-03-03", "2024-03-04", "2024-03-07", "2024-03-08", "2024-03-09"], id: "singapore-2024" },
    { latitude: 40.4168, longitude: -3.7038, city: "Madrid", country: "Spain", venue: "Estadio Santiago Bernabéu", dates: ["2024-05-30"], id: "madrid-2024" },
    { latitude: 51.5074, longitude: -0.1278, city: "London", country: "United Kingdom", venue: "Wembley Stadium", dates: ["2024-06-21", "2024-06-22", "2024-06-23"], id: "london-2024" }
];


