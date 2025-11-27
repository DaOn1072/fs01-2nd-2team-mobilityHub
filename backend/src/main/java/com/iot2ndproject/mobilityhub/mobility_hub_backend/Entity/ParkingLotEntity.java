// 주차장 테이블

package com.iot2ndproject.mobilityhub.mobility_hub_backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "parkingLot")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParkingLotEntity {
    @Id
    @Column(columnDefinition = "CHAR(3)")
    private String sectorId; // 섹터 ID

    @Column(nullable = false)
    private String sectorName; // 공간 이름

    private String state; // 빈공간 유무

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adminId")
    private AdminEntity admin; // 관리자ID(fk)

    @OneToMany(mappedBy = "parkingLot")
    List<StockStatusEntity> stockStatus = new ArrayList<>();
}
