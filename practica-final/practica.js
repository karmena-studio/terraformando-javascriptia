/*****************************************************
/* EXERCISE 1 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function getPlanetLocalTime() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const jsDayHours = planetData.time.javascriptiaDayHours;
  
  let decimalHours = utcHours + (utcMinutes / 60);
  let earthDayFraction = decimalHours / 24;

  let jsDecimalHours = earthDayFraction * jsDayHours;
  let jsTotalMinutes = Math.round(jsDecimalHours * 60);
  let jsHours = Math.floor(jsTotalMinutes / 60);
  let jsMinutes = jsTotalMinutes % 60;

  let strHours = 0;
  let strMinutes = 0;
  
  if (jsHours < 10){
    strHours = "0" + jsHours.toString();
  } else {
    strHours = jsHours.toString();
  }
  
  if (jsMinutes < 10){
    strMinutes = "0" + jsMinutes.toString();
  } else {
    strMinutes = jsMinutes.toString();
  }
  
  return(strHours + ":" + strMinutes + " JS");
}

/*****************************************************
/* EXERCISE 2 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function restoreGravity(){
  const earthGravity = planetData.gravity.baseEarthG;
  const minStablePercent = planetData.gravity.minStablePercent;
  const anomalyCorrectionFactor = planetData.gravity.anomalyCorrectionFactor;
  
  let fixedZones = [];
  
  for (let i = 0; i < planetData.gravity.zones.length; i++){
    let correctedGravity = 0;
    let gravityJs = 0;
    let zoneData = planetData.gravity.zones[i];
    if (zoneData.stable === false || zoneData.gravityPercent < minStablePercent){
      gravityJs = ((zoneData.gravityPercent / 100) * earthGravity) * anomalyCorrectionFactor;
      correctedGravity = Number(gravityJs.toFixed(2));
      
      let zone = {
        id: zoneData.id,
        fixedGravity: correctedGravity,
      }
      fixedZones.push(zone);
    }
  }
  return fixedZones;
}

/*****************************************************
/* EXERCISE 3 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function restoreAtmosphere() {
  const coreLayerIds = planetData.atmosphere.coreLayerIds;
  const layers = planetData.atmosphere.layers;
  
  let layersArray = [];
  
  for (let i = 0; i < coreLayerIds.length; i++){
    let criticLayer = coreLayerIds[i];
    for (let p = 0; p < layers.length; p++){
      if (layers[p].id === criticLayer){
      layersArray.push(layers[p].id);
      break;
      }
    }
  }
  return layersArray;
}

/*****************************************************
/* EXERCISE 4 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function reactivateStarOrbit() {
  const starRequiredStableZones = planetData.star.requiredStableZones;
  
  let gravities = restoreGravity();
  
	for (let i = 0; i < starRequiredStableZones.length; i++){
    let found = false;
    for (let p = 0; p < gravities.length; p++){
      if (starRequiredStableZones[i] === gravities[p].id){
        found = true;
        break;
      }
    }
    if (found === false){
      return false;
    }
  }
  return true;
}

/*****************************************************
/* EXERCISE 5 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function enableVegetation() {
	const regions = planetData.biosphere.regions;
  const requiredTerrainTypes = planetData.biosphere.requiredTerrainTypes;
  const minVegetation = planetData.biosphere.minVegetationThreshold;
  
  let reactivate = [];
  
  for (let i = 0; i < regions.length; i++){
    if (regions[i].fertile === true && regions[i].vegetationIndex > minVegetation){
      let terrainOk = false;
      for (let p = 0; p < requiredTerrainTypes.length; p++){
        if (requiredTerrainTypes[p] === regions[i].terrainType){
          terrainOk = true;
          break
        }
      }
      if (terrainOk == true){
        reactivate.push(regions[i].id);
      }
    }      
  }
  return reactivate;
}

/*****************************************************
/* EXERCISE 6 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function getRegionsNeedingRain() {
	const regions = planetData.hydrosphere.regions;
  const globalMinHumidity = planetData.hydrosphere.globalMinHumidity;
  const maxWithoutRainHours = planetData.hydrosphere.maxWithoutRainHours;
  
  let needRain = [];
  
  for (let i = 0; i < regions.length; i++){
    if (regions[i].hasRiver !== true){
      continue;
    } else if (regions[i].currentHumidity < globalMinHumidity || regions[i].lastRainHoursAgo >= maxWithoutRainHours){
      needRain.push(regions[i].id);
    }
  }
  return needRain;
}

/*****************************************************
/* EXERCISE 7 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function cleanseOceans() {
  const microbes = planetData.oceans.microbes;
  const maxAllowedToxicity = planetData.oceans.maxAllowedToxicity;
  const forbiddenColors = planetData.oceans.forbiddenColors;
  const targetColor = planetData.oceans.targetColor;
  
  for (let i = 0; i < microbes.length; i++){
    if (microbes[i].toxicityLevel >= maxAllowedToxicity && microbes[i].mutable === true){
      for (let p = 0; p < forbiddenColors.length; p++){
        if (microbes[i].colorRelease === forbiddenColors[p]){
          microbes[i].colorRelease = targetColor;
          break;
        }
      }
    }
  }
}

/*****************************************************
/* EXERCISE 8 - FINAL PRACTICE - SOLUTION
/*****************************************************/

function awakenForests() {
	const species = planetData.flora.species;
  const minOxygen = planetData.flora.minOxygenForForests;
  const maxWater = planetData.flora.maxWaterForForests;
  const allowedBiomes = planetData.flora.allowedForestBiomes;
  
  for (let i = 0; i < species.length; i++){
    if (species[i].oxygenContribution >= minOxygen && species[i].waterConsumption <= maxWater && species[i].supportsComplexLife === true && species[i].invasive === false){
      for (let p = 0; p < allowedBiomes.length; p++){
        if (species[i].biome === allowedBiomes[p]){
          species[i].forestCandidate = true;
        }
      }
    }
  }
}

