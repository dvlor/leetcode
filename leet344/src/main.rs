fn main() {
    println!("Hello, world!");
}


mod tests{

    pub fn reverse_string(s: &mut Vec<char>) {
        let mut end = s.len();

        if end == 0 {
            return;
        }
        end = end - 1;

        let mut start = 0;
        let mut c: char;

        while start < end {
            c = s[start];
            s[start] = s[end];
            s[end] = c;
            start = start + 1;
            end = end - 1;
        }
    }

    #[test]
    fn reverse_string_test() {
        let mut data: Vec<char> = Vec::new();
        data.push('h');
        data.push('e');
        data.push('l');
        data.push('l');
        data.push('o');
        reverse_string(&mut data);
        assert_eq!(data[4], 'h');
        assert_eq!(data[3], 'e');
        assert_eq!(data[2], 'l');
        assert_eq!(data[1], 'l');
        assert_eq!(data[0], 'o');
    }
}