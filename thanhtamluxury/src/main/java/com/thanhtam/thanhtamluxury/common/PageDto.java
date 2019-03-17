package com.thanhtam.thanhtamluxury.common;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PageDto<T> {
	
	@JsonProperty("current_page")
	private int page;
	
	private int size;
	
	private Long totalPage;
	
	private Long totalItem;
	
	private List<T> content;
}
