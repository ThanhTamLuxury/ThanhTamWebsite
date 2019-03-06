package com.thanhtam.thanhtamluxury.common;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PageDto<T> {
	
	private int page;
	
	private int size;
	
	private int totalPageNumber;
	
	private int totalItems;
	
	private List<T> content;
}
