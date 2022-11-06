use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use std::collections::HashMap;

#[derive(Deserialize, Serialize)]
struct WeatherMain {
    temp_min: f32,
    temp_max: f32,
    temp: f32,
    humidity: f32,
    feels_like: f32,
}

#[derive(Deserialize, Serialize)]
struct Weather {
    main: String,
    icon: String,
}

#[derive(Deserialize, Serialize)]
struct Wind {
    speed: f32,
    deg: f32,
}


#[derive(Deserialize, Serialize)]
struct WeatherInfo {
    weather: Vec<Weather>,
    wind: Wind,
    rain: Option<HashMap<String, f32>>,
    visibility: i32,
    main: WeatherMain,
}

#[wasm_bindgen]
pub struct Climate {
    reqwest_client: reqwest::Client,
}

#[wasm_bindgen]
impl Climate {
    #[wasm_bindgen]
    pub fn new() -> Self {
        Self {
            reqwest_client: reqwest::Client::new(),
        }
    }

    #[wasm_bindgen]
    pub async fn fetch_terrain_info(&self, lat: f32, lon: f32) -> Result<JsValue, JsValue> {
        let response = self
            .reqwest_client
            .get(format!(
            "https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid={}&units=metric",
            lat, lon, "5c3012118d61275debb919101081bf10"
        ))
            .send()
            .await
            .unwrap()
            .json::<WeatherInfo>()
            .await
            .unwrap();

        Ok(serde_wasm_bindgen::to_value(&response).unwrap())
    }
}
