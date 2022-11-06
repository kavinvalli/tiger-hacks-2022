use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

pub struct MetrePerSec(f32);
pub struct Speed(pub MetrePerSec);

pub struct Kelvin(f32);
pub struct Temperature(pub Kelvin);

pub struct Psi(i32);
pub struct Pressure(pub Psi);

struct Admin {
    iso_3166_1_alpha3: String,
    iso_3166_1: String,
}

struct MapboxStreetsV8 {
    class: String,
}

struct TollCollection {
    r#type: String,
}

struct Intersection {
    entry: Vec<bool>,
    bearings: Vec<i32>,
    duration: i32,
    mapbox_streets_v8: MapboxStreetsV8,
    is_urban: bool,
    admin_index: i32,
    out: i32,
    weight: i32,
    geometry_index: i32,
    location: Vec<i32>,
    r#in: Option<i32>,
    turn_weight: Option<i32>,
    turn_duration: Option<i32>,
    classes: Vec<String>,
    toll_collection: TollCollection,
}

pub struct Maneuver {
    r#type: String,
    instruction: String,
    bearing_after: i32,
    bearing_before: i32,
    location: Vec<i32>,
    modifier: String,
    exit: Option<i32>,
}

pub struct Geometry {
    coordinates: Vec<Vec<i32>>,
    r#type: String,
}

pub struct Step {
    intersections: Vec<Intersection>,
    maneuver: Maneuver,
    name: String,
    weight_typical: i32,
    duration_typical: i32,
    duration: i32,
    distance: i32,
    driving_side: String,
    weight: i32,
    mode: String,
    geometry: Geometry,
    destinations: String,
    r#ref: String,
    rotary_name: String,
}

pub struct Leg {
    // via_waypoints: Vec<dyn std::any::Any>,
    admins: Vec<Admin>,
    weight_typical: i32,
    duration_typical: i32,
    weight: i32,
    duration: i32,
    steps: Vec<Step>,
    distance: i32,
    summary: String,
}

pub struct Geometry2 {
    coordinates: Vec<Vec<i32>>,
    r#type: String,
}

pub struct Route {
    weight_typical: i32,
    duration_typical: i32,
    weight_name: String,
    weight: i32,
    duration: i32,
    distance: i32,
    legs: Vec<Leg>,
    geometry: Geometry2,
}

pub struct Waypoint {
    distance: i32,
    name: String,
    location: Vec<i32>,
}

pub struct RootObject {
    routes: Vec<Route>,
    waypoints: Vec<Waypoint>,
    code: String,
    uuid: String,
}

pub struct Error {
    code: String,
    message: String,
}

#[derive(Clone, Copy)]
#[wasm_bindgen]
pub enum WeatherCondition {
    Icy,
    VeryWet,
    Wet,
    Dry,
}

#[wasm_bindgen]
pub struct PressureAnalyzer {
    pub original_temp: f32, // in celsius
    pub current_temp: f32,
    pub duration_driving: f32, // in minutes
    pub duration_paused: f32,
    pub original_pressure: f32, // in psi
    // pub current_pressure: f32,
    pub car_weight: i32, // in kg
    pub tyre_width: i32, // in mm
    pub speed: f32,      // in kph
    pub weather_condition: WeatherCondition,
}

#[wasm_bindgen]
impl PressureAnalyzer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            original_temp: 25.0,
            current_temp: 25.0,
            duration_driving: 0.0,
            duration_paused: 0.0,
            original_pressure: 31.0,
            car_weight: 2600,
            tyre_width: 482,
            speed: 60.0,
            weather_condition: WeatherCondition::Dry,
        }
    }

    #[wasm_bindgen]
    pub fn set_current_temp(&mut self, temp: f32) {
        self.current_temp = temp;
    }

    #[wasm_bindgen]
    pub fn set_duration_driving(&mut self, duration: f32) {
        self.duration_driving = duration;
    }

    #[wasm_bindgen]
    pub fn set_duration_paused(&mut self, duration: f32) {
        self.duration_paused = duration;
    }

    #[wasm_bindgen]
    pub fn set_speed(&mut self, speed: f32) {
        self.speed = speed;
    }

    #[wasm_bindgen]
    pub fn get_optimal_pressure(&self) -> f32 {
        // gay lussaacs law
        // P2/T2 = P1/T1
        // => P2 = P1 * T2 / T1
        let p2 =
            (self.original_pressure / (self.original_temp + 273.15)) * (self.current_temp + 273.15);
        let delta_temp = self.current_temp - self.original_temp;
        let delta_time = self.duration_driving - self.duration_paused;
        let pressure_change_by_temp = delta_temp * 0.12; // 1 degrees celsius == 0.12 psi
        let pressure_change_by_time = if delta_time > 15.0 {
            1.0 + ((delta_time - 15.0) / 5.0)
        } else {
            0.0
        };
        let pressure_increase_by_weather = match self.weather_condition {
            WeatherCondition::Icy => 0.5,
            WeatherCondition::VeryWet => 0.3,
            WeatherCondition::Wet => 0.2,
            WeatherCondition::Dry => 0.0,
        };

        dbg!(&pressure_change_by_temp);
        dbg!(&p2);

        let theoretical_pressure =
            pressure_change_by_temp + pressure_change_by_time + p2 + pressure_increase_by_weather;

        if theoretical_pressure > 35.0 {
            35.0
        } else if theoretical_pressure < 30.0 {
            30.0
        } else {
            theoretical_pressure
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn calculates_accurate_pressure() {
        let mut analyzer = PressureAnalyzer::new();
        assert_eq!(analyzer.get_optimal_pressure(), 31.0);

        analyzer.set_current_temp(37.0);

        dbg!(&analyzer.get_optimal_pressure());

        analyzer.set_duration_driving(30.0);

        dbg!(&analyzer.get_optimal_pressure());

        analyzer.set_duration_paused(10.0);

        dbg!(&analyzer.get_optimal_pressure());
    }
}
