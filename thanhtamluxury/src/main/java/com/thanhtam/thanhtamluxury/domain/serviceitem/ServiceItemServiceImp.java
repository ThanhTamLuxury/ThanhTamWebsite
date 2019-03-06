package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.PageDto;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;

@Service
public class ServiceItemServiceImp implements ServiceItemService {

	@Autowired
	private ServiceItemRepository serviceItemRepo;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<ServiceItemDto> getTop3(String serviceType) {
		try {
			return serviceItemRepo.getTop3(ServiceType.valueOf(serviceType).toString())
					.stream().map(ServiceItem::toMappedClass)
					.collect(Collectors.toList());
		} catch (IllegalArgumentException e) {
			throw new ThanhTamException(HttpStatus.BAD_REQUEST, Constant.INVALID_SERVICE_ITEM_TYPE + serviceType);
		}
	}

	@Override
	public PageDto<ServiceItemDto> getAll(String serviceType, int page, int size) {
		PageDto<ServiceItemDto> data = new PageDto<>();
		StringBuilder selectBuilder = new StringBuilder("SELECT * FROM serviceitem Where serviceType = ?");
		String countSql = "SELECT COUNT(*) FROM (SELECT * FROM serviceitem) D Where serviceType = ?";
		selectBuilder.append(page >= 0 ? String.format(" LIMIT %d", size) : "")
					.append(size > 0 ? String.format(" OFFSET %d", page * size) : "");
		List<ServiceItemDto> listData = jdbcTemplate.query(selectBuilder.toString(), new Object[]{serviceType}, new RowMapper<ServiceItemDto>() {

			@Override
			public ServiceItemDto mapRow(ResultSet rs, int arg1) throws SQLException {
				ServiceItemDto dto = new ServiceItemDto();
				dto.setId(rs.getInt("id"));
				dto.setName(rs.getString("name"));
				dto.setMainImage(rs.getString("mainImage"));
				dto.setSlug(rs.getString("slug"));
				return dto;
			}
		});
		data.setPage(page);
		data.setSize(size);
		int totalItem = jdbcTemplate.queryForObject(countSql, new Object[]{serviceType}, Integer.class);
		data.setContent(listData);
		data.setTotalItems(totalItem);
		data.setTotalPageNumber(totalItem / size + (totalItem % size >= 0 ? 1 : 0));
		return data;
	}
	
	
}
