package level1;
/*
getMinMaxString �޼ҵ�� String�� ���� str�� �Ű������� �Է¹޽��ϴ�.
str���� �������� ���е� ���ڵ��� ����Ǿ� �ֽ��ϴ�.
str�� ��Ÿ���� ���� �� �ּҰ��� �ִ밪�� ã�� �̸� "(�ּҰ�) (�ִ밪)"������ String�� ��ȯ�ϴ� �޼ҵ带 �ϼ��ϼ���.
������� str�� "1 2 3 4"��� "1 4"�� �����ϰ�, "-1 -2 -3 -4"��� "-4 -1"�� �����ϸ� �˴ϴ�.
 */
public class GetMinMaxString {
	public String getMinMaxString(String str) {
		if(str == null || str.isEmpty()) {
			return "";
		}
		String[] arr = str.split(" ");
		int max = Integer.parseInt(arr[0]);
		int min = Integer.parseInt(arr[0]);
		int n;
		for (int i = 1; i < arr.length; i++) {
			n = Integer.parseInt(arr[i]);
			max = Math.max(max, n);
			min = Math.min(min, n);
		}
		return String.valueOf(min) + " " + String.valueOf(max);
	}
	
	public static void main(String[] args) {
		//String str = "1 2 3 4";
		String str = "-1 -2 -3 -4";
		GetMinMaxString minMax = new GetMinMaxString();
		System.out.println("�ִ밪�� �ּҰ���?" + minMax.getMinMaxString(str));
	}
}
