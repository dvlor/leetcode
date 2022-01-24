fn main() {
    println!("Hello, world!");
}



mod tests{

    pub fn bulb_switch(n: i32) -> i32 {
        let mut result = 1;
        while result * result <= n {
            result = result + 1;
        }

        result - 1
    }

    #[test]
    fn bulb_switch_test() {
        assert_eq!(bulb_switch(3), 316)
    }
}