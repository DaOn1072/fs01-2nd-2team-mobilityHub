package com.iot2ndproject.mobilityhub.domain.work.dao;

import com.iot2ndproject.mobilityhub.domain.work.entity.ServiceRequestEntity;
import com.iot2ndproject.mobilityhub.domain.work.repository.ServiceRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ServiceRequestDAOImpl implements ServiceRequestDAO {

    private final ServiceRequestRepository serviceRequestRepository;

    @Override
    public ServiceRequestEntity save(ServiceRequestEntity entity) {
        return serviceRequestRepository.save(entity);
    }

    @Override
    public Optional<ServiceRequestEntity> findById(Long id) {
        return serviceRequestRepository.findById(id);
    }

    @Override
    public List<ServiceRequestEntity> findByUserIdOrderByCreatedAtDesc(String userId) {
        return serviceRequestRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    @Override
    public Optional<ServiceRequestEntity> findTop1ByUserIdOrderByCreatedAtDesc(String userId) {
        return serviceRequestRepository.findTop1ByUserIdOrderByCreatedAtDesc(userId);
    }
}
