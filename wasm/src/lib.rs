mod pressure_analyzer;
mod weather;

pub use weather::Climate;
pub use pressure_analyzer::PressureAnalyzer;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
