window.planetData = {
	time: {
		javascriptiaDayHours: 48
	},

	gravity: {
		baseEarthG: 9.81,
		minStablePercent: 60,
		anomalyCorrectionFactor: 1.35,
		zones: [
			{ id: "ZONE_NORTH_POLE",  name: "Polo Norte",        gravityPercent: 52, stable: false },
			{ id: "ZONE_SOUTH_POLE",  name: "Polo Sur",          gravityPercent: 58, stable: false },
			{ id: "ZONE_NORTH",       name: "Hemisferio Norte",  gravityPercent: 65, stable: true  },
			{ id: "ZONE_SOUTH",       name: "Hemisferio Sur",    gravityPercent: 63, stable: true  },
			{ id: "ZONE_EAST",        name: "Falla Oriental",    gravityPercent: 72, stable: true  },
			{ id: "ZONE_WEST",        name: "Litoral Oeste",     gravityPercent: 55, stable: false },
			{ id: "ZONE_NORTH_EAST",  name: "Meseta Nororiental", gravityPercent: 48, stable: false },
			{ id: "ZONE_NORTH_WEST",  name: "Cordillera Norocc.", gravityPercent: 59, stable: false },
			{ id: "ZONE_SOUTH_EAST",  name: "Archipiélago SE",   gravityPercent: 68, stable: true  },
			{ id: "ZONE_SOUTH_WEST",  name: "Desierto Suroeste", gravityPercent: 43, stable: false }
		]
	},
	atmosphere: {
		coreLayerIds: [
			"LAYER_TROPOSPHERE",
			"LAYER_STRATOSPHERE",
			"LAYER_IONOSPHERE",
			"LAYER_MESOSPHERE"
		],
		layers: [
			{ id: "LAYER_EXOSPHERE",    name: "Exosfera",             density: 0.20, active: false },
			{ id: "LAYER_THERMOSPHERE", name: "Termosfera",           density: 0.50, active: true  },
			{ id: "LAYER_MESOSPHERE",   name: "Mesosfera",            density: 0.55, active: false },
			{ id: "LAYER_STRATOSPHERE", name: "Estratosfera",         density: 0.70, active: false },
			{ id: "LAYER_TROPOSPHERE",  name: "Troposfera",           density: 0.90, active: true  },
			{ id: "LAYER_IONOSPHERE",   name: "Ionosfera",            density: 0.65, active: false },
			{ id: "LAYER_HAZE_BAND",    name: "Cinturón de Bruma",    density: 0.40, active: false }
		]
	},
	star: {
		id: "STAR_ECMA_PRIME",
		name: "ECMA Prime",
		requiredStableZones: [
			"ZONE_NORTH_POLE",
			"ZONE_SOUTH_POLE"
		],
	},
	biosphere : {
		// Umbral mínimo para considerar que hay suficiente vida vegetal
		minVegetationThreshold: 0.45,

		// Tipos de terreno en los que esperamos reactivar vegetación
		requiredTerrainTypes: [
			"forest",
			"plains",
			"mountain"
		],

		regions: [
			{
				id: "REGION_NORTHERN_FORESTS",
				name: "Bosques del Norte",
				vegetationIndex: 0.82,
				terrainType: "forest",
				fertile: true
			},
			{
				id: "REGION_EMERALD_VALLEY",
				name: "Valle Esmeralda",
				vegetationIndex: 0.76,
				terrainType: "plains",
				fertile: true
			},
			{
				id: "REGION_WESTERN_MOUNTAINS",
				name: "Cordillera Occidental",
				vegetationIndex: 0.58,
				terrainType: "mountain",
				fertile: true
			},
			{
				id: "REGION_ASHEN_COAST",
				name: "Costa Cenicienta",
				vegetationIndex: 0.30,
				terrainType: "coast",
				fertile: true
			},
			{
				id: "REGION_DORMANT_PLATEAU",
				name: "Altiplano Latente",
				vegetationIndex: 0.49,
				terrainType: "plains",
				fertile: false
			},
			{
				id: "REGION_CRYSTAL_STEPPE",
				name: "Estepa de Cristal",
				vegetationIndex: 0.44,
				terrainType: "plains",
				fertile: true
			},
			{
				id: "REGION_SHADOW_MARSH",
				name: "Marismas Sombrías",
				vegetationIndex: 0.61,
				terrainType: "swamp",
				fertile: true
			}
		]
	},
	hydrosphere : {
		// Humedad mínima aceptable para considerar que una región está bien hidratada
		globalMinHumidity: 0.4,

		// Máximo de horas sin lluvia antes de considerar que la región está en riesgo
		maxWithoutRainHours: 72,

		regions: [
			{
			  id: "REGION_NORTH_BASIN",
			  name: "Cuenca Norte",
			  currentHumidity: 0.32,
			  hasRiver: true,
			  lastRainHoursAgo: 80
			},
			{
			  id: "REGION_CENTRAL_DELTA",
			  name: "Delta Central",
			  currentHumidity: 0.45,
			  hasRiver: true,
			  lastRainHoursAgo: 120
			},
			{
			  id: "REGION_WESTERN_VALLEY",
			  name: "Valle Occidental",
			  currentHumidity: 0.25,
			  hasRiver: true,
			  lastRainHoursAgo: 40
			},
			{
			  id: "REGION_EASTERN_MESA",
			  name: "Meseta Oriental",
			  currentHumidity: 0.55,
			  hasRiver: false,
			  lastRainHoursAgo: 96
			},
			{
			  id: "REGION_SOUTHERN_SWAMPS",
			  name: "Marismas del Sur",
			  currentHumidity: 0.68,
			  hasRiver: true,
			  lastRainHoursAgo: 12
			},
			{
			  id: "REGION_ARID_PLAINS",
			  name: "Llanuras Áridas",
			  currentHumidity: 0.38,
			  hasRiver: false,
			  lastRainHoursAgo: 150
			}
		]
	},
	oceans : {
		maxAllowedToxicity: 60,
		forbiddenColors: [
			"brown",
			"greenish",
			"black"
		],
		targetColor: "blue",
		microbes: [
			{
				id: "MICROBE_SULFUR_OMEGA",
				name: "Sulfur Omega",
				toxicityLevel: 85,
				colorRelease: "brown",
				mutable: true
			},
			{
				id: "MICROBE_FERRIC_DELTA",
				name: "Ferric Delta",
				toxicityLevel: 72,
				colorRelease: "black",
				mutable: true
			},
			{
				id: "MICROBE_CHLORIS_BETA",
				name: "Chloris Beta",
				toxicityLevel: 55,
				colorRelease: "greenish",
				mutable: true
			},
			{
				id: "MICROBE_AZURE_ALPHA",
				name: "Azure Alpha",
				toxicityLevel: 40,
				colorRelease: "blue",
				mutable: true
			},
			{
				id: "MICROBE_INERT_GAMMA",
				name: "Inert Gamma",
				toxicityLevel: 95,
				colorRelease: "black",
				mutable: false
			},
			{
				id: "MICROBE_CLAY_SIGMA",
				name: "Clay Sigma",
				toxicityLevel: 30,
				colorRelease: "brown",
				mutable: true
			}
		]
	},
	flora : {
		minOxygenForForests: 50,
		maxWaterForForests: 70,
		allowedForestBiomes: [
			"forest",
			"plains",
			"highlands"
		],
		species: [
			{
				id: "FLORA_EMERALD_PINE",
				name: "Pino Esmeralda",
				biome: "forest",
				oxygenContribution: 80,
				waterConsumption: 60,
				supportsComplexLife: true,
				invasive: false,
				forestCandidate: false
			},
			{
				id: "FLORA_AZURE_OAK",
				name: "Roble Azur",
				biome: "highlands",
				oxygenContribution: 75,
				waterConsumption: 55,
				supportsComplexLife: true,
				invasive: false,
				forestCandidate: false
			},
			{
				id: "FLORA_CRIMSON_REED",
				name: "Junco Carmesí",
				biome: "wetlands",
				oxygenContribution: 65,
				waterConsumption: 80,
				supportsComplexLife: true,
				invasive: false,
				forestCandidate: false
			},
			{
				id: "FLORA_SILVER_MOSS",
				name: "Musgo Plateado",
				biome: "plains",
				oxygenContribution: 40,
				waterConsumption: 30,
				supportsComplexLife: true,
				invasive: false,
				forestCandidate: false
			},
			{
				id: "FLORA_OBSIDIAN_IVY",
				name: "Hiedra Obsidiana",
				biome: "forest",
				oxygenContribution: 90,
				waterConsumption: 50,
				supportsComplexLife: true,
				invasive: true,
				forestCandidate: false
			},
			{
				id: "FLORA_GOLDEN_GRASS",
				name: "Hierba Dorada",
				biome: "plains",
				oxygenContribution: 55,
				waterConsumption: 65,
				supportsComplexLife: false,
				invasive: false,
				forestCandidate: false
			}
		]
	}
};
