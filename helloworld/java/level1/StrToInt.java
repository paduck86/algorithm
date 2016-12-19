package level1;

public class StrToInt {
	public int getStrToInt(String str) {
		/*if(str.substring(0,1) == "-") {
			return Integer.parseInt(str.substring(1)) * -1;
		} else {
			return Integer.parseInt(str);
		}*/
		return Integer.parseInt(str);
	}
	
	public static void main(String args[]) {
		StrToInt strToInt = new StrToInt();
		System.out.println(strToInt.getStrToInt("-1234"));
	}
}
