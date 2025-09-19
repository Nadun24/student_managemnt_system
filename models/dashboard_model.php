<?php

require_once '../others/classes/main_functions.php';

$app = new setting();

if (isset($_POST['action'])) {
    if ($_POST['action'] == 'addUser') {
        $query = "INSERT INTO `user_table` (`name`, `email`, `contact_number`, `address`)
                  VALUES
                  ('{$_POST['name']}', '{$_POST['email']}', '{$_POST['contact_number']}', '{$_POST['address']}');";

        $result = $app->insert_update_delete_query($query);
        if ($result) {
            echo 1;
        } else {
            echo 0;
        }
    } else if ($_POST['action'] == 'getUsers') {
        $query = "SELECT * FROM `user_table` ORDER BY `id` DESC;";
        $result = $app->json_encoded_select_query($query);
        echo $result;
    } else if ($_POST['action'] == 'deleteUser') {
        $query = "DELETE FROM `test_db`.`user_table` WHERE `id` = {$_POST['id']};";
        $result = $app->insert_update_delete_query($query);
        if ($result) {
            echo 1;
        } else {
            echo 0;
        }
    } else if ($_POST['action'] == 'getUserById') {
        $query = "SELECT * FROM `user_table` WHERE `id` = {$_POST['id']};";
        $data = $app->json_encoded_select_query($query);
        echo ($data);
    } else if ($_POST['action'] == 'updateUser') {
        $query = "UPDATE `user_table` SET `name` = '{$_POST['name']}', `email` = '{$_POST['email']}', `contact_number` = '{$_POST['contact_number']}', `address` = '{$_POST['address']}' WHERE `id` = {$_POST['id']};";
        $result = $app->insert_update_delete_query($query);
        if ($result) {
            echo 1;
        } else {
            echo 0;
        }
    }
}
