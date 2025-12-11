package com.iot2ndproject.mobilityhub.domain.work.controller;


import com.iot2ndproject.mobilityhub.domain.work.entity.WorkInfoEntity;
import com.iot2ndproject.mobilityhub.domain.work.service.CarWashService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carwash")
@RequiredArgsConstructor
public class CarWashController {
    private final CarWashService carWashService;

    @GetMapping("/list")
    public List<WorkInfoEntity> washing(@RequestParam("workId")int workId){
        return  carWashService.findByWokrId(workId);
    }
}
