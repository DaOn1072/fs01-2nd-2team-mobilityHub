package com.iot2ndproject.mobilityhub.domain.work.dao;

import com.iot2ndproject.mobilityhub.domain.work.entity.ServiceRequestEntity;

import java.util.List;
import java.util.Optional;

public interface ServiceRequestDAO {
    ServiceRequestEntity save(ServiceRequestEntity entity);
    Optional<ServiceRequestEntity> findById(Long id);
    List<ServiceRequestEntity> findByUserIdOrderByCreatedAtDesc(String userId);
    Optional<ServiceRequestEntity> findTop1ByUserIdOrderByCreatedAtDesc(String userId);
}
