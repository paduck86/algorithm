package level1;

public class WaterMelon {
	public String watermelon(int n) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < n/2; i++) {
			sb.append("����");
		}
		if(n%2 == 1) {
			sb.append("��");
		}
		return sb.toString();
	}
	
	public static void main(String[] args) {
		WaterMelon wm = new WaterMelon();
		System.out.println("n�� 3�� ���: " + wm.watermelon(3));
		System.out.println("n�� 4�� ���: " + wm.watermelon(4));
	}
}
