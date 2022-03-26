/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.micro.serviceB.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nataniel
 */
@RestController
@RequestMapping("/serviceB")
public class ServiceBControle {
    
    @GetMapping
    public String serviceB(){
        return "Resposta do serviço B";
    }
    
}
