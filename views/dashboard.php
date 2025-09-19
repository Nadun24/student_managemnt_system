<!-- Bootstrap CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<div class="container mt-5">
    <div class="d-flex">
        <!-- Sidebar -->
        <?php require_once 'others/sidebar.php'; ?>

        <!-- Main Content -->
        <div class="flex-grow-1 p-4">
            <h2>Basic Information Form</h2>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="mb-3">
                    <label for="contact" class="form-label">Contact Number</label>
                    <input type="tel" class="form-control" id="contact" name="contact" required>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" id="address" name="address" rows="3" required></textarea>
                </div>
                <input type="hidden" id="userId">
                <button type="button" id="submitBtn" class="btn btn-primary">Submit</button>
                <button type="button" id="updateBtn" class="btn btn-success d-none">Update</button>
            </form>

            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="userTableBody">
                    <!-- User data will be populated here -->
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Bootstrap JS Bundle CDN -->
<script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
</script>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<!-- jQuery CDN -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src='controllers/dashboard_controller.js'></script>
<?php
