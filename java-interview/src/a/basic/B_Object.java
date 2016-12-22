package a.basic;
/*
 * [�ڹٿ��� ��ü�� �����ΰ�?]
 * ��ü�� �������� �÷������� ������ �� �ִ�. 
 * ��ü�� ��ü�鿡 ���õ� ������ �����ϴ� �޼������ ����.
 * ��ü���� ���¿� ������ �ִٰ� �����ϸ� ���ذ� ����.
 * 
 * ��ü�� ���� ���� �ǹ̿��� ���� Ÿ�԰� �ٸ��� ���� �߿��� �������� 
 * �� ��ü�� �ǹ��ϴ� ǥ���� null�� �����Ѵٴ� ���̴�.
 * ��, �������� null�� ������ �� ������ �޼��� ���� null�� ��ȯ�� �� �ִ�.
 */

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class B_Object {
	@Test(expected = NullPointerException.class)
	public void expectNullPointerExceptionToBeThrown() {
		final String s = null;
		final int stringLength = s.length();
	}
	
	/*
	 * ��ü�� '���� Ÿ���̴�'��� ���� ��Ȯ�� ���� �ǹ����� ���캸��.
	 * ������� ���� Ÿ���� int i = 42�� ������ ����Ǿ��� �� 42��� ���� �޸𸮿� �Ҵ�ȴ�.
	 * �׷��� ���α׷��� ���߿� int j = i��� �������� i�� ���� ǥ���Ǵ� ���� �Ҵ�Ǿ��� ��
	 * �޸��� �ٸ� ��ġ�� ���� ���� �Ҵ��Ѵ�. 
	 * �ϴ� �Ҵ�ǰ� ���� i�� j�� ���� ������ ��ĥ �� ����.
	 * 
	 * �ڹٿ��� new ArrayList(20) ���� ������ �����͸� �����ϴ� �� �ʿ��� �޸𸮿� �䱸�Ѵ�.
	 * ��, List myList = new ArrayList(20) �������� ������ ��ü�� ������ �Ҵ��� �� myList�� 
	 * �Ҵ�� �޸� ��ġ�� ����Ų��.
	 * ǥ�������δ� ���� Ÿ���� �޸� �Ҵ�� ��ü�� �޸� �Ҵ��� ���� ������� �����ϴ�
	 * ��ó�� �������� �����δ� �׷��� �ʴ�. 
	 * �ֳ��ϸ� �� ���� ������ ������ �Ӽ����� ������ ��ü�� �Ҵ�� ��� ���� �޸� ��ġ�� ����Ű�� �����̴�.
	 * 
	 * ��, �� �ν��Ͻ��� ������ ����� �ٸ� �ν��Ͻ��� �������� �� ������ ��ġ�� �ȴ�.
	 *  
	 */
	
	@Test
	public void ObjectMemoryAssignment() {
		List<String> list1 = new ArrayList<>(20);
		
		list1.add("entry in list1");
		assertTrue(list1.size() == 1);
		
		List list2 = list1;
		list2.add("entry in list2");
		assertTrue(list1.size() == 2);
	}
}
