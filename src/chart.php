<?php

$pdo = new PDO('mysql:host=127.0.0.1;dbname=tratativa;port=3306;charset=utf8', 'default', '123456');

$sql = "SELECT horasG, horasD, upm, difErros, meta FROM upm_hora";

$statement = $pdo->prepare($sql);

$statement->execute();


while($results = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $results;
}

echo json_encode($result);