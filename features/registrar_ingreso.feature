Feature: Prueba de registro de ingresos en la billetera
  Como un cliente de API WEB (no humano)
  Requiero registrar ingresos en la billetera

  Scenario: Registro de un ingreso de dinero
    Given El monto 10 Bs como monto de ingreso a la billetera
    When Preparo el JSON de los datos
    Then Hago un request POST hacia el url ingreso con los datos
    Then Recibo una respuesta con estado "OK" y mensaje que indica "Se ha ingresado 10 Bs. a la billetera, el nuevo saldo es: XXX Bs."