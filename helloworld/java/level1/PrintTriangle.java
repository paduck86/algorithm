package level1;

public class PrintTriangle {
	public String printTriangle(int num) {
		if(num < 1) {
			return "";
		} else {
			int i = 1;
			
			StringBuffer sb = new StringBuffer();
			
			while(i<=num) {
				for(int j=0;j<i;j++) {
					sb.append("*");
				}
				sb.append("\n");
				i++;
			}
			return sb.toString();
		}
		
	}
	
	public static void main(String[] args) {
		PrintTriangle pt = new PrintTriangle();
		System.out.println(pt.printTriangle(3));
	}
}
