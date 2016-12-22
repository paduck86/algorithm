package a.basic;
/*
 * [final Ű����� ��ü ������ � ������ ��ġ�°�?]
 * ���� ���ǿ��� ������ ��ó�� �ϴ� �Ҵ��� �ǰ� ���� �޸� ��ġ�� ������� �ʴ´�.
 * ��ü ������ ������ �� ��� ��ü ������ ������ ���� ������ final�� �ƴ϶�� ������ �� �ִ�.
 */

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class C_FInal {
	
	@Test
	public void finalReferenceChanges() {
		final int i = 42;
		//i = 43;
		final List<String> list = new ArrayList<>(20);
		//list = new ArrayList<>(50);
		assertEquals(0, list.size());
		
		list.add("adding a new value into my list");
		assertEquals(1, list.size());
		
		List list2 = list;
		list2.add("adding a new value into my list2");
		assertEquals(2, list.size());
		
		list.clear();
		assertEquals(0, list.size());
		assertEquals(0, list2.size());
		
	}
}
