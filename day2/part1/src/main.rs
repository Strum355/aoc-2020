use std::io::BufReader;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let file = File::open("day2.txt").unwrap();
    let buf = BufReader::new(file);
    let mut valid = 0;
    for line in buf.lines() {
        let line = line.unwrap();
        let mut split = line.split(" ");
        let mut range = split.next().unwrap().split("-");
        let min = range.next().unwrap().parse::<u32>().unwrap();
        let max = range.next().unwrap().parse::<u32>().unwrap();
        let rune = split.next().unwrap().trim_end_matches(":").chars().nth(0).unwrap();
        let pass = split.next().unwrap();
        let mut count = 0;
        for c in pass.chars() {
            if c == rune {
                count += 1;
            }
        }
        if min <= count && count <= max {
            valid += 1;
        }
    }
    println!("{}", valid);
}