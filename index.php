<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="d-flex" style="height: 100vh;">
    <!-- Sidebar -->
    <div class="border-end px-1" id="sidebar-wrapper" style="width: 300px; background-color: #dee2e6;"> <!-- $gray-300 -->
        <div class="sidebar-heading p-3">
            <h1 class="fw-bold "> Student Management</h1>
        </div>
        <div class="list-group list-group-flush">
            <a href="#userTab" class="list-group-item list-group-item-action nav-link active rounded w-100 mb-2 fw-bold" data-bs-toggle="tab">User</a>
            <a href="#subjectTab" class="list-group-item list-group-item-action rounded w-100 mb-2 fw-bold" data-bs-toggle="tab">Subject</a>
        </div>
    </div>

    <!-- Page Content -->
    <div class="container-fluid p-4">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="userTab">
                <?php require_once './views/dashboard.php'; ?>
            </div>
            <div class="tab-pane fade" id="subjectTab">
                <h3>Subject Tab</h3>
                <p>Content for the Subject tab goes here.</p>
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap JS Bundle CDN -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>