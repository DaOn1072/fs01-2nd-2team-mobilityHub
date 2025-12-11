package com.iot2ndproject.mobilityhub.domain.work.service;

import com.iot2ndproject.mobilityhub.domain.work.dao.CarWashDAO;
import com.iot2ndproject.mobilityhub.domain.work.entity.WorkInfoEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarWashServiceImpl implements CarWashService {
    private final CarWashDAO dao;
    private final ModelMapper modelMapper;

    @Override
    public List<WorkInfoEntity> findByWokrId(int workId) {
        System.out.println("작업 장소 찾기"+workId);

        // DB에서 workId로 1차 조회
        List<WorkInfoEntity> list = dao.findByWorkId(workId);

        return list.stream()
                // 필터1: 작업 아이디가 3 또는 4인 경우
                .filter(w -> w.getWork().getWorkId() == 3 || w.getWork().getWorkId() == 4)
                // 필터2: 오늘 요청된 차량만
                .filter(w -> w.getRequestTime().toLocalDate().isEqual(LocalDate.of(2025, 12, 8)))
                // 필터3: 세차장에 들어와있는 차량만
                .filter(w -> "carWashIn".equals(w.getCarState()))
                .collect(Collectors.toList());
        }
}
