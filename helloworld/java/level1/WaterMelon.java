package level1;

public class WaterMelon {
	public String watermelon(int n) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < n/2; i++) {
			sb.append("수박");
		}
		if(n%2 == 1) {
			sb.append("수");
		}
		return sb.toString();
	}
	
	public static void main(String[] args) {
		WaterMelon wm = new WaterMelon();
		System.out.println("n이 3인 경우: " + wm.watermelon(3));
		System.out.println("n이 4인 경우: " + wm.watermelon(4));
	}
}
