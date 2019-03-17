package com.thanhtam.thanhtamluxury.domain.imageitem;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageItem implements Mapper<ImageItemDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceItemId")
    @JsonBackReference
    private ServiceItem serviceItem;

}
