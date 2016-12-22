package a.basic;
/*
 * [final 키워드는 객체 참조에 어떤 영향을 미치는가?]
 * 변수 정의에서 지정된 값처럼 일단 할당이 되고 나면 메모리 위치가 변경되지 않는다.
 * 객체 참조는 변경할 수 없어도 객체 내부의 값들은 개별 값들이 final이 아니라면 변경할 수 있다.
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
