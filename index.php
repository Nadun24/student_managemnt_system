<?php
if (isset($_GET['route'])) {
    if ($_GET['route'] === 'dashboard') {
        require_once 'views/dashboard.php';
    } else if ($_GET['route'] === 'subject') {
        require_once 'views/subject.php';
    } else {
        echo "404 Not Found";
    }
} else {
    require_once 'views/dashboard.php';
}
