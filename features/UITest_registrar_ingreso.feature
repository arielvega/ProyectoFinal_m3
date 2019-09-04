Feature: Realizar ingreso de fondos a la billetera
  Como Usuario Final (humano)
  Quiero ingresar fondos al saldo de la billetera

  Scenario: Se tiene datos validos y se muestran correctamente
    Given Dados datos monto a ingresar: 12.5
    When Navego a la pagina principal
    And Llenar el campo de monto
    And Hacer click en el boton Registrar
    Then Se debe mostrar la cadena "Se ha ingresado 12.5 Bs. a la billetera"