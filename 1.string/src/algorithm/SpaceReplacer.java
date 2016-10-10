package algorithm;

public class SpaceReplacer {
	public String mySolution (String str) {
		char[] content = str.trim().toCharArray();
		StringBuffer myStr = new StringBuffer();
		
		for(int i = 0; i < content.length; i ++) {
			if(content[i] == ' ') {
				myStr.append("%20");
			} else {
				myStr.append(content[i]);
			}
		}
		
		return myStr.toString();
	}
}
