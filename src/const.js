export const CARD_VERSION = '0.0.1';

export const CHARGERDOMAIN = "easee";
export const STATUS_ENTITY_BASE = "_status";

export const CHARGERSTATUS = {
    STANDBY_1:"STANDBY",
    PAUSED_2:"PAUSED",
    CHARGING_3:"CHARGING",
    READY_4:"READY_TO_CHARGE",
    ERROR_5:"ERROR",
    CONNECTED_6:"CAR_CONNECTED",
};

export const ENTITIES = {
    cableLocked : "binary_sensor.cable_locked_car",
    cableLockedPermanently : "switch.cable_permanently_locked_charger",
    basicSchedule : "binary_sensor.basic_schedule",
    circuitCurrent : "sensor.circuit_current",
    costPerKwh : "sensor.cost_per_kwh",
    dynamicChargerCurrent : "sensor.dynamic_charger_current",
    dynamicCircuitCurrent : "sensor.dynamic_circuit_current",
    enableIdleCurrent : "switch.enable_idle_current",
    inCurrent : "sensor.in_current",
    isEnabled : "switch.is_enabled",
    maxChargerCurrent : "sensor.max_charger_current",
    maxCircuitCurrent : "sensor.max_circuit_current",
    isOnline : "binary_sensor.online",
    outputCurrent : "sensor.output_current",
    reasonForNoCurrent : "sensor.reason_for_no_current",
    sessionEnergy : "sensor.session_energy",
    energyPerHour : "sensor.energy_per_hour",
    smartCharging : "switch.smart_charging",
    totalPower : "sensor.total_power",
    updateAvailable : "binary_sensor.update_available",
    voltage : "sensor.voltage",   
};

export const SERVICES = {
    chargerMaxCurrent: 'set_charger_max_current',
    chargerDynCurrent: 'set_charger_dynamic_current',
    circuitMaxCurrent: 'set_charger_circuit_max_current',
    circuitDynCurrent: 'set_charger_circuit_dynamic_current'
}

import imageGeneric from './img/charger_generic_223x302.png';
import imageAnthracite from './img/charger_anthracite_223x302.png';
import imageRed from './img/charger_red_223x302.png';
import imageBlack from './img/charger_black_223x302.png';
import imageWhite from './img/charger_white_223x302.png';
import imageDarkblue from './img/charger_darkblue_223x302.png';

// export const CHARGER_IMAGES = {
//     "Generic": imageGeneric,
//     "Anthracite": imageAnthracite,
//     "Red": imageRed,
//     "Black": imageBlack,
//     "White": imageWhite,
//     "Darkblue": imageDarkblue
// };

export const DEFAULTIMAGE = "Generic";
export const CHARGER_IMAGES = [
    {name: "Generic", img: imageGeneric},
    {name: "Anthracite", img: imageAnthracite},
    {name: "Red", img: imageRed},
    {name: "Black", img: imageBlack},
    {name: "White", img: imageWhite},
    {name: "Darkblue", img: imageDarkblue},
];

// export const CHARGER_IMAGES = new Map([
//                 ['Generic', imageGeneric],
//                 ['Anthracite', imageAnthracite],
//                 ['Red', imageRed],
//                 ['Black', imageBlack],
//                 ['White', imageWhite],
//                 ['Darkblue', imageDarkblue],
// ]);

// export const CHARGER_IMAGES = {
//     imageGeneric,
//     imageAnthracite,
//     imageRed,
//     imageBlack,
//     imageWhite,
//     imageDarkblue,
// };

import ledOff from './img/charger_leds_bg.gif';
import ledWhite2 from './img/charger_leds_white_2.gif';
import ledWhiteAll from './img/charger_leds_white_all.gif';
import ledWhiteFlashing from './img/charger_leds_white_flashing.gif';
import ledBlue2 from './img/charger_leds_blue_2.gif';
import ledBlueAll from './img/charger_leds_blue_all.gif';
import ledBlueFlashing from './img/charger_leds_blue_flashing.gif';
import ledRedFlashing from './img/charger_leds_red_flashing.gif';


export const LEDIMAGES = {
    normal: {
         'DEFAULT': ledOff,
         'STANDBY': ledWhite2,
         'PAUSED': ledWhiteAll,
         'CHARGING': ledWhiteFlashing,
         'READY_TO_CHARGE': ledWhiteAll,
         'ERROR': ledRedFlashing,
         'CAR_CONNECTED': ledWhiteAll,        
    },
    smart: {
        'DEFAULT': ledOff,
        'STANDBY': ledBlue2,
        'PAUSED': ledBlueAll,
        'CHARGING': ledBlueFlashing,
        'READY_TO_CHARGE': ledBlueAll,
        'ERROR': ledRedFlashing,
        'CAR_CONNECTED': ledBlueAll,        
    }

};


// export const LEDIMAGES = {
//     normal: {
//          'STANDBY': "./img/charger_leds_white_2.gif",
//          'PAUSED': "./img/charger_leds_white_all.gif",
//          'CHARGING': "./img/charger_leds_white_flashing.gif",
//          'READY_TO_CHARGE': "./img/charger_leds_white_all.gif",
//          'ERROR': "./img/charger_leds_off.gif",
//          'CAR_CONNECTED': "./img/charger_leds_white_all.gif",        
//     },
//     smart: {
//         'STANDBY': "./img/charger_leds_blue_2.gif",
//         'PAUSED': "./img/charger_leds_blue_all.gif",
//         'CHARGING': "./img/charger_leds_blue_flashing.gif",
//         'READY_TO_CHARGE': "./img/charger_leds_blue_all.gif",
//         'ERROR': "./img/charger_leds_off.gif",
//         'CAR_CONNECTED': "./img/charger_leds_blue_all.gif",        
//     }

// };

export const ICONS={
    "binary_sensor.cable_locked_car" : "mdi:lock",
    "switch.cable_permanently_locked_charger" : "mdi:lock",
    "binary_sensor.basic_schedule" : "mdi:clock-check",
    "sensor.circuit_current" : "mdi:sine-wave",
    "sensor.cost_per_kwh" : "mdi:currency-usd",
    "sensor.dynamic_charger_current" : "mdi:sine-wave",
    "sensor.dynamic_circuit_current" : "mdi:sine-wave",
    "switch.enable_idle_current" : "mdi:current-dc",
    "sensor.in_current" : "mdi:sine-wave",
    "switch.is_enabled" : "mdi:power",
    "sensor.max_charger_current" : "mdi:sine-wave",
    "sensor.max_circuit_current" : "mdi:sine-wave",
    "binary_sensor.online" : "mdi:wifi",
    "sensor.output_current" : "mdi:sine-wave",
    "sensor.reason_for_no_current" : "mdi:alert-circle",
    "sensor.session_energy" : "mdi:flash",
    "sensor.energy_per_hour" : "mdi:flash",
    "switch.smart_charging" : "mdi:auto-fix",
    "sensor.total_power" : "mdi:flash",
    "binary_sensor.update_available" : "mdi:file-download",
    "sensor.voltage" : "mdi:sine-wave",   

}

export const CURRENTLIMITS = [8.0, 10.0, 16.0, 20.0, 25.0, 32.0];


export const DEFAULT_CUSTOMCARDTHEME = "theme_default";
export const CUSTOM_CARD_THEMES = [
    {name: "theme_default", desc: "Default (HA)"},
    {name: "theme_transp_blue", desc: "Transparent Blue"},
    {name: "theme_transp_black", desc: "Transparent Black"},
    {name: "theme_lightgrey_blue", desc: "LightGrey Blue"}
];


export const STATE_BUTTONS = [
    {state: "PAUSED", img: imageGeneric},
];