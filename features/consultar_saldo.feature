Feature: Prueba de consulta de saldo de la billetera
  Como un cliente de API WEB (no humano)
  Requiero consultar saldo de la billetera

  Scenario: Consulta de saldo de la billetera
    Given Quiero saber el saldo de la billetera
    When Hago un request GET hacia el url saldo
    Then Recibo una respuesta con estado "OK" y con el saldo correspondiente de la billetera
