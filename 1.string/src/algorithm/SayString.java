package algorithm;

import java.util.Iterator;

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
	
	public String compressBetter(String str) {
		int size = countCompression(str);
		if (size >= str.length()) {
			return str;
		}
		
		StringBuffer mystr = new StringBuffer();
		char last = str.charAt(0);
		int count = 1;
		for (int i = 0; i < str.length(); i++) {
			if(str.charAt(i) == last) {
				count++;
			} else {
				mystr.append(last);
				mystr.append(count);
				last = str.charAt(i);
				count = 1;
			}
		}
		mystr.append(last);
		mystr.append(count);
		return mystr.toString();
	}
	
	String compressAlternate(String str) {
		int size = countCompression(str);
		if( size >= str.length() ) {
			return str;
		}
		
		char[] array = new char[size];
		int index = 0;
		char last = str.charAt(0);
		int count = 1;
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == last) {
				count++;
			} else {
				index = setChar(array, last, index, count);
				last = str.charAt(i);
				count = 1;
			}
		}
		
		index = setChar(array, last, index, count);
		return String.valueOf(array);
	}
	
	private int setChar(char[] array, char c, int index, int count) {
		array[index] = c;
		index++;
		
		char[] cnt = String.valueOf(count).toCharArray();
		for (char x : cnt) {
			array[index] = x;
			index++;
		}
		return index;
	}
	
	private int countCompression(String str) {
		if (str == null || str.isEmpty()) return 0;
		char last = str.charAt(0);
		int size = 0;
		int count = 1;
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == last) {
				count++;
			} else {
				size += 1 + String.valueOf(count).length();
				last = str.charAt(i);
				count = 1;
			}
		}
		size += 1 + String.valueOf(count).length();
		return size;
	
	}
}
