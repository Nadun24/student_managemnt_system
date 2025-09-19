<?php
$route = isset($_GET['route']) ? $_GET['route'] : '';
?>
<div id="sidebar" class="d-flex flex-column p-3" style="width: 250px;">
    <h4 class="mb-4">My Sidebar</h4>
    <a type="button" href="./?route=dashboard" class="btn mb-2 <?php echo ($route == 'dashboard') ? 'btn-primary' : 'btn-outline-primary'; ?>">Add User</a>
    <a type="button" href="./?route=subject" class="btn mb-2 <?php echo ($route == 'subject') ? 'btn-primary' : 'btn-outline-primary'; ?>">Subject</a>
</div>