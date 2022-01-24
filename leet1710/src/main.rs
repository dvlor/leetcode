impl Solution {
    pub fn max_alive_year(birth: Vec<i32>, death: Vec<i32>) -> i32 {
        let mut i:i32 = 1900;
        let mut result = 0;
        let mut max = 0;
        while i < 2001 {
            let t = birth.iter().filter(|&&x| x == i);
            i = i + 1;
        }
        
        return 12;
    }
}

struct Solution{

}


fn main() {
    println!("Hello, world!");
}

