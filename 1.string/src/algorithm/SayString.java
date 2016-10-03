package algorithm;

public class SayString {
	public String mySolution (String str) {
		String tmpStr = "";
		int startIdx = 0;
		int endIdx = 0;
		
		for(int i = 0; i < str.length(); i++) {
			if(i==0) {
				tmpStr += str.charAt(i);
				startIdx = 0;
			} else if (i != 0 && i != str.length() - 1) {
				if (str.charAt(i) != str.charAt(i+1)) {
					endIdx = i;
					tmpStr += String.valueOf(endIdx - startIdx + 1) + str.charAt(i+1);
					startIdx = i + 1;
				} else {
					continue;
				}
				 
			} else {
				endIdx = i;
				if (str.charAt(i) != str.charAt(i-1)) {
					tmpStr += "1";
				} else {
					tmpStr += String.valueOf(endIdx - startIdx + 1);
				}
			}
		}
		
		if (str.length() < tmpStr.length()) {
			return str;
		} else {
			return tmpStr;
		}
	}
}
