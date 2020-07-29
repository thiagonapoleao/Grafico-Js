<?php

$pdo = new PDO('mysql:host=db;dbname=tratativa;port=3306;charset=utf8', 'root', '1234');

$sql = "SELECT horasG, horasD, upm, difErros, meta FROM upm_hora";

$statement = $pdo->prepare($sql);

$statement->execute();

$query = $statement->fetchAll(PDO::FETCH_ASSOC);

$label = [];
$upm = [];
$erros = [];
$meta = [];
$arrBackgroundColor = [];

foreach ($query as $key => $value) {
    array_push($label, $value['horasG']);
    array_push($upm, $value['upm']);
    array_push($erros, $value['difErros']);
    array_push($meta, $value['meta']);

    if ($value['upm'] > $value['meta']) {
        $color = 'pink';
    } else{
        $color = 'green';
    }
    array_push($arrBackgroundColor, $color);
}

$dataset = ['upm', 'erros', 'meta'];
for($i = 0; $i < count($dataset); $i++){
    $datasets[$i]['label'] = $dataset[$i];

    $datasets[$i]['backgroundColor'] = $arrBackgroundColor;
    if($i == 1){
        $datasets[$i]['backgroundColor'] = 'red';
    }

    if($i == 0){
        $arrData = $upm;
    } else if($i == 1){
        $arrData = $erros;
    } else{
        $arrData = $meta;
    }
    $datasets[$i]['data'] = $arrData;

    $datasets[$i]['fill'] = false;
    $datasets[$i]['type'] = 'bar';
    if($i == 2){
        $datasets[$i]['borderWidth'] = 5;
        $datasets[$i]['borderColor'] = 'green';
        $datasets[$i]['type'] = 'line';
    }
}

$obj['labels'] = $label;
$obj['datasets'] = $datasets;

echo json_encode($obj);