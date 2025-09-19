<?php

require_once '../others/classes/main_functions.php';

$app = new setting();


if (isset($_POST['action'])) {
    if ($_POST['action'] == 'addSubject') {

        $query = "INSERT INTO `subjects` ( `subject_name`, `subject_code`, `description`) VALUES ('{$_POST['subject_name']}', '{$_POST['subject_code']}', '{$_POST['description']}');";
        $result = $app->insert_update_delete_query($query);
        echo $result;
    } else if ($_POST['action'] == 'getSubjects') {
        $query = "SELECT * FROM `subjects` ORDER BY `id` DESC;";
        $result = $app->json_encoded_select_query($query);
        echo $result;
    }
}
