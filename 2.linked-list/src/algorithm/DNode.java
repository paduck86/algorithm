package algorithm;

public class DNode {
	private DNode prev = null;
	private DNode next = null;
	private int data;
	
	public DNode(int d) {
		data = d;
	}
	
	public void appendToTail(int d) {
		DNode end = new DNode(d);
		DNode dn = this;
		while (dn.next != null) {
			dn = dn.next;
		}
		dn.next = end;
	}
	
	public DNode deleteDNode(DNode head, int d) {
		DNode dn = head;
		if(head.data == d) {
			return head.next;
		}
		
		while(dn.next != null) {
			if(dn.next.data == d) {
				if(dn.next.next != null) {
					dn.next = dn.next.next;
					dn.next.next.prev = dn;
				}
				
				return dn;
			}
		}
		return dn;
	}
	
}
