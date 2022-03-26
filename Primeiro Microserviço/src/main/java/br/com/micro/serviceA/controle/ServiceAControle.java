/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.micro.serviceA.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nataniel
 */
@RestController
@RequestMapping("/serviceA")
public class ServiceAControle {
    
    @GetMapping
    public String serviceA(){
        return "Resposta do serviço A";
    }
    
}
