package level1;

public class EvenOrOdd {
	String evenOrOdd(int num) {
		return num % 2 == 0 ? "Even" : "Odd";
	}
	
	public static void main(String[] args) {
		EvenOrOdd evenOrOdd = new EvenOrOdd();
		//�Ʒ��� �׽�Ʈ�� ����� ���� ���� �ڵ��Դϴ�.
        System.out.println("��� : " + evenOrOdd.evenOrOdd(3));
        System.out.println("��� : " + evenOrOdd.evenOrOdd(2));
	}
}
